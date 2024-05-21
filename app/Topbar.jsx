"use client";
import Link from "next/link";
import { useState } from "react";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="flex flex-row gap-x-5 pt-0 mb-5">
      <Link className="hover:text-blue-600 hover:rounded" href="/">Home</Link>
      <Link className="hover:text-blue-600 hover:rounded" href="/">About</Link>
      <Link className="hover:text-blue-600 hover:rounded" href="/">Blog</Link>
      <Link className="hover:text-blue-600 hover:rounded" href="/">Popular Movies</Link>
      <Link className="hover:text-blue-600 hover:rounded" href="/">Recently Added</Link>
      <form className="flex items-center gap-x-3 ml-auto" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mb-3"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}
