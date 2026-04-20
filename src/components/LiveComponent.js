
import ChatComponent from "./ChatComponent";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMsg } from "../utils/chatSlice";
import { generateRandomName,generateRandomString } from "../utils/randomGeneration";
const LiveComponent = () => {

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chatStore.messages);
    useEffect(()=>{
        const interval = setInterval(() => {
            console.log("Fetching live chat data...");
            dispatch(
                addMsg({
                    name: generateRandomName(),
                    message: generateRandomString()
                })
            );
        }, 700);
       
       return ()=>clearInterval(interval); 
    });
    return(<div className="mt-3 border-2 border-gray-300 bg-slate-100 overflow-y-scroll flex flex-col-reverse rounded-lg p-2 w-full h-[700px]">
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
