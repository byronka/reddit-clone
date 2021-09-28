import { useState, useEffect } from "react";
import PostInterface from "./PostInterface";
import PostList from "./PostList";
import PostForm from "./PostForm";
import api from "./api";

const App = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    (async () => setPosts(await api.getPosts()))();
  }, []);

  const onPostSubmit = async (name: string, description: string) => {
    let { id } = await api.createPost(name, description);
    const newPost = { id: id, name: name, description: description } 
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <PostForm onPostSubmit={onPostSubmit} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
