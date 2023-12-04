import connectDB from "@/app/lib/mongodb";
import StudentCard from "@/app/models/student";
import mongoose, { Collection } from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


interface request extends NextApiRequest {
   
    json: () => PromiseLike<{ firstname: any}>
    nextUrl: URL;
}

export async function POST(req: request)
{
        const {firstname} = await req.json();

        console.log("First Name: ",firstname);

        try{
            await connectDB();
            await StudentCard.create({firstname})

            return NextResponse.json({
                msg: ["Message sent successfully"], success: true
            })
        } catch(error) {
            if (error instanceof mongoose.Error.ValidationError) {
                let errorList = [];
                for (let e in error.errors) {
                    if (typeof error.errors[e] === 'object' && 'message' in error.errors[e]) {
                        errorList.push(error.errors[e].message);
                    }else {
                        errorList.push(String(error.errors[e]));
                    }
                }
                return NextResponse.json({msg: errorList});
            } else {
                return NextResponse.json({msg: "Unable to send a message."});
            }
        }
}

export async function GET() {
    await connectDB();
  const firstname =  await StudentCard.find();
  return NextResponse.json({ firstname });
}

export async function DELETE(req: request) {
    const id = req.nextUrl.searchParams.get("id");
    await StudentCard.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"},{ status: 200 });
}

