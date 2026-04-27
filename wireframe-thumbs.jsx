// Tiny lo-fi wireframe SVGs — "cards on the table"
// Reusable across all 4 landing variations. Each renders an abstract sketch
// of one of the ten user-side steps from the wireframes spec.

const WF = {
  // 01 Landing (web)
  Landing: ({ stroke = "currentColor", fill = "none", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill={fill} stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <line x1="6" y1="20" x2="194" y2="20" />
      <circle cx="14" cy="13" r="1.6" fill={stroke} />
      <circle cx="20" cy="13" r="1.6" fill={stroke} />
      <circle cx="26" cy="13" r="1.6" fill={stroke} />
      <rect x="18" y="34" width="80" height="8" fill={stroke} stroke="none" />
      <rect x="18" y="48" width="100" height="8" fill={stroke} stroke="none" />
      <rect x="18" y="62" width="60" height="8" fill={stroke} stroke="none" />
      <rect x="18" y="82" width="48" height="14" rx="2" fill={accent} stroke="none" />
      <rect x="124" y="34" width="58" height="62" rx="2" strokeDasharray="3 3" />
    </svg>
  ),

  // 02 Language + account check (IDE split)
  Language: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <line x1="100" y1="6" x2="100" y2="124" />
      <rect x="14" y="20" width="36" height="10" />
      <rect x="14" y="36" width="78" height="10" fill={accent} stroke="none" />
      <rect x="14" y="52" width="78" height="10" />
      <rect x="14" y="76" width="40" height="6" fill={stroke} stroke="none" />
      <rect x="14" y="88" width="78" height="20" strokeDasharray="3 3" />
      <rect x="108" y="20" width="78" height="6" fill={stroke} stroke="none" />
      <line x1="108" y1="36" x2="186" y2="36" />
      <line x1="108" y1="48" x2="170" y2="48" />
      <line x1="108" y1="60" x2="186" y2="60" />
      <line x1="108" y1="72" x2="160" y2="72" />
    </svg>
  ),

  // 03 Export walkthrough (numbered doc)
  Export: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <circle cx="20" cy="22" r="6" />
      <text x="20" y="25" fontSize="7" textAnchor="middle" fill={stroke}>1</text>
      <rect x="32" y="18" width="60" height="6" fill={stroke} stroke="none" />
      <rect x="100" y="14" width="86" height="40" strokeDasharray="3 3" />
      <line x1="105" y1="20" x2="180" y2="48" strokeDasharray="2 3" opacity="0.4" />
      <line x1="180" y1="20" x2="105" y2="48" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="20" cy="68" r="6" />
      <text x="20" y="71" fontSize="7" textAnchor="middle" fill={stroke}>2</text>
      <rect x="32" y="64" width="80" height="6" fill={stroke} stroke="none" />
      <rect x="32" y="76" width="100" height="4" fill={stroke} stroke="none" opacity="0.5" />
      <circle cx="20" cy="100" r="6" />
      <text x="20" y="103" fontSize="7" textAnchor="middle" fill={stroke}>3</text>
      <rect x="32" y="96" width="70" height="6" fill={accent} stroke="none" />
    </svg>
  ),

  // 04 CSV upload + coverage timeline
  Upload: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <rect x="14" y="14" width="172" height="36" strokeDasharray="4 3" />
      <line x1="20" y1="32" x2="60" y2="32" />
      <line x1="40" y1="22" x2="40" y2="42" />
      <text x="100" y="36" fontSize="7" fill={stroke} textAnchor="middle" fontFamily="monospace">drop CSVs</text>
      <rect x="14" y="60" width="172" height="14" />
      <rect x="14" y="60" width="42" height="14" fill={accent} stroke="none" />
      <rect x="58" y="60" width="60" height="14" fill={stroke} stroke="none" opacity="0.7" />
      <rect x="120" y="60" width="48" height="14" fill={stroke} stroke="none" opacity="0.4" />
      <rect x="14" y="80" width="172" height="14" />
      <rect x="14" y="80" width="120" height="14" fill={stroke} stroke="none" opacity="0.7" />
      <rect x="14" y="104" width="60" height="6" fill={stroke} stroke="none" />
      <rect x="80" y="104" width="40" height="6" fill={stroke} stroke="none" opacity="0.4" />
    </svg>
  ),

  // 05 Categorization (list / detail)
  Categorize: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <line x1="74" y1="6" x2="74" y2="124" />
      {[0,1,2,3,4].map(i=>(
        <g key={i}>
          <line x1="14" y1={22+i*18} x2="66" y2={22+i*18} opacity="0.6"/>
          <rect x="14" y={26+i*18} width="40" height="6" fill={stroke} stroke="none" opacity={i===2?1:0.5}/>
          {i===2 && <rect x="56" y={24+i*18} width="8" height="8" fill={accent} stroke="none"/>}
        </g>
      ))}
      <rect x="84" y="14" width="100" height="40" strokeDasharray="3 3" />
      <rect x="84" y="60" width="100" height="6" fill={stroke} stroke="none" />
      <rect x="84" y="72" width="80" height="6" fill={stroke} stroke="none" opacity="0.5" />
      <rect x="84" y="88" width="28" height="14" rx="7" />
      <rect x="116" y="88" width="28" height="14" rx="7" fill={accent} stroke="none"/>
      <rect x="148" y="88" width="28" height="14" rx="7" />
    </svg>
  ),

  // 06 Goal setting (IDE)
  Goal: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <line x1="100" y1="6" x2="100" y2="124" />
      <rect x="14" y="18" width="60" height="6" fill={stroke} stroke="none"/>
      <rect x="14" y="30" width="78" height="14" />
      <rect x="14" y="50" width="78" height="14" />
      <rect x="14" y="70" width="78" height="14" fill={accent} stroke="none"/>
      <rect x="14" y="90" width="78" height="20" strokeDasharray="3 3"/>
      <text x="148" y="28" fontSize="7" fontFamily="monospace" fill={stroke} textAnchor="middle">FORECAST</text>
      <polyline points="108,90 120,80 132,72 144,60 156,52 168,46 180,38" strokeWidth="1.5"/>
      <line x1="108" y1="100" x2="186" y2="100" opacity="0.3"/>
      <circle cx="180" cy="38" r="3" fill={accent} stroke="none"/>
    </svg>
  ),

  // 07 Achievability (side-by-side)
  Achievability: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <line x1="100" y1="20" x2="100" y2="118" strokeDasharray="2 3" opacity="0.4"/>
      <text x="50" y="20" fontSize="7" fontFamily="monospace" fill={stroke} textAnchor="middle">YOUR GOAL</text>
      <text x="150" y="20" fontSize="7" fontFamily="monospace" fill={stroke} textAnchor="middle">OURS</text>
      <polyline points="14,90 28,76 42,66 56,52 70,40 84,30" />
      <circle cx="84" cy="30" r="3" />
      <text x="50" y="108" fontSize="6" fill={stroke} textAnchor="middle" opacity="0.6">50K · stretch</text>
      <polyline points="108,90 122,80 136,72 150,64 164,58 178,52" />
      <circle cx="178" cy="52" r="3" fill={accent} stroke="none"/>
      <text x="150" y="108" fontSize="6" fill={stroke} textAnchor="middle" opacity="0.6">35K · honest</text>
    </svg>
  ),

  // 08 Strategy delivered (timeline)
  Strategy: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <polyline points="14,38 32,32 50,30 68,22 86,18 104,14 122,16 140,12 158,10 176,8 186,8" />
      <rect x="14" y="50" width="172" height="22" strokeDasharray="3 3"/>
      <rect x="32" y="54" width="20" height="14" fill={accent} stroke="none" opacity="0.5"/>
      <rect x="100" y="54" width="20" height="14" fill={accent} stroke="none" opacity="0.5"/>
      <line x1="14" y1="84" x2="186" y2="84"/>
      {[20,40,60,80,100,120,140,160].map((x,i)=>(
        <circle key={i} cx={x} cy="84" r={i===2||i===5?4:2.5}
          fill={i===2||i===5?accent:(i<3?stroke:"#fff")} stroke={stroke}/>
      ))}
      <rect x="14" y="98" width="40" height="4" fill={stroke} stroke="none"/>
      <rect x="60" y="98" width="40" height="4" fill={stroke} stroke="none" opacity="0.5"/>
      <rect x="106" y="98" width="40" height="4" fill={stroke} stroke="none" opacity="0.3"/>
      <rect x="14" y="108" width="100" height="4" fill={stroke} stroke="none" opacity="0.4"/>
    </svg>
  ),

  // 09 Weekly check-in
  Checkin: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <rect x="14" y="14" width="80" height="8" fill={stroke} stroke="none"/>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x="14" y={32+i*22} width="10" height="10" rx="2"/>
          {i<2 && <line x1="16" y1={37+i*22} x2="22" y2={41+i*22}/>}
          {i<2 && <line x1="22" y1={41+i*22} x2="22" y2={34+i*22}/>}
          <rect x="30" y={34+i*22} width="100" height="6" fill={stroke} stroke="none" opacity={i<2?1:0.5}/>
          <rect x="134" y={32+i*22} width="40" height="10" rx="5" fill={i===2?accent:"none"} stroke={stroke}/>
        </g>
      ))}
      <rect x="14" y="104" width="172" height="14" strokeDasharray="3 3"/>
      <rect x="20" y="108" width="40" height="6" fill={stroke} stroke="none" opacity="0.6"/>
    </svg>
  ),

  // 10 Refresh / credits / pivot
  Credits: ({ stroke = "currentColor", w = 200, h = 130, accent = "currentColor" }) => (
    <svg viewBox="0 0 200 130" width={w} height={h} fill="none" stroke={stroke} strokeWidth="1.2">
      <rect x="6" y="6" width="188" height="118" rx="3" />
      <rect x="14" y="14" width="172" height="20" />
      <text x="22" y="28" fontSize="9" fontFamily="monospace" fill={stroke}>40 CR</text>
      <rect x="100" y="18" width="78" height="12" fill={accent} stroke="none"/>
      <rect x="14" y="44" width="54" height="68" />
      <text x="41" y="58" fontSize="7" fontFamily="monospace" fill={stroke} textAnchor="middle">REFRESH</text>
      <text x="41" y="100" fontSize="9" fontFamily="monospace" fill={stroke} textAnchor="middle">FREE</text>
      <rect x="74" y="44" width="54" height="68" />
      <text x="101" y="58" fontSize="7" fontFamily="monospace" fill={stroke} textAnchor="middle">PIVOT</text>
      <text x="101" y="100" fontSize="9" fontFamily="monospace" fill={stroke} textAnchor="middle">2 CR</text>
      <rect x="134" y="44" width="54" height="68" fill={accent} stroke={stroke}/>
      <text x="161" y="58" fontSize="7" fontFamily="monospace" fill="#000" textAnchor="middle">NEW</text>
      <text x="161" y="100" fontSize="9" fontFamily="monospace" fill="#000" textAnchor="middle">10 CR</text>
    </svg>
  ),
};

const WF_STEPS = [
  { n: "01", key: "Landing",       title: "Landing",            blurb: "First impression, plain bargain." },
  { n: "02", key: "Language",      title: "Language + account", blurb: "EN or UK. Business or Creator." },
  { n: "03", key: "Export",        title: "Export walkthrough", blurb: "How to pull your CSVs." },
  { n: "04", key: "Upload",        title: "Upload + coverage",  blurb: "Drop files. We map the gaps." },
  { n: "05", key: "Categorize",    title: "Categorize posts",   blurb: "Review what the AI tagged." },
  { n: "06", key: "Goal",          title: "Set a goal",          blurb: "Pick a template or write one." },
  { n: "07", key: "Achievability", title: "Achievability check", blurb: "If it's a stretch, we say so." },
  { n: "08", key: "Strategy",      title: "Strategy delivered",  blurb: "12-week calendar with peaks." },
  { n: "09", key: "Checkin",       title: "Weekly check-in",     blurb: "Three things this week. Free." },
  { n: "10", key: "Credits",       title: "Refresh & pivot",     blurb: "Free, 2cr, or 10cr — your call." },
];

window.WF = WF;
window.WF_STEPS = WF_STEPS;
