import React, { SyntheticEvent, useState } from "react";

interface CommentFormProps {
  onCommentSubmit: Function;
}

const CommentForm = (props: CommentFormProps) => {
  const [value, setValue] = useState("");

  const handleCommentChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const submitData = (event: SyntheticEvent) => {
    event.preventDefault();
    props.onCommentSubmit(value);
  };

  return (
    <>
      <form action="#" method="POST" onSubmit={submitData}>
        <label htmlFor="commentInput">
          Comment:
          <input
            id="commentInput"
            name="commentInput"
            type="text"
            value={value}
            onChange={handleCommentChange}
          />
        </label>

        <button>Enter new comment</button>
      </form>
    </>
  );
};

export default CommentForm;
