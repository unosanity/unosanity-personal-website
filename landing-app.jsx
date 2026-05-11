// Prophetgram landing — ported to the Kirill Skurikhin / unosanity system
// Ice-white field, navy ink, bougainvillea accent. Quiet, hairline, mono+serif.

const { useState, useEffect } = React;

const ink = "#0E1A4D";
const paper = "#F4F7FB";
const pure = "#FFFEFE";
const mute = "#6A739E";
const accent = "#A8347C";

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

function ResponsiveStyles() {
  return (
    <style>{`
      .pg-shell {
        position: relative;
        min-height: 100dvh;
        background: ${paper};
        color: ${ink};
        font-family: "DM Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
        font-weight: 300;
        overflow: hidden;
        border: 1px solid ${ink};
      }

      /* ============ HEADER ============ */
      .pg-header {
        position: relative; z-index: 5;
        padding: 16px 30px;
        display: flex; justify-content: space-between; align-items: center;
        gap: 16px; flex-wrap: wrap;
        font-family: "DM Mono", monospace;
        font-size: 12px; letter-spacing: 0.02em;
        color: ${mute};
        border-bottom: 1px solid ${ink};
      }
      .pg-brand { display: flex; align-items: center; gap: 12px; }
      .pg-dot {
        width: 8px; height: 8px; background: ${accent};
        border-radius: 50%; flex-shrink: 0;
      }
      .pg-brand-text { display: flex; align-items: center; gap: 10px; }
      .pg-brand-text .pg-name { color: ${ink}; font-weight: 500; }
      .pg-brand-text .pg-pipe { color: ${mute}; opacity: 0.6; }
      .pg-brand-text a {
        color: ${mute}; text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: color 250ms cubic-bezier(0.165,0.84,0.44,1), border-color 250ms cubic-bezier(0.165,0.84,0.44,1);
        padding-bottom: 1px;
      }
      .pg-brand-text a:hover { color: ${accent}; border-bottom-color: ${accent}; }

      .pg-nav { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
      .pg-nav .pg-nav-meta { display: inline; letter-spacing: 0.06em; }
      .pg-lang-btn {
        background: transparent; border: 1px solid ${ink}; color: ${ink};
        font: inherit; cursor: pointer; padding: 4px 10px; letter-spacing: 0.1em;
        font-family: "DM Mono", monospace; font-size: 11px;
        transition: background 250ms cubic-bezier(0.165,0.84,0.44,1), color 250ms cubic-bezier(0.165,0.84,0.44,1);
      }
      .pg-lang-btn:hover { background: ${ink}; color: ${paper}; }
      .pg-lang-btn:hover .pg-lang-other { color: ${mute}; }
      .pg-lang-btn .pg-lang-other { color: ${mute}; }

      /* ============ MAIN ============ */
      .pg-main { position: relative; z-index: 2; }

      .pg-hero { padding: 60px 30px 36px; max-width: 760px; }
      .pg-eyebrow {
        font-family: "DM Mono", monospace;
        font-size: 11px; letter-spacing: 0.18em;
        text-transform: uppercase; color: ${mute};
        margin-bottom: 22px;
      }
      .pg-h1 {
        font-family: "Newsreader", "Cormorant Garamond", Georgia, serif;
        font-weight: 600; font-size: clamp(56px, 8vw, 96px);
        line-height: 0.95;
        letter-spacing: -0.02em;
        margin: 0; color: ${ink};
        text-wrap: balance;
      }
      .pg-h1 .pg-italic { font-style: italic; font-weight: 600; color: ${accent}; }
      .pg-body {
        margin-top: 24px; font-size: 14px; line-height: 1.65;
        color: ${ink}; max-width: 540px; font-family: "DM Mono", monospace;
        font-weight: 300;
      }

      /* Wireframe panel */
      .pg-panel {
        position: absolute; top: 64px; right: 30px;
        width: 580px; padding: 18px;
        border: 1px solid ${ink};
        background: ${pure};
      }

      .pg-panel-head {
        font-family: "DM Mono", monospace;
        font-size: 10px; letter-spacing: 0.2em;
        text-transform: uppercase; color: ${mute};
        display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;
        padding-bottom: 10px;
        border-bottom: 1px solid ${ink};
      }
      .pg-panel-head .pg-cards { color: ${accent}; }

      .pg-grid {
        margin-top: 14px;
        display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;
      }
      .pg-cell { position: relative; color: ${ink}; }
      .pg-cell-num {
        font-family: "DM Mono", monospace; font-size: 9px;
        color: ${mute}; margin-bottom: 5px; letter-spacing: 0.12em;
      }
      .pg-cell-frame {
        background: ${paper}; border: 1px solid ${ink};
        padding: 4px; aspect-ratio: 200 / 130;
      }
      .pg-cell-title {
        font-size: 10px; margin-top: 6px; line-height: 1.25; color: ${ink};
        font-family: "DM Mono", monospace;
      }

      .pg-how {
        margin-top: 14px; border-top: 1px solid ${ink}; padding-top: 12px;
      }
      .pg-how-label {
        font-family: "DM Mono", monospace; font-size: 10px;
        letter-spacing: 0.2em; text-transform: uppercase;
        color: ${mute}; margin-bottom: 10px;
      }
      .pg-how-grid {
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
        font-size: 11px; line-height: 1.5; color: ${ink};
      }
      .pg-how-grid .pg-num { color: ${accent}; font-weight: 500; }

      /* ============ FOOTER ============ */
      .pg-footer {
        position: absolute; bottom: 16px; left: 30px; right: 30px;
        padding-top: 14px; border-top: 1px solid ${ink};
        display: flex; justify-content: space-between; align-items: center;
        font-family: "DM Mono", monospace; font-size: 11px;
        letter-spacing: 0.06em; color: ${mute};
      }
      .pg-footer .pg-status { color: ${accent}; }

      /* ============ TABLET ============ */
      @media (max-width: 1099px) {
        .pg-main { min-height: 0; }
        .pg-hero { padding: 56px 30px 28px; max-width: none; }
        .pg-panel {
          position: relative; top: auto; right: auto;
          width: auto; margin: 0 30px 30px;
        }
        .pg-footer {
          position: relative; bottom: auto; left: auto; right: auto;
          margin: 0 30px 24px;
        }
      }

      /* ============ MOBILE ============ */
      @media (max-width: 719px) {
        .pg-header { padding: 14px 18px; gap: 12px; }
        .pg-nav { gap: 14px; }
        .pg-nav .pg-nav-meta { display: none; }
        .pg-brand-text { font-size: 11px; gap: 8px; }

        .pg-hero { padding: 40px 18px 30px; }
        .pg-eyebrow { font-size: 10px; margin-bottom: 18px; }
        .pg-h1 { font-size: clamp(44px, 13vw, 68px); }
        .pg-body { margin-top: 22px; font-size: 13px; }

        .pg-panel { margin: 0 18px 30px; padding: 18px 14px; }
        .pg-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .pg-how-grid { grid-template-columns: 1fr 1fr; gap: 10px 14px; }

        .pg-footer { margin: 0 18px 20px; padding-top: 14px; }
        .pg-footer span { font-size: 10px; }
      }

      @media (max-width: 380px) {
        .pg-h1 { font-size: 40px; }
        .pg-grid { grid-template-columns: 1fr 1fr; }
      }

      ::selection { background: ${accent}; color: ${pure}; }
    `}</style>
  );
}

function Header({ lang, setLang }) {
  return (
    <header className="pg-header">
      <div className="pg-brand">
        <div className="pg-dot" aria-hidden="true"/>
        <div className="pg-brand-text">
          <span className="pg-name">prophetgram</span>
          <span className="pg-pipe" aria-hidden="true">|</span>
          <a href="https://unosanity.uno" target="_blank" rel="noopener noreferrer">unosanity<em style={{fontStyle:'normal',color:accent}}>.</em>uno</a>
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
      <div className="pg-panel-head">
        <span>{t.fig} &nbsp; {t.figLabel}</span>
        <span className="pg-cards">{t.figRight}</span>
      </div>

      <div className="pg-grid">
        {WF_STEPS.map((s) => {
          const Comp = WF[s.key];
          return (
            <div key={s.n} className="pg-cell">
              <div className="pg-cell-num">fig.{s.n}</div>
              <div className="pg-cell-frame">
                <Comp w="100%" h="100%" stroke={ink} accent={accent}/>
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
              <span className="pg-num">{String(i + 1).padStart(2, "0")} ·</span> {step}
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
      <span>© MMXXVI · prophetgram</span>
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
