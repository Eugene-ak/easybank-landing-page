import styles from "../styles/home.module.scss";
import Logo from "./Logo";
import MediaIcons from "./MediaIcons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div id="icons">
        <Logo />
        <MediaIcons />
      </div>

      <div id="links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div id="copyright">
        <button>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>

      <div id="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eugene Amedior</a>.
      </div>
    </footer>
  );
}
