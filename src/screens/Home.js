import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div m-5>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
