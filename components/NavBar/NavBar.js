import Image from "next/image";
import { useState } from "react";
import styles from "./NavBar.module.css";
import { RiCloseLine, RiMenu3Line, RiOp } from "react-icons/ri";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const MenuLinks = (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#openai">Open AI</a>
      </p>
      <p>
        <a href="#casestudies">Case Studies</a>
      </p>
      <p>
        <a href="#library">Library</a>
      </p>
    </>
  );

  return (
    <div className={styles["gpt3__navbar"]}>
      <div className={styles["gpt3__navbar-links"]}>
        <div className={styles["gpt3__navbar-links_logo"]}>
          <Image src="/images/logo.png" alt="GPT-3" width={63} height={17} />
        </div>
        <div className={styles["gpt3__navbar-links_container"]}>
          {MenuLinks}
        </div>
      </div>
      <div className={styles["gpt3__navbar-sign"]}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles["gpt3__navbar-menu"]}>
        {isMenuOpen ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
        {isMenuOpen && (
          <div
            className={`${styles["gpt3__navbar-menu_container"]} + ${styles["scale-up-center"]}`}
          >
            <div className={styles["gpt3__navbar-menu_container-links"]}>
              {MenuLinks}
              <div className={styles["gpt3__navbar-menu_container-links-sign"]}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
