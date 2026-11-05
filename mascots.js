/* Dgnaldo AI mascots — original animated SVG characters: capybara, pig, turtle */
(function () {
  const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="mgCapyBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b07a45"/><stop offset="1" stop-color="#7a502d"/></linearGradient>
  <linearGradient id="mgCapyHead" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b98450"/><stop offset="1" stop-color="#8d5f36"/></linearGradient>
  <linearGradient id="mgPigBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc9d4"/><stop offset="1" stop-color="#f09bb0"/></linearGradient>
  <radialGradient id="mgPigHead" cx=".42" cy=".35" r=".7"><stop offset="0" stop-color="#ffdbe3"/><stop offset="1" stop-color="#f3a2b6"/></radialGradient>
  <radialGradient id="mgShell" cx=".4" cy=".3" r=".85"><stop offset="0" stop-color="#86cc84"/><stop offset=".55" stop-color="#43905a"/><stop offset="1" stop-color="#29603a"/></radialGradient>
  <linearGradient id="mgSkin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c3e29a"/><stop offset="1" stop-color="#86b866"/></linearGradient>
  <linearGradient id="mgGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3b0"/><stop offset=".45" stop-color="#f2c94c"/><stop offset="1" stop-color="#c38f12"/></linearGradient>
  <linearGradient id="mgSilver" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#cfd6e0"/><stop offset="1" stop-color="#8592a3"/></linearGradient>
  <linearGradient id="mgBronze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd3ab"/><stop offset=".5" stop-color="#d9925b"/><stop offset="1" stop-color="#94562a"/></linearGradient>
  <radialGradient id="mgYuzu" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#f0962c"/></radialGradient>
  </defs></svg>`;
  document.body.insertAdjacentHTML("afterbegin", DEFS);

  const MED = { gold: "mgGold", silver: "mgSilver", bronze: "mgBronze" };
  const crown = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="m-crown">
    <path d="M-28 0 L-32 -30 L-15 -15 L0 -38 L15 -15 L32 -30 L28 0Z" fill="url(#mgGold)" stroke="#b07d0e" stroke-width="2" stroke-linejoin="round"/>
    <rect x="-29" y="-4" width="58" height="8" rx="3" fill="#e2b33a" stroke="#b07d0e" stroke-width="1.5"/>
    <circle cx="0" cy="-38" r="4.5" fill="#ff5d6c"/><circle cx="-32" cy="-30" r="3.5" fill="#6fd3ff"/><circle cx="32" cy="-30" r="3.5" fill="#6fd3ff"/>
    <circle cx="0" cy="-12" r="4" fill="#ff5d6c" opacity=".9"/></g></g>`;
  const medal = (x, y, s, kind, n) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="m-medal">
    <path d="M-13 -30 L-4 -2 M13 -30 L4 -2" stroke="#d8434f" stroke-width="7" stroke-linecap="round"/>
    <path d="M-13 -30 L-4 -2" stroke="#2f6fd0" stroke-width="3" stroke-linecap="round"/>
    <circle r="14" fill="url(#${MED[kind]})" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>
    <circle r="9.5" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.5"/>
    <text y="5" text-anchor="middle" font-size="14" font-weight="800" font-family="Be Vietnam Pro,system-ui" fill="rgba(60,40,10,.8)">${n}</text></g></g>`;
  const glasses = (pts, r) => `<g class="m-glasses">${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="rgba(200,230,255,.18)" stroke="#1d1f26" stroke-width="3"/>`).join("")}
    ${pts.length === 2 ? `<path d="M${pts[0][0] + r} ${pts[0][1]} Q100 ${pts[0][1] - 5} ${pts[1][0] - r} ${pts[1][1]}" stroke="#1d1f26" stroke-width="3" fill="none"/>` : `<path d="M${pts[0][0] - r} ${pts[0][1]} q-8 4 -10 14" stroke="#1d1f26" stroke-width="2" fill="none"/>`}</g>`;
  const paper = (x, y) => `<g transform="translate(${x} ${y})"><g class="m-paper">
    <rect x="-24" y="-30" width="48" height="58" rx="5" fill="#fffaf1" stroke="#d8c7ac" stroke-width="2"/>
    <rect x="-9" y="-35" width="18" height="9" rx="3" fill="#8b98a8"/>
    <path d="M-15 -16 H15 M-15 -7 H11 M-15 2 H14" stroke="#c9b99f" stroke-width="2.5" stroke-linecap="round"/>
    <path class="m-check" d="M-10 13 l6 6 l13 -14" stroke="#e5484d" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></g>`;
  const yuzu = (x, y) => `<g transform="translate(${x} ${y})"><g class="m-yuzu"><circle r="13" fill="url(#mgYuzu)"/><circle cx="-4" cy="-4" r="3" fill="#fff" opacity=".5"/>
    <path d="M1 -12 q8 -10 16 -4 q-8 6 -16 4Z" fill="#5fae4f"/></g></g>`;
  const sparks = () => `<g class="m-sparks">${[[30, 40, 1], [172, 52, .8], [24, 120, .7], [178, 130, .9]].map(([x, y, s], i) =>
    `<path class="m-spark" style="animation-delay:${i * .35}s" transform="translate(${x} ${y}) scale(${s})" d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3Z" fill="#ffe27a"/>`).join("")}</g>`;
  const shadow = (cy, rx) => `<ellipse class="m-shadow" cx="100" cy="${cy}" rx="${rx}" ry="7" fill="rgba(0,0,0,.3)"/>`;

  function capy(o) {
    const head = `${o.yuzu ? yuzu(118, 30) : ""}${o.crown ? crown(100, 38, 1) : ""}
      ${o.glasses ? glasses([[74, 61], [126, 61]], 12) : ""}`;
    return `${shadow(189, 64)}<g class="m-bob">
      <path d="M44 150 C44 112 70 96 100 96 C130 96 156 112 156 150 C156 177 140 187 100 187 C60 187 44 177 44 150Z" fill="url(#mgCapyBody)"/>
      <path d="M60 120 Q100 104 140 120" stroke="#c48f5c" stroke-width="3" fill="none" opacity=".4" stroke-linecap="round"/>
      <ellipse cx="100" cy="153" rx="34" ry="25" fill="#cfa173" opacity=".4"/>
      <ellipse cx="72" cy="184" rx="17" ry="7" fill="#553820"/><ellipse cx="128" cy="184" rx="17" ry="7" fill="#553820"/>
      <ellipse cx="62" cy="150" rx="10" ry="18" fill="#7c532f" transform="rotate(14 62 150)"/>
      <ellipse cx="138" cy="150" rx="10" ry="18" fill="#7c532f" transform="rotate(-14 138 150)"/>
      ${o.medal ? medal(100, 134, 1, o.medal, o.n) : ""}${o.paper ? paper(100, 152) : ""}
      <g class="m-head">
        <circle cx="60" cy="42" r="10" fill="#6b4627"/><circle cx="60" cy="43" r="4.5" fill="#3d2615"/>
        <circle cx="140" cy="42" r="10" fill="#6b4627"/><circle cx="140" cy="43" r="4.5" fill="#3d2615"/>
        <rect x="48" y="34" width="104" height="80" rx="38" fill="url(#mgCapyHead)"/>
        <path d="M68 42 Q100 32 132 42" stroke="#d29e69" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/>
        <rect x="64" y="70" width="72" height="44" rx="22" fill="#7a5130"/>
        <ellipse cx="100" cy="77" rx="26" ry="7" fill="#966740" opacity=".55"/>
        <ellipse cx="88" cy="83" rx="5" ry="3" fill="#2a190c"/><ellipse cx="112" cy="83" rx="5" ry="3" fill="#2a190c"/>
        <path d="M100 89 V96 M92 99 Q100 105 108 99" stroke="#2a190c" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <g class="m-eyes"><ellipse cx="74" cy="61" rx="5" ry="5.6" fill="#1b1109"/><circle cx="75.7" cy="59" r="1.8" fill="#fff"/>
          <ellipse cx="126" cy="61" rx="5" ry="5.6" fill="#1b1109"/><circle cx="127.7" cy="59" r="1.8" fill="#fff"/></g>
        <ellipse cx="62" cy="78" rx="7" ry="4" fill="#ee8a7e" opacity=".35"/><ellipse cx="138" cy="78" rx="7" ry="4" fill="#ee8a7e" opacity=".35"/>
        ${head}</g></g>`;
  }
  function pig(o) {
    return `${shadow(190, 60)}<g class="m-bob">
      <path class="m-tail" d="M152 146 c15 -3 18 -17 7 -20 c-9 -2 -10 11 1 9" stroke="#e48aa0" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="100" cy="148" rx="56" ry="40" fill="url(#mgPigBody)"/>
      <ellipse cx="100" cy="156" rx="34" ry="24" fill="#ffd9e1" opacity=".55"/>
      <rect x="62" y="172" width="24" height="17" rx="8" fill="#ee93a9"/><rect x="62" y="183" width="24" height="6" rx="3" fill="#a9566c"/>
      <rect x="114" y="172" width="24" height="17" rx="8" fill="#ee93a9"/><rect x="114" y="183" width="24" height="6" rx="3" fill="#a9566c"/>
      ${o.medal ? medal(100, 142, 1, o.medal, o.n) : ""}${o.paper ? paper(100, 154) : ""}
      <g class="m-head">
        <g class="m-earL"><path d="M60 54 L46 16 L86 36Z" fill="#f096ab"/><path d="M62 46 L54 24 L77 37Z" fill="#d9718c" opacity=".6"/></g>
        <g class="m-earR"><path d="M140 54 L154 16 L114 36Z" fill="#f096ab"/><path d="M138 46 L146 24 L123 37Z" fill="#d9718c" opacity=".6"/></g>
        <circle cx="100" cy="78" r="50" fill="url(#mgPigHead)"/>
        <ellipse cx="100" cy="94" rx="23" ry="16" fill="#f28aa4" stroke="#d96c88" stroke-width="2"/>
        <ellipse cx="96" cy="88" rx="9" ry="3" fill="#fff" opacity=".35"/>
        <ellipse cx="92" cy="95" rx="4" ry="6" fill="#a5425d"/><ellipse cx="108" cy="95" rx="4" ry="6" fill="#a5425d"/>
        <g class="m-eyes"><circle cx="77" cy="68" r="5.5" fill="#24161b"/><circle cx="78.8" cy="66" r="1.9" fill="#fff"/>
          <circle cx="123" cy="68" r="5.5" fill="#24161b"/><circle cx="124.8" cy="66" r="1.9" fill="#fff"/></g>
        <ellipse cx="64" cy="88" rx="8" ry="5" fill="#ff7895" opacity=".45"/><ellipse cx="136" cy="88" rx="8" ry="5" fill="#ff7895" opacity=".45"/>
        <path d="M92 115 Q100 121 108 115" stroke="#a5425d" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        ${o.crown ? crown(100, 32, .95) : ""}${o.glasses ? glasses([[77, 68], [123, 68]], 12) : ""}
        ${o.bow ? `<g transform="translate(130 36) rotate(18)"><path d="M0 0 L-14 -9 L-14 9Z M0 0 L14 -9 L14 9Z" fill="#ff5d7a"/><circle r="4" fill="#e13b5c"/></g>` : ""}</g></g>`;
  }
  function turtle(o) {
    return `${shadow(182, 72)}<g class="m-bob">
      <rect class="m-legB" x="74" y="140" width="20" height="36" rx="10" fill="#79a85b"/>
      <rect class="m-legA" x="138" y="140" width="20" height="36" rx="10" fill="#79a85b"/>
      <path d="M44 146 Q24 152 28 140 Q34 138 46 140Z" fill="url(#mgSkin)"/>
      <g class="m-peek">
        <rect x="136" y="114" width="34" height="24" rx="12" fill="url(#mgSkin)"/>
        <ellipse cx="172" cy="112" rx="23" ry="20" fill="url(#mgSkin)"/>
        <ellipse cx="166" cy="102" rx="10" ry="4" fill="#fff" opacity=".3"/>
        <g class="m-eyes"><circle cx="178" cy="106" r="5" fill="#16210f"/><circle cx="179.8" cy="104" r="1.8" fill="#fff"/></g>
        <ellipse cx="182" cy="118" rx="6" ry="3.5" fill="#ff8f8f" opacity=".45"/>
        <path d="M174 122 Q183 127 191 119" stroke="#2f4a22" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        ${o.crown ? crown(170, 94, .55) : ""}${o.glasses ? glasses([[178, 106]], 9) : ""}</g>
      <rect class="m-legA" x="54" y="140" width="20" height="36" rx="10" fill="url(#mgSkin)"/>
      <rect class="m-legB" x="118" y="140" width="20" height="36" rx="10" fill="url(#mgSkin)"/>
      <path d="M38 150 C38 92 74 68 102 68 C130 68 166 92 166 150Z" fill="url(#mgShell)"/>
      <g stroke="#a6dc8f" stroke-width="3" fill="none" opacity=".55" stroke-linejoin="round">
        <path d="M88 88 H116 L126 110 L116 132 H88 L78 110Z"/>
        <path d="M78 110 L50 124 M126 110 L154 124 M88 88 L78 74 M116 88 L126 74 M88 132 L82 150 M116 132 L122 150"/></g>
      <path d="M58 104 Q76 78 104 75" stroke="rgba(255,255,255,.38)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M30 150 H174 Q174 162 161 162 H43 Q30 162 30 150Z" fill="#d7b876"/>
      <path d="M36 153 H168" stroke="#f1d99a" stroke-width="2" opacity=".7"/>
      ${o.medal ? medal(102, 116, 1, o.medal, o.n) : ""}</g>`;
  }
  const B = { capy, pig, turtle };
  window.mascot = function (kind, o = {}) {
    const size = o.size || 120;
    return `<svg class="m m-${kind} ${o.cls || ""}" style="width:${size}px;height:${size}px;${o.delay ? `animation-delay:${o.delay}s;` : ""}" viewBox="0 0 200 200" aria-hidden="true">${o.sparks ? sparks() : ""}${B[kind](o)}</svg>`;
  };
  // the three medal places
  window.PLACE = [
    { kind: "capy", medal: "gold", crown: true, cls: "jump", name: "Capybara Vàng" },
    { kind: "pig", medal: "silver", bow: true, cls: "hop", name: "Heo Bạc" },
    { kind: "turtle", medal: "bronze", cls: "walk", name: "Rùa Đồng" },
  ];
  window.placeMascot = (i, size, extra = {}) => { const p = PLACE[i]; return mascot(p.kind, { ...p, n: i + 1, size, sparks: i === 0, ...extra }); };
  window.crew = (size, mode) => mode === "grading"
    ? mascot("capy", { size, glasses: true, paper: true, cls: "think" }) + mascot("pig", { size, paper: true, cls: "hop", delay: .2 }) + mascot("turtle", { size, glasses: true, cls: "walk" })
    : mascot("capy", { size, yuzu: true, cls: "wave" }) + mascot("pig", { size, bow: true, cls: "hop" }) + mascot("turtle", { size, cls: "walk" });
  window.tierMascot = (score, size) => score >= 75 ? { svg: mascot("capy", { size, yuzu: true, cls: "jump", sparks: true }), msg: "Chill như capybara — quá đỉnh!" }
    : score >= 45 ? { svg: mascot("pig", { size, bow: true, cls: "hop" }), msg: "Ủn ỉn, khá lắm! Thêm chút nữa là top." }
      : { svg: mascot("turtle", { size, cls: "walk" }), msg: "Chậm mà chắc — vòng sau bứt phá nhé!" };
})();
