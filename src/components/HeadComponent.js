import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hambugericon from "../img/hamburger-menu-web-icon-on-600w-1180081597.webp";
import Youtubelogo from "../img/youtube-logo-png.png";
import usericon from "../img/user-icon.png";
// import searchicon from "../img/search-icon-png.png";
import { toggle } from "../utils/toggleSlice";
import { addCache,searchQueryParam } from "../utils/searchSlice";
import { searchAPI } from "../utils/Constant";


const HeadComponent = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatchTogggle = useDispatch();
  const dispatchSearchCache = useDispatch();
  const cacheResult = useSelector((store)=> store.cacheStore);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(cacheResult[searchQuery]){
        setSuggestion(cacheResult[searchQuery]);
        console.log("Cache Result from Redux Store:", cacheResult);
      }else{
        searchResult();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery, cacheResult]);

  const toggleMenu = () => {
    dispatchTogggle(toggle());
  };

  const searchResult = async () => {
    const suggestionAPI = `${searchAPI}${searchQuery}`;
    console.log("API Call:", searchQuery);
    const data = await fetch(suggestionAPI);
    const json = await data.json();
    console.log("API Response:", json[1]);
    setSuggestion(json[1]);
    dispatchSearchCache(addCache(
      { [searchQuery]: json[1] }
    ));
   dispatchSearchCache(searchQueryParam(searchQuery));
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <button className="h-10" onClick={toggleMenu}>
          <img alt="hamburger-icon" src={Hambugericon} className="h-10 " />
        </button>
        <div className="flex">
          <button>
            <img alt="youtube-logo" src={Youtubelogo} className="h-10" />
          </button>
        </div>
      </div>

      <div className="col-span-10 ">
        <div className="text-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 h-10 p-4 rounded-l-full border border-grey-400"
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            value={searchQuery}
          />

          <button
            className="border border-grey-400 rounded-r-full h-10 px-4 bg-gray-200 "
            onChange={searchResult}
          >
            Search
            {/* <img alt="search-icon" src={searchicon} className="h-10" /> */}
          </button>
        </div>
            {showSuggestion && suggestion.length > 0 ? (
        <div className="absolute px-2 py-5 rounded-lg bg-white w-[46rem] ml-[340px]">
      
            <ul>
              {suggestion.map((sug) => {
                return (
                  <li
                    key={sug}
                    className="px-2 py-2 hover:bg-gray-100 rounded-lg"
                  >
                    {sug}
                  </li>
                );
              })}
            </ul>
        
        </div>
          ) : null}
      </div>
      <div className="col-span-1 flex justify-end">
        <img alt="user-icon" src={usericon} className="h-10" />
      </div>
    </div>
  );
};

export default HeadComponent;
