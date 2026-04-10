export default function Impressum() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #faf7ff 0%, #ffffff 100%)",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            backgroundColor: "#f1e9ff",
            color: "#5b3cc4",
            fontWeight: "600",
            fontSize: "14px",
            marginBottom: "18px",
          }}
        >
          Rechtliche Angaben
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: "1.15",
            marginBottom: "14px",
            color: "#1f1637",
          }}
        >
          Impressum
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#4b445d",
            marginBottom: "32px",
            maxWidth: "700px",
          }}
        >
          Angaben gemäß § 5 TMG.
        </p>

        <section
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #eee7ff",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(91, 60, 196, 0.08)",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "18px",
              color: "#1f1637",
            }}
          >
            Anbieterin
          </h2>

          <p style={{ lineHeight: "1.8", color: "#3f3950", margin: 0 }}>
            Denise Schäfer
            <br />
            schnelleHilfe-ADHS
            <br />
            Krämerbergstr. 60
            <br />
            66578 Schiffweiler
          </p>
        </section>

        <section
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #eee7ff",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(91, 60, 196, 0.08)",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "18px",
              color: "#1f1637",
            }}
          >
            Kontakt
          </h2>

          <p style={{ lineHeight: "1.8", color: "#3f3950", margin: 0 }}>
            E-Mail: denise.schaefer94@yahoo.com
          </p>
        </section>

        <section
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #eee7ff",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(91, 60, 196, 0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "18px",
              color: "#1f1637",
            }}
          >
            Hinweis
          </h2>

          <p style={{ lineHeight: "1.8", color: "#3f3950", margin: 0 }}>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            kann ich jedoch keine Gewähr übernehmen.
          </p>
        </section>
      </div>
    </main>
  );
}
