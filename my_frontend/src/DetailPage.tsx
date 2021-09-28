import { useParams, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import PostInterface from "./PostInterface";
import { getPost } from "./api";

const initialState: PostInterface = { id: "", name: "", description: "" };

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  // const [status, setStatus] = useState({}: )
  const [post, setPost] = useState<PostInterface>(initialState);

  // const [userRequestPostId] = useState("41");

  useEffect(() => {
    const request = async () => {
      const post = await getPost(id);
      setPost(post);
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
    </div>
  );
};

export default DetailPage;
