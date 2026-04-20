
import ChatComponent from "./ChatComponent";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMsg } from "../utils/chatSlice";
import { clear } from "@testing-library/user-event/dist/clear";
const LiveComponent = () => {

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    useEffect(()=>{
        const interval = setInterval(() => {
            console.log("Fetching live chat data...");
            dispatch(
                addMsg({
                    name: "Kiruthiga",
                    message: "Hello, how are you?"
                })
            );
        }, 3000);
       
       return ()=>clearInterval(interval); 
    });
    return(<div className="mt-3 border-2 border-gray-300 bg-slate-100 rounded-lg p-2 w-full h-[893px]">
        Live Chat
        {
            //dont use index as key in real time chat application, using it here just for testing purpose   
            messages.map((msg,index)=>{
                return   <ChatComponent name={msg.name} message={msg.message} />
            })
        }
     
      
        
       
        </div>
        )
}

export default LiveComponent;
