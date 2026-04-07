export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#3a3a3a",
        background:
          "linear-gradient(180deg, #fff6f7 0%, #fffaf8 38%, #f7f4ff 100%)",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "80px 24px 56px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "9px 16px",
            borderRadius: "999px",
            background: "#f3dfe3",
            color: "#a14d5d",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "18px",
            boxShadow: "0 6px 18px rgba(161,77,93,0.08)",
          }}
        >
          ADHS-Begleitung für Familien & Erwachsene
        </div>

        <h1
          style={{
            fontSize: "clamp(38px, 7vw, 72px)",
            lineHeight: 1.02,
            margin: "0 0 20px",
            color: "#a14d5d",
            letterSpacing: "-1px",
            maxWidth: "820px",
          }}
        >
          schnelleHilfe-ADHS
        </h1>

        <p
          style={{
            fontSize: "clamp(20px, 2.6vw, 28px)",
            lineHeight: 1.45,
            maxWidth: "850px",
            margin: "0 0 16px",
            color: "#4f4a54",
          }}
        >
          Denise Schäfer – mehr Ruhe, Klarheit und konkrete Unterstützung im
          Familienalltag.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "760px",
            margin: "0",
            color: "#655e68",
          }}
        >
          Wenn alles gleichzeitig laut wird, helfen keine langen Erklärungen,
          sondern verständliche, liebevolle und alltagstaugliche Lösungen.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#kontakt"
            style={{
              textDecoration: "none",
              background: "#b85c6b",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: 700,
              boxShadow: "0 14px 30px rgba(184,92,107,0.22)",
            }}
          >
            Kontakt aufnehmen
          </a>

          <a
            href="#angebote"
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#a14d5d",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: 700,
              border: "1px solid #edd8df",
              boxShadow: "0 8px 20px rgba(120,80,100,0.05)",
            }}
          >
            Angebote ansehen
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(160, 90, 110, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(160, 90, 110, 0.08)";
              }}
              style={{
                background: "#ffffff",
                border: "1px solid #f3dfe3",
                borderRadius: "18px",
                padding: "24px",
                boxShadow: "0 12px 30px rgba(160, 90, 110, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "22px",
                  color: "#a14d5d",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.7,
                  color: "#5d5662",
                  fontSize: "16px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="angebote"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "10px 24px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 46px)",
            margin: "0 0 12px",
            color: "#a14d5d",
          }}
        >
          Angebote
        </h2>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 0 30px",
            lineHeight: 1.8,
            color: "#655e68",
            fontSize: "17px",
          }}
        >
          Klar, warm und unkompliziert. Du bekommst keine Theorie-Flut,
          sondern konkrete Hilfe, die wirklich in deinen Alltag passt.
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
                padding: "28px",
                border: "1px solid #f1dfe7",
                boxShadow: "0 16px 36px rgba(101,59,97,0.08)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 13px",
                  borderRadius: "999px",
                  background: "#fbecf1",
                  color: "#a14d5d",
                  fontSize: "13px",
                  fontWeight: 700,
                  marginBottom: "15px",
                }}
              >
                {item.duration}
              </div>

              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "25px",
                  color: "#a14d5d",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "0 0 18px",
                  lineHeight: 1.75,
                  color: "#5e5863",
                  minHeight: "85px",
                }}
              >
                {item.text}
              </p>

              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  color: "#b85c6b",
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
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #fff 0%, #fdf2f6 100%)",
            border: "1px solid #f0dde5",
            borderRadius: "28px",
            padding: "34px",
            boxShadow: "0 16px 36px rgba(101,59,97,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 44px)",
              margin: "0 0 16px",
              color: "#a14d5d",
            }}
          >
            Über mich
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: "860px",
              lineHeight: 1.85,
              color: "#5f5965",
              fontSize: "17px",
            }}
          >
            Ich begleite Eltern und Erwachsene im Alltag. Mir ist wichtig, dass
            du dich verstanden fühlst und schnell konkrete Hilfe bekommst –
            ruhig, klar und ohne unnötigen Druck. Du musst nicht erst alles
            perfekt erklären können. Wir schauen gemeinsam, was gerade hilft.
          </p>
        </div>
      </section>

      <section
        id="kontakt"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            padding: "34px",
            border: "1px solid #efe1e8",
            boxShadow: "0 16px 36px rgba(90,56,88,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 44px)",
              margin: "0 0 14px",
              color: "#a14d5d",
            }}
          >
            Kontakt
          </h2>

          <p
            style={{
              margin: "0 0 22px",
              lineHeight: 1.75,
              color: "#635c68",
              fontSize: "17px",
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
              lineHeight: 1.75,
              color: "#4f4954",
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