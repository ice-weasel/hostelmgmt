import connectDB from "@/app/lib/mongodb";
import { connect } from "http2";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import AdminLog from "@/app/models/user";
import bcrypt from 'bcrypt'

interface request extends NextApiRequest {
    json(): PromiseLike<{ email: any; password: any }>;
}

export default async function POST(req: request) {
    try {
        const { email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password,10);
        console.log("Email:", email);
        console.log("Password:", password);

        await connectDB();
        await AdminLog.create({ email,password: hashedPassword})

        return {
           status: 201,
            body: { msg: "User Registered" },
        };
    } catch (error) {
        console.error("Error processing login request:", error);
      
        return {
            status: 500,
            body: { msg: "Internal server error" },
        };
    }
}
