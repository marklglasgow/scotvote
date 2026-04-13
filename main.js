const PARTY_CONFIG = [
  { id: "lab", file: "parties/scottish-labour.json", short: "Labour", logoFile: "scotlabour.gif", colors: { bg: "#E4003B", fg: "#FFFFFF", border: "#B30031" } },
  { id: "snp", file: "parties/snp.json", short: "SNP", logoFile: "snp.gif", colors: { bg: "#FFF060", fg: "#000000", border: "#D5C641" } },
  { id: "con", file: "parties/scottish-conservatives.json", short: "Con", logoFile: "scottish conservatives.gif", colors: { bg: "#003087", fg: "#FFFFFF", border: "#244F99" } },
  { id: "ld", file: "parties/scottish-liberal-democrats.json", short: "LD", logoFile: "scotlibdems.gif", colors: { bg: "#FAA61A", fg: "#FFFFFF", border: "#D88C15" } },
  { id: "ref", file: "parties/reform-uk-scotland.json", short: "Reform", logoFile: "reformuk scot.gif", colors: { bg: "#12B6DF", fg: "#FFFFFF", border: "#0F90B0" } },
  { id: "grn", file: "parties/scottish-greens.json", short: "Greens", logoFile: "scotgreens.gif", colors: { bg: "#00B140", fg: "#FFFFFF", border: "#008A32" } }
];

const INLINE_TOPICS = [
  { id: "independence", name: "Scottish Independence", icon: "🏴", desc: "Scotland's constitutional future and independence planning.", questionLabels: { support: "Yes to independence", neutral: "No strong view", oppose: "No to independence" } },
  { id: "nhs", name: "NHS & Healthcare", icon: "🏥", desc: "Funding, reform and access to health services.", questionLabels: { support: "Increase investment", neutral: "No strong view", oppose: "Reduce investment" } },
  { id: "education", name: "Education", icon: "🎓", desc: "Schools, universities and skills policy.", questionLabels: { support: "Increase investment", neutral: "No strong view", oppose: "Reduce investment" } },
  { id: "climate", name: "Climate & Environment", icon: "🌍", desc: "Net zero policy, emissions and environmental protection.", questionLabels: { support: "Prioritise action", neutral: "No strong view", oppose: "Deprioritise" } },
  { id: "economy", name: "Economy & Jobs", icon: "📈", desc: "Economic strategy, jobs and growth models.", questionLabels: { support: "State-led growth", neutral: "No strong view", oppose: "Market-led growth" } },
  { id: "housing", name: "Housing & Homelessness", icon: "🏠", desc: "Housing supply, affordability and homelessness response.", questionLabels: { support: "More social housing", neutral: "No strong view", oppose: "Market-led supply" } },
  { id: "costliving", name: "Cost of Living", icon: "🛒", desc: "Household costs, support measures and affordability.", questionLabels: { support: "More government support", neutral: "No strong view", oppose: "Reduce intervention" } },
  { id: "transport", name: "Public Transport", icon: "🚌", desc: "Rail, bus and public transport investment.", questionLabels: { support: "Expand & invest", neutral: "No strong view", oppose: "Reduce subsidy" } },
  { id: "socialcare", name: "Social Care", icon: "🤝", desc: "Care provision, funding and support services.", questionLabels: { support: "Increase investment", neutral: "No strong view", oppose: "Reduce investment" } },
  { id: "drugs", name: "Drug Policy Reform", icon: "💊", desc: "Approaches to treatment, public health and enforcement.", questionLabels: { support: "Decriminalise / treat", neutral: "No strong view", oppose: "Tougher enforcement" } },
  { id: "landreform", name: "Land Reform", icon: "🌾", desc: "Ownership, access and land use reform.", questionLabels: { support: "More reform", neutral: "No strong view", oppose: "Protect current ownership" } },
  { id: "policing", name: "Policing & Justice", icon: "⚖️", desc: "Police numbers, powers and justice reform.", questionLabels: { support: "More police & powers", neutral: "No strong view", oppose: "Reform-focused" } },
  { id: "energy", name: "Energy Policy", icon: "⚡", desc: "Energy mix, renewables and oil and gas policy.", questionLabels: { support: "Renewables-first", neutral: "No strong view", oppose: "Support oil & gas" } },
  { id: "equality", name: "Equality & Rights", icon: "🌈", desc: "Equalities law, rights protections and inclusion.", questionLabels: { support: "Strengthen protections", neutral: "No strong view", oppose: "Roll back" } },
  { id: "transrights", name: "Trans Rights", icon: "⚧️", desc: "Legal protections, healthcare access and public policy affecting trans people.", questionLabels: { support: "Strengthen trans rights", neutral: "No strong view", oppose: "Roll back trans rights" } },
  { id: "rural", name: "Rural Affairs & Farming", icon: "🚜", desc: "Support for farming, fisheries and rural communities.", questionLabels: { support: "More rural support", neutral: "No strong view", oppose: "Reduce subsidies" } },
  { id: "immigration", name: "Immigration & Borders", icon: "🛂", desc: "Migration policy, border controls and openness.", questionLabels: { support: "More open policy", neutral: "No strong view", oppose: "Stricter controls" } },
  { id: "tax", name: "Tax & Public Spending", icon: "💷", desc: "Tax levels, public spending and fiscal choices.", questionLabels: { support: "Higher tax & spend", neutral: "No strong view", oppose: "Lower tax & spend" } }
];

