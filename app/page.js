"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "20px" }}>
      
      <h1 style={{ fontSize: "32px", color: "#d63384" }}>
        schnelleHilfe-ADHS
      </h1>

      <h2>Denise Schäfer</h2>

      <p style={{ marginTop: "10px" }}>
        Mehr Ruhe & Klarheit im Familienalltag
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Angebote</h2>

      <div style={{ marginTop: "15px" }}>
        <p><strong>Erstgespräch</strong></p>
        <p>ca. 60–90 Minuten</p>
        <p>90 €</p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <p><strong>Einzelcoaching</strong></p>
        <p>ca. 60 Minuten</p>
        <p>70 €</p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <p><strong>Akuthilfe</strong></p>
        <p>flexibel</p>
        <p>nach Absprache</p>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Über mich</h2>
      <p>
        Ich begleite Eltern und Erwachsene im Alltag.  
        Mir ist wichtig, dass Sie sich verstanden fühlen und schnell konkrete Hilfe bekommen.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Kontakt</h2>

      <p>📍 Krämerbergstr. 60, 66578 Schiffweiler</p>
      <p>📞 0177 4670001</p>
      <p>📧 denise.schaefer94@yahoo.com</p>

      <div style={{ marginTop: "20px" }}>
        <a
          href="https://wa.me/491774670001?text=Hallo%20Denise,%20ich%20wei%C3%9F%20gerade%20nicht%20mehr%20so%20richtig%20weiter%20und%20w%C3%BCrde%20mir%20Unterst%C3%BCtzung%20w%C3%BCnschen.%20K%C3%B6nnen%20wir%20ein%20Erstgespr%C3%A4ch%20vereinbaren%3F"
          target="_blank"
        >
          👉 WhatsApp schreiben
        </a>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Impressum</h2>

      <p>
        Denise Schäfer <br />
        schnelleHilfe-ADHS <br />
        Krämerbergstr. 60 <br />
        66578 Schiffweiler
      </p>

      <p>
        Telefon: 0177 4670001 <br />
        E-Mail: denise.schaefer94@yahoo.com
      </p>

      <p>Steuernummer: wird nachgereicht</p>

    </main>
  );
}