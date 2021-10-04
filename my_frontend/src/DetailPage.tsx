import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import PostInterface from "./PostInterface";
import CommentInterface from "./CommentInterface";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { getPost, getComments, createComment } from "./api";

const initialPostState: PostInterface = { id: "", name: "", description: "" };
const initialCommentsState: CommentInterface[] = [];

const DetailPage = () => {
  const { id: postId } = useParams<{ id: string }>();

  // const [status, setStatus] = useState({}: )
  const [post, setPost] = useState<PostInterface>(initialPostState);
  const [comments, setComments] =
    useState<CommentInterface[]>(initialCommentsState);

  useEffect(() => {
    const request = async () => {
      const post = await getPost(postId);
      setPost(post);

      const comments = await getComments(postId);
      setComments(comments);
    };
    request();
  }, [postId]);

  const onCommentSubmit = async (value: string) => {
    console.log("postId is ", postId);
    let { id } = await createComment(value, postId);
    const newComment = { id, value };
    setComments([newComment, ...comments]);
  };

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <h1>{post.name}</h1>
      <p>{post.description}</p>
      <h2>Comments</h2>
      <CommentForm onCommentSubmit={onCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default DetailPage;
