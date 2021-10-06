import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import PostInterface from "./PostInterface";
import CommentInterface from "./CommentInterface";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import PostDescriptionText from "./PostDescriptionText";
import {
  getPost,
  getComments,
  createComment,
  updatePostDescription,
} from "./api";

const initialPostState: PostInterface = { id: "", name: "", description: "" };
const initialCommentsState: CommentInterface[] = [];

const DetailPage = () => {
  const { id: postId } = useParams<{ id: string }>();

  // const [status, setStatus] = useState({}: )
  const [post, setPost] = useState<PostInterface>(initialPostState);
  const [comments, setComments] =
    useState<CommentInterface[]>(initialCommentsState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const post = await getPost(postId);
      setPost(post);

      const comments = await getComments(postId);
      setComments(comments);
      setLoading(false);
    };
    request();
  }, [postId]);

  const onCommentSubmit = async (value: string) => {
    let { id } = await createComment(value, postId);
    const newComment = { id, value };
    setComments([...comments, newComment]);
  };

  const onSaveSubmit = async (newDescription: string) => {
    const newPost = { ...post, description: newDescription };
    setPost(newPost);
    await updatePostDescription(postId, newDescription);
  };

  let renderPage;
  if (loading) {
    renderPage = "";
  } else {
    renderPage = (
      <div>
        <h1>{post.name}</h1>
        <PostDescriptionText
          description={post.description}
          onSaveSubmit={onSaveSubmit}
        />
        <h2>Comments</h2>
        <CommentForm onCommentSubmit={onCommentSubmit} />
        <CommentList comments={comments} />
      </div>
    );
  }
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      {renderPage}
    </div>
  );
};

export default DetailPage;
