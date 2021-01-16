import React from "react";
import "./Story.scss";
import image from "../../assets/hero-bcg.jpeg";

function Story() {
  return (
    <div className="story">
      <img src={image} alt="Story" />
      <div className="story__info">
        <h1>Our Story</h1>
        <div className="story__underline"></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </div>
    </div>
  );
}

export default Story;
