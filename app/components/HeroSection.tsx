import React from "react";

const HeroSection = () => {
  const heroTitleStyle = {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#023047",
  };

  const heroSubtitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: "#023047",
  };

  const heroButtonStyle = {
    padding: "1rem 2rem",
    fontSize: "1rem",
    color: "#023047",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          background:
            'url("/hero-background.jpg") no-repeat center center/cover',
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={heroTitleStyle}>Stay Cool with Our Cooling Patch</h1>
        <p style={heroSubtitleStyle}>
          Experience instant relief from headaches and fevers
        </p>
        <a href="#features" style={heroButtonStyle}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
