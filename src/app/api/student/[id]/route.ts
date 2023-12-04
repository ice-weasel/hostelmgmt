import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/app/lib/mongodb';
import StudentCard from '@/app/models/student';
import { NextResponse } from 'next/server';

interface request extends NextApiRequest {
  json: () => Promise<{ firstname: any }>;
 
  nextUrl: URL;
}

export default async function PUT(req: request, res: NextApiResponse) {
  const { id } = req.query; 
  const { firstname: firstname } = await req.json();

  try {
    await connectDB();
    const updatedStudent = await StudentCard.findByIdAndUpdate(id, { firstname }, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function  GET(req:request,res:NextApiResponse) 
{
    const { id } = req.query;
    await connectDB();
    const firstname = await StudentCard.findOne({_id: id});
    return NextResponse.json({ firstname }, { status:200 });
}
