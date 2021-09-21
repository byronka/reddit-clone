import { useState, useEffect } from "react";
import PostInterface from "./PostInterface";
import PostList from "./PostList";
import PostForm from "./PostForm";

const API_URL = "http://localhost:3000/posts";

const App = () => {
  let posts: PostInterface[];
  let setPosts: Function;
  [posts, setPosts] = useState([]);

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

  return (
    <div>
      <PostForm />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
