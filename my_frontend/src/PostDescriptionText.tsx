import { useState } from "react";

interface PostDescriptionTextProps {
  description: string;
  onSaveSubmit: Function;
}

const PostDescriptionText = (props: PostDescriptionTextProps) => {
  const [value, setValue] = useState(props.description);
  const [isEditable, setIsEditable] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onSaveButtonClick = () => {
    props.onSaveSubmit(value);
    setIsEditable(false);
  };

  const Editable = (
    <div>
      <textarea onChange={onChange} value={value}></textarea>
      <button onClick={onSaveButtonClick}>Save</button>
    </div>
  );

  const NonEditable = (
    <div>
      <p>{props.description}</p>
      <button onClick={() => setIsEditable(true)}>Edit</button>
    </div>
  );

  if (isEditable) {
    return Editable;
  } else {
    return NonEditable;
  }
};

export default PostDescriptionText;
