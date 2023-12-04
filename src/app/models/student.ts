import mongoose, { Schema,Document,model } from "mongoose";

interface StudentDetails extends Document { 
    firstname: string;
}

const studentSchema = new Schema<StudentDetails> ({
    firstname : {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2,"Must be larger than 2 characters"],
        maxLength: [50,"name must be lesser than 50 characters"],
    },
});

const StudentCard = mongoose.models.Student || model<StudentDetails>("Student", studentSchema);

export default StudentCard;