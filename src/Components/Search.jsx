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
    <div className="text-white p-4  ">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Anime</h1>
      <div className="flex gap-2 mb-4 justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 text-white rounded w-[300px] bg-black"
        />
        <button onClick={handleSearch} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="flex flex-wrap gap-4">
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