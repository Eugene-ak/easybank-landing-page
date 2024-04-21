import Image from "next/image";
import logo from "@/public/images/logo.svg";
import styles from "../styles/home.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="logo" />
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
