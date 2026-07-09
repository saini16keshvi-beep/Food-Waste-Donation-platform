import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import  About  from "../components/About";
import Feature from "../components/Feature";
import HowItWorks from "../components/HowItWorks";
import DonateFood from "../components/DonateFood";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Products from "../components/Products";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <HowItWorks />
      <DonateFood />
      <Products />
      <Contact />
      <Footer />
      
    </>
  );
}

export default Home;