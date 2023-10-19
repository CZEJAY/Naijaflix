import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import  prismadb  from "@/lib/prismadb"
import { getServerSession } from "next-auth"

export const useFavorite = async () => {
    //@ts-ignore
    const session = await getServerSession(authOptions)
    const favoritemovies = await  prismadb.user.findFirst({
        where: {
            email: session?.user?.email
        },
        select: {
            favoritemovies: true
        }
    })
   return [favoritemovies?.favoritemovies]
}
