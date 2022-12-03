import Feature from "./Feature";
import styles from "./gpt3.module.css";
import LowerFeature from "./LowerFeature";

const WhatIsGPT3 = () => {
  return (
    <div className={`${styles["gpt3__whatgpt3"]} section__margin`}>
      <div className={styles["gpt3__whatgpt3-feature"]}>
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className={styles["gpt3__whatgpt3-heading"]}>
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className={styles["gpt3__whatgpt3-container"]}>
        <LowerFeature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <LowerFeature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <LowerFeature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatIsGPT3;
