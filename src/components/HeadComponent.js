import React from "react";
import  {useDispatch} from "react-redux";
import Hambugericon from "../img/hamburger-menu-web-icon-on-600w-1180081597.webp";
import Youtubelogo from "../img/youtube-logo-png.png";
import usericon from "../img/user-icon.png";
// import searchicon from "../img/search-icon-png.png";
import { toggle } from "../utils/toggleSlice";

const HeadComponent = () => {
   const dispatchTogggle = useDispatch();
   const toggleMenu = () =>{
    dispatchTogggle(toggle());
   }

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <button className="h-10" onClick={toggleMenu}>
         
          <img alt="hamburger-icon" src={Hambugericon} className="h-10 " />
        </button>
        <div className="flex ">
          <button>
            <img alt="youtube-logo" src={Youtubelogo} className="h-10" />
          </button>
        </div>
      </div>

      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-grey-400 rounded-l-full w-1/2 h-10 p-4"
        />
        <button className="border border-grey-400 rounded-r-full h-10 px-4 bg-gray-200 ">
         Search
          {/* <img alt="search-icon" src={searchicon} className="h-10" /> */}
        </button>
      </div>

      <div className="col-span-1 flex justify-end">
        <img alt="user-icon" src={usericon} className="h-10" />
      </div>
    </div>
  );
};

export default HeadComponent;
