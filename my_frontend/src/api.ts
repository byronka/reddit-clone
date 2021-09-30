// interact with the API
import PostInterface from "./PostInterface";
import CommentInterface from "./CommentInterface";

const API_URL = "http://localhost:3000";

export const getPost = async (id: string): Promise<PostInterface> => {
  try {
    const res = await fetch(API_URL + "/posts/" + id);
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const getPosts = async (): Promise<PostInterface[]> => {
  try {
    const res = await fetch(API_URL + "/posts");
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

  let res = await fetch(API_URL + "/posts", requestOptions);
  return await res.json();
};

export const getComments = async (
  postId: string
): Promise<CommentInterface[]> => {
  try {
    const res = await fetch(API_URL + `/comments?post_id=${postId}`);
    return await res.json().then((response) => response.comments);
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
