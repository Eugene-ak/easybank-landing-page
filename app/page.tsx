import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Virtues from "./components/Virtues";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Virtues />
      <Articles />
      <Footer />
    </main>
  );
}
