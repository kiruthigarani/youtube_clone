import React from 'react';
import ButtonListComponent from './ButtonListComponent';
import VideoComponent from './VideoComponent';
import { useSelector } from 'react-redux';
const MainComponent = () => {
    const btnName = useSelector((state)=>state.btnStore.btnName);
    return(
        <div className=''>
            <ButtonListComponent />
            <VideoComponent buttonnName={btnName}/>
        </div>
    )
}
export default MainComponent;