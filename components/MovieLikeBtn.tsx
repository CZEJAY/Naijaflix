import axios from "axios"
import React, { useState, useEffect } from "react"
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface BtnProps {
    item: {
        id: string | number
    }
}

const MovieLikeBtn: React.FC<BtnProps> = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const checkIfFavorite = async () => {
            try {
                const res = await axios.post(`/api/check/`, {item})
                setIsFavorite(res.data.isFavorite)
            } catch (error) {
                console.log(error)
            }
        }
        checkIfFavorite()
    }, [])

    const handleClick = async (item: any, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        // console.log(item)
        try {
            if (isFavorite) {
                setIsLoading(true)
                await axios.delete("/api/remove/", {
                    data: {
                        item
                    }
                })
                .then((res) => toast.success(res.data.message))
                .catch((err) => toast.error(err.response.data.message))
                setIsFavorite(false)
                setIsLoading(false)
            } else {
                setIsLoading(true)
                await axios.post("/api/add/", { item })
                    .then((res) => {
                        toast.success(res.data.message)
                    
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message)
                    })
                setIsFavorite(true)
                setIsLoading(false)
            }

        } catch (error) {
            // console.log(error)
        }

    }
    return (
        <>
            <button onClick={(e) => handleClick(item, e)} >
                {isFavorite ? <AiFillHeart className={isLoading ? "animate-spin" : ""} /> : <AiOutlineHeart className={isLoading ? "animate-spin" : ""}  />}
            </button>
        </>
    )
}

export default MovieLikeBtn