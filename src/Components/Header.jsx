

import { NavLink } from "react-router-dom";


function Header(){
  
  
  return(
 <>
 <nav className="flex flex-row w-full h-[72px] bg-black md:gap-[50%] gap-[20px] sticky top-0 z-50 shadow-lg">
  <div className=" ">
   <NavLink to="/"><h1 className="text-[#f6ca83] font-bold md:text-[35px] md:mt-[4%] mt-[16%] p-[7px] text-[20px] flex">Animeverse</h1></NavLink>
  
   </div>
   <div className="">
   <ul className="text-[#f6ca83] md:text-[16px] flex md:gap-[40%]  gap-[10%] mt-[15%] md:text-end ">
    <li>
      
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-900 underline underline-offset-2"
              : "text-[#f6ca83] font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-900 underline underline-offset-2"
              : "text-[#f6ca83] font-bold"
          }
        >
          Search
        </NavLink>
        </li>
   <li>
        <NavLink
          to="/top"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-900 underline underline-offset-2"
              : "text-[#f6ca83] font-bold"
          }
        >
          Top
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-900 underline underline-offset-2"
              : "text-[#f6ca83] font-bold"
          }
        >
          WatchList
        </NavLink>
      </li>
   </ul>
   </div>
   
 </nav>
 
 </>
  )
}

export default Header