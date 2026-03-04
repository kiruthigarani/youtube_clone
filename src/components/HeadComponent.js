import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Hambugericon from "../img/hamburger-menu-web-icon-on-600w-1180081597.webp";
import Youtubelogo from "../img/youtube-logo-png.png";
import usericon from "../img/user-icon.png";
// import searchicon from "../img/search-icon-png.png";
import { toggle } from "../utils/toggleSlice";


const HeadComponent = () => {
  const [suggestion, setSuggestion] = useState("");
  const dispatchTogggle = useDispatch();
 
  useEffect(() => {
    const timer = setTimeout(() => {
      searchResult();
    }, 200);

    return ()=>{
    clearTimeout(timer);
  }
  }, [suggestion]);

  
  const toggleMenu = () => {
    dispatchTogggle(toggle());
  };

  const searchResult = async () => {
    const suggestionAPI = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${suggestion}`;
     console.log("API Call:", suggestion);
    const data = await fetch(suggestionAPI);
    const json = await data.json();
    console.log("API Response:", json);
    setSuggestion(json[1]);
  };

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
        <div className="">
             <input
          type="text"
          placeholder="Search"
          className="w-1/2 h-10 p-4 rounded-l-full border border-grey-400"
          onChange={(e) => setSuggestion(e.target.value)}
          value={suggestion}
        />
      
        <button
          className="border border-grey-400 rounded-r-full h-10 px-4 bg-gray-200 "
          onChange={searchResult}
        >
          Search
          {/* <img alt="search-icon" src={searchicon} className="h-10" /> */}
        </button>
        </div>
     
     <div className="fixed px-2 py-5 rounded-lg bg-white ml-[340px]">
      <ul>
        <li>iphone</li>
         <li>iphone</li>
          <li>iphone</li>
           <li>iphone</li>
            <li>iphone</li>
             <li>iphone</li>
      </ul>
     </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <img alt="user-icon" src={usericon} className="h-10" />
      </div>
    </div>
  );
};

export default HeadComponent;
