// interact with the API
import PostInterface from "./PostInterface"

const API_URL = "http://localhost:3000/posts"

// function api<T>(url: string): Promise<T> {

const getPosts: PostInterface[] = async() => {
  // try {
    const res = await fetch(API_URL)
    const json = await res.json<PostInterface[]>();
    return json.posts;
  // } catch (err) {
  //   if (err instanceof TypeError) {
  //     if (err.message === "Failed to fetch") {
  //       alert("failed to fetch - is the server down?");
  //     }
  //   } else {
  //     console.log("failed during request: " + err);
  //   }
  // }
}

// TODO: type
const createPost = async (name: string, description: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, description: description }),
  };
  
  let res = await fetch(API_URL, requestOptions);
  return await res.json()
};

const api = { createPost: createPost, getPosts: getPosts }
export default api;