import { useState, useEffect } from "react";

const API_URL = 'http://localhost:3000/posts'

interface Post {
  name: string
  description: string
}

const App = () => {
  let post: Post;
  let setPost: any;
  [post, setPost] = useState({name: "", description: ""})

  useEffect(() => {
    async function requestPost() {
      try {
        let res = await fetch(API_URL)
        const json = await res.json();
        setPost(json)
        return json;
      } catch(err) {
        if (err instanceof TypeError) {
          if(err.message === 'Failed to fetch') {
            alert('failed to fetch - is the server down?')
          }
        } else {
          console.log('failed during request: ' + err)
        }
        
      }
    }

    requestPost();
  }, [setPost])

  return (
    <div>
      <h2>{post.name}</h2>
      <p>{post.description}</p>
    </div>
  );
}

export default App;
