import React, { useState, useEffect } from "react";
import { apiURL } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { searchText } from "../utils/searchSlice";
import { useSelector } from "react-redux";

const VideoComponent = ({ buttonnName }) => {
  const [json, setJson] = useState(null);
  const searchText = useSelector((store) => store.cacheStore.searchText);
  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    const data = await fetch(apiURL);
    const json = await data.json();
   // console.log("Video response:", json.items);
    setJson(json.items);
  };

  return (
    <div className="flex flex-wrap ">
      {json &&
        json
          .filter((video) =>
            buttonnName === "Live"
              ? video.snippet.liveBroadcastContent === "Live"
              : true,
          )
          .filter((video) =>{
            const title = video.snippet?.title?.toLowerCase();
              const query = searchText?.toLowerCase() || '';
            return title?.includes(query) ?? true;  
          }
          
          )
          .map((video) => {
           // console.log("Filtered Video:", video);
            return (
              <Link key={video.id} to={"/watch?v=" + video.id}>
                <VideoCard video={video} buttonnName={buttonnName} />
              </Link>
            );
          })}
    </div>
  );
};

export default VideoComponent;
