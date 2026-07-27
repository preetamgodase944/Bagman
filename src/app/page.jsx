import Hero from "../components/Hero/Hero";
import Divisions from "../components/Divisions/Divisions";
import Products from "../components/Products/Products";
import WhyGsia from "../components/WhyGsia/WhyGsia";
import Training from "../components/Training/Training";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Divisions />
      <Products />
      <WhyGsia />
      <Training />
      <Contact />
    </main>
  );
}
