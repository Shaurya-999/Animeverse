import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Anime(){
const { id } = useParams();
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [character,setCharacter]=useState([])

  useEffect(() => {
    async function fetchAnime() {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await res.json();
        setAnime(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchAnime();
  }, [id]);
  

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
        const data = await res.json();
        setCharacter(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!anime) return <p>No anime found.</p>;

  return (
    <>
    
    
     
    <div id="anime" className="h-[750vw] md:h-[138vw] ">
       <h1 className="text-white font-bold md:text-[50px] text-center md:mt-[3%] text-[40px]">{anime.title}</h1>
      <div className="flex md:ml-[4%] md:mt-[4%] mt-[7%] ">
      <img src={anime.images.jpg.image_url} alt={anime.title} className="md:w-[225px] md:h-[318px] w-[220px] h-[190px] ml-[2%] md:ml-0" />
       <p className={`${expanded ? "" : "line-clamp-3"} md:line-clamp-none text-white ml-[5%] md:text-[17px] md:p-[0.5%] `}>
        {anime.synopsis}
      </p>

      
      
      </div>
      {anime.synopsis && anime.synopsis.length > 120 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 mt-1 ml-[60%] md:hidden "
          
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      
      <div className=" bg-[#212121] h-[85%] flex flex-col gap-[0.75%] mt-[17%] font-light p-[2%] md:mt-[5%]">

        <h1 className="text-white font-light text-center mt-[1%]">Japanese : {anime.titles[1].title}</h1>
        <h1 className="text-white font-light text-center">Type : {anime.type}</h1>
        <h1 className="text-white font-light text-center">Year : {anime.aired.string}</h1>
        <h1 className="text-white font-light text-center">Status : {anime.status}</h1>
        <h1 className="text-white font-light text-center">Episodes : {anime.episodes}</h1>
         <h1 className="text-white font-light text-center">Duration : {anime.duration}</h1>
         <h1 className="text-white font-light text-center">Score : {anime.score}</h1>
         <h1 className="text-white font-light text-center">Rank : {anime.rank}</h1>
         <h1 className="text-white font-light text-center">{anime.genres[0].name}</h1>
         <h1 className="text-white font-light text-center">Producers : {anime.producers[0].name}</h1>
         <h1 className="text-white md:text-[44px] text-[38px]">Main Characters</h1>
         <div className=" flex gap-[25px] flex-wrap">
         
          {character
  .filter(char => char.role === "Main")
  .map(char => (
    
    <div id="char" key={char.character.mal_id} className="flex items-center bg-gray-900 h-[80px] w-[400px] rounded-lg p-[10px] bg-cover bg-center " >
      <img src={char.character.images.jpg.image_url} alt={char.character.name}  className="rounded-[50%] h-[75px] w-[75px]"/>
      <p className="ml-[3%] text-white">{char.character.name}</p>
    </div>
))}
         </div>
         <div className="flex justify-center mt-[1%]">
         
        <iframe
  width="530"
  height="315"
  src={anime.trailer.embed_url}
  title={anime.title}
  frameBorder="0"
  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="mt-[4%]"
  
></iframe>
</div>
      </div>
      </div>
      
   </>
    
  );
}



  
      



export default Anime






