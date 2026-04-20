import usericon from "../img/user-icon.png";
const ChatComponent = ({name,message}) => {
    return (
        <div className="chat-container">
             <div className="flex items-center mt-2">
          <img alt="youtube-logo" src={usericon} className="h-5" />
         <span className="text-sm text-gray-500">{name} :    </span>
         <span className="text-sm text-gray-500">{message}</span>
        </div>
        </div>
    )
}
export default ChatComponent;