import React, { useState,useEffect } from "react";
import Card from "./Card";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = async () => {
  if (!query.trim()) return;
  setLoading(true);

  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=score&sort=desc&page=${currentPage}`
    );
    const data = await res.json();
    setResults(data.data);
    setHasNextPage(data.pagination.has_next_page);
  } catch (error) {
    console.error("Error fetching search results:", error);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  fetchData();
}, [currentPage]);

  return (
    <div id="search"className="text-white md:h-[120vw] ">
      <h1 className="text-2xl font-bold mb-4 text-center mt-[10px]">Search Anime</h1>
      <div className="flex gap-2 mb-4 justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 text-white rounded md:w-[300px] w-[200px] bg-black"
        />
        <button onClick={fetchData} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="md:flex md:flex-wrap md:ml-[6%] flex flex-wrap ml-[5px] md:gap-[10%] md:mt-[1.5%] gap-[2%]">
        {results.map((anime) => (
          <Card
            id={anime.mal_id}
            poster={anime.images.jpg.image_url}
            title={anime.title}
            year={anime.status}
            type={anime.type}
          />
        ))}
        <div className="flex justify-center w-full mt-[4%] gap-[2%]">
         <button
       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span className="font-semibold text-white mt-[5px] drop-shadow-[0_0_8px_#5bc0be]">Page {currentPage}</span>

      <button
        onClick={() => setCurrentPage(prev => prev + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={!hasNextPage}
      >
        Next
      </button>
      </div>
      </div>
    </div>
  );
}

export default Search;