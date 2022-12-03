import styles from "./Blog.module.css";
import Post from "./Post";

const Blog = () => {
  return (
    <div className={`${styles["gpt3__blog"]} section__padding`}>
      <h1>
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className={styles["gpt3__blog-posts"]}>
        <div className={styles["gpt3__blog-main_post"]}>
          <Post src="/images/Foremost.png" />
        </div>
        <div className={styles["gpt3__blog-post"]}>
          <Post src="/images/First.png" />
          <Post src="/images/Third.png" />
          <Post src="/images/Second.png" />
          <Post src="/images/Fourth.png" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