const DERIVED_SCORES = {
  lab: { independence: 1, nhs: 5, education: 4, climate: 4, economy: 4, housing: 4, costliving: 5, transport: 4, socialcare: 5, drugs: 4, landreform: 4, policing: 4, energy: 3, equality: 4, transrights: 3, rural: 3, immigration: 3, tax: 4 },
  snp: { independence: 5, nhs: 4, education: 4, climate: 4, economy: 3, housing: 3, costliving: 4, transport: 3, socialcare: 4, drugs: 4, landreform: 3, policing: 3, energy: 4, equality: 4, transrights: 4, rural: 3, immigration: 4, tax: 3 },
  con: { independence: 1, nhs: 4, education: 4, climate: 1, economy: 1, housing: 2, costliving: 3, transport: 4, socialcare: 4, drugs: 2, landreform: 1, policing: 5, energy: 1, equality: 2, transrights: 1, rural: 5, immigration: 2, tax: 1 },
  ld: { independence: 2, nhs: 5, education: 4, climate: 4, economy: 3, housing: 3, costliving: 4, transport: 5, socialcare: 4, drugs: 4, landreform: 3, policing: 3, energy: 4, equality: 4, transrights: 5, rural: 3, immigration: 3, tax: 3 },
  ref: { independence: 1, nhs: 4, education: 3, climate: 1, economy: 1, housing: 4, costliving: 4, transport: 3, socialcare: 4, drugs: 1, landreform: 1, policing: 5, energy: 2, equality: 1, transrights: 1, rural: 4, immigration: 1, tax: 1 },
  grn: { independence: 4, nhs: 5, education: 4, climate: 5, economy: 3, housing: 5, costliving: 4, transport: 5, socialcare: 4, drugs: 5, landreform: 5, policing: 3, energy: 5, equality: 5, transrights: 5, rural: 3, immigration: 4, tax: 4 }
};

const WEBSITE_SCORES = {
  lab: { ...DERIVED_SCORES.lab },
  snp: { ...DERIVED_SCORES.snp },
  con: { ...DERIVED_SCORES.con },
  ld: { ...DERIVED_SCORES.ld },
  ref: { ...DERIVED_SCORES.ref, economy: 3, housing: 2, socialcare: 2 },
  grn: { ...DERIVED_SCORES.grn }
};

const SCORE_LABEL = { 1: "strongly opposed", 2: "mild opposition", 3: "neutral / no clear position", 4: "supportive", 5: "strongly champions" };

