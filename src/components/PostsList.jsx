import { useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [enteredText, setEnterText] = useState("");
  const [enteredAuthor, setEnterAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnterText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnterAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} text={enteredText} />
        <Post author="Mini" text="Mini is the calmest!" />
        <Post author="Hockeye" text="Mini is the youngest!" />
      </ul>
    </>
  );
}

export default PostsList;
