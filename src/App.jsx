import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Home from "./pages/Home";
import LawFirms from "./pages/Industry/LawFirms";
import Tradespeople from "./pages/Industry/Tradespeople";
import GPPractices from "./pages/Industry/GPPractices";
import VeterinaryClinics from "./pages/Industry/VeterinaryClinics";
import DentalPractices from "./pages/Industry/DentalPractices";
import Finance from "./pages/Industry/Finance";
import RealEstate from "./pages/Industry/RealEstate";
import Insurance from "./pages/Industry/Insurance";
import Recruitment from "./pages/Industry/Recruitment";

function App() {
  return (
    <>
     <ScrollToTop /> {/* Add this here */}
      {/* ✅ MOVE HERE */}
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries/law-firms" element={<LawFirms />} />
         <Route path="/industries/tradespeople" element={<Tradespeople />} />
         <Route path="/industries/gp-practices" element={<GPPractices />} />
         <Route path="/industries/veterinary-clinics" element={<VeterinaryClinics />} />
         <Route path="/industries/dental-practices" element={<DentalPractices />} />
         <Route path="/industries/finance" element={<Finance />} />
         <Route path="/industries/real-estate" element={<RealEstate />} />
         <Route path="/industries/insurance" element={<Insurance />} />
         <Route path="/industries/recruitment" element={<Recruitment />} />
      </Routes>

      {/* ✅ MOVE HERE */}
      <Footer />
    </>
  );
}

export default App;