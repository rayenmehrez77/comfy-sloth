import React from "react";
import Features from "../../Components/Features/Features";
import Fourniture from "../../Components/Fourniture/Fourniture";
import Hero from "../../Components/Hero/Hero";
import Newsletter from "../../Components/Newsletter/Newsletter";
import "./HomePage.scss";

function HomePage({ products }) {
  return (
    <main>
      <Hero />
      <Features products={products} />
      <Fourniture />
      <Newsletter />
    </main>
  );
}

export default HomePage;
