import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb"





export const DELETE = async (req: NextApiRequest) => {
    try {
        const body = await req.json()
        const { index } = body
        console.log(index);
        
        const session = await getServerSession(authOptions)
        const user = await prismadb.user.findUnique({
            where: {
                email: session?.user?.email
            }
        })
        const updated = await prismadb.user.findFirst({
            where: {
                email: user?.email
            },
            select: {
                notifications: true
            }
        })

        const updatedList = updated?.notifications.filter((_, i) => i !== index)
        await prismadb.user.update({
            where: {
                email: user?.email
            },
            data: {
                notifications: updatedList
            }
        })
        return NextResponse.json({message: "Notification deleted", updatedList}, { status: 200})

        return NextResponse.json(updated, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}