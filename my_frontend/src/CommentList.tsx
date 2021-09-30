import CommentInterface from "./CommentInterface";

const CommentList = ({ comments }: { comments: CommentInterface[] }) => {
  console.log(comments);
  return (
    <ul>
      {[...comments].map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.value}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
