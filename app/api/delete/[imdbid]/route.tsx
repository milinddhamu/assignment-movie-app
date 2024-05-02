import { NextResponse } from "next/server";
import connectMongoDb from "@/lib/mongodb";
import mongoose from "mongoose";

type Params = {
  imdbid: string;
};

export async function DELETE(request: Request, { params }: { params: Params }) {
  const imdbid = params.imdbid;
  
  if (!imdbid) {
    return NextResponse.json({ message: 'No imdbid provided' }, { status: 400 });
  }

  try {
    await connectMongoDb();
    const db = mongoose.connection;
    const collection = db.collection("Movies");
    const result = await collection.deleteOne({ imdbid: imdbid });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'No document found with the provided imdbid' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Document deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred while deleting the document' }, { status: 500 });
  }
  
};
