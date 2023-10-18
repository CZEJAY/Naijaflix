import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";

const execAsync = promisify(exec);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const { movieName } = req.body;
        try {
            const { stdout, stderr } = await execAsync(`python main.py ${movieName}`);
            if (stderr) {
                console.log(stderr)
                res.status(500).json({ error: "Script Execution Error" })
            } else {
                const downloadLink = stdout.trim();
                res.status(200).json({ downloadLink })
            }

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" })
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }


}