import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles["gpt3__header"]} section__padding`}>
      <div className={styles["gpt3__header-content"]}>
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className={styles["gpt3__header-content__input"]}>
          <input type={"email"} placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>

        <div className={styles["gpt3__header-content__people"]}>
          <Image
            src="/images/people.png"
            alt="A group of people who likes GPT-3"
            height={38}
            width={181.79}
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className={styles["gpt3__header-visual"]}>
        <img
          src="/images/header-illustration.png"
          alt="Visualizing the power of AI"
        />
      </div>
    </div>
  );
};

export default Header;
