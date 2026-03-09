

import CommentCard from "./CommentCard";

const CommentContainer = ({ comments }) => {
  return (
    <div className="p-4">
        <h1 className="font-bold">Comments :</h1>
        {
           comments.map(comment => {
            return <CommentCard key={comment.id} comment={comment}  />
           }) 
        }
    </div>
  );
}

export default CommentContainer;