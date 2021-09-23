import { useState, useEffect } from "react";
import PostInterface from "./PostInterface";
import PostList from "./PostList";
import PostForm from "./PostForm";

const API_URL = "http://localhost:3000/posts";

const App = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    async function requestPost() {
      try {
        let res = await fetch(API_URL);
        const json = await res.json();
        setPosts(json);
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
    }

    requestPost();
  }, [setPosts]);

  const createPost = (name: string, description: string) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, description: description }),
    };
    fetch("http://localhost:3000/posts", requestOptions)
      .then(async (response) => {
        let { id } = await response.json();
        setPosts([{ id: id, name: name, description: description }, ...posts]);
      })
      .catch((error) => console.log("error"));
  };

  return (
    <div>
      <PostForm createPost={createPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
