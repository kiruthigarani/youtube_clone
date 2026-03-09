import usericon from "../img/user-icon.png";
const CommentCard = ({comment}) =>{
   if (!comment) return null;   
    const {  name, text, replies } = comment;
    return (
          <div className="flex  border-l-2 border-black  p-4 gap-4 mt-1">
        <div>
            <img alt="comment-user-icon" src={usericon} className="h-12 w-16" />
        </div>
        <div>
            <h2 className="font-bold">{name}</h2>
            <p>{text}</p>
            {replies && replies.length > 0 && (
                <div className="ml-4 mt-2 ">
                    {replies.map(reply => (
                        <CommentCard key={reply.id} comment={reply} /> // Recursive rendering of replies
                    ))}
                </div>
            )}
        </div>
        </div>
    )

}

export default CommentCard;