import {contentViews,convertDate} from "../utils/calculateViewsandDate";

const VideoCard = ({ video }) => {
   
    const { title, channelTitle,publishedAt,thumbnails } = video.snippet;
    const { viewCount } = video.statistics;

   
    return (
        <div className="m-2 p-2 shadow-lg w-72 rounded-lg border-2 border-gray-300">
          
                <img className="shadow-lg rounded-lg" src={thumbnails.high.url} alt={title} />
       
           <ul className="py-2">
            <li>
                <h2 className="font-bold">{title}</h2>
            </li>
            <li>
                <h2 className="text-opacity-70">{channelTitle}</h2>
            </li>
            <li>
                <h3>{contentViews(viewCount)} Views - {convertDate(publishedAt)}</h3>
            </li>
            </ul>
            
        </div>
    )};


    export default VideoCard;