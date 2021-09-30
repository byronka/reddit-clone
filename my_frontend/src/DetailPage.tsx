import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import PostInterface from "./PostInterface";
import CommentInterface from "./CommentInterface";
import CommentList from "./CommentList";
import { getPost, getComments } from "./api";

const initialPostState: PostInterface = { id: "", name: "", description: "" };
const initialCommentsState: CommentInterface[] = [];

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  // const [status, setStatus] = useState({}: )
  const [post, setPost] = useState<PostInterface>(initialPostState);
  const [comments, setComments] =
    useState<CommentInterface[]>(initialCommentsState);

  useEffect(() => {
    const request = async () => {
      const post = await getPost(id);
      setPost(post);

      const comments = await getComments(id);
      setComments(comments);
    };
    request();
  }, [id]);

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <h1>{post.name}</h1>
      <p>{post.description}</p>
      <h2>Comments</h2>
      <CommentList comments={comments} />
    </div>
  );
};

export default DetailPage;
