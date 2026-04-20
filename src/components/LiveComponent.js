
import ChatComponent from "./ChatComponent";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMsg } from "../utils/chatSlice";
import { generateRandomName,generateRandomString } from "../utils/randomGeneration";
const LiveComponent = () => {
    const [liveChatData, setLiveChatData] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chatStore.messages);
    useEffect(()=>{
        const interval = setInterval(() => {
           
            dispatch(
                addMsg({
                    name: generateRandomName(),
                    message: generateRandomString()
                })
            );
        }, 2000);
       
       return ()=>clearInterval(interval); 
    });
    const handleSubmit = (e) => {
        console.log("Submitting live chat data:", liveChatData);
        e.preventDefault();

        dispatch(
            addMsg({
                name: "Kiruthiga",
                message: liveChatData
            })
        );
        setLiveChatData("");
    }
    const handleChange = (e) => {
        setLiveChatData(e.target.value);
    }
    return(
    <>
    <form id="livechatform" onSubmit={handleSubmit} className="mt-3 border-2 border-gray-300 bg-slate-100 overflow-y-scroll flex flex-col-reverse rounded-lg p-2 w-full h-[700px]">
        Live Chat
        {
            //dont use index as key in real time chat application, using it here just for testing purpose   
            messages.map((msg,index)=>{
                return   <ChatComponent key={index} name={msg.name} message={msg.message} />
            })
        }
        
        </form>
         <div className="border-2 border-gray-300 rounded-lg p-2 w-full">
        <input form="livechatform" type="text" value={liveChatData} onChange={handleChange} className="border-2 border-gray-300 rounded-lg p-2 w-full" placeholder="Type your message here..." />
        </div>
        </>
    )
        
}

export default LiveComponent;
