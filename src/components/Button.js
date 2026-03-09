import React from 'react';
import { useDispatch } from 'react-redux';
import {setBtnName} from '../utils/btnSlice';
const Button = ({name}) =>{
    const dispatch = useDispatch();
    const clickHandler = (name) =>{
         console.log("cliked", name);
         dispatch(setBtnName(name));
    
    }
  
    return (
        <div>
            <p className="bg-gray-300 rounded-lg p-4  w-auto m-2 text-center" onClick={()=>clickHandler(name)} >{name}</p>
        </div>
    )
}

export default Button;