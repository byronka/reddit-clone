import React, { SyntheticEvent, useState } from "react";

const PostForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

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
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, description: description }),
    };
    fetch("http://localhost:3000/posts", requestOptions)
      .then((response) => response.json())
      .then(() => {
        setSuccess(true);
      });
  };

  const successBox = success ? <div>Success</div> : <div></div>;
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
      {successBox}
    </>
  );
};

export default PostForm;

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
