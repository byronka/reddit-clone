import PostInterface from "./PostInterface";

const PostList = ({ posts }: { posts: PostInterface[] }) => {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
