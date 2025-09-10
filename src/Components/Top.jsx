import React, { useState,useEffect } from "react";
import Card from "./Card";

function Top() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  



  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?order_by=score&sort=desc&page=${currentPage}&sfw=true`)
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data.data); // `data.data` contains the anime list
        setHasNextPage(data.pagination.has_next_page);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching airing now anime:", err);
        setLoading(false);
      });
  }, [currentPage]);
function handleClick(){
      
  }



  if (loading) return <div>Loading...</div>;

  return (<>
    <h1 className="text-white font-semibold md:text-[26px] text-[20px] ml-[4%] md:ml-[6%] mt-[2%] mb-[2%] md:mb-0">High Rated</h1>
  
    <div className="anime-container md:flex md:flex-wrap md:ml-[6%] flex flex-wrap md:gap-[5%] gap-[3%] md:mt-[1%] ml-[3%]" >
      {animes.map((anime) => (
        <Card id={anime.mal_id} poster={anime.images.jpg.image_url} title={anime.title} year={anime.status} type={anime.type} />
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
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
    </div>
  
    </>
  );
}




    

export default Top