const INLINE_DATA = {
  parties: [
    { analysis_source: "manifesto", party: { party_name: "Scottish Labour", party_website: "https://scottishlabour.org.uk/", party_leader: "Anas Sarwar" }, manifesto: { manifesto_url: "https://scottishlabour.org.uk/wp-content/uploads/2026/04/Scottish-Labour-Manifesto-2026.pdf" }, sources: [{ source_id: "labour-manifesto", title: "Scottish Labour Manifesto 2026" }] },
    { analysis_source: "website_structured", party: { party_name: "Scottish National Party", party_website: "https://www.snp.org", party_leader: "John Swinney" }, sources: [{ source_id: "snp-site", title: "SNP", url: "https://www.snp.org" }] },
    { analysis_source: "manifesto", party: { party_name: "Scottish Conservatives", party_website: "https://www.scottishconservatives.com", party_leader: "Russell Findlay" }, sources: [{ source_id: "con-manifesto-2026", title: "Get Scotland Working: The Scottish Conservative and Unionist Party Manifesto 2026", url: "https://www.scottishconservatives.com/wp-content/uploads/2026/04/Web-SCUP-Manifesto-2026.pdf" }] },
    { analysis_source: "website_structured", party: { party_name: "Scottish Liberal Democrats", party_website: "https://www.scotlibdems.org.uk", party_leader: "Alex Cole-Hamilton" }, sources: [{ source_id: "ld-site", title: "Scottish Liberal Democrats", url: "https://www.scotlibdems.org.uk" }] },
    { analysis_source: "manifesto", party: { party_name: "Reform UK Scotland", party_website: "https://reformuk.scot/", party_leader: "Malcolm Offord" }, sources: [{ source_id: "reform-manifesto", title: "Reform UK Scotland Manifesto", url: "https://reformuk.scot/wp-content/uploads/2026/04/Reform-UK-Scotland-Manifesto-2026.pdf" }] },
    { analysis_source: "website_structured", party: { party_name: "Scottish Greens", party_website: "https://greens.scot", party_leader: "Gillian Mackay and Ross Greer" }, sources: [{ source_id: "greens-site", title: "Scottish Greens", url: "https://greens.scot" }] }
  ]
};

let PARTIES = [];
let TOPICS = INLINE_TOPICS.map((item) => ({ ...item }));
let loadPromise = null;

function byId(id) { return document.getElementById(id); }
function party(id) { return PARTIES.find((item) => item.id === id); }
function topic(id) { return TOPICS.find((item) => item.id === id); }
function strLbl(n) { return ({ 1: "Slightly", 2: "Somewhat", 3: "Moderately", 4: "Very", 5: "Extremely" }[n] || "Moderately"); }
function dirLabel(t, dir) { const item = typeof t === "string" ? topic(t) : t; return item?.questionLabels?.[dir] || "No strong view"; }

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function logo(partyId, sm = false) {
  const config = PARTY_CONFIG.find((entry) => entry.id === partyId);
  const cls = sm ? "party-logo party-logo-sm" : "party-logo party-logo-lg";
  const wrapCls = sm ? "party-logo-box party-logo-box-sm" : "party-logo-box party-logo-box-lg";
  if (config?.logoFile) {
    return `<span class="${wrapCls}"><img class="${cls}" src="${config.logoFile}" alt="${escapeHtml(config.short)} logo"></span>`;
  }
  return `
    <svg width="${sm ? 28 : 36}" height="${sm ? 28 : 36}" viewBox="0 0 ${sm ? 28 : 36} ${sm ? 28 : 36}" fill="none" aria-hidden="true">
      <rect x="0.6" y="0.6" width="${(sm ? 28 : 36) - 1.2}" height="${(sm ? 28 : 36) - 1.2}" rx="${sm ? 6 : 8}" fill="${config?.colors?.bg || "#3D3530"}" stroke="${config?.colors?.border || "#3D3530"}" stroke-width="1.2"></rect>
      <text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle" fill="${config?.colors?.fg || "#FFFFFF"}" style="font-family:'DM Sans',sans-serif;font-weight:700;font-size:${sm ? 8 : 9.5}pt">${escapeHtml((config?.short || "").slice(0, 5))}</text>
    </svg>
  `;
}

function convertPartyFile(raw, config) {
  const isManifesto = raw.analysis_source === "manifesto";
  const manifestoUrl = raw.sources?.[0]?.url || raw.manifesto?.manifesto_url || "";
  return {
    id: config.id,
    short: config.short,
    logoFile: config.logoFile,
    name: raw.party?.party_name || config.short,
    leader: raw.party?.party_leader || "TBC",
    web: raw.party?.party_website || "",
    manifestoStatus: isManifesto ? "published" : "pending",
    manifestoUrl: isManifesto ? manifestoUrl : "",
    estimated: !isManifesto,
    topicScores: DERIVED_SCORES[config.id],
    websiteScores: WEBSITE_SCORES[config.id],
    colors: config.colors
  };
}

