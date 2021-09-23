import React, { SyntheticEvent, useState } from "react";

interface PostFormProps {
  createPost: Function;
}

const PostForm = (props: PostFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleDescriptionChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setDescription(event.currentTarget.value);
  };

  const submitData = (event: SyntheticEvent) => {
    event.preventDefault();
    props.createPost(name, description);
  };

  return (
    <>
      <form action="#" method="POST" onSubmit={submitData}>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          name="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="descriptionInput">Description</label>
        <input
          id="descriptionInput"
          name="descriptionInput"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />

        <button>Enter new post</button>
      </form>
    </>
  );
};

export default PostForm;
