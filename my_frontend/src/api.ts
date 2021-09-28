// interact with the API
import PostInterface from "./PostInterface";

const API_URL = "http://localhost:3000/posts";

export const getPost = async (id: string): Promise<PostInterface> => {
  try {
    const res = await fetch(API_URL + "/" + id);
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const getPosts = async (): Promise<PostInterface[]> => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (err) {
    if (err instanceof TypeError) {
      if (err.message === "Failed to fetch") {
        alert("failed to fetch - is the server down?");
      }
    } else {
      console.log("failed during request: " + err);
    }
    return [];
  }
};

export const createPost = async (
  name: string,
  description: string
): Promise<{ success: boolean; id: string }> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, description: description }),
  };

  let res = await fetch(API_URL, requestOptions);
  return await res.json();
};

// const api = { createPost: createPost, getPosts: getPosts };
// export default api;
