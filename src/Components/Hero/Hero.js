import React from "react";
import "./Hero.scss";
import bg from "../../assets/hero-bcg.jpeg";
import bg2 from "../../assets/hero-bcg-2.jpeg";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>Design Your Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="/products">
          <CustomButton large>Shop now</CustomButton>
        </Link>
      </div>
      <div className="hero__right">
        <img src={bg} alt="background image" className="hero__right-img1" />
        <img src={bg2} alt="background image 2" className="hero__right-img2" />
      </div>
    </div>
  );
}

export default Hero;
