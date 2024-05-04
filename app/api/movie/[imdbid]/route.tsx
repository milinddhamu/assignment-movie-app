import { NextResponse } from "next/server";
import connectMongoDb from "@/lib/mongodb";
import mongoose from "mongoose";

type Params = {
  imdbid: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const imdbid = params.imdbid;
  
  if (!imdbid) {
    return NextResponse.json({ message: 'No imdbid provided' }, { status: 400 });
  }
  
  try {
    await connectMongoDb();
    const db = mongoose.connection;
    const collection = db.collection("Movies");
    
    const result = await collection.findOne({ imdbid: imdbid });
  
    if (!result) {
      return NextResponse.json({ message: 'No document found with the provided imdbid' }, { status: 404 });
    }
    await new Promise(resolve => setTimeout(resolve, 2000));

    return NextResponse.json({ message: 'Document fetched successfully', data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred while fetching the document' }, { status: 500 });
  }
  
};
