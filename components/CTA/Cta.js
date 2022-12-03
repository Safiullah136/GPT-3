import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <div className={styles["gpt3__cta"]}>
      <div className={styles["gpt3__cta-heading"]}>
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.</h1>
      </div>
      <div className={styles["gpt3__cta-button"]}>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
