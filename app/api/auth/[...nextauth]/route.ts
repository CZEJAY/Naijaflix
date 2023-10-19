import NextAuth from "next-auth";
import prismadb from "@/app/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
//@ts-ignore
import bcrypt from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { type: "text", label: "Name", placeholder: "John Doe"},
                email: { type: "email", label: "example@gmail.com", placeholder: "youremail@gmail.com"},
                password: { type: "password", label: "Password",}
            },
            async authorize(credentials) {
                const user = await prismadb.user.findUnique({
                    where: { email: credentials?.email }
                })
                if(!user) throw new Error("User not found")
                if(!user.hashedpassword) throw new Error("User has no password")
                if(!credentials?.password) throw new Error("No password provided")
                if(!credentials?.email) throw new Error("No email provided")
                if(credentials?.email !== user.email) throw new Error("Email does not match")
                if(!user.hashedpassword) throw new Error("User has no password")
                
                const isMatch = await bcrypt.compare(credentials?.password, user.hashedpassword)
                if(!isMatch) throw new Error("Password is incorrect")
                return user; 
            } 
        })
    ],
    // callbacks: {
    //     async jwt({ token, account, user }) {
    //         if(account?.provider === "google"){
    //             return {
    //                 ...token,
    //                 id: user?.id,
    //             }
    //         }
    //     },
    //     async session({ session, token, account }) {
    //         if(token?.id){
    //             return {
    //                 ...session,
    //                 user: {
    //                     ...session.user,
    //                     id: token.id
    //                 }
    //             }
    //         }
    //     }
    
    // },
      
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
    pages: {
        signIn: "/api",
    },
}
//@ts-ignore
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}