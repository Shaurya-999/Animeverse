import MySlider from "./MySlide"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
function Land(){



  return(
    <>
    <div id="land" className="md:h-[90vw] h-[2000px]">
    <div>
     <h1 className="text-white md:text-[64px]  text-[54px] font-bold text-center mt-[4%] ">Welcome to AnimeVerse ⚡⚡</h1>
     <p className="text-white font-medium text-center mt-[0.5%] pl-[0.5%] pr-[0.5%]">Welcome to Animeverse! Dive into detailed information about your favorite anime , discover top-rated titles, explore characters, and stay updated with seasonal releases — all powered by the Jikan API, delivering rich data directly from MyAnimeList without any hassle. Whether you're a casual viewer or a dedicated fan, you can easily find the titles you love and save them to your personal watchlist for quick access anytime.</p>
     <div className="flex justify-center mt-[2%]">
    <NavLink to="/home" ><button className="mt-[0.5%] bg-black w-[170px] h-[40px] text-white font-semibold rounded-lg"> Start Watching</button></NavLink>
    </div>
     </div>
     <div className="flex justify-around md:justify-evenly  md:flex-row flex-col  gap-y-[25px] m-[6%] mt-[2%] gap-[5%]">
      <div id="one" className="flex justify-center flex-col items-center">
       <h1 className="text-white text-semibold text-[20px] text-shadow-md p-[8px] m-[8px] text-center">Animes</h1>
        <MySlider img1={"https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg"}
        img2={"https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"}
        img3={"https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"}
        img4={"https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png"}
        img5={"https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/250px-Your_Name_poster.png"}/>
      </div>
      
      </div>
      </div>

     </>
  )
}

export default Land