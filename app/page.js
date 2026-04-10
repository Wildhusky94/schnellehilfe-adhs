"use client";

import { useEffect, useState } from "react";
import { HeartHandshake, Brain, Sparkles } from "lucide-react";
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 180);
    return () => clearTimeout(timer);
  }, []);

  const angebote = [
  {
    icon: HeartHandshake,
    title: "Erstgespräch",
    text: "Wir klären gemeinsam Ihre Situation und schauen, wo Sie konkret Unterstützung brauchen.",
    duration: "ca. 60–90 Minuten",
    price: "90 €"
  },
  {
    icon: Brain,
    title: "Einzelcoaching",
    text: "Individuelle Begleitung mit konkreten Lösungen für Ihren Familienalltag.",
    duration: "ca. 60 Minuten",
    price: "70 €"
  },
  {
    icon: Sparkles,
    title: "3er-Paket",
    text: "Ideal nach dem Erstgespräch: Drei Termine für mehr Klarheit und Struktur im Alltag.",
    duration: "3 Termine",
    price: "180 €"
  },
  {
    icon: Sparkles,
    title: "Akuthilfe",
    text: "Schnelle Unterstützung bei akuten Situationen oder Überforderung. Auch online möglich (z. B. Zoom).",
    duration: "flexibel",
    price: "nach Absprache"
  }
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

  const whatsappLink =
    "https://wa.me/491774670001?text=Hallo%20Denise,%20ich%20wei%C3%9F%20gerade%20nicht%20mehr%20so%20richtig%20weiter%20und%20w%C3%BCrde%20mir%20Unterst%C3%BCtzung%20w%C3%BCnschen.%20K%C3%B6nnen%20wir%20ein%20Erstgespr%C3%A4ch%20vereinbaren%3F";

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
          background: linear-gradient(180deg, #fff2f6 0%, #fff 40%, #f7edf8 100%);
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

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-shell {
          min-height: 100vh;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .page-shell.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(26px);
          animation: fadeUp 0.9s ease forwards;
        }

        .delay-1 {
          animation-delay: 0.08s;
        }

        .delay-2 {
          animation-delay: 0.16s;
        }

        .delay-3 {
          animation-delay: 0.24s;
        }

        .delay-4 {
          animation-delay: 0.32s;
        }

        .delay-5 {
          animation-delay: 0.4s;
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
          background: linear-gradient(135deg, #7a3ff2 0%, #a24cf3 40%, #d84cbf 75%, #ff5e8a 100%);
          background-size: 220% 220%;
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
          color: #9c47ec;
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
          background: #f4e4ea;
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
            transform 0.22s ease,
            box-shadow 0.22s ease,
            background 0.22s ease,
            color 0.22s ease,
            border-color 0.22s ease,
            filter 0.22s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7a3ff2 0%, #a24cf3 40%, #d84cbf 75%, #ff5e8a 100%);
          background-size: 220% 220%;
          animation: gradientShift 7s ease infinite;
          color: #fff;
          padding: 15px 24px;
          box-shadow: 0 16px 30px rgba(156, 71, 236, 0.24);
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 22px 38px rgba(156, 71, 236, 0.34);
          filter: saturate(1.08);
        }

        .btn-secondary {
          background: #fff;
          color: #8447ec;
          padding: 15px 24px;
          border: 1px solid #e0d2ff;
          box-shadow: 0 10px 24px rgba(100, 70, 95, 0.06);
        }

        .btn-secondary:hover {
          transform: translateY(-3px) scale(1.02);
          background: #fcf9ff;
          border-color: #bf9cff;
          box-shadow: 0 18px 32px rgba(132, 71, 236, 0.16);
        }

        .hero-logo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-logo-ring {
          padding: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7a3ff2 0%, #a24cf3 40%, #d84cbf 75%, #ff5e8a 100%);
          background-size: 220% 220%;
          animation: gradientShift 8s ease infinite;
          box-shadow: 0 18px 42px rgba(141, 84, 190, 0.24);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hero-logo-ring:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 24px 50px rgba(141, 84, 190, 0.3);
        }

        .hero-logo {
          width: 270px;
          height: 270px;
          object-fit: contain;
          display: block;
          border-radius: 50%;
          background: transparent;
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
          background: linear-gradient(135deg, #7a3ff2 0%, #a24cf3 40%, #d84cbf 75%, #ff5e8a 100%);
          background-size: 220% 220%;
          animation: gradientShift 7s ease infinite;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          box-shadow: 0 10px 22px rgba(156, 71, 236, 0.18);
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
          background: linear-gradient(135deg, #7a3ff2 0%, #a24cf3 40%, #d84cbf 75%, #ff5e8a 100%);
          background-size: 220% 220%;
          animation: gradientShift 7s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hausbesuche-box {
          margin-top: 28px;
          padding: 22px;
          border-radius: 22px;
          background: linear-gradient(135deg, #fff8ff, #fff);
          border: 1px solid #ead0ff;
          box-shadow: 0 10px 25px rgba(120, 80, 255, 0.08);
        }

        .hilfe-box,
        .about-box {
          background: linear-gradient(135deg, #fff 0%, #fdf2f8 100%);
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
          background: linear-gradient(135deg, #7a3ff2 0%, #a24cf3 40%, #d84cbf 75%, #ff5e8a 100%);
          background-size: 220% 220%;
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
          color: #8447ec;
          padding: 14px 22px;
        }

        .btn-whatsapp-inline:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 18px 32px rgba(255, 255, 255, 0.18);
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

          .about-image img {
            margin: 0 auto;
            max-width: 360px;
            height: 420px;
          }

          .hero-logo {
            width: 220px;
            height: 220px;
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
          .kontakt-card,
          .hausbesuche-box {
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

          .hero-logo {
            width: 190px;
            height: 190px;
          }
        }
      `}</style>

      <main className={`page-shell ${loaded ? "loaded" : ""}`}>
        <section className="container reveal delay-1">
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

        <section className="container reveal delay-2">
          <div className="hero">
            <div>
              <div className="badge">
                ADHS-Begleitung für Familien & Erwachsene
              </div>

              <h1 className="hero-title">
                ADHS Coaching – Mehr Ruhe & Klarheit im Familienalltag
              </h1>

              
              <p className="hero-subtitle">
Ich unterstütze Erwachsene und Kinder mit ADHS im Saarland dabei, mehr Ruhe, Struktur und Klarheit in ihren Alltag zu bringen – mit klaren, alltagstauglichen Lösungen, die wirklich funktionieren.
</p>

              <div className="button-row">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
                  Termin anfragen
                </a>
                <a href="#angebote" className="btn-secondary">
                  Angebote ansehen
                </a>
              </div>
            </div>

            <div className="hero-logo-wrap">
              <div className="hero-logo-ring">
                <img
                  src="/logo.png"
                  alt="Logo schnelleHilfe-ADHS"
                  className="hero-logo"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="angebote" className="container section reveal delay-3">
          <div className="section-intro">
            <h2 className="section-title">Angebote</h2>
            <p className="section-text">
              Klar, warm und unkompliziert. Sie bekommen keine Theorie-Flut,
              sondern konkrete Hilfe, die wirklich in Ihren Alltag passt.
            </p>
          </div>

          <div className="angebote-grid">
  {angebote.slice(0, 3).map((item) => (
    <div key={item.title} className="angebot-card">
      <div className="angebot-badge">{item.duration}</div>
      <h3 className="angebot-title">{item.title}</h3>
      <p className="angebot-text">{item.text}</p>
      <div className="angebot-preis">{item.price}</div>
    </div>
  ))}
</div>

<div style={{ marginTop: "20px" }}>
  {angebote.slice(3).map((item) => (
    <div key={item.title} className="angebot-card">
      <div className="angebot-badge">{item.duration}</div>
      <h3 className="angebot-title">{item.title}</h3>
      <p className="angebot-text">{item.text}</p>
      <div className="angebot-preis">{item.price}</div>
    </div>
  ))}
</div>

          <div className="hausbesuche-box">
            <h3 className="angebot-title" style={{ marginBottom: 10 }}>
              Hausbesuche
            </h3>
            <p className="angebot-text" style={{ marginBottom: 0 }}>
              Im Umkreis von 10 km inklusive.
              <br />
              Darüber hinaus wird eine Fahrtkostenpauschale von 0,40 € / km berechnet.
            </p>
          </div>
        </section>

        <section id="hilfe" className="container section reveal delay-4">
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

        <section id="uebermich" className="container section reveal delay-5">
          <div className="about-box">
            <div className="about-grid">
              <div>
                <h2 className="section-title" style={{ marginBottom: 14 }}>
                  Über mich
                </h2>

                <p className="about-text">
                  Ich bin Denise Schäfer und begleite groß und klein im Alltag
                  mit ADHS. Mir ist wichtig, dass Sie sich verstanden fühlen und
                  schnell konkrete Hilfe bekommen - ohne komplizierte Theorien.
                </p>

                <div className="about-subbox">
                  <h3 className="about-subtitle">
                    Meine Erfahrungen & Qualifikationen
                  </h3>
                  <p className="about-text">
                    Ich bin gelernte Kinderpflegerin und ADHS-Coach und habe
                    mich gezielt in diesem Bereich weitergebildet. Mein Wissen
                    verbinde ich mit viel Erfahrung aus dem Alltag - genau das
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

        <section id="kontakt" className="container reveal delay-5" style={{ paddingBottom: 36 }}>
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

        <section className="container reveal delay-5" style={{ paddingTop: 34, paddingBottom: 100 }}>
          <div className="cta-box">
            <h2 className="cta-title">Sie müssen da nicht allein durch.</h2>

            <p className="cta-text">
              Wenn Sie sich mehr Ruhe, Klarheit und konkrete Unterstützung für
              Ihren Alltag wünschen, melden Sie sich gern bei mir.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-inline"
            >
              Jetzt per WhatsApp schreiben
            </a>
          </div>
        </section>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
        >
          WhatsApp
        </a>
      </main>
       <footer style={{ textAlign: "center", marginTop: "50px", fontSize: "14px" }}>
  <a href="/impressum">Impressum</a> |{" "}
  <a href="/datenschutz">Datenschutz</a>
</footer>     
    </>
  );
}
