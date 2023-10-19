import { NextResponse, NextRequest } from "next/server";
import prismadb from "../../../lib/prismadb";
import { getServerSession } from 'next-auth/next'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export const POST = async (req: NextRequest) => {
    //@ts-ignore
    const session = await getServerSession(authOptions)
    try {
        //@ts-ignore
        const body = await req.json()
        const { item } = body
        // console.log(item);

        if (!session) {
            //@ts-ignore
            return NextResponse.json({ message: "You are not logged in" }, { status: 401 })
        }

        if (body === undefined) {
            //@ts-ignore
            return NextResponse.json({ message: "Please provide a movie id" }, { status: 400 })
        }
        const user = await prismadb.user.findUnique({
            where: {
                //@ts-ignore
                email: session?.user?.email,
            },
        })
        if (!user) {
            //@ts-ignore
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }
        if (!user.favoritemovies.includes(item.toString())) {
            await prismadb.user.update({
                where: {
                    //@ts-ignore
                    email: user.email
                },
                data: {
                    favoritemovies: {
                        push: item.id.toString()
                    }
                }
            })
            await prismadb.user.update({
                where: {
                    //@ts-ignore
                    email: user.email
                },
                data: {
                    notifications: {
                        push: `${item.title} was added to favorites`
                    }
                }
            })
            revalidatePath("/")
            return NextResponse.json({ message: "Movie added to favorites" }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Movie already in favorites" }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, { status: 400 })

    }

}