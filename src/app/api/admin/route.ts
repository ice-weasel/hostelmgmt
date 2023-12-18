import { NextRequest, NextResponse } from "next/server";

export enum ServerAccess {
    STUDENT = "STUDENT",
    ADMIN = "ADMIN",
}

export type Accounts = {
    name : string;
    email: string;
    password: string;
    semester : string;
    class : string;
    roomno: string;
    photo : File | null;
    access : ServerAccess
}

const defaultitems: Accounts[] = [
    { name: "Shashi",email:"shashi@gmail.com",password:"",semester:"",class:"",roomno:"",photo:null,access:ServerAccess.ADMIN },
    { name: "Suku",email:"suku@gmail.com",password:"",semester:"S2",class:"CS1",roomno:"312",photo:null,access:ServerAccess.STUDENT }
]   


export async function GET(request : NextRequest) {
    try{

    } catch(error) {
        return new NextResponse("Internal Error",{status:500});
    }
}