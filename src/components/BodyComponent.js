import React from 'react';
import SideMenuComponent from './SideMenuComponent';
import { Outlet } from 'react-router-dom';
// import MainComponent from "./MainComponent";

const BodyComponent = () =>{
    return(
        <div className='flex '>
            <SideMenuComponent />
            <Outlet />
        </div>
    )
}

export default BodyComponent;