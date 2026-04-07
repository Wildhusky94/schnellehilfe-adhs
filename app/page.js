"use client";




export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "32px", color: "#e11d48" }}>
        schnelleHilfe-ADHS
      </h1>

      <p style={{ marginTop: "10px" }}>
        Denise Schäfer – Mehr Ruhe & Klarheit im Familienalltag
      </p>

      <section style={{ marginTop: "40px" }}>
        <h2>Angebote</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>Erstgespräch</h3>
          <p>ca. 60–90 Minuten</p>
          <p>90 €</p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Einzelcoaching</h3>
          <p>ca. 60 Minuten</p>
          <p>70 €</p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Akuthilfe</h3>
          <p>flexibel</p>
          <p>nach Absprache</p>
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Kontakt</h2>
        <p>📍 Krämerbergstr. 60, 66578 Schiffweiler</p>
        <p>📞 0177 4670001</p>
        <p>📧 denise.schaefer94@yahoo.com</p>
      </section>
    </main>
  );
}