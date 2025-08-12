import { CiBookmark} from "react-icons/ci";
import { GoBookmarkFill } from "react-icons/go";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

function Card({title,year,poster,type,handleClick,id}){
const [isBookmarked, setIsBookmarked] = useState(false);
const [showPopup, setShowPopup] = useState(false); 

useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isBookmarkedAlready = bookmarks.some(b => b.title === title);
    setIsBookmarked(isBookmarkedAlready);
  }, [title]);

const toggleBookmark = () => {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  if (!isBookmarked) {
    
    if (!bookmarks.find(b => b.title === title)) {
      bookmarks.push({ title, year, poster, type });
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    }
  } else {
   
    bookmarks = bookmarks.filter(b => b.title !== title);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  setIsBookmarked(!isBookmarked);
};

  
  return(
  <NavLink  to={`/title/${id}`}><div id="card" className="relative rounded-lg shadow-lg h-[310px] w-[160px] bg-black text-white m-[2%] hover:scale-105 transition-transform duration-300 hover:shadow-2xl transition-shadow duration-300 border border-blue-400 border-[2px]" onClick={handleClick}> 
    
    <img src={poster} alt={`Poster of ${title}`} className="w-full h-[200px]  rounded-lg "/>
    <h2 id="title" className="text-[12.8px] font-bold  p-[5px] text-end text-pretty truncate break-words">{title}</h2>
     <h3 className="text-[11px] text-gray-300 text-end">{year}</h3>
     <h4 className="text-[11px] text-gray-300 text-end">{type}</h4>
     <div
        onClick={toggleBookmark}
        className="absolute bottom-2 light-2 cursor-pointer"
      >
        {isBookmarked ? (
          <GoBookmarkFill className="text-green-400" size={20} />
        ) : (
          <CiBookmark className="text-white" size={20} />
        )}
      </div>
       {showPopup && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-md text-sm shadow-lg">
          Bookmarked!
        </div>
      )}
    
  </div>
  </NavLink>
  )
}
export default Card