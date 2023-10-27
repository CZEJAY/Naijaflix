
import Hero from "@/components/Hero";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (
    <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4386764806395713"
    //@ts-ignore
     crossorigin="anonymous" />
      <main className="dark flex flex-col min-h-full">
        <Hero />
        <div className="flex flex-col items-center justify-center  ">
          <section className="dark flex flex-col w-full bg-transparent p-1 sm:p-4 rounded-md shadow-md backdrop-filter backdrop-saturate-500 backdrop-brightness-150  backdrop-opacity-50  backdrop-blur-md">
            <MovieCard />
            {/* make a linear gradient background */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-sky-black/30 -z-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-gray-800/10 -z-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-purple-black/10 -z-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-purple-400/10 -z-50" /> */}
            {/* make a background image  */}
            {/* <img src="/images/bg.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-50" /> */}
          </section>
        </div>
      </main>
    </>
  )
}
