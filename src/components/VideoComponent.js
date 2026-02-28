import React, {useState, useEffect} from 'react';
import { apiURL } from '../utils/Constant';
import VideoCard from './VideoCard';
import { Link } from "react-router-dom";


const VideoComponent =  () => {
 

  const [json, setJson] = useState(null);
  useEffect( () =>{
   getResponse();
   
  }, []);

  const getResponse =async ()=>{
  const data = await fetch(apiURL);
  const json = await data.json();
  setJson(json.items);
  
 
  }
  

  return (
    <div className='flex flex-wrap'>
      {
        json && json.map((video)=>{
          return <Link to={"/watch?v="+video.id}><VideoCard video={video} key={video.id}/></Link>
        })
      }
     
    </div>
  )
}

export default VideoComponent;
