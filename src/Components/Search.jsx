import React, { useState } from "react";
import Card from "./Card";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=score&sort=desc`);
      const data = await res.json();
      setResults(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="search"className="text-white h-[1200px]">
      <h1 className="text-2xl font-bold mb-4 text-center mt-[10px]">Search Anime</h1>
      <div className="flex gap-2 mb-4 justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 text-white rounded md:w-[300px] w-[200px] bg-black"
        />
        <button onClick={handleSearch} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="md:flex md:flex-wrap md:ml-[6%] flex flex-wrap ml-[5px]">
        {results.map((anime) => (
          <Card
            key={anime.mal_id}
            poster={anime.images.jpg.image_url}
            title={anime.title}
            year={anime.status}
            type={anime.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;