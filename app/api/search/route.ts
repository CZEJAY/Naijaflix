import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const body = await req.json();
        const { query, isAdult, page } = body
        console.log(query);
        
        if (query) {
            const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page || 1}`;
            const seriesUrl = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=${page || 1}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjM0NDkyZjY0MzQ1OGQzNzI5MzI1OWZiMjA4ZDQ2MyIsInN1YiI6IjY0YzIzYzY2MDk3YzQ5MDEwMGQyNDkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vmpR3HRKJCE3Q9SksV4pr3fkDiLXVdRE81bZZ0N5N4U'
                }
            };

           const result = await axios.get(url, options)
           const seriesResult = await axios.get(seriesUrl, options)
           
           if(seriesResult.data && result.data) {
            return NextResponse.json({series: seriesResult.data, movies: result.data, query}, {status: 200})
           }
        }
        return NextResponse.json({ message: `Hello ${query}` })
    } catch (error) {
        return NextResponse.json("Internal Server Error")
    }
}