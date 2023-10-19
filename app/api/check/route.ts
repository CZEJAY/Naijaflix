import { NextResponse, NextRequest} from "next/server";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb"
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req: NextRequest) => {
    //@ts-ignore
    const session = await getServerSession(authOptions)
    try {
        if(!session){
            return NextResponse.json({message: "You are not logged in"}, {status: 401})
        }
        //@ts-ignore
        const body = await req.json()
        const { item } = body
        const user = await prismadb.user.findUnique({
            where: {
                //@ts-ignore
                email: session?.user?.email
            }
        })
        const isFavorite = user?.favoritemovies.includes(item.id.toString())
        if(isFavorite){
            return NextResponse.json({isFavorite}, {status: 200})
        } else {
            return NextResponse.json({message: "Movie added to favorites"}, {status: 400})
        }

    } catch (error) {

    }
}