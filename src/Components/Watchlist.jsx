import React, { useEffect, useState } from "react";
import Card from "./Card"; // reuse your Card component if you want


function Watchlist() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  return (
    <div id="watch" className="">
      <h1 className="text-white text-xl mb-4 ml-[4%] mt-[5%]">My Watchlist</h1>
      {bookmarks.length === 0 ? (
        <p className="text-gray-400 ml-[4%]">No bookmarked animes yet.</p>
      ) : (
        <div className="flex flex-wrap ml-[2%] gap-[3%]">
          {bookmarks.map((anime) => (
            <Card
              key={anime.title}
              title={anime.title}
              year={anime.year}
              poster={anime.poster}
              type={anime.type}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;