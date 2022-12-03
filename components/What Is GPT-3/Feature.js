import styles from "./Feature.module.css";

const Feature = (props) => {
  const { title, text } = props;

  return (
    <div className={styles["gpt3__whatgpt3-features"]}>
      <div className={styles["gpt3__whatgpt3-features_title"]}>
        <div />
        <h1>{title}</h1>
      </div>

      <div className={styles["gpt3__whatgpt3-features_text"]}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
