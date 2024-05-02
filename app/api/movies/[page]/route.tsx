import { NextResponse } from "next/server";
import connectMongoDb from "@/lib/mongodb";
import mongoose from "mongoose";

type Params = {
  page: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const page = parseInt(params.page, 10) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  await connectMongoDb();
  const db = mongoose.connection;
  const collection = db.collection("Movies");
  const movies = await collection.find().skip(skip).limit(limit).toArray();
  return NextResponse.json(movies, { status: 200 })
};
