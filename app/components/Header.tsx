import styles from "../styles/home.module.scss";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
      <button>Request Invite</button>
    </header>
  );
}
