import { useState, useEffect } from "react";

const API_URL = 'http://localhost:3000/posts'

interface Post {
  name: string
}

const App = () => {
  let post: Post;
  let setPost: any;
  [post, setPost] = useState({name: ""})

  useEffect(() => {
    requestPost();
  }, [])

  async function requestPost() {
    const res = await fetch(API_URL);
    const json = await res.json();
    setPost(json)
    return json;
  }

  return (
    <div>{post.name}</div>
  );
}

export default App;