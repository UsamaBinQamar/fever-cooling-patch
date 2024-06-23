const ContactUs = () => (
  <section
    style={{
      padding: "4rem 2rem",
      backgroundColor: "#e9ecef",
      textAlign: "center",
    }}
    id="contact"
  >
    <h2
      style={{
        fontSize: "2.5rem",
        marginBottom: "1rem",
      }}
    >
      Contact Us
    </h2>
    <p
      style={{
        fontSize: "1.2rem",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      We would love to hear from you! Whether you have questions about our
      products, feedback, or need assistance, please feel free to reach out to
      us.
    </p>
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      Email: <a href="mailto:info@coolingpatch.com">info@coolingpatch.com</a>
    </div>
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      Phone:
      <a href="tel:+923004237703">+92 300 4237703</a>
    </div>
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      Address: 123 Cooling Patch Street, Cool City, CC 12345
    </div>
  </section>
);

export default ContactUs;
