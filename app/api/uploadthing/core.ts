import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/route";
import  prismadb  from "@/lib/prismadb";
const f = createUploadthing();
  // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const session = await getServerSession(authOptions);


 
      // If you throw, the user will not be able to upload
      if (!session?.user) throw new Error("Unauthorized");
        
      const user = await prismadb.user.findUnique({
        //@ts-ignore
        where: { email: session?.user?.email },
    })
      
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
      await prismadb.user.update({
        where: { id: metadata.userId },
        data: { image: file.url },
      })
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;