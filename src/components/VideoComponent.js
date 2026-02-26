import React, {useEffect} from 'react';
import { apiURL } from '../utils/Constant';
const VideoComponent =  () => {

  useEffect( () =>{
   getResponse();
  
  }, []);

  const getResponse =async ()=>{
  const data = await fetch(apiURL);
  const json = await data.json();
  console.log(json);
  }

  return (
    <div>
   
    </div>
  )
}

export default VideoComponent
