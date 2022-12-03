import styles from "./LowerFeature.module.css";

const LowerFeature = (props) => {
  const { title, text } = props;

  return (
    <div className={styles["gpt3__whatgpt3-feature"]}>
      <div className={styles["gpt3__whatgpt3-feature_title"]}>
        <div />
        <h1>{title}</h1>
      </div>

      <div className={styles["gpt3__whatgpt3-feature_text"]}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LowerFeature;
