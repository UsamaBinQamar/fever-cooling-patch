import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f9fa",
        color: "#333",
      }}
    >
      &copy; {new Date().getFullYear()} Cooling Patch. All rights reserved.
    </footer>
  );
};

export default Footer;
