import Image from "next/image";
import logo from "@/public/images/logo.svg";
import styles from "../styles/home.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button>Request Invite</button>
    </header>
  );
}
