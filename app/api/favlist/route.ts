import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prismadb from "../../../lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async () => {
    const session = await getServerSession(authOptions);
    try {
        const favList = await prismadb.user.findFirst({
            where: {
                email: session?.user?.email
            },
            select: {
                favoritemovies: true
            }
        })
        if (favList?.favoritemovies?.length === 0) {
            return NextResponse.json({ message: "No movies in favorites" }, { status: 200 })
        } else {
            return NextResponse.json({ favList }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, { status: 400 })
    }
}