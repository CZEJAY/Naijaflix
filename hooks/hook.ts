import axios from "axios"
import useSWR from "swr"

const API_KEY = '8634492f643458d37293259fb208d463'
const BASE_URL = 'https://api.themoviedb.org/3'
const genreiUrl = 'https://api.themoviedb.org/3/genre/movie/list?'
const movieDetailsUrl = "https://api.tmdb.org/3/movie"


export const fetchMovie = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
            }
        });
        return response.data.results
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const fetchMovieDetails = async (id: string) => {
    try {
        const response = await axios.get(`${movieDetailsUrl}/${id}?`, {
            params: {
                api_key: API_KEY,
            }
        });
        return response
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
    }
}
export const fetchMovieDetailsCredits = async (id: string) => {
    try {
        const response = await axios.get(`${movieDetailsUrl}/${id}/credits?`, {
            params: {
                api_key: API_KEY,
            }
        });
        return response
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getFavMovie = async () => {
    try {
        const res = await axios.post("/api/favlist")
        //   console.log(res.data.favList.favoritemovies)
        return res.data.favList.favoritemovies
    } catch (error) {
        console.log(error)
    }
}

export const fetchMovieVideoClip = async (id: string) => {
    try {
        const response = await axios.get(`${movieDetailsUrl}/${id}/videos?`, {
            params: {
                api_key: API_KEY,
            }
        });
        return response
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const fetchGenre = async () => {
    try {
        const response = await axios.get(`${genreiUrl}`, {
            params: {
                api_key: API_KEY,
                genre_ids: 28
            }
        });
        // console.log(response.data.genres)
        return response.data.genres
    } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
    }
}

// fetchGenre()