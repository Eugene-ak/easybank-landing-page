import Image from "next/image";
import styles from "../styles/home.module.scss";
import desktopHero from "@/public/images/bg-intro-desktop.svg";
import mockups from "@/public/images/image-mockups.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1>Next generation digital banking</h1>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button>Request Invite</button>
      </div>
      <Image
        className={styles.hero_bg}
        src={desktopHero}
        alt="hero-background"
      />
      <Image className={styles.mockup} src={mockups} alt="mockups" />
    </section>
  );
}
