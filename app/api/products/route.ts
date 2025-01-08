import { NextResponse, NextRequest } from "next/server";
import connectToDatabse from "@/lib/mongodb";

export async function GET () {
    try {
        const client = await connectToDatabse();
        const db = client.db(process.env.DB_NAME);
        const products = await db.collection("products").find({}).toArray();

        return NextResponse.json(products);
    } catch (error) {
        console.log("Error fetching")

    }

}