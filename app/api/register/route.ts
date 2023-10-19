import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/app/lib/prismadb"

            // @ts-ignore
import bcrypt from "bcrypt"

export async function POST(req: NextRequest,) {
            // @ts-ignore
    const body = await req.json()

    try {
        const { name, email, password } = body
        // ignore ts
        const exitingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        })
        if(!name || !email || !password){
            // @ts-ignore
            return NextResponse.json({message: "Please fill in all fields"}, {status: 400})
        }
        if(exitingUser){
            // @ts-ignore
            return NextResponse.json({message: "User already exists"}, {status: 400})
        }
        if(password.length < 8){
            // @ts-ignore
            return NextResponse.json({message: "Password must be at least 8 characters long"}, {status: 400})
        }
        if(password.length > 20){
            // @ts-ignore
            return NextResponse.json({message: "Password must be less than 20 characters long"}, {status: 400})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prismadb.user.create({
            data: {
                name,
                email,
                hashedpassword: hashedPassword,
            }
        })
        return NextResponse.json({message: "User created successfully", user, status: 200})
    } catch (error) {
        NextResponse.json({message: "Internal Server Error"})
    }
}
// make route to handle user registeration