function mergeTopicScores() {
  TOPICS = INLINE_TOPICS.map((item) => ({ ...item }));
  TOPICS.forEach((t) => {
    t.partyScores = {};
    t.partyWebsiteScores = {};
    PARTIES.forEach((p) => {
      t.partyScores[p.id] = DERIVED_SCORES[p.id][t.id] ?? 3;
      t.partyWebsiteScores[p.id] = WEBSITE_SCORES[p.id][t.id] ?? 3;
    });
  });
}

async function loadData() {
  if (loadPromise) {
    return loadPromise;
  }

  TOPICS = INLINE_TOPICS.map((item) => ({ ...item }));

  loadPromise = (async () => {
    try {
      const rawFiles = await Promise.all(
        PARTY_CONFIG.map(async (config) => {
          const response = await fetch(config.file);
          if (!response.ok) {
            throw new Error(`Failed to load ${config.file}`);
          }
          return response.json();
        })
      );
      PARTIES = rawFiles.map((raw, index) => convertPartyFile(raw, PARTY_CONFIG[index]));
    } catch (_error) {
      PARTIES = INLINE_DATA.parties.map((raw, index) => convertPartyFile(raw, PARTY_CONFIG[index]));
    }

    mergeTopicScores();
    return { parties: PARTIES, topics: TOPICS };
  })();

  return loadPromise;
}

function initNav(pageId) {
  const nav = byId("nav-links");
  if (!nav) {
    return;
  }

  const links = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "compare.html", label: "Compare", id: "compare" },
    { href: "parties.html", label: "Parties", id: "parties" },
    { href: "methodology.html", label: "Methodology", id: "methodology" },
    { href: "about.html", label: "About", id: "about" },
    { href: "contact.html", label: "Contact", id: "contact" },
    { href: "#", label: "Share", id: "share" }
  ];

  nav.innerHTML = links.map((link) => `<li><a href="${link.href}"${pageId === link.id ? ' class="active"' : ""}>${link.label}</a></li>`).join("");
}

function initFooter() {
  const footer = byId("site-footer");
  if (!footer) {
    return;
  }

  footer.className = "footer";
  footer.innerHTML = `
    <div class="container tc">
      <div class="footer-title">Scot Vote Manifesto Matcher</div>
      <div>Scottish Parliament Elections 2026</div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="compare.html">Compare</a>
        <a href="parties.html">Parties</a>
        <a href="methodology.html">Methodology</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <p class="footer-copy">Not affiliated with any political party · All party scores are estimates until official manifestos are published.</p>
    </div>
  `;
}

function showLoadError(msg) {
  document.body.innerHTML = `
    <main class="section">
      <div class="container">
        <div class="banner banner-warn">
          <div class="banner-icon">!</div>
          <div>${escapeHtml(msg)}</div>
        </div>
      </div>
    </main>
  `;
}

function initShareLinks() {
  const containers = document.querySelectorAll("[data-share-mount]");
  if (!containers.length) {
    return;
  }

  const url = encodeURIComponent(window.location.href);
  const title = document.title.replace(/\s+[–-]\s+Scot Vote Manifesto Matcher$/, "").trim() || "Scot Vote Manifesto Matcher";
  const text = encodeURIComponent(`${title} on Scot Vote Manifesto Matcher`);
  const markup = `
    <div class="share-bar">
      <div class="share-label">Share this page</div>
      <a class="share-btn" href="https://twitter.com/intent/tweet?url=${url}&text=${text}" target="_blank" rel="noopener">X</a>
      <a class="share-btn" href="https://bsky.app/intent/compose?text=${text}%20${url}" target="_blank" rel="noopener">Bluesky</a>
      <a class="share-btn" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener">Facebook</a>
      <a class="share-btn" href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  `;

  containers.forEach((container) => {
    container.innerHTML = markup;
  });
}

function showCopyToast(message) {
  let toast = byId("copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "copy-toast";
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showCopyToast._timer);
  showCopyToast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function initShareAction() {
  const shareLink = Array.from(document.querySelectorAll("#nav-links a")).find((a) => a.textContent.trim() === "Share");
  if (!shareLink) {
    return;
  }

  shareLink.addEventListener("click", async (event) => {
    event.preventDefault();
    const text = "Try this site to see what party matches your priorities: https://scotvote.vercel.app";
    try {
      await navigator.clipboard.writeText(text);
      showCopyToast("Text copied to clipboard");
    } catch (_error) {
      showCopyToast("Unable to copy text");
    }
  });
}
