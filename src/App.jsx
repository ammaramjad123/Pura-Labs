import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Home from "./pages/Home";
import LawFirms from "./pages/Industry/LawFirms";
import Tradespeople from "./pages/Industry/Tradespeople";
import GPPractices from "./pages/Industry/GPPractices";

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
      </Routes>

      {/* ✅ MOVE HERE */}
      <Footer />
    </>
  );
}

export default App;