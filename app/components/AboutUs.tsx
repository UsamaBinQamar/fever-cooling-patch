import React from "react";

const AboutUs = () => {
  return (
    <div id="about">
      {" "}
      <div
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f1f1f1",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          About Us
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          At Cooling Patch, we are dedicated to providing innovative and
          effective solutions for everyday discomfort. Our cooling patches are
          designed to offer instant relief from headaches, fevers, and muscle
          pain. With a commitment to quality and customer satisfaction, we
          strive to improve the well-being of our users through our advanced
          products. Experience the soothing power of our cooling patches and
          discover a new level of comfort.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
