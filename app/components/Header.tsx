import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Header() {
  return (
    <header>
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
