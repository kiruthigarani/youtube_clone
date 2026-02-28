import React,{ useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/toggleSlice';
const WatchComponent = () =>{
     const dispatchCloseMenu = useDispatch();

      useEffect(()=>{
            dispatchCloseMenu(closeMenu());
        },[]);

    return (
        <div>
            <h1>Watch Component</h1>
        </div>
    )
}
export default WatchComponent;