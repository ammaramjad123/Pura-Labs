import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Industries from "../components/Industries";
import IndustriesGrid from "../components/IndustriesGrid";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Problems from "../components/Problems";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-20"></div>
      <Hero/>
      <Problems/>
      <WhyChoose/>
      <Industries/>
      <IndustriesGrid/>
      <HowItWorks/>
      <Pricing/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}