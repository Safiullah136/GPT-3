import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles["gpt3__post"]} id='post'>
      <img src={props.src} alt="blog_image" />
      <div className={styles["gpt3__post-content"]}>
        <div>
          <p>Sep 26, 2021</p>
          <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Post;
