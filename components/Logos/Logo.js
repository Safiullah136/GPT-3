import styles from "./Logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={`${styles["gpt3__logos"]} section__padding`}>
      <div>
        <Image
          src="/images/google.png"
          alt="Google"
          width={71.1}
          height={24.15}
        />
      </div>
      <div>
        <Image
          src="/images/slack.png"
          alt="Slack"
          width={71.1}
          height={24.15}
        />
      </div>
      <div>
        <Image
          src="/images/atlassian.png"
          alt="Atlassian"
          width={71.1}
          height={24.15}
        />
      </div>
      <div>
        <Image
          src="/images/dropbox.png"
          alt="Dropbox"
          width={71.1}
          height={24.15}
        />
      </div>
      <div>
        <Image
          src="/images/shopify.png"
          alt="Shopify"
          width={71.1}
          height={24.15}
        />
      </div>
    </div>
  );
};

export default Logo;
