import { NextRequest, NextApiResponse } from "next"
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'

export const POST = async (req: NextRequest, res: NextApiResponse) => {
    try {
        if(req.method == "POST") {
            const { heroId } = req.body
            const response = "RESPOSE FROM CZE"
            res.status(200).json(response)
        }
    } catch (error: any) {
        res.status(500).json("Internal Server Error cze")
    }
}