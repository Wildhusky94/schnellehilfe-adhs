"use client";

export default function Home() {
  const angebote = [
    {
      titel: "Erstgespräch",
      dauer: "ca. 60–90 Minuten",
      preis: "90 €",
      text: "Wir schauen gemeinsam auf deine Situation und klären, welche Unterstützung dir oder deiner Familie gerade wirklich hilft.",
    },
    {
      titel: "Einzelcoaching",
      dauer: "ca. 60 Minuten",
      preis: "70 €",
      text: "Konkrete Begleitung mit alltagstauglichen Lösungen für mehr Ruhe, Struktur und weniger Überforderung.",
    },
    {
      titel: "Akuthilfe",
      dauer: "flexibel",
      preis: "nach Absprache",
      text: "Schnelle Unterstützung, wenn gerade alles zu viel ist und du sofort Klarheit, Entlastung und Orientierung brauchst.",
    },
  ];

  const hilfen = [
    "Überforderung im Familienalltag",
    "ADHS bei Kindern besser verstehen",
    "Mehr Struktur ohne ständigen Druck",
    "Ruhiger mit Konflikten umgehen",
    "Konkrete Soforthilfe in stressigen Phasen",
    "Begleitung für Erwachsene mit ADHS",
  ];

  const kontaktkarten = [
    {
      titel: "Adresse",
      inhalt: "Krämerbergstr. 60\n66578 Schiffweiler",
      icon: "📍",
    },
    {
      titel: "Telefon",
      inhalt: "0177 4670001",
      icon: "📞",
    },
    {
      titel: "E-Mail",
      inhalt: "denise.schaefer94@yahoo.com",
      icon: "✉️",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#2f2a31",
        background:
          "linear-gradient(180deg, #fff8f7 0%, #fffdfc 38%, #f7f0f8 100%)",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px 10px",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: "24px",
              color: "#9d4f68",
              letterSpacing: "-0.5px",
            }}
          >
            schnelleHilfe-ADHS
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              fontSize: "15px",
            }}
          >
            <a href="#angebote" style={navLink}>
              Angebote
            </a>
            <a href="#hilfe" style={navLink}>
              Wobei ich helfe
            </a>
            <a href="#uebermich" style={navLink}>
              Über mich
            </a>
            <a href="#kontakt" style={navLink}>
              Kontakt
            </a>
          </div>
        </nav>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 20px 72px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "#f5e3e8",
                color: "#9b5067",
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "18px",
              }}
            >
              ADHS-Begleitung für Familien & Erwachsene
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 78px)",
                lineHeight: 1.02,
                margin: "0 0 18px",
                color: "#9d4f68",
                letterSpacing: "-1.8px",
                maxWidth: "760px",
              }}
            >
              Mehr Ruhe & Klarheit im Familienalltag
            </h1>

            <p
              style={{
                fontSize: "clamp(19px, 2.5vw, 28px)",
                lineHeight: 1.5,
                maxWidth: "780px",
                margin: "0 0 18px",
                color: "#4b4650",
              }}
            >
              Denise Schäfer begleitet Eltern und Erwachsene mit klarer,
              verständlicher und alltagstauglicher Unterstützung.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.85,
                maxWidth: "720px",
                margin: "0 0 28px",
                color: "#6a6470",
              }}
            >
              Wenn alles gleichzeitig laut wird, helfen keine langen
              Erklärungen, sondern ruhige Orientierung, konkrete Schritte und
              schnelle Entlastung.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a href="#kontakt" style={primaryBtn}>
                Kontakt aufnehmen
              </a>
              <a href="#angebote" style={secondaryBtn}>
                Angebote ansehen
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                position: "relative",
                minHeight: "480px",
                borderRadius: "34px",
                overflow: "hidden",
                background:
                  "linear-gradient(145deg, #d898b0 0%, #b26da2 45%, #7f6fd9 100%)",
                boxShadow: "0 24px 60px rgba(141, 84, 120, 0.22)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "radial-gradient(circle at top left, rgba(255,255,255,0.38), transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.18), transparent 30%)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  height: "100%",
                  minHeight: "448px",
                  borderRadius: "26px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(3px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <img
                  src="/profil.jpg"
                  alt="Denise Schäfer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="angebote"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div style={sectionIntroWrap}>
          <h2 style={sectionTitle}>Angebote</h2>
          <p style={sectionText}>
            Klar, warm und unkompliziert. Du bekommst keine Theorie-Flut,
            sondern konkrete Hilfe, die wirklich in deinen Alltag passt.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {angebote.map((item) => (
            <div
              key={item.titel}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 46px rgba(143, 85, 115, 0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 14px 34px rgba(143, 85, 115, 0.08)";
              }}
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid #f0dfe6",
                borderRadius: "28px",
                padding: "28px",
                boxShadow: "0 14px 34px rgba(143, 85, 115, 0.08)",
                transition: "all 0.22s ease",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "14px",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  background: "#f7e8ee",
                  color: "#9d4f68",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                {item.dauer}
              </div>

              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: "22px",
                  color: "#8e4760",
                }}
              >
                {item.titel}
              </h3>

              <p
                style={{
                  margin: "0 0 18px",
                  lineHeight: 1.8,
                  color: "#655f69",
                  minHeight: "112px",
                }}
              >
                {item.text}
              </p>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: 800,
                  color: "#a05068",
                  letterSpacing: "-0.5px",
                }}
              >
                {item.preis}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="hilfe"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px 84px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #fff 0%, #fdf4f8 100%)",
            border: "1px solid #f0dde5",
            borderRadius: "34px",
            padding: "34px",
            boxShadow: "0 18px 42px rgba(122, 76, 112, 0.08)",
          }}
        >
          <h2 style={{ ...sectionTitle, marginBottom: "18px" }}>
            Wobei ich helfe
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {hilfen.map((punkt) => (
              <div
                key={punkt}
                style={{
                  background: "#fff",
                  border: "1px solid #f2e3e8",
                  borderRadius: "20px",
                  padding: "18px 18px",
                  color: "#5a5460",
                  fontWeight: 600,
                  boxShadow: "0 10px 24px rgba(100, 70, 100, 0.05)",
                }}
              >
                ✨ {punkt}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="uebermich"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px 84px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.86)",
            border: "1px solid #f2e1e8",
            borderRadius: "34px",
            padding: "36px",
            boxShadow: "0 18px 42px rgba(120, 82, 112, 0.08)",
          }}
        >
          <h2 style={{ ...sectionTitle, marginBottom: "14px" }}>Über mich</h2>
          <p
            style={{
              margin: 0,
              maxWidth: "920px",
              lineHeight: 1.9,
              color: "#5d5662",
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
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 20px 36px",
        }}
      >
        <div style={sectionIntroWrap}>
          <h2 style={sectionTitle}>Kontakt</h2>
          <p style={sectionText}>
            Du kannst dich gern melden, wenn du Fragen hast oder ein Gespräch
            vereinbaren möchtest.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {kontaktkarten.map((item) => (
            <div
              key={item.titel}
              style={{
                background: "#fff",
                borderRadius: "28px",
                border: "1px solid #f0e0e6",
                padding: "28px",
                boxShadow: "0 16px 36px rgba(95, 65, 95, 0.08)",
              }}
            >
              <div style={{ fontSize: "26px", marginBottom: "14px" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "22px",
                  color: "#964d65",
                }}
              >
                {item.titel}
              </h3>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                  color: "#5d5762",
                  whiteSpace: "pre-line",
                }}
              >
                {item.inhalt}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "34px 20px 100px",
        }}
      >
        <div
          style={{
            borderRadius: "34px",
            padding: "38px 34px",
            background:
              "linear-gradient(135deg, #c77899 0%, #9d5cb9 55%, #6f79da 100%)",
            color: "#fff",
            boxShadow: "0 28px 60px rgba(122, 77, 140, 0.2)",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.1,
            }}
          >
            Du musst da nicht allein durch.
          </h2>

          <p
            style={{
              margin: "0 0 22px",
              maxWidth: "760px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.92)",
              fontSize: "17px",
            }}
          >
            Wenn du dir mehr Ruhe, Klarheit und konkrete Unterstützung für euren
            Alltag wünschst, melde dich gern bei mir.
          </p>

          <a
            href="https://wa.me/491774670001"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              textDecoration: "none",
              background: "#fff",
              color: "#9a4f8b",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: 800,
            }}
          >
            Jetzt per WhatsApp schreiben
          </a>
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
          boxShadow: "0 14px 28px rgba(37,211,102,0.3)",
          zIndex: 1000,
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}

const navLink = {
  textDecoration: "none",
  color: "#7d6672",
  fontWeight: 700,
};

const primaryBtn = {
  textDecoration: "none",
  background: "#b85c6b",
  color: "#fff",
  padding: "15px 24px",
  borderRadius: "999px",
  fontWeight: 800,
  boxShadow: "0 14px 28px rgba(184,92,107,0.2)",
};

const secondaryBtn = {
  textDecoration: "none",
  background: "#fff",
  color: "#9d4f68",
  padding: "15px 24px",
  borderRadius: "999px",
  fontWeight: 800,
  border: "1px solid #ecd9df",
};

const sectionIntroWrap = {
  marginBottom: "28px",
};

const sectionTitle = {
  fontSize: "clamp(34px, 5vw, 54px)",
  margin: "0 0 10px",
  color: "#9d4f68",
  letterSpacing: "-1px",
};

const sectionText = {
  margin: 0,
  maxWidth: "760px",
  lineHeight: 1.8,
  color: "#655f69",
  fontSize: "17px",
};