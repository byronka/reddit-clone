// interact with the API
import PostInterface from "./PostInterface";
import CommentInterface from "./CommentInterface";

const API_URL = "http://localhost:3000";

// get request:

export const getPosts = async (): Promise<PostInterface[]> => {
  return getData("/posts", []);
};

export const getComments = async (id: string): Promise<CommentInterface[]> => {
  return getData(`/comments?post_id=${id}`, []);
};

export const getPost = async (id: string): Promise<PostInterface> => {
  return getData(`/posts/${id}`, {
    id: "did not find",
    name: "did not find",
    description: "did not find",
  });
};

// export const fetchData = async (path: string) => {
//   const res = await fetch(API_URL + path);
//   return await res.json();
// };

// export const error = async (err: *) => {
//   if (err instanceof TypeError) {
//     if (err.message === "Failed to fetch") {
//       alert("failed to fetch - is the server down?");
//     }
//   } else {
//     console.log("failed during request: " + err);
//   }
// };

// export const getPost = async (
//   id: string
// ): Promise<PostInterface | PostNotFound> => {
//   try {
//     return fetchData("/posts" + id);
//   } catch (err: *) {
//     error(err);
//     return { id, message: err.message };
//   }
// };

export const getData = async <T>(
  fullPath: string,
  errorReturnValue: T
): Promise<T> => {
  try {
    const res = await fetch(API_URL + fullPath);
    return await res.json();
  } catch (err: *) {
    if (err instanceof TypeError) {
      if (err.message === "Failed to fetch") {
        alert("failed to fetch - is the server down?");
      }
    } else {
      console.log("failed during request: " + err);
    }
    return errorReturnValue;
  }
};

// export const getComments = async (
//   postId: string
// ): Promise<CommentInterface[]> => {
//   try {
//     const res = await fetch(API_URL + `/comments?post_id=${postId}`);
//     return await res.json();
//   } catch (err) {
//     if (err instanceof TypeError) {
//       if (err.message === "Failed to fetch") {
//         alert("failed to fetch - is the server down?");
//       }
//     } else {
//       console.log("failed during request: " + err);
//     }
//     return [];
//   }
// };

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

export const updatePostDescription = async (
  postId: string,
  description: string
): Promise<Boolean> => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ post_id: postId, description: description }),
  };

  let res = await fetch(API_URL + "/posts/" + postId, requestOptions);
  return res.status === 204;
};

export const createComment = async (
  value: string,
  postId: string
): Promise<{ success: boolean; id: string }> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value, post_id: postId }),
  };

  let res = await fetch(API_URL + "/comments", requestOptions);
  return await res.json();
};
