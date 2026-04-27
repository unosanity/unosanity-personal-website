// Full functional Prophetgram landing — responsive via CSS media queries (not JS)
// Header: PROPHETGRAM | UNOSANITY (UNOSANITY half links to https://unosanity.uno)

const { useState, useEffect } = React;

const ink = "#0a0a0a";
const paper = "#f4f1ea";
const dim = "#9a958a";
const accent = "#fff7c2";

function detectLocale() {
  if (typeof window === "undefined") return "en";
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  if (q === "uk" || q === "en") return q;
  const stored = localStorage.getItem("pg_lang");
  if (stored === "uk" || stored === "en") return stored;
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("uk")) return "uk";
  return "en";
}

// Single global stylesheet — drives all responsive behavior via media queries.
function ResponsiveStyles() {
  return (
    <style>{`
      .pg-shell {
        position: relative;
        min-height: 100dvh;
        background: ${ink};
        color: ${paper};
        font-family: "Inter", -apple-system, sans-serif;
        overflow: hidden;
      }
      .pg-vignette {
        position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(ellipse at 30% 40%, rgba(255,247,194,0.06), transparent 60%);
      }

      /* ============ HEADER ============ */
      .pg-header {
        position: relative; z-index: 5;
        padding: 24px 48px 0;
        display: flex; justify-content: space-between; align-items: center;
        gap: 16px; flex-wrap: wrap;
        font-family: ui-monospace, "SF Mono", monospace;
        font-size: 11px; letter-spacing: 0.12em;
        text-transform: uppercase; color: ${dim};
      }
      .pg-brand { display: flex; align-items: center; gap: 12px; }
      .pg-dot {
        width: 10px; height: 10px; background: ${accent};
        border-radius: 50%; flex-shrink: 0;
      }
      .pg-brand-text { display: flex; align-items: center; gap: 10px; letter-spacing: 0.2em; }
      .pg-brand-text .pg-name { color: ${paper}; }
      .pg-brand-text .pg-pipe { color: ${dim}; opacity: 0.6; }
      .pg-brand-text a {
        color: ${dim}; text-decoration: none; letter-spacing: 0.2em;
        border-bottom: 1px solid ${dim}55; padding-bottom: 1px;
        transition: color 120ms, border-color 120ms;
      }
      .pg-brand-text a:hover { color: ${paper}; border-bottom-color: ${paper}; }

      .pg-nav { display: flex; gap: 28px; align-items: center; flex-wrap: wrap; }
      .pg-nav .pg-nav-meta { display: inline; }
      .pg-lang-btn {
        background: transparent; border: 1px solid ${dim}55; color: ${paper};
        font: inherit; cursor: pointer; padding: 4px 10px; letter-spacing: 0.2em;
      }
      .pg-lang-btn .pg-lang-other { color: ${dim}; }

      /* ============ MAIN ============ */
      .pg-main {
        position: relative; z-index: 2;
        min-height: 0;
      }

      .pg-hero { padding: 44px 48px 28px; max-width: 760px; }
      .pg-eyebrow {
        font-family: ui-monospace, "SF Mono", monospace;
        font-size: 11px; letter-spacing: 0.18em;
        text-transform: uppercase; color: ${dim};
        margin-bottom: 14px;
      }
      .pg-h1 {
        font-family: "Fraunces", "Iowan Old Style", Georgia, serif;
        font-weight: 300; font-size: 96px; line-height: 0.88;
        letter-spacing: -0.03em; margin: 0; color: ${paper};
      }
      .pg-h1 .pg-italic { font-style: italic; font-weight: 300; color: ${accent}; }
      .pg-body {
        margin-top: 20px; font-size: 16px; line-height: 1.5;
        color: ${dim}; max-width: 480px;
      }

      /* Wireframe panel — desktop: absolute right; mobile: in flow */
      .pg-panel {
        position: absolute; top: 132px; right: 48px;
        width: 580px; padding: 18px;
        border: 1px solid ${dim}33;
      }
      .pg-corner { position: absolute; width: 14px; height: 14px; }
      .pg-corner.tl { top: -1px; left: -1px; border-top: 1px solid ${accent}; border-left: 1px solid ${accent}; }
      .pg-corner.tr { top: -1px; right: -1px; border-top: 1px solid ${accent}; border-right: 1px solid ${accent}; }
      .pg-corner.bl { bottom: -1px; left: -1px; border-bottom: 1px solid ${accent}; border-left: 1px solid ${accent}; }
      .pg-corner.br { bottom: -1px; right: -1px; border-bottom: 1px solid ${accent}; border-right: 1px solid ${accent}; }

      .pg-panel-head {
        font-family: ui-monospace, "SF Mono", monospace;
        font-size: 10px; letter-spacing: 0.18em;
        text-transform: uppercase; color: ${dim};
        display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
      }
      .pg-panel-head .pg-cards { color: ${accent}; }

      .pg-grid {
        margin-top: 10px;
        display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px;
      }
      .pg-cell { position: relative; color: ${paper}; }
      .pg-cell-num {
        font-family: ui-monospace, monospace; font-size: 9px;
        color: ${dim}; margin-bottom: 5px; letter-spacing: 0.1em;
      }
      .pg-cell-frame {
        background: #101010; border: 1px solid ${dim}55;
        padding: 4px; aspect-ratio: 200 / 130;
      }
      .pg-cell-title {
        font-size: 10px; margin-top: 6px; line-height: 1.25; color: ${paper};
      }

      .pg-how {
        margin-top: 10px; border-top: 1px solid ${dim}33; padding-top: 8px;
      }
      .pg-how-label {
        font-family: ui-monospace, monospace; font-size: 10px;
        letter-spacing: 0.15em; text-transform: uppercase;
        color: ${dim}; margin-bottom: 8px;
      }
      .pg-how-grid {
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
        font-size: 11px; line-height: 1.4;
      }
      .pg-how-grid .pg-num { color: ${accent}; }

      /* ============ FOOTER ============ */
      .pg-footer {
        position: absolute; bottom: 16px; left: 48px; right: 48px;
        padding-top: 12px; border-top: 1px solid ${dim}33;
        display: flex; justify-content: space-between; align-items: center;
        font-family: ui-monospace, monospace; font-size: 10px;
        letter-spacing: 0.16em; text-transform: uppercase; color: ${dim};
      }
      .pg-footer .pg-status { color: ${paper}; }

      /* ============ TABLET ============ */
      @media (max-width: 1099px) {
        .pg-main { min-height: 0; }
        .pg-hero { padding: 48px 36px 24px; max-width: none; }
        .pg-h1 { font-size: clamp(68px, 9vw, 96px); }
        .pg-panel {
          position: relative; top: auto; right: auto;
          width: auto; margin: 0 36px 36px;
        }
        .pg-footer {
          position: relative; bottom: auto; left: auto; right: auto;
          margin: 0 36px 20px;
        }
      }

      /* ============ MOBILE ============ */
      @media (max-width: 719px) {
        .pg-header {
          padding: 20px 20px 0;
          gap: 12px;
        }
        .pg-nav { gap: 16px; }
        .pg-nav .pg-nav-meta { display: none; }
        .pg-brand-text { font-size: 11px; gap: 8px; }

        .pg-hero { padding: 40px 20px 32px; }
        .pg-eyebrow { font-size: 10px; margin-bottom: 22px; }
        .pg-h1 { font-size: clamp(48px, 13.5vw, 76px); }
        .pg-body { margin-top: 26px; font-size: 15px; }

        .pg-panel { margin: 0 20px 32px; padding: 20px 16px; }
        .pg-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .pg-how-grid { grid-template-columns: 1fr 1fr; gap: 10px 14px; }

        .pg-footer { margin: 0 20px 24px; padding-top: 14px; }
        .pg-footer span { font-size: 9px; letter-spacing: 0.14em; }
      }

      @media (max-width: 380px) {
        .pg-h1 { font-size: 44px; }
        .pg-grid { grid-template-columns: 1fr 1fr; }
      }

      ::selection { background: ${accent}; color: ${ink}; }
    `}</style>
  );
}

function Header({ lang, setLang }) {
  return (
    <header className="pg-header">
      <div className="pg-brand">
        <div className="pg-dot" aria-hidden="true"/>
        <div className="pg-brand-text">
          <span className="pg-name">PROPHETGRAM</span>
          <span className="pg-pipe" aria-hidden="true">|</span>
          <a href="https://unosanity.uno" target="_blank" rel="noopener noreferrer">UNOSANITY</a>
        </div>
      </div>

      <div className="pg-nav">
        <span className="pg-nav-meta">{COPY[lang].nav.ver}</span>
        <span className="pg-nav-meta">{COPY[lang].nav.date}</span>
        <button className="pg-lang-btn" onClick={() => {
          const next = lang === "en" ? "uk" : "en";
          setLang(next);
          localStorage.setItem("pg_lang", next);
        }} aria-label="Toggle language">
          <span>{COPY[lang].nav.lang}</span>
          <span className="pg-lang-other">&nbsp;·&nbsp;{COPY[lang].nav.langOther}</span>
        </button>
      </div>
    </header>
  );
}

function Hero({ lang }) {
  const t = COPY[lang];
  return (
    <section className="pg-hero">
      <div className="pg-eyebrow">{t.eyebrow}</div>
      <h1 className="pg-h1">
        {t.h1_a}<br/>
        {t.h1_b}<br/>
        <span className="pg-italic">
          {t.h1_italic_a}<br/>{t.h1_italic_b}
        </span><br/>
        {t.h1_c}
      </h1>
      <p className="pg-body">{t.body}</p>
    </section>
  );
}

