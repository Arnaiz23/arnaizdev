export const EmailTemplate = ({ name, email, message }) => (
  <section
    style={{
      backgroundColor: "#3e4144",
      width: "100%",
      display: "grid",
      placeItems: "center",
      padding: "20px",
      color: "#fff",
    }}
  >
    <section
      style={{
        backgroundColor: "#626262",
        width: "90%",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "32px", color: "#fff" }}>
        New message from your portfolio
      </h1>
      <h2 style={{ fontSize: "24px", color: "#fff" }}>
        Message from {email} / {name}
      </h2>
      <div style={{ width: "100%", borderTop: "1px solid #fff" }}></div>
      <p style={{ fontSize: "20px", color: "#fff" }}>{message}</p>
    </section>
  </section>
)
