import styles from "./Feature.module.css";

const Feature = (props) => {
  const { title, text } = props;

  return (
    <div className={styles["gpt3__features-feature"]}>
      <div className={styles["gpt3__features-feature_title"]}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles["gpt3__features-feature_text"]}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
