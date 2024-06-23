import Link from "next/link";

const Navbar = () => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#023047",
    }}
  >
    <div>
      <a
        style={{
          margin: "0 1rem",
          cursor: "pointer",
          textDecoration: "none",
          color: "#8ecae6",
        }}
      >
        Cooling Patch
      </a>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <a
        style={{
          margin: "0 1rem",
          cursor: "pointer",
          textDecoration: "none",
          color: "#8ecae6",
        }}
      >
        Home{" "}
      </a>

      <a
        style={{
          margin: "0 1rem",
          cursor: "pointer",
          textDecoration: "none",
          color: "#8ecae6",
        }}
      >
        About
      </a>
      <a
        style={{
          margin: "0 1rem",
          cursor: "pointer",
          textDecoration: "none",
          color: "#8ecae6",
        }}
      >
        Contact
      </a>
      <a
        style={{
          margin: "0 1rem",
          cursor: "pointer",
          textDecoration: "none",
          color: "#8ecae6",
        }}
      >
        Privacy Policy
      </a>
    </div>
    <div>
      <a
        href="tel:+923004237703"
        style={{ margin: "0 1rem", color: "#8ecae6" }}
      >
        +92 300 4237703{" "}
      </a>

      <a
        href="mailto:info@coolingpatch.com"
        style={{ margin: "0 1rem", color: "#8ecae6" }}
      >
        info@coolingpatch.com
      </a>
    </div>
  </nav>
);

export default Navbar;
