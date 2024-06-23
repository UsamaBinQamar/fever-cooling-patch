import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const page = () => {
  return (
    <div style={{ backgroundColor: "#8ecae6" }}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