function WireframePanel({ lang }) {
  const t = COPY[lang];
  return (
    <section className="pg-panel">
      <span className="pg-corner tl" aria-hidden="true"/>
      <span className="pg-corner tr" aria-hidden="true"/>
      <span className="pg-corner bl" aria-hidden="true"/>
      <span className="pg-corner br" aria-hidden="true"/>

      <div className="pg-panel-head">
        <span>{t.fig} &nbsp; {t.figLabel}</span>
        <span className="pg-cards">{t.figRight}</span>
      </div>

      <div className="pg-grid">
        {WF_STEPS.map((s) => {
          const Comp = WF[s.key];
          return (
            <div key={s.n} className="pg-cell">
              <div className="pg-cell-num">FIG.{s.n}</div>
              <div className="pg-cell-frame">
                <Comp w="100%" h="100%" stroke={paper} accent={accent}/>
              </div>
              <div className="pg-cell-title">{t.wireTitles[s.key]}</div>
            </div>
          );
        })}
      </div>

      <div className="pg-how">
        <div className="pg-how-label">{t.howItWorks}</div>
        <div className="pg-how-grid">
          {t.steps.map((step, i) => (
            <div key={i}>
              <span className="pg-num">{String(i + 1).padStart(2, "0")}·</span> {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const t = COPY[lang];
  return (
    <footer className="pg-footer">
      <span>© MMXXVI · Prophetgram</span>
      <span className="pg-status">{t.footerCenter}</span>
    </footer>
  );
}

function App() {
  const [lang, setLang] = useState(detectLocale());

  useEffect(() => {
    document.documentElement.lang = COPY[lang].htmlLang;
    document.title = lang === "uk"
      ? "Prophetgram — скоро"
      : "Prophetgram — coming soon";
  }, [lang]);

  return (
    <div className="pg-shell">
      <ResponsiveStyles/>
      <div className="pg-vignette" aria-hidden="true"/>
      <Header lang={lang} setLang={setLang}/>
      <main className="pg-main">
        <Hero lang={lang}/>
        <WireframePanel lang={lang}/>
        <Footer lang={lang}/>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("pg-root")).render(<App/>);
