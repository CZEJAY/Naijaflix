import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";
import { authOptions } from "../auth/[...nextauth]/route";

export const DELETE = async (req: NextApiRequest) => {
    //@ts-ignore
    const session = await getServerSession(authOptions)
    if(req.method === "DELETE"){
        try {
            //@ts-ignore
            const body = await req.json()
            const { item } = body 
            const user = await prismadb.user.findUnique({
                where: {
                    //@ts-ignore
                    email: session?.user?.email,
                },
            })

            const existingId = user?.favoritemovies.includes(item.toString())
            if(!existingId){
                return NextResponse.json({message: "Movie not found in favorites"})
            }

           const updatedUser =  await user?.favoritemovies.filter((movie) => movie !== item.toString())
            await prismadb.user.update({
                where: {
                    //@ts-ignore
                    email: user?.email,
                },
                data: {
                    favoritemovies: updatedUser
                }
            })
            return NextResponse.json({message: "Movie removed from favorites"})
        } catch (error) {
            return NextResponse.json({message: "Something went wrong", error})
        }
    }
    
}