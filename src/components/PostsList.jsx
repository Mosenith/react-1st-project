import Post from "./Post";
import styles from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="Kimmy" text="Kimmy has 3 color!" />
      <Post author="Mini" text="Mini is the calmest!" />
      <Post author="Hockeye" text="Mini is the youngest!" />
    </ul>
  );
}

export default PostsList;
