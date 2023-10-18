"use client"
import Link from "next/link";
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(e.currentTarget.search.value);
        const res = await fetch(`http://localhost:3000/api/search?q=${search}`);
        const data = await res.json();
        setSearchResults(data);
    }
    // console.log(searchResults);
    // console.log(search);
    // console.log(handleSearch);

  return (
    <div className="w-full max-w-[20rem] mx-auto">
        <form action="" className="relative">
            <input
            className="w-full h-12 bg-transparent rounded-lg 
            border-2 border-gray-900 dark:border-gray-200 focus:outline-none focus:border-[#00c2ff]
            px-1
            "
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            type="text" placeholder="Search..." />
            <Link href={"/search?q=" + search} as={"/search/" + search} rel={"noopener noreferrer"} prefetch={false} locale={"en-US"} scroll={false} shallow={false} replace={false} passHref={false} className="absolute right-2 top-4"><AiOutlineSearch /></Link>
        </form>
    </div>
  )
}

export default SearchBar