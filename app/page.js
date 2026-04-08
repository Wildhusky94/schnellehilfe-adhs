"use client";

export default function Home() {
  const angebote = [
    {
      titel: "Erstgespräch",
      dauer: "ca. 60–90 Minuten",
      preis: "90 €",
      text: "Wir schauen gemeinsam auf Ihre Situation und klären, welche Unterstützung Ihnen oder Ihrer Familie gerade wirklich hilft.",
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
      text: "Schnelle Unterstützung, wenn gerade alles zu viel ist. Bei Absprache auch online möglich (z.B. Zoom).",
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
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap");

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Inter", Arial, sans-serif;
          background: linear-gradient(180deg, #fff1f4 0%, #fff 40%, #f2e7f1 100%);
          color: #3a2f34;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .page-shell {
          min-height: 100vh;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .topnav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 22px;
          padding-bottom: 14px;
        }

        .brand {
          font-weight: 800;
          font-size: 24px;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #355cff 0%, #7a4cff 45%, #c347d9 100%);
          background-size: 200% 200%;
          animation: gradientShift 7s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          font-size: 15px;
        }

        .nav-links a {
          text-decoration: none;
          color: #6d6570;
          font-weight: 700;
          transition: color 0.22s ease;
        }

        .nav-links a:hover {
          color: #6a46ff;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 32px;
          align-items: center;
          padding-top: 34px;
          padding-bottom: 78px;
        }

        .badge {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: #f3dfe3;
          color: #7a5f69;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 18px;
          box-shadow: 0 8px 24px rgba(161, 77, 93, 0.08);
        }

        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(42px, 7vw, 78px);
          line-height: 1.03;
          margin: 0 0 18px;
          color: #1a1a1a;
          letter-spacing: -1.7px;
          max-width: 780px;
        }

        .hero-subtitle {
          font-size: clamp(19px, 2.4vw, 28px);
          line-height: 1.55;
          max-width: 760px;
          margin: 0 0 18px;
          color: #4a434b;
        }

        .hero-text {
          font-size: 17px;
          line-height: 1.85;
          max-width: 720px;
          margin: 0 0 30px;
          color: #675f68;
        }

        .button-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary,
        .btn-whatsapp-inline {
          display: inline-block;
          text-decoration: none;
          border-radius: 999px;
          font-weight: 800;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #355cff 0%, #7a4cff 45%, #c347d9 100%);
          background-size: 200% 200%;
          animation: gradientShift 7s ease infinite;
          color: #fff;
          padding: 15px 24px;
          box-shadow: 0 16px 30px rgba(103, 76, 255, 0.24);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 34px rgba(103, 76, 255, 0.3);
        }

        .btn-secondary {
          background: #fff;
          color: #6c53d8;
          padding: 15px 24px;
          border: 1px solid #d9d0ff;
          box-shadow: 0 10px 24px rgba(100, 70, 95, 0.06);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          background: #faf8ff;
          border-color: #b39dff;
          box-shadow: 0 16px 30px rgba(100, 70, 95, 0.1);
        }

        .hero-card-wrap {
          min-height: 470px;
          border-radius: 34px;
          background: linear-gradient(145deg, #355cff 0%, #7a4cff 50%, #c347d9 100%);
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          box-shadow: 0 28px 62px rgba(102, 84, 190, 0.22);
          padding: 16px;
        }

        .hero-card-inner {
          height: 100%;
          min-height: 438px;
          border-radius: 26px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.28);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .hero-card-inner img {
          width: 100%;
          height: 100%;
          max-width: 360px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 14px 30px rgba(60, 30, 120, 0.2));
        }

        .section {
          padding-bottom: 82px;
        }

        .section-intro {
          margin-bottom: 28px;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(34px, 5vw, 54px);
          margin: 0 0 10px;
          color: #1a1a1a;
          letter-spacing: -1px;
        }

        .section-text {
          margin: 0;
          max-width: 760px;
          line-height: 1.85;
          color: #655f69;
          font-size: 17px;
        }

        .angebote-grid,
        .kontakt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 22px;
        }

        .angebot-card,
        .kontakt-card {
          background: #fff;
          border: 1px solid #ead0d8;
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 16px 36px rgba(95, 65, 95, 0.08);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .angebot-card:hover,
        .kontakt-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 46px rgba(143, 85, 115, 0.14);
        }

        .angebot-badge {
          display: inline-block;
          margin-bottom: 14px;
          padding: 9px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #355cff 0%, #7a4cff 45%, #c347d9 100%);
          background-size: 200% 200%;
          animation: gradientShift 7s ease infinite;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          box-shadow: 0 10px 22px rgba(103, 76, 255, 0.18);
        }

        .angebot-title,
        .kontakt-title {
          margin: 0 0 14px;
          font-size: 22px;
          color: #1a1a1a;
          font-weight: 800;
        }

        .angebot-text,
        .kontakt-text {
          margin: 0 0 18px;
          line-height: 1.8;
          color: #655f69;
        }

        .angebot-preis {
          font-size: 38px;
          font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #355cff 0%, #7a4cff 45%, #c347d9 100%);
          background-size: 200% 200%;
          animation: gradientShift 7s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hilfe-box,
        .about-box {
          background: linear-gradient(135deg, #fff 0%, #fcf0f4 100%);
          border: 1px solid #ead0d8;
          border-radius: 34px;
          padding: 34px;
          box-shadow: 0 18px 42px rgba(122, 76, 112, 0.08);
        }

        .hilfe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .hilfe-item {
          background: #fff;
          border: 1px solid #efd8e1;
          border-radius: 20px;
          padding: 18px;
          color: #4b4349;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(100, 70, 100, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hilfe-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 30px rgba(100, 70, 100, 0.1);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          align-items: center;
        }

        .about-text {
          margin: 0;
          line-height: 1.9;
          color: #5d5662;
          font-size: 17px;
        }

        .about-subbox {
          margin-top: 24px;
          padding: 22px;
          background: #fff8fa;
          border: 1px solid #ead0d8;
          border-radius: 22px;
        }

        .about-subtitle {
          margin: 0 0 10px;
          color: #1a1a1a;
          font-size: 22px;
          font-weight: 800;
        }

        .about-image img {
          width: 100%;
          max-width: 320px;
          height: 430px;
          object-fit: cover;
          object-position: center top;
          border-radius: 26px;
          display: block;
          box-shadow: 0 18px 40px rgba(133, 88, 115, 0.14);
          margin-left: auto;
        }

        .kontakt-icon {
          font-size: 26px;
          margin-bottom: 14px;
        }

        .kontakt-text {
          white-space: pre-line;
          margin: 0;
        }

        .cta-box {
          border-radius: 34px;
          padding: 40px 34px;
          background: linear-gradient(135deg, #355cff 0%, #7a4cff 45%, #c347d9 100%);
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          color: #fff;
          box-shadow: 0 30px 62px rgba(98, 77, 190, 0.24);
        }

        .cta-title {
          margin: 0 0 12px;
          font-family: "Playfair Display", serif;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.12;
        }

        .cta-text {
          margin: 0 0 22px;
          max-width: 760px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.94);
          font-size: 17px;
        }

        .btn-whatsapp-inline {
          background: #fff;
          color: #684eff;
          padding: 14px 22px;
        }

        .btn-whatsapp-inline:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(255, 255, 255, 0.16);
        }

        .whatsapp-float {
          position: fixed;
          right: 18px;
          bottom: 18px;
          text-decoration: none;
          background: #25d366;
          color: #fff;
          padding: 14px 18px;
          border-radius: 999px;
          font-weight: 700;
          box-shadow: 0 14px 28px rgba(37, 211, 102, 0.3);
          z-index: 1000;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .whatsapp-float:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(37, 211, 102, 0.36);
        }

        @media (max-width: 900px) {
          .hero,
          .about-grid {
            grid-template-columns: 1fr;
          }

          .hero-card-wrap {
            min-height: auto;
          }

          .hero-card-inner {
            min-height: 340px;
          }

          .hero-card-inner img {
            max-width: 280px;
          }

          .about-image img {
            margin: 0 auto;
            max-width: 360px;
            height: 420px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .topnav {
            padding-top: 18px;
          }

          .hero {
            padding-top: 26px;
            padding-bottom: 56px;
          }

          .section {
            padding-bottom: 64px;
          }

          .hilfe-box,
          .about-box,
          .cta-box,
          .angebot-card,
          .kontakt-card {
            padding: 24px;
          }

          .button-row {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary,
          .btn-secondary,
          .btn-whatsapp-inline {
            text-align: center;
          }

          .nav-links {
            gap: 12px;
          }

          .whatsapp-float {
            right: 14px;
            bottom: 14px;
          }
        }
      `}</style>

      <main className="page-shell">
        <section className="container">
          <nav className="topnav">
            <div className="brand">schnelleHilfe-ADHS</div>

            <div className="nav-links">
              <a href="#angebote">Angebote</a>
              <a href="#hilfe">Wobei ich helfe</a>
              <a href="#uebermich">Über mich</a>
              <a href="#kontakt">Kontakt</a>
            </div>
          </nav>
        </section>

        <section className="container">
          <div className="hero">
            <div>
              <div className="badge">
                ADHS-Begleitung für Familien & Erwachsene
              </div>

              <h1 className="hero-title">
                Mehr Ruhe & Klarheit im Familienalltag
              </h1>

              <p className="hero-subtitle">
                Ich begleite Eltern und Erwachsene mit klarer, verständlicher und
                alltagstauglicher Unterstützung.
              </p>

              <p className="hero-text">
                Wenn alles gleichzeitig laut wird, helfen keine langen
                Erklärungen, sondern ruhige Orientierung, konkrete Schritte und
                schnelle Entlastung.
              </p>

              <div className="button-row">
                <a href="#kontakt" className="btn-primary">
                  Kontakt aufnehmen
                </a>
                <a href="#angebote" className="btn-secondary">
                  Angebote ansehen
                </a>
              </div>
            </div>

            <div>
              <div className="hero-card-wrap">
                <div className="hero-card-inner">
                  <img src="/logo.png" alt="Logo schnelleHilfe-ADHS" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="angebote" className="container section">
          <div className="section-intro">
            <h2 className="section-title">Angebote</h2>
            <p className="section-text">
              Klar, warm und unkompliziert. Sie bekommen keine Theorie-Flut,
              sondern konkrete Hilfe, die wirklich in Ihren Alltag passt.
            </p>
          </div>

          <div className="angebote-grid">
            {angebote.map((item) => (
              <div key={item.titel} className="angebot-card">
                <div className="angebot-badge">{item.dauer}</div>

                <h3 className="angebot-title">{item.titel}</h3>

                <p className="angebot-text">{item.text}</p>

                <div className="angebot-preis">{item.preis}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="hilfe" className="container section">
          <div className="hilfe-box">
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              Wobei ich helfe
            </h2>

            <div className="hilfe-grid">
              {hilfen.map((punkt) => (
                <div key={punkt} className="hilfe-item">
                  ✨ {punkt}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="uebermich" className="container section">
          <div className="about-box">
            <div className="about-grid">
              <div>
                <h2 className="section-title" style={{ marginBottom: 14 }}>
                  Über mich
                </h2>

                <p className="about-text">
                  Ich bin Denise Schäfer und begleite Groß und Klein im Alltag
                  mit ADHS. Mir ist wichtig, dass Sie sich verstanden fühlen und
                  schnell konkrete Hilfe bekommen – ohne komplizierte Theorien.
                </p>

                <div className="about-subbox">
                  <h3 className="about-subtitle">
                    Meine Erfahrungen & Qualifikationen
                  </h3>
                  <p className="about-text">
                    Ich bin gelernte Kinderpflegerin und ADHS-Coach und habe
                    mich gezielt in diesem Bereich weitergebildet. Mein Wissen
                    verbinde ich mit viel Erfahrung aus dem Alltag – genau das
                    hilft wirklich ins Handeln zu kommen.
                  </p>
                </div>
              </div>

              <div className="about-image">
                <img src="/profil.jpg.jfif" alt="Denise Schäfer" />
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="container" style={{ paddingBottom: 36 }}>
          <div className="section-intro">
            <h2 className="section-title">Kontakt</h2>
            <p className="section-text">
              Sie können sich gern melden, wenn Sie Fragen haben oder ein
              Gespräch vereinbaren möchten.
            </p>
          </div>

          <div className="kontakt-grid">
            {kontaktkarten.map((item) => (
              <div key={item.titel} className="kontakt-card">
                <div className="kontakt-icon">{item.icon}</div>
                <h3 className="kontakt-title">{item.titel}</h3>
                <p className="kontakt-text">{item.inhalt}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container" style={{ paddingTop: 34, paddingBottom: 100 }}>
          <div className="cta-box">
            <h2 className="cta-title">Sie müssen da nicht allein durch.</h2>

            <p className="cta-text">
              Wenn Sie sich mehr Ruhe, Klarheit und konkrete Unterstützung für
              Ihren Alltag wünschen, melden Sie sich gern bei mir.
            </p>

            <a
              href="https://wa.me/491774670001"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-inline"
            >
              Jetzt per WhatsApp schreiben
            </a>
          </div>
        </section>

        <a
          href="https://wa.me/491774670001"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}