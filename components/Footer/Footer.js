import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles["gpt3__footer"]} section__padding`}>
      <div className={styles["gpt3__footer-heading"]}>
        <h1>Do you want to step in to the future before others</h1>
      </div>

      <button>Request Early Access</button>

      <div className={styles["gpt3__footer-links"]}>
        <div className={styles["gpt3__footer-main_link"]}>
          <img src="/images/logo.png" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>

        <div className={styles["gpt3__footer-links_div"]}>
          <h1>Links</h1>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className={styles["gpt3__footer-links_div"]}>
          <h1>Company</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Popcy</p>
          <p>Contact</p>
        </div>

        <div className={styles["gpt3__footer-links_div"]}>
          <h1>Get In Touch</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className={styles["gpt3__footer-copyright"]}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
