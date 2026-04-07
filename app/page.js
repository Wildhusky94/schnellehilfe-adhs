export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      
      <h1 style={{ color: "#7c3aed", fontSize: "2.5rem", marginBottom: "10px" }}>
        schnelleHilfe-ADHS
      </h1>
      
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Denise Schäfer<br />
        Mehr Ruhe & Klarheit im Familienalltag
      </p>

      <section style={{ marginBottom: "30px" }}>
        <h2>Angebote</h2>

        <div style={{ marginTop: "10px" }}>
          <strong>Erstgespräch</strong><br />
          60–90 Minuten<br />
          <strong>90 €</strong>
        </div>

        <div style={{ marginTop: "15px" }}>
          <strong>Einzelcoaching</strong><br />
          60 Minuten<br />
          <strong>70 €</strong>
        </div>

        <div style={{ marginTop: "15px" }}>
          <strong>Akuthilfe</strong><br />
          flexibel nach Absprache
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Über mich</h2>
        <p>
          Ich begleite Eltern und Erwachsene im Alltag. 
          Mir ist wichtig, dass Sie sich verstanden fühlen 
          und schnell konkrete Hilfe bekommen.
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          📍 Krämerbergstr. 60, 66578 Schiffweiler<br />
          📞 0177 4670001<br />
          ✉️ denise.schaefer94@yahoo.com
        </p>
      </section>

    </main>
  );
}