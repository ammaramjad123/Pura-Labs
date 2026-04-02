import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import IndustriesGrid from "../components/IndustriesGrid";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Problems from "../components/Problems";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <div className="mt-20"></div>

 <div id="hero">
      <Hero />
</div>

      <Problems />

      {/* ABOUT */}
      <div id="about">
        <WhyChoose />
      </div>

      <Industries />
      <IndustriesGrid />
     

      {/* PRICING */}
      <div id="pricing">
        <Pricing />
      </div>

      <FAQ />

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}