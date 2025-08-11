

import { NavLink } from "react-router-dom";


function Header(){
  
  
  return(
 <>
 <nav className="flex flex-row w-full h-[72px] bg-black md:gap-[50%] gap-[10px] sticky top-0 z-50 shadow-lg">
  <div className=" ">
   <NavLink to="/"><h1 className="text-[#f6ca83] font-bold md:text-[35px]  md:mt-[8%] md:p-0 p-[7px] text-[15px] mt-[22%] flex">Animeverse</h1></NavLink>
  
   </div>
   <div className="">
   <ul className="text-[#f6ca83] md:text-[16px] flex md:gap-[40%]  text-[12px] gap-[10%] md:mt-[15%] mt-[20%] md:text-end ">
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