import React, {useState, useEffect} from 'react';
import { apiURL } from '../utils/Constant';
import VideoCard from './VideoCard';

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
          return <VideoCard video={video} key={video.id}/>
        })
      }
     
    </div>
  )
}

export default VideoComponent;
