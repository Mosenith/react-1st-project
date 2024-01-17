import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onAddPost }) {
  const [enteredText, setEnterText] = useState("");
  const [enteredAuthor, setEnterAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnterText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnterAuthor(event.target.value);
  }

  function submitHandler(event) {
    // prevent default of generating & sending an HTTP requests
    event.preventDefault();
    const postData = {
      text: enteredText,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
