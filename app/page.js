import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, HeartHandshake, Sparkles, CheckCircle2, Phone, Mail, MapPin, Menu, X } from "lucide-react";

const angebote = [
  {
    icon: HeartHandshake,
    title: "Erstgespräch",
    text: "Wir klären gemeinsam Ihre Situation und schauen, wo Sie konkret Unterstützung brauchen.",
    duration: "ca. 60–90 Minuten",
    price: "90 €",
  },
  {
    icon: Brain,
    title: "Einzelcoaching",
    text: "Individuelle Begleitung mit konkreten Lösungen für Ihren Familienalltag.",
    duration: "ca. 60 Minuten",
    price: "70 €",
  },
  {
    icon: Sparkles,
    title: "Akuthilfe",
    text: "Schnelle Unterstützung bei akuten Situationen oder Überforderung.",
    duration: "flexibel",
    price: "nach Absprache",
  },
];

const schwerpunkte = [
  "Ihr Kind besser verstehen",
  "den Alltag entspannen",
  "harmonischeres Miteinander",
  "mehr Struktur schaffen",
  "Konflikte reduzieren",
  "mehr Sicherheit gewinnen",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerWrap = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function WebsiteStartseite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Angebote", "#angebote"],
    ["Schwerpunkte", "#schwerpunkte"],
    ["Kontakt", "#kontakt"],
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-indigo-50 text-slate-900 overflow-x-hidden">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-500 text-white shadow-lg">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">schnelleHilfe-ADHS</p>
              <p className="text-xs text-slate-500">Denise Schäfer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-pink-50 hover:text-pink-700"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md md:inline-flex"
            >
              Jetzt anfragen
            </motion.a>

            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-pink-200 bg-white text-pink-700 shadow-sm transition hover:bg-pink-50 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="border-t border-pink-100 bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-2">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-pink-50 hover:text-pink-700"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-md"
                >
                  Jetzt anfragen
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <section id="top" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial="hidden" animate="visible" variants={staggerWrap}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-700 shadow-sm"
            >
              <Sparkles className="h-4 w-4" /> schnelleHilfe-ADHS · Denise Schäfer
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Mehr Ruhe & Klarheit im Familienalltag
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Wertschätzendes Coaching für Eltern und Erwachsene – mit klaren, alltagstauglichen Lösungen, die wirklich funktionieren.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#angebote"
                className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-pink-200"
              >
                Angebote ansehen
              </a>
              <a
                href="#kontakt"
                className="rounded-2xl border border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-pink-700 transition duration-300 hover:-translate-y-0.5 hover:bg-pink-50 hover:shadow-md"
              >
                Kontakt
              </a>
            </motion.div>

            <motion.div variants={staggerWrap} className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Für Eltern", "Alltagsnah", "Lösungsorientiert"].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl bg-gradient-to-br from-pink-100 to-indigo-100 px-4 py-4 text-sm font-medium text-slate-800 shadow"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="relative rounded-[2rem] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 p-8 text-white shadow-2xl"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-pink-200/20 blur-2xl"
            />

            <div className="relative text-center">
              <p className="text-sm uppercase tracking-wide text-white/80">Denise Schäfer</p>
              <p className="mt-2 text-2xl font-semibold">ADHS-Coach</p>
              <p className="mt-3 text-white/90">Schnelle Hilfe für Ihre Familie</p>
            </div>

            <motion.div variants={staggerWrap} initial="hidden" animate="visible" className="relative mt-8 space-y-3">
              {["Ihr Kind besser verstehen", "Alltag entspannen", "Konflikte reduzieren"].map((line) => (
                <motion.div
                  key={line}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <p>{line}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="ueber-mich" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Über mich
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-slate-600"
          >
            Ich bin Denise Schäfer und begleite Eltern und Erwachsene im Alltag.
            Mir ist wichtig, dass Sie sich verstanden fühlen und schnell
            konkrete Hilfe bekommen – ohne komplizierte Theorien.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600"
          >
            Durch meine Erfahrung weiß ich, wie herausfordernd der Alltag sein kann.
            Gemeinsam finden wir Wege, die wirklich zu Ihnen und Ihrer Familie passen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 rounded-2xl bg-gradient-to-br from-pink-50 to-indigo-50 p-6 shadow"
          >
            <p className="font-semibold text-slate-800">Meine Erfahrung & Qualifikation</p>
            <p className="mt-3 text-slate-600">
              Ich bin ausgebildete Kinderpflegerin und ADHS-Coach und habe mich gezielt in diesem Bereich weitergebildet.
              Mein Wissen verbinde ich mit viel Erfahrung aus dem Alltag – genau das hilft Eltern, wirklich ins Handeln zu kommen.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="angebote" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-3xl font-bold"
          >
            Angebote
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerWrap}
            className="grid gap-6 md:grid-cols-3"
          >
            {angebote.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-gradient-to-br from-pink-100 to-indigo-100 p-6 shadow-lg"
                >
                  <Icon className="mb-4 h-6 w-6 text-pink-600" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  <p className="mt-4 text-sm font-medium text-slate-700">{item.duration}</p>
                  <p className="text-lg font-bold text-pink-700">{item.price}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="schwerpunkte" className="bg-gradient-to-b from-white to-pink-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Wobei ich helfe</h2>
            <p className="mt-4 text-slate-600">Praxisnah, verständlich und ohne Druck.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerWrap}
            className="grid gap-4 sm:grid-cols-2"
          >
            {schwerpunkte.map((p) => (
              <motion.div
                key={p}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -4 }}
                className="rounded-xl bg-white p-4 shadow"
              >
                {p}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="kontakt" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Kontakt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600"
          >
            Einfach melden – ich bin für Sie da.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerWrap}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="rounded-xl bg-pink-50 p-5 shadow-sm transition">
              <MapPin className="mb-2" />
              Krämerbergstr. 60<br />
              66578 Schiffweiler
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="rounded-xl bg-indigo-50 p-5 shadow-sm transition">
              <Phone className="mb-2" />
              0177 4670001
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="rounded-xl bg-fuchsia-50 p-5 shadow-sm transition">
              <Mail className="mb-2" />
              denise.schaefer94@yahoo.com
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-8 shadow"
          >
            <h3 className="text-xl font-semibold text-slate-800">Direkt per WhatsApp schreiben</h3>
            <p className="mt-2 text-slate-600">Schnell und unkompliziert – einfach scannen oder klicken.</p>

            <div className="mt-6 flex flex-col items-center gap-6">
              <img
                src="/whatsapp-qr.jpg"
                alt="WhatsApp QR Code"
                className="h-40 w-40 rounded-2xl shadow"
              />

              <a
                href="https://wa.me/491774670001?text=Hallo%20Denise,%20ich%20wei%C3%9F%20gerade%20nicht%20mehr%20so%20richtig%20weiter%20und%20w%C3%BCrde%20mir%20Unterst%C3%BCtzung%20w%C3%BCnschen.%20K%C3%B6nnen%20wir%20ein%20Erstgespr%C3%A4ch%20vereinbaren%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white shadow hover:scale-105 transition"
              >
                WhatsApp öffnen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-500 to-indigo-500 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl px-6"
        >
          <h2 className="text-3xl font-bold">Der erste Schritt darf leicht sein</h2>
          <p className="mt-4">Schreiben Sie mir – wir starten gemeinsam.</p>
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-pink-600 shadow-lg"
          >
            Jetzt Kontakt aufnehmen
          </motion.a>
        </motion.div>
      </section>

      <section id="impressum" className="bg-white border-t py-16">
        <div className="mx-auto max-w-4xl px-6 text-sm text-slate-600">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Impressum</h2>

          <p className="font-medium text-slate-800">Angaben gemäß § 5 TMG</p>

          <p className="mt-4">
            Denise Schäfer<br />
            schnelleHilfe-ADHS<br />
            Krämerbergstr. 60<br />
            66578 Schiffweiler
          </p>

          <p className="mt-4">
            Telefon: 0177 4670001<br />
            E-Mail: denise.schaefer94@yahoo.com
          </p>

          <p className="mt-4">
            Steuernummer: wird nachgereicht
          </p>

          <p className="mt-6 text-xs text-slate-500">
            Hinweis: Dieses Angebot stellt keine therapeutische oder medizinische Behandlung dar.
          </p>
        </div>
      </section>
    </main>
  );
}