import MySlider from "./MySlide"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
function Land(){



  return(
    <>
    <div id="land" className="md:h-[100vw] h-[1000px]">
    <div>
     <h1 className="text-white text-[64px] font-bold text-center mt-[4%]">Welcome to AnimeVerse ⚡⚡</h1>
     <p className="text-white font-medium text-center mt-[0.5%] pl-[0.5%] pr-[0.5%]">Welcome to our Anime & Manga Explorer! Dive into detailed information about your favorite anime and manga series, discover top-rated titles, explore characters and staff, and stay updated with seasonal releases — all powered by the Jikan API, providing rich data directly from MyAnimeList without any hassle. Whether you're a casual viewer or a dedicated fan, this page helps you find and learn more about the anime and manga worlds you love.</p>
     <div className="flex justify-center mt-[2%]">
    <NavLink to="/home" ><button className="mt-[0.5%] bg-black w-[170px] h-[40px] text-white font-semibold rounded-lg"> Start Watching</button></NavLink>
    </div>
     </div>
     <div className="flex justify-around md:justify-evenly  md:flex-row flex-col  gap-y-[25px] m-[6%] mt-[2%] gap-[5%]">
      <div id="one">
       <h1 className="text-white text-semibold text-[20px] text-shadow-md p-[8px] m-[8px] md:text-center">Animes</h1>
        <MySlider img1={"https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg"}
        img2={"https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"}
        img3={"https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"}
        img4={"https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png"}
        img5={"https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/250px-Your_Name_poster.png"}/>
      </div>
      <div id="two" c>
       <h1 className="text-white text-semibold text-[20px] text-shadow-md p-[8px] m-[8px] md:text-center ">Mangas</h1>
        <MySlider img1={"https://m.media-amazon.com/images/I/91rdTtLWAHL._UF1000,1000_QL80_.jpg"}
        img2={"https://upload.wikimedia.org/wikipedia/en/6/6c/Solo_Leveling_Volume_1_Cover.jpg"}
        img3={"https://m.media-amazon.com/images/I/91NxYvUNf6L._UF1000,1000_QL80_.jpg"}
        img4={"https://upload.wikimedia.org/wikipedia/en/f/fe/Soul_Eater_manga_volume_1.jpg"}
        img5={"https://m.media-amazon.com/images/I/81gv-D-LqhL._UF1000,1000_QL80_.jpg"}/>
      </div>
      </div>
      </div>

     </>
  )
}

export default Land