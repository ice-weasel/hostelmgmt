import mongoose,{ Schema, model } from "mongoose";
import { use } from "react";

interface AdminDetails extends Document {
    email: string;
    password:string;
}

const userSchema = new Schema(
    {
        email: {
            type:String,
            required: true,
        },
        password: {
            type:String,
            required: true,
        }, 
    },
    { timestamps: true}
);

const AdminLog = mongoose.models.User || model<AdminDetails>("User",userSchema);

export default AdminLog;