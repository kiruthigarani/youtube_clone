import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/toggleSlice";
import { useSearchParams } from "react-router";
import { videoURL } from "../utils/Constant";
import { contentViews, convertDate } from "../utils/calculateViewsandDate";
import CommentContainer from "./CommentContainer";
import commentsStructure from "../utils/comments";

const WatchComponent = () => {
  const dispatchCloseMenu = useDispatch();
  const [getParam] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);
  console.log(getParam.get("v"));

  console.log("Comments Structure in WatchComponent:", commentsStructure);
  useEffect(() => {
    dispatchCloseMenu(closeMenu());
    const getVideoDetails = async () => {
      const data = await fetch(videoURL + "&id=" + getParam.get("v"));
      const json = await data.json();
      setVideoDetails(json);
      console.log("Video:", json);
    };
    getVideoDetails();
  }, []);

  return (
    <div className="">
    <div className="p-4 ">
       <iframe
        width="1400"
        height="700"
        className="rounded-lg"
        src={`https://www.youtube.com/embed/${getParam.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="text-2xl m-2 font-bold">{videoDetails?.items[0].snippet.title}</h1>
       
      </div>
     
        <div className="flex gap-10 items-center mt-4">
             <h2 className="font-bold m-2">{videoDetails?.items[0].snippet.channelTitle}</h2>
              <button className="px-2 py-1 text-white bg-gray-800 rounded-2xl mt-2">Subscribe</button>
              <ul className="flex gap-4 justify-end">
                <li><button className="px-2 py-2 bg-gray-100 rounded-lg">Like</button></li>
                <li><button className="px-2 py-2 bg-gray-100 rounded-lg">Dislike</button></li>
                <li><button className="px-2 py-2 bg-gray-100 rounded-lg">Share</button></li>
                <li><button className="px-2 py-2 bg-gray-100 rounded-lg">Save</button></li>
            </ul>
        </div>
       
        <div className=" gap-4 w-2/4 bg-gray-100 p-4 mt-2">
         <ul className="flex gap-4 font-semibold">
            <li>{contentViews(videoDetails?.items[0].statistics.viewCount)} views</li>
            <li>{convertDate(videoDetails?.items[0].snippet.publishedAt)}</li>
         </ul>
         
         <h3 className="text-sm">{videoDetails?.items[0].snippet.description.split('\n')[0]}</h3>
        </div>
       
    </div>
     <CommentContainer comments={commentsStructure} />
    </div>
  );
};
export default WatchComponent;
