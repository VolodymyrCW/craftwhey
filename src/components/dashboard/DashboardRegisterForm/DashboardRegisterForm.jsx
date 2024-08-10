"use client"
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { register } from "@/auth/actions";
import styles from './DashboardRegisterForm.module.scss'


const DashboardRegisterForm = () => {
    // for visualization of errors
    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/dashboard/login");
    }, [state?.success, router]);


    return (
        <form action={formAction} className={styles.authForm}>
            <h1 className={styles.title}>Реєстрація</h1>
            <div className={styles.inputsWrapper}>
                <input type="text" placeholder="Ім’я" name="name" className={styles.formInput} />
                <input type="email" placeholder="Email" name="email" className={styles.formInput} />
                <input type="password" placeholder="Пароль" name="password" className={styles.formInput} />
                <input type="password" placeholder="Повторити пароль" name="repeatPassword" className={styles.formInput} />
            </div>

            <button className={styles.authSubmitBtn} >Зареєструватись</button>

            {state?.error && <p className={styles.errMessage} >{state.error}</p>}
            <p className={styles.checkingMessage}>У Вас вже є акаунт? <Link className={styles.link} href='/dashboard/login'>Log in</Link> </p>
        </form>
    )
}


export default DashboardRegisterForm