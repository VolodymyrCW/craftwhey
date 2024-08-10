import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import { Product } from "@/models/productSchema";


export const GET = async (request) => {
    try {
        await connectToDB();

        const data = await Product.find();

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.log("error", error)
        return new NextResponse('Database error', { status: 500 })
    }
}


export const POST = async (request) => {
    const body = await request.json();

    const newProduct = new Product(body);

    try {
        await connectToDB();

        await newProduct.save();

        return new NextResponse('Product has been created.', { status: 201 });
    } catch (err) {
        return new NextResponse(err, { status: 500 });
    }
};