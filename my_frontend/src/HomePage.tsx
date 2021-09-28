import { useState, useEffect } from "react";

import PostInterface from "./PostInterface";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { getPosts, createPost } from "./api";

const HomePage = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    (async () => setPosts(await getPosts()))();
  }, []);

  const onPostSubmit = async (name: string, description: string) => {
    let { id } = await createPost(name, description);
    const newPost = { id: id, name: name, description: description };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <PostForm onPostSubmit={onPostSubmit} />
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
