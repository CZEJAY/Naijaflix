import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prismadb from "@/app/lib/prismadb"
import { authOptions } from "../auth/[...nextauth]/route";


export const GET = async (req: NextRequest) => {
    try {
        //@ts-ignore
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ message: "You are not logged in" }, { status: 401 })
        }
        const user = await prismadb.user.findUnique({
            where: {
                //@ts-ignore
                email: session?.user?.email
            }
        })
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }
        const notif = user.notifications
        return NextResponse.json({ notif }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}



