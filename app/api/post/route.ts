import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Mongodb connect Unsuccessful");
  } finally {
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, description } = await req.json();
    await main();
    const posted = await prisma.post.create({ data: { title, description } });
    return NextResponse.json({ message: "Data has Posted Successfully", posted }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
