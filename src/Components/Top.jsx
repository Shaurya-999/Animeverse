import React, { useState,useEffect } from "react";
import Card from "./Card";

function Top() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?order_by=score&sort=desc&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data.data); // `data.data` contains the anime list
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching airing now anime:", err);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;

  return (<>
    <h1 className="text-white font-semibold text-[26px] ml-[8%] mt-[2%]">High Rated</h1>
  
    <div className="anime-container flex flex-wrap ml-[6%] " >
      {animes.map((anime) => (
        <Card key={anime.mal_id} poster={anime.images.jpg.image_url} title={anime.title} year={anime.status} type={anime.type}/>
      ))}
    </div>
    <div className="flex justify-center gap-x-[15px]">
    <div className="pagination-buttons text-white flex gap-[15px]">
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
      >
        Next
      </button>
    </div>
    </div>
  
    </>
  );
}




    

export default Top