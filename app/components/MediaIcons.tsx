import Image from "next/image";
import facebook from "@/public/images/icon-facebook.svg";
import youtube from "@/public/images/icon-youtube.svg";
import twitter from "@/public/images/icon-twitter.svg";
import pinterest from "@/public/images/icon-pinterest.svg";
import instagram from "@/public/images/icon-instagram.svg";

export default function MediaIcons() {
  return (
    <div>
      <Image src={facebook} alt="facebook" />
      <Image src={youtube} alt="youtube" />
      <Image src={twitter} alt="twitter" />
      <Image src={pinterest} alt="pinterest" />
      <Image src={instagram} alt="instagram" />
    </div>
  )
}
