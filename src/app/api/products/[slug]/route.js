import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import { Product } from "@/models/productSchema";


export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDB();

        const data = await Product.findOne({ slug });
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDB();

        await Product.deleteOne({ slug });

        return new NextResponse("Product has been deleted.", { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const PUT = async (request, { params }) => {
    const { slug } = params;
    const incomingData = await request.json();

    try {
        await connectToDB();

        const updatedProduct = await Product.findOneAndUpdate({ slug }, incomingData);

        if (!updatedProduct) {
            return new NextResponse("Product not found", { status: 404 });
        }

        return new NextResponse("Product has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};