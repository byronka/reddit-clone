import { useState, useEffect } from "react";
import PostInterface from "./PostInterface";
import PostList from "./PostList";
import PostForm from "./PostForm";
import api from "./api";

const App = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    async function requestPost() {
      try {
        const json = await api.getPosts()
        return json;
      } catch (err) {
        if (err instanceof TypeError) {
          if (err.message === "Failed to fetch") {
            alert("failed to fetch - is the server down?");
          }
        } else {
          console.log("failed during request: " + err);
        }
      }

      setPosts(json);
    }

    requestPost();
  }, [setPosts]);

  const onPostSubmit = async (name: string, description: string) => {
    let { id } = await api.createPost(name, description)
    setPosts([{ id: id, name: name, description: description }, ...posts]);
  }

  return (
    <div>
      <PostForm onPostSubmit={onPostSubmit} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
