import styles from "./Possibility.module.css";

const Possibility = () => {
  return (
    <div className={`${styles["gpt3__possibility"]} section__padding`}>
      <div className={styles["gpt3__possibility-image"]}>
        <img src="/images/Feature Image.png" alt="Enjoy Real World Techno" />
      </div>
      <div className={styles["gpt3__possibility-content"]}>
        <p className={styles["upper"]}>Request Early Access to Get Started</p>
        <h1>The possibilities are beyond your imagination</h1>
        <p className={styles["center"]}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className={styles["lower"]}>Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possibility;
