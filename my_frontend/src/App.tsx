import { useState, useEffect } from "react";

const API_URL = 'http://localhost:3000/posts'

interface Post {
  id: string
  name: string
  description: string
}

const App = () => {
  let posts: Post[];
  let setPosts: Function;
  [posts, setPosts] = useState([])

  useEffect(() => {
    async function requestPost() {
      try {
        let res = await fetch(API_URL)
        const json = await res.json();
        setPosts(json)
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
  }, [setPosts])

  return (
    <div>
      <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
