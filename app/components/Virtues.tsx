import Image from "next/image";
import online from "@/public/images/icon-online.svg";
import budgeting from "@/public/images/icon-budgeting.svg";
import onboarding from "@/public/images/icon-onboarding.svg";
import api from "@/public/images/icon-api.svg";
import styles from "../styles/home.module.scss";

export default function Virtues() {
  return (
    <section className={styles.virtues}>
      <h2>Why choose Easybank?</h2>

      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div>
        <Image src={online} alt="" />
        <h3>Online Banking</h3>
        <p>
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>

      <div>
        <Image src={budgeting} alt="" />
        <h3>Simple Budgeting</h3>
        <p>
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </p>
      </div>

      <div>
        <Image src={onboarding} alt="" />
        <h3>Fast Onboarding</h3>
        <p>
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>

      <div>
        <Image src={api} alt="" />
        <h3>Open API</h3>
        <p>
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </section>
  );
}
