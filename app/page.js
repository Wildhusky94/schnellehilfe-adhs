export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#2a2a2a",
        background:
          "linear-gradient(180deg, #fffaf7 0%, #fff 35%, #f9f4ff 100%)",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "72px 24px 56px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "#f7dfe8",
            color: "#a2345b",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          ADHS-Begleitung für Familien & Erwachsene
        </div>

        <h1
          style={{
            fontSize: "clamp(34px, 6vw, 64px)",
            lineHeight: 1.05,
            margin: "0 0 18px",
            color: "#8f234a",
            maxWidth: "760px",
          }}
        >
          schnelleHilfe-ADHS
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2.8vw, 24px)",
            lineHeight: 1.5,
            maxWidth: "760px",
            margin: "0 0 12px",
            color: "#4f4a54",
          }}
        >
          Denise Schäfer – mehr Ruhe, Klarheit und konkrete Unterstützung im
          Familienalltag.
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "720px",
            margin: "0",
            color: "#6b6470",
          }}
        >
          Wenn alles gleichzeitig laut wird, helfen keine langen Erklärungen,
          sondern schnelle, verständliche und alltagstaugliche Lösungen.
        </p>

        <div style={{ marginTop: "28px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="#kontakt"
            style={{
              textDecoration: "none",
              background: "#8f234a",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "14px",
              fontWeight: 700,
              boxShadow: "0 10px 24px rgba(143,35,74,0.22)",
            }}
          >
            Kontakt aufnehmen
          </a>

          <a
            href="#angebote"
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#8f234a",
              padding: "14px 22px",
              borderRadius: "14px",
              fontWeight: 700,
              border: "1px solid #ead6df",
            }}
          >
            Angebote ansehen
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              title: "Schnell erreichbar",
              text: "Direkte Hilfe statt langem Warten – besonders in belastenden Momenten.",
            },
            {
              title: "Praktische Lösungen",
              text: "Klare Schritte, die sich wirklich in euren Alltag integrieren lassen.",
            },
            {
              title: "Verständnis statt Druck",
              text: "Ein ruhiger Blick auf eure Situation – ohne Schuldgefühle und ohne Bewertungen.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid #f0e5eb",
                borderRadius: "22px",
                padding: "22px",
                boxShadow: "0 10px 24px rgba(80,50,90,0.06)",
              }}
            >
              <h3 style={{ margin: "0 0 10px", fontSize: "20px", color: "#7f2143" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, lineHeight: 1.65, color: "#5d5662" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="angebote"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "12px 24px 70px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            margin: "0 0 12px",
            color: "#8f234a",
          }}
        >
          Angebote
        </h2>
        <p
          style={{
            maxWidth: "720px",
            margin: "0 0 28px",
            lineHeight: 1.7,
            color: "#625b68",
            fontSize: "17px",
          }}
        >
          Klar, warm und unkompliziert. Du bekommst keine Theorie-Flut, sondern
          konkrete Hilfe, die zu deiner Situation passt.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              title: "Erstgespräch",
              duration: "ca. 60–90 Minuten",
              price: "90 €",
              text: "Wir klären gemeinsam deine Situation und schauen, wo du konkret Unterstützung brauchst.",
            },
            {
              title: "Einzelcoaching",
              duration: "ca. 60 Minuten",
              price: "70 €",
              text: "Individuelle Begleitung mit konkreten Lösungen für deinen Familienalltag oder dein eigenes System.",
            },
            {
              title: "Akuthilfe",
              duration: "flexibel",
              price: "nach Absprache",
              text: "Schnelle Unterstützung bei akuten Situationen, Überforderung oder wenn gerade alles zu viel wird.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "26px",
                border: "1px solid #efe3ea",
                boxShadow: "0 14px 32px rgba(89,48,82,0.08)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  background: "#faedf2",
                  color: "#9c3059",
                  fontSize: "13px",
                  fontWeight: 700,
                  marginBottom: "14px",
                }}
              >
                {item.duration}
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "24px",
                  color: "#7f2143",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "0 0 16px",
                  lineHeight: 1.7,
                  color: "#5e5863",
                  minHeight: "78px",
                }}
              >
                {item.text}
              </p>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#8f234a",
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 72px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #fff 0%, #fdf4f8 100%)",
            border: "1px solid #f0dee7",
            borderRadius: "28px",
            padding: "30px",
            boxShadow: "0 16px 36px rgba(101,59,97,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: "0 0 14px",
              color: "#8f234a",
            }}
          >
            Über mich
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: "840px",
              lineHeight: 1.8,
              color: "#5f5965",
              fontSize: "17px",
            }}
          >
            Ich begleite Eltern und Erwachsene im Alltag. Mir ist wichtig, dass
            du dich verstanden fühlst und schnell konkrete Hilfe bekommst –
            ruhig, klar und ohne unnötigen Druck.
          </p>
        </div>
      </section>

      <section
        id="kontakt"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            padding: "30px",
            border: "1px solid #efe4ea",
            boxShadow: "0 16px 36px rgba(90,56,88,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: "0 0 14px",
              color: "#8f234a",
            }}
          >
            Kontakt
          </h2>

          <p
            style={{
              margin: "0 0 22px",
              lineHeight: 1.7,
              color: "#635c68",
            }}
          >
            Du kannst dich gern melden, wenn du Fragen hast oder ein Gespräch
            vereinbaren möchtest.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            <div>📍 Krämerbergstr. 60, 66578 Schiffweiler</div>
            <div>📞 0177 4670001</div>
            <div>✉️ denise.schaefer94@yahoo.com</div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/491774670001"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          textDecoration: "none",
          background: "#25D366",
          color: "#fff",
          padding: "14px 18px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 12px 26px rgba(37,211,102,0.32)",
          zIndex: 1000,
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}