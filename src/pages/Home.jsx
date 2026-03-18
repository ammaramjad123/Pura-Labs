import Hero from "../components/Hero";
import Industries from "../components/Industries";
import Navbar from "../components/Navbar";
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
    </>
  );
}