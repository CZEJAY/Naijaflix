import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";

const execAsync = promisify(exec);

export default async function handler(req: NextRequest) {

    if (req.method === "POST") {
        const body = await req.json();
        const movieName = body.movieName;
        try {
            const { stdout, stderr } = await execAsync(`python main.py ${movieName}`);
            if (stderr) {
                console.log(stderr)
                return NextResponse.json("Script Execution Error", {status: 401})
            } else {
                const downloadLink = stdout.trim();
                return NextResponse.json({ downloadLink })
            }

        } catch (error) {
            console.log(error)
            return NextResponse.json("Something went wrong", { status: 500 })
        }
    } else {
        return NextResponse.json("Unauthorized method")
    }


}