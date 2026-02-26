import React from 'react';
import SideMenuComponent from './SideMenuComponent';
import MainComponent from './MainComponent';

const BodyComponent = () =>{
    return(
        <div className='flex '>
            <SideMenuComponent />
            <MainComponent />
        </div>
    )
}

export default BodyComponent;