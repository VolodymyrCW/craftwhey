import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectToDB } from "@/utils/connectToDB"
import { User } from "@/models/userSchema"
import { authConfig } from './auth.config'


// вынесено в отдельную функцию
const login = async (credentials) => {
    try {
        // console.log('auth login in try start');

        await connectToDB();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
            // console.log('auth login in try - !user');
            throw new Error("Неправильні облікові дані")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
            // console.log('auth login in try - !isPasswordCorrect');
            throw new Error("Неправильні облікові дані")
        }
        // console.log('auth login in try end');

        return user;
    } catch (error) {
        // console.log('auth login in catch start');

        console.log('error', error);

        throw new Error("Не вдалося увійти")
    }
}


export const {
    handlers: { GET, POST },
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                // console.log('auth signIn authorize start');
                try {
                    // console.log('auth signIn authorize in try before');

                    // login из этого файла(т.е. из auth.js)
                    const user = await login(credentials);
                    // console.log('auth signIn authorize in try after');
                    return user;
                } catch (error) {
                    // console.log('auth signIn authorize in catch before');
                    console.log("error", error)
                    return null;
                }
            }
        })],
    callbacks: {
        ...authConfig.callbacks,
    },
})