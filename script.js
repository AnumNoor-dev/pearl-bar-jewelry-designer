/**
 * THE PEARL BAR · THE CHARM BAR (VIRAL LUXURY DESK ATELIER)
 * - 4 Jewelry Modes: Bracelet, Necklace, Rings Stacker, Earrings
 * - High-Luster Genuine Pearls (Akoya, Golden South Sea, Tahitian Peacock, Baroque)
 * - Large, Clear, Beautifully Scaled Charms & Pearls on Chain
 * - Round Blush Velvet Travel Case Packaging with Zipper & Wax Seal
 * - Web Audio API Synthesizer (Chimes, Register Ka-Ching, Zipper, Music Box)
 */

(function () {
  'use strict';

  /* --- Currency & Exchange --- */
  let currentCurrency = 'USD';
  const RATES = {
    USD: { symbol: '$', rate: 1, basePrice: 45, engraveFee: 5 },
    PKR: { symbol: 'Rs ', rate: 280, basePrice: 2400, engraveFee: 400 }
  };

  const fmt = (usdAmount) => {
    const c = RATES[currentCurrency];
    const val = currentCurrency === 'USD' ? usdAmount : Math.round(usdAmount * c.rate);
    return `${c.symbol}${val.toLocaleString()}`;
  };

  /* --- Multi-Layered SVG Gradients for Genuine Pearls, Metals & Gems --- */
  const SHARED_SVG_DEFS = `
    <defs>
      <!-- 18K Yellow Gold Wire & Link Gradient -->
      <linearGradient id="goldWire" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff9d6"/>
        <stop offset="25%" stop-color="#ffd54f"/>
        <stop offset="60%" stop-color="#d4af37"/>
        <stop offset="85%" stop-color="#b8860b"/>
        <stop offset="100%" stop-color="#7a5405"/>
      </linearGradient>

      <!-- Sterling Silver Chrome Gradient -->
      <linearGradient id="silverChrome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="30%" stop-color="#f1f5f9"/>
        <stop offset="65%" stop-color="#cbd5e1"/>
        <stop offset="85%" stop-color="#94a3b8"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>

      <!-- GENUINE SOUTH SEA AKOYA PEARL (High-Luster Mirror Orient) -->
      <radialGradient id="akoyaPearl" cx="32%" cy="28%" r="72%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="22%" stop-color="#fff5f9"/>
        <stop offset="48%" stop-color="#fae3ef"/>
        <stop offset="72%" stop-color="#ecd0e6"/>
        <stop offset="90%" stop-color="#c9adc8"/>
        <stop offset="100%" stop-color="#8a698a"/>
      </radialGradient>

      <!-- GENUINE GOLDEN SOUTH SEA PEARL (24K Honey Luster) -->
      <radialGradient id="goldenPearl" cx="32%" cy="28%" r="72%">
        <stop offset="0%" stop-color="#fffde8"/>
        <stop offset="25%" stop-color="#ffecb3"/>
        <stop offset="55%" stop-color="#ffd54f"/>
        <stop offset="80%" stop-color="#e6a117"/>
        <stop offset="100%" stop-color="#8f5b04"/>
      </radialGradient>

      <!-- GENUINE TAHITIAN PEACOCK PEARL (Emerald-Violet Sheen) -->
      <radialGradient id="tahitianPearl" cx="32%" cy="28%" r="72%">
        <stop offset="0%" stop-color="#e0f2f1"/>
        <stop offset="25%" stop-color="#80cbc4"/>
        <stop offset="50%" stop-color="#26a69a"/>
        <stop offset="75%" stop-color="#4a148c"/>
        <stop offset="100%" stop-color="#12061f"/>
      </radialGradient>

      <!-- Glossy Enamel Red Cherry -->
      <radialGradient id="cherryRed" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#ff5252"/>
        <stop offset="40%" stop-color="#d50000"/>
        <stop offset="100%" stop-color="#5f0000"/>
      </radialGradient>

      <!-- Glossy Ruby Enamel -->
      <radialGradient id="rubyEnamel" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#ff4081"/>
        <stop offset="50%" stop-color="#c2185b"/>
        <stop offset="100%" stop-color="#560027"/>
      </radialGradient>

      <!-- Cobalt Blue Enamel -->
      <linearGradient id="blueEnamel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#64b5f6"/>
        <stop offset="40%" stop-color="#1976d2"/>
        <stop offset="100%" stop-color="#0d47a1"/>
      </linearGradient>

      <!-- Hot Pink Butterfly Enamel -->
      <linearGradient id="pinkEnamel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff80ab"/>
        <stop offset="50%" stop-color="#f50057"/>
        <stop offset="100%" stop-color="#880e4f"/>
      </linearGradient>

      <!-- Royal Amethyst Crystal -->
      <radialGradient id="amethystShine" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#f3e5f5"/>
        <stop offset="35%" stop-color="#ba68c8"/>
        <stop offset="70%" stop-color="#7b1fa2"/>
        <stop offset="100%" stop-color="#311b92"/>
      </radialGradient>

      <!-- Amber Healing Glow -->
      <radialGradient id="amberGlow" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#fffde7"/>
        <stop offset="35%" stop-color="#fff59d"/>
        <stop offset="70%" stop-color="#ffb300"/>
        <stop offset="100%" stop-color="#e65100"/>
      </radialGradient>

      <!-- Drop Shadow Filter for Depth -->
      <filter id="charmShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="7" stdDeviation="4.5" flood-color="#4a0e24" flood-opacity="0.32"/>
      </filter>
    <radialGradient id="mpWhite" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f6eef2"/><stop offset="1" stop-color="#cdbfc9"/></radialGradient><radialGradient id="mpRose" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fff1f5"/><stop offset=".55" stop-color="#f6bccd"/><stop offset="1" stop-color="#d48aa3"/></radialGradient><radialGradient id="mpChamp" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fffbe8"/><stop offset=".55" stop-color="#f2dc9f"/><stop offset="1" stop-color="#c79b45"/></radialGradient><radialGradient id="mpLilac" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#f8f0ff"/><stop offset=".55" stop-color="#d9c3f6"/><stop offset="1" stop-color="#a487d3"/></radialGradient><radialGradient id="mpBlack" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#c3ccd6"/><stop offset=".55" stop-color="#4b5065"/><stop offset="1" stop-color="#0f101a"/></radialGradient><radialGradient id="mpMint" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#f0fff9"/><stop offset=".55" stop-color="#bfeede"/><stop offset="1" stop-color="#7fc9ab"/></radialGradient><radialGradient id="mpAqua" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#f1fcff"/><stop offset=".55" stop-color="#bfe6f2"/><stop offset="1" stop-color="#78b9cf"/></radialGradient><radialGradient id="mgCrystal" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#d9ecff"/><stop offset="1" stop-color="#9ec7ee"/></radialGradient><radialGradient id="mgPink" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffe3ee"/><stop offset=".55" stop-color="#ff7eb6"/><stop offset="1" stop-color="#d6336c"/></radialGradient><radialGradient id="mgAmeth" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#e9d2ff"/><stop offset=".55" stop-color="#a05ae8"/><stop offset="1" stop-color="#5a1fa8"/></radialGradient><radialGradient id="spAurora" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f2e6ff"/><stop offset="1" stop-color="#c9b0ee"/></radialGradient><radialGradient id="spRoseGold" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fff0ec"/><stop offset=".55" stop-color="#f4b9a6"/><stop offset="1" stop-color="#cf8570"/></radialGradient><radialGradient id="spTahiti" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#b9c7d6"/><stop offset=".55" stop-color="#3f4c66"/><stop offset="1" stop-color="#0c1022"/></radialGradient><radialGradient id="spLavender" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fbf3ff"/><stop offset=".55" stop-color="#dcc2f7"/><stop offset="1" stop-color="#a77fd6"/></radialGradient><radialGradient id="spMint" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#f3fffa"/><stop offset=".55" stop-color="#c5f0e2"/><stop offset="1" stop-color="#7cc9b0"/></radialGradient><radialGradient id="spGolden" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#fffbe2"/><stop offset=".55" stop-color="#f8de8c"/><stop offset="1" stop-color="#cc9a2e"/></radialGradient><radialGradient id="pearlRim"><stop offset=".7" stop-color="#3b1470" stop-opacity="0"/><stop offset="1" stop-color="#4a1d3a" stop-opacity=".35"/></radialGradient><linearGradient id="pearlIri" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9ad5" stop-opacity=".55"/><stop offset=".5" stop-color="#8fe3ff" stop-opacity=".5"/><stop offset="1" stop-color="#c8a6ff" stop-opacity=".55"/></linearGradient>
    </defs>
  `;

  /* --- Complete Catalog: Pearls, Charms, Rings, Earring Drops --- */
  const INVENTORY = [
    // 1. GENUINE SHINING PEARLS
    {
      id: 'akoya_pearl',
      name: 'South Sea Pearl',
      price: 18,
      category: 'pearls',
      svg: `
        <g filter="url(#charmShadow)">
          <!-- Pearl Sphere with Mirror Orient -->
          <circle cx="0" cy="2" r="13" fill="url(#akoyaPearl)"/>
          <!-- 18K Filigree Cap with Micro-Diamonds -->
          <path d="M-9 -6 Q-4 -14 0 -13 Q4 -14 9 -6 L7 -2 Q0 -6 -7 -2 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle cx="0" cy="-9" r="1.6" fill="#ffffff"/>
          <circle cx="-4" cy="-7" r="1.2" fill="#ffffff"/>
          <circle cx="4" cy="-7" r="1.2" fill="#ffffff"/>
          <!-- Luminous Specular Glint & Secondary Crescent Reflection -->
          <ellipse cx="-4.5" cy="-2.5" rx="4.5" ry="3" fill="#ffffff" opacity="0.95" transform="rotate(-30 -4.5 -2.5)"/>
          <path d="M-6 6 C-8 10 -2 12 5 9" fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.45"/>
        </g>
      `
    },
    {
      id: 'golden_pearl',
      name: 'Golden Honey Pearl',
      price: 20,
      category: 'pearls',
      svg: `
        <g filter="url(#charmShadow)">
          <circle cx="0" cy="2" r="13" fill="url(#goldenPearl)"/>
          <path d="M-9 -6 Q-4 -14 0 -13 Q4 -14 9 -6 L7 -2 Q0 -6 -7 -2 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle cx="0" cy="-9" r="1.6" fill="#ffffff"/>
          <ellipse cx="-4.5" cy="-2.5" rx="4.5" ry="3" fill="#ffffff" opacity="0.9" transform="rotate(-30 -4.5 -2.5)"/>
          <path d="M-6 6 C-8 10 -2 12 5 9" fill="none" stroke="#ffe082" stroke-width="1.4" opacity="0.5"/>
        </g>
      `
    },
    {
      id: 'tahitian_pearl',
      name: 'Tahitian Peacock Pearl',
      price: 22,
      category: 'pearls',
      svg: `
        <g filter="url(#charmShadow)">
          <circle cx="0" cy="2" r="13" fill="url(#tahitianPearl)"/>
          <path d="M-9 -6 Q-4 -14 0 -13 Q4 -14 9 -6 L7 -2 Q0 -6 -7 -2 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle cx="0" cy="-9" r="1.6" fill="#ffffff"/>
          <ellipse cx="-4.5" cy="-2.5" rx="4.5" ry="3" fill="#ffffff" opacity="0.95" transform="rotate(-30 -4.5 -2.5)"/>
          <path d="M-6 6 C-8 10 -2 12 5 9" fill="none" stroke="#80cbc4" stroke-width="1.4" opacity="0.4"/>
        </g>
      `
    },
    {
      id: 'baroque_pearl',
      name: 'Baroque Drop Pearl',
      price: 19,
      category: 'pearls',
      svg: `
        <g filter="url(#charmShadow)">
          <!-- Undulating Organic Teardrop Contour -->
          <path d="M0 -8 C-12 -2 -14 8 -8 15 C-2 20 8 18 12 12 C15 5 10 -2 0 -8 Z" fill="url(#akoyaPearl)"/>
          <!-- Diamond Bail -->
          <path d="M-6 -8 L0 -14 L6 -8 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle cx="0" cy="-11" r="1.8" fill="#ffffff"/>
          <ellipse cx="-3" cy="2" rx="4.5" ry="3" fill="#ffffff" opacity="0.9" transform="rotate(-20 -3 2)"/>
        </g>
      `
    },
    {
      id: 'pearl_blossom',
      name: 'Pearl Blossom Cluster',
      price: 24,
      category: 'pearls',
      svg: `
        <g filter="url(#charmShadow)">
          ${[0, 72, 144, 216, 288].map(a => `
            <circle cx="0" cy="-7.5" r="5.2" fill="url(#akoyaPearl)" stroke="url(#goldWire)" stroke-width="0.8" transform="rotate(${a})"/>
          `).join('')}
          <circle r="4.5" fill="url(#goldWire)"/>
          <circle r="2.5" fill="#ffffff"/>
        </g>
      `
    },

    // 2. ICONIC CHARMS & PENDANTS
    {
      id: 'cherries',
      name: 'Sweet cherries',
      price: 14,
      category: 'charms',
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M0-14 Q6-18 12-14 Q8-10 0-14" fill="#4caf50" stroke="#2e7d32" stroke-width="0.8"/>
          <path d="M-6-2 Q-2-12 0-14 Q4-10 6 0" fill="none" stroke="#2e7d32" stroke-width="2"/>
          <circle cx="-6" cy="6" r="8.5" fill="url(#cherryRed)"/>
          <circle cx="6" cy="8" r="8.5" fill="url(#cherryRed)"/>
          <ellipse cx="-8" cy="3" rx="2.5" ry="3.5" fill="#fff" opacity="0.85" transform="rotate(-20 -8 3)"/>
          <ellipse cx="4" cy="5" rx="2.5" ry="3.5" fill="#fff" opacity="0.85" transform="rotate(-20 4 5)"/>
        </g>
      `
    },
    {
      id: 'bow',
      name: 'Tied with love',
      price: 12,
      category: 'charms',
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M0-2 Q-10-10 -13 0 Q-6 6 0 0 Q6 6 13 0 Q10-10 0-2" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <path d="M-3 0 L-7 12 L-2 10 L0 3 L2 10 L7 12 L3 0" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle r="3.2" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle cx="-6" cy="-2" r="1.5" fill="#fff" opacity="0.65"/>
          <circle cx="6" cy="-2" r="1.5" fill="#fff" opacity="0.65"/>
        </g>
      `
    },
    {
      id: 'blue_bloom',
      name: 'Blue bloom',
      price: 14,
      category: 'charms',
      svg: `
        <g filter="url(#charmShadow)">
          ${[0, 72, 144, 216, 288].map(a => `
            <ellipse cx="0" cy="-8.5" rx="5.8" ry="8.8" fill="url(#blueEnamel)" stroke="url(#goldWire)" stroke-width="1.2" transform="rotate(${a})"/>
          `).join('')}
          <circle r="4.8" fill="url(#goldWire)"/>
          <circle r="2.6" fill="#fff" opacity="0.95"/>
        </g>
      `
    },
    {
      id: 'silver_heart',
      name: 'Heart of silver',
      price: 12,
      category: 'charms',
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M0 14 C-19 0 -15 -15 0 -6 C15 -15 19 0 0 14 Z" fill="url(#silverChrome)" stroke="#ffffff" stroke-width="1.6"/>
          <path d="M-7 -4 C-10 -9 -5 -11 0 -6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity="0.9"/>
        </g>
      `
    },
    {
      id: 'pink_flutter',
      name: 'Pink flutter',
      price: 14,
      category: 'charms',
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M0 0 C-6 -12 -18 -8 -13 3 C-9 9 0 2 0 0 Z" fill="url(#pinkEnamel)" stroke="url(#goldWire)" stroke-width="1"/>
          <path d="M0 0 C6 -12 18 -8 13 3 C9 9 0 2 0 0 Z" fill="url(#pinkEnamel)" stroke="url(#goldWire)" stroke-width="1"/>
          <path d="M0 2 C-5 5 -10 11 -5 13 C-2 13 0 5 0 2 Z" fill="url(#pinkEnamel)" stroke="url(#goldWire)" stroke-width="0.8"/>
          <path d="M0 2 C5 5 10 11 5 13 C2 13 0 5 0 2 Z" fill="url(#pinkEnamel)" stroke="url(#goldWire)" stroke-width="0.8"/>
          <ellipse cx="0" cy="2" rx="2" ry="7" fill="url(#goldWire)"/>
          <circle cx="-7" cy="-3" r="1.6" fill="#fff" opacity="0.75"/>
          <circle cx="7" cy="-3" r="1.6" fill="#fff" opacity="0.75"/>
        </g>
      `
    },
    {
      id: 'north_star',
      name: 'North star',
      price: 10,
      category: 'charms',
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M0-16 L3.5-4 L15 0 L3.5 4 L0 16 L-3.5 4 L-15 0 L-3.5-4 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <path d="M0-10 L2-3 L9 0 L2 3 L0 10 L-2 3 L-9 0 L-2-3 Z" fill="#ffffff" opacity="0.95"/>
          <circle r="3" fill="#ffffff"/>
        </g>
      `
    },

    // 3. TANGLED CORONA ICONS
    {
      id: 'corona_sun',
      name: 'Corona sun',
      price: 16,
      category: 'tangled',
      svg: `
        <g filter="url(#charmShadow)">
          <circle r="8" fill="url(#amethystShine)"/>
          <circle r="8" fill="none" stroke="url(#goldWire)" stroke-width="1.8"/>
          ${[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map(a => `
            <path d="M0-8 L-2-15 L0-13 L2-15 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.5" transform="rotate(${a})"/>
          `).join('')}
          <circle cx="-2" cy="-2" r="2.2" fill="#fff" opacity="0.85"/>
        </g>
      `
    },
    {
      id: 'amethyst_crown',
      name: 'Crown heart',
      price: 16,
      category: 'tangled',
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M0 14 C-17 0 -13 -13 0 -5 C13 -13 17 0 0 14 Z" fill="url(#amethystShine)" stroke="url(#goldWire)" stroke-width="1.8"/>
          <path d="M-8 -6 L-8 -13 L-4 -9 L0 -15 L4 -9 L8 -13 L8 -6 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <circle cx="0" cy="-14" r="1.6" fill="#fff"/>
          <circle cx="-8" cy="-12" r="1.3" fill="#fff"/>
          <circle cx="8" cy="-12" r="1.3" fill="#fff"/>
          <ellipse cx="-4" cy="-1" rx="3.5" ry="1.8" fill="#fff" opacity="0.8" transform="rotate(-30 -4 -1)"/>
        </g>
      `
    },
    {
      id: 'sundrop_flower',
      name: 'Sundrop bloom',
      price: 14,
      category: 'tangled',
      svg: `
        <g filter="url(#charmShadow)">
          ${[0, 72, 144, 216, 288].map(a => `
            <ellipse cx="0" cy="-9" rx="5.2" ry="8.8" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8" transform="rotate(${a})"/>
          `).join('')}
          <circle r="5.8" fill="url(#amberGlow)"/>
          <circle r="2.8" fill="#ffffff" opacity="0.95"/>
        </g>
      `
    },
    {
      id: 'pascal',
      name: 'Pascal emerald',
      price: 15,
      category: 'tangled',
      svg: `
        <g filter="url(#charmShadow)">
          <ellipse cx="0" cy="0" rx="9.5" ry="6.5" fill="#10b981" stroke="#047857" stroke-width="1"/>
          <circle cx="5" cy="-2" r="4" fill="#34d399"/>
          <circle cx="5.5" cy="-2" r="1.7" fill="#064e3b"/>
          <path d="M-8 0 Q-14 2 -12 8 Q-8 8 -10 4" fill="none" stroke="#10b981" stroke-width="2.6" stroke-linecap="round"/>
          <circle cx="-3" cy="2" r="1.6" fill="#ffd54f"/>
        </g>
      `
    },

    // 4. HEIRLOOM RINGS
    {
      id: 'ring_corona_tiara',
      name: 'Corona Tiara Ring',
      price: 28,
      category: 'rings',
      isRing: true,
      svg: `
        <g filter="url(#charmShadow)">
          <!-- Gold Chevron Band -->
          <path d="M-18 6 L0 14 L18 6 L18 10 L0 18 L-18 10 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <!-- Tiara Marquise Crystals -->
          <path d="M0 6 L-3 -4 L0 -10 L3 -4 Z" fill="#ffffff" stroke="url(#goldWire)" stroke-width="0.8"/>
          <path d="M-7 4 L-9 -2 L-6 -6 L-4 0 Z" fill="#ffffff" stroke="url(#goldWire)" stroke-width="0.8"/>
          <path d="M7 4 L9 -2 L6 -6 L4 0 Z" fill="#ffffff" stroke="url(#goldWire)" stroke-width="0.8"/>
        </g>
      `
    },
    {
      id: 'ring_pear_amethyst',
      name: 'Pear Amethyst Ring',
      price: 30,
      category: 'rings',
      isRing: true,
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M-18 6 Q0 12 18 6 L18 10 Q0 16 -18 10 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <!-- Solitaire Pear Amethyst -->
          <path d="M0 -12 C-7 -4 -7 4 0 8 C7 4 7 -4 0 -12 Z" fill="url(#amethystShine)" stroke="url(#goldWire)" stroke-width="1.2"/>
          <!-- Twin Leaves Prongs -->
          <ellipse cx="-8" cy="2" rx="4" ry="2" fill="url(#goldWire)" transform="rotate(-30 -8 2)"/>
          <ellipse cx="8" cy="2" rx="4" ry="2" fill="url(#goldWire)" transform="rotate(30 8 2)"/>
          <ellipse cx="-2" cy="-2" rx="2" ry="3" fill="#fff" opacity="0.85" transform="rotate(-20 -2 -2)"/>
        </g>
      `
    },
    {
      id: 'ring_pearl_solitaire',
      name: 'Pearl Solitaire Ring',
      price: 26,
      category: 'rings',
      isRing: true,
      svg: `
        <g filter="url(#charmShadow)">
          <path d="M-18 6 Q0 12 18 6 L18 10 Q0 16 -18 10 Z" fill="url(#goldWire)" stroke="#996515" stroke-width="0.8"/>
          <!-- Glowing Pearl Center -->
          <circle cx="0" cy="-2" r="9" fill="url(#akoyaPearl)"/>
          <!-- Gold Crown Prongs -->
          <path d="M-7 3 Q0 8 7 3" fill="none" stroke="url(#goldWire)" stroke-width="2"/>
          <ellipse cx="-2.5" cy="-5" rx="3" ry="2" fill="#fff" opacity="0.9" transform="rotate(-30 -2.5 -5)"/>
        </g>
      `
    },

    // 5. EARRING DROPS
    {
      id: 'earring_pearl_drop',
      name: 'Pearl Huggie Drop',
      price: 25,
      category: 'earrings',
      isEarring: true,
      svg: `
        <g filter="url(#charmShadow)">
          <!-- Huggie Hoop -->
          <circle cx="0" cy="-8" r="8" fill="none" stroke="url(#goldWire)" stroke-width="3"/>
          <!-- Dangling Luminous Pearl -->
          <circle cx="0" cy="10" r="8" fill="url(#akoyaPearl)"/>
          <path d="M-5 5 Q0 0 5 5" fill="none" stroke="url(#goldWire)" stroke-width="1.5"/>
          <ellipse cx="-2" cy="7" rx="2.5" ry="1.8" fill="#fff" opacity="0.9"/>
        </g>
      `
    },
    {
      id: 'earring_sun_drop',
      name: 'Sunburst Hoop Drop',
      price: 24,
      category: 'earrings',
      isEarring: true,
      svg: `
        <g filter="url(#charmShadow)">
          <circle cx="0" cy="-8" r="8" fill="none" stroke="url(#goldWire)" stroke-width="3"/>
          <circle cx="0" cy="10" r="5" fill="url(#amethystShine)"/>
          ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `
            <path d="M0 10 L-1 4 L0 2 L1 4 Z" fill="url(#goldWire)" transform="rotate(${a} 0 10)"/>
          `).join('')}
        </g>
      `
    },
    {
      id: 'floating_lantern', name: 'Floating Lantern', price: 18, category: 'tangled',
      svg: `<g filter="url(#charmShadow)"><circle r="15" fill="#ffd36b" opacity=".28"/><rect x="-5" y="-14" width="10" height="3" rx="1" fill="url(#goldWire)"/><path d="M-7-11Q-12 0-6 10H6Q12 0 7-11Z" fill="url(#amberGlow)" stroke="url(#goldWire)" stroke-width="1"/><rect x="-5" y="10" width="10" height="3" rx="1" fill="url(#goldWire)"/><path d="M0 13V17" stroke="#d4af37" stroke-width="1.4"/><ellipse cx="-2" cy="-2" rx="1.6" ry="4" fill="#fff" opacity=".75"/></g>`
    },
    {
      id: 'pink_crystal_star', name: 'Pink Crystal Star', price: 17, category: 'tangled',
      svg: `<g filter="url(#charmShadow)"><path d="M0-15L4.5-5 15-4 7 3 9.5 14 0 8-9.5 14-7 3-15-4-4.5-5Z" fill="url(#pinkEnamel)" stroke="#ffd1e3" stroke-width="1"/><path d="M0-15V8M-15-4L7 3M15-4L-7 3" stroke="#fff" stroke-opacity=".5" fill="none"/></g>`
    },
    {
      id: 'starlight', name: 'Starlight', price: 15, category: 'tangled',
      svg: `<g filter="url(#charmShadow)"><path d="M0-16L2.5-2.5 16 0 2.5 2.5 0 16-2.5 2.5-16 0-2.5-2.5Z" fill="#fff" stroke="#c9b3f5" stroke-width=".8"/><path d="M0-9L1.5-1.5 9 0 1.5 1.5 0 9-1.5 1.5-9 0-1.5-1.5Z" fill="#eadcff" transform="rotate(45)"/></g>`
    },
    {
      id: 'ring_vcrown', name: 'V-Crown Ring', price: 29, category: 'rings', isRing: true,
      svg: `<g filter="url(#charmShadow)"><path d="M-18 6Q0 12 18 6L18 10Q0 16 -18 10Z" fill="url(#goldWire)" stroke="#996515" stroke-width=".8"/><path d="M-15 5L-8-6 0-1 8-6 15 5" fill="none" stroke="url(#goldWire)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><path d="M-8-12L-10.5-7-8-3-5.5-7Z" fill="#fff" stroke="url(#goldWire)" stroke-width=".7"/><path d="M0-8L-2.4-3 0 1 2.4-3Z" fill="#fff" stroke="url(#goldWire)" stroke-width=".7"/><path d="M8-12L5.5-7 8-3 10.5-7Z" fill="#fff" stroke="url(#goldWire)" stroke-width=".7"/></g>`
    },
    {
      id: 'ring_floral', name: 'Floral Bloom Ring', price: 27, category: 'rings', isRing: true,
      svg: `<g filter="url(#charmShadow)"><path d="M-18 6Q0 12 18 6L18 10Q0 16 -18 10Z" fill="url(#goldWire)" stroke="#996515" stroke-width=".8"/>${[0,72,144,216,288].map(a=>`<ellipse cx="0" cy="-8" rx="3.8" ry="6.5" fill="url(#goldWire)" stroke="#996515" stroke-width=".6" transform="rotate(${a} 0 -2)"/>`).join('')}<circle cy="-2" r="4" fill="url(#amethystShine)"/><circle cx="-1" cy="-3" r="1.2" fill="#fff"/></g>`
    },
    {
      id: 'mini_white', name: 'Mini Classic Pearl', price: 5, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpWhite)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_rose', name: 'Mini Rose Pearl', price: 5, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpRose)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_champagne', name: 'Mini Champagne Pearl', price: 6, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpChamp)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_lilac', name: 'Mini Lilac Pearl', price: 6, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpLilac)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_black', name: 'Mini Black Pearl', price: 7, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpBlack)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_mint', name: 'Mini Mint Pearl', price: 6, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpMint)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_aqua', name: 'Mini Aqua Pearl', price: 6, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mpAqua)"/><circle r="6.6" fill="url(#pearlRim)"/><ellipse cx="-2.2" cy="-2.6" rx="2.4" ry="1.4" fill="#fff" opacity=".9" transform="rotate(-35 -2.2 -2.6)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_diamond', name: 'Diamond Station', price: 7, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mgCrystal)"/><path d="M0-6.6L-3-1 0 6.6 3-1Z" fill="#fff" opacity=".3"/><path d="M-6.4-1H6.4" stroke="#fff" stroke-opacity=".55" stroke-width=".7"/><circle r="8.6" fill="none" stroke="#996515" stroke-width=".6"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_pinkgem', name: 'Pink Crystal Station', price: 7, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mgPink)"/><path d="M0-6.6L-3-1 0 6.6 3-1Z" fill="#fff" opacity=".3"/><path d="M-6.4-1H6.4" stroke="#fff" stroke-opacity=".55" stroke-width=".7"/><circle r="8.6" fill="none" stroke="#996515" stroke-width=".6"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_amethyst', name: 'Amethyst Station', price: 8, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="url(#mgAmeth)"/><path d="M0-6.6L-3-1 0 6.6 3-1Z" fill="#fff" opacity=".3"/><path d="M-6.4-1H6.4" stroke="#fff" stroke-opacity=".55" stroke-width=".7"/><circle r="8.6" fill="none" stroke="#996515" stroke-width=".6"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_clover', name: 'Sparkle Clover', price: 8, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><circle r="8.6" fill="url(#goldWire)"/><circle r="6.6" fill="#fff6d6"/><circle cx="3.3" cy="0" r="2.8" fill="url(#mgCrystal)" stroke="#d4af37" stroke-width=".5"/><circle cx="-3.3" cy="0" r="2.8" fill="url(#mgCrystal)" stroke="#d4af37" stroke-width=".5"/><circle cx="0" cy="3.3" r="2.8" fill="url(#mgCrystal)" stroke="#d4af37" stroke-width=".5"/><circle cx="0" cy="-3.3" r="2.8" fill="url(#mgCrystal)" stroke="#d4af37" stroke-width=".5"/><circle r="1.6" fill="url(#goldWire)"/><path class="tw" d="M3.6-5.6Q3.9-3.8 5.7-3.5 3.9-3.2 3.6-1.4 3.3-3.2 1.5-3.5 3.3-3.8 3.6-5.6Z" fill="#fff"/></g>`
    },
    {
      id: 'mini_sun', name: 'Mini Sun', price: 8, category: 'mini', isMini: true,
      svg: `<g filter="url(#charmShadow)"><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(0)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(45)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(90)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(135)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(180)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(225)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(270)"/><path d="M-1.6-6.4L0-10.6 1.6-6.4Z" fill="url(#goldWire)" transform="rotate(315)"/><circle r="6.8" fill="url(#goldWire)"/><circle r="4.4" fill="url(#mgAmeth)"/><circle cx="-1.2" cy="-1.4" r="1" fill="#fff"/></g>`
    },
    {
      id: 'shiny_aurora', name: 'Aurora Pearl', price: 22, category: 'pearls',
      svg: `<g filter="url(#charmShadow)"><circle r="13" fill="url(#spAurora)"/><circle r="13" fill="url(#pearlIri)"/><circle r="13" fill="url(#pearlRim)"/><ellipse cx="-4.4" cy="-5" rx="4.6" ry="2.6" fill="#fff" opacity=".92" transform="rotate(-35 -4.4 -5)"/><circle cx="4.5" cy="4.5" r="1.4" fill="#fff" opacity=".55"/><path class="tw" d="M7-11Q7.6-8 11-7.4 7.6-6.8 7-3.8 6.4-6.8 3-7.4 6.4-8 7-11Z" fill="#fff"/><path class="tw tw2" d="M-8 4Q-7.6 5.6-6 6-7.6 6.4-8 8-8.4 6.4-10 6-8.4 5.6-8 4Z" fill="#fff"/></g>`
    },
    {
      id: 'shiny_rosegold', name: 'Rose Gold Pearl', price: 22, category: 'pearls',
      svg: `<g filter="url(#charmShadow)"><circle r="13" fill="url(#spRoseGold)"/><circle r="13" fill="url(#pearlRim)"/><ellipse cx="-4.4" cy="-5" rx="4.6" ry="2.6" fill="#fff" opacity=".92" transform="rotate(-35 -4.4 -5)"/><circle cx="4.5" cy="4.5" r="1.4" fill="#fff" opacity=".55"/><path class="tw" d="M7-11Q7.6-8 11-7.4 7.6-6.8 7-3.8 6.4-6.8 3-7.4 6.4-8 7-11Z" fill="#fff"/><path class="tw tw2" d="M-8 4Q-7.6 5.6-6 6-7.6 6.4-8 8-8.4 6.4-10 6-8.4 5.6-8 4Z" fill="#fff"/></g>`
    },
    {
      id: 'shiny_tahiti', name: 'Peacock Tahiti Pearl', price: 26, category: 'pearls',
      svg: `<g filter="url(#charmShadow)"><circle r="13" fill="url(#spTahiti)"/><circle r="13" fill="url(#pearlIri)" opacity=".5"/><circle r="13" fill="url(#pearlRim)"/><ellipse cx="-4.4" cy="-5" rx="4.6" ry="2.6" fill="#fff" opacity=".92" transform="rotate(-35 -4.4 -5)"/><circle cx="4.5" cy="4.5" r="1.4" fill="#fff" opacity=".55"/><path class="tw" d="M7-11Q7.6-8 11-7.4 7.6-6.8 7-3.8 6.4-6.8 3-7.4 6.4-8 7-11Z" fill="#fff"/><path class="tw tw2" d="M-8 4Q-7.6 5.6-6 6-7.6 6.4-8 8-8.4 6.4-10 6-8.4 5.6-8 4Z" fill="#fff"/></g>`
    },
    {
      id: 'shiny_lavender', name: 'Lavender Dream Pearl', price: 22, category: 'pearls',
      svg: `<g filter="url(#charmShadow)"><circle r="13" fill="url(#spLavender)"/><circle r="13" fill="url(#pearlRim)"/><ellipse cx="-4.4" cy="-5" rx="4.6" ry="2.6" fill="#fff" opacity=".92" transform="rotate(-35 -4.4 -5)"/><circle cx="4.5" cy="4.5" r="1.4" fill="#fff" opacity=".55"/><path class="tw" d="M7-11Q7.6-8 11-7.4 7.6-6.8 7-3.8 6.4-6.8 3-7.4 6.4-8 7-11Z" fill="#fff"/><path class="tw tw2" d="M-8 4Q-7.6 5.6-6 6-7.6 6.4-8 8-8.4 6.4-10 6-8.4 5.6-8 4Z" fill="#fff"/></g>`
    },
    {
      id: 'shiny_mint', name: 'Sea Mint Pearl', price: 22, category: 'pearls',
      svg: `<g filter="url(#charmShadow)"><circle r="13" fill="url(#spMint)"/><circle r="13" fill="url(#pearlRim)"/><ellipse cx="-4.4" cy="-5" rx="4.6" ry="2.6" fill="#fff" opacity=".92" transform="rotate(-35 -4.4 -5)"/><circle cx="4.5" cy="4.5" r="1.4" fill="#fff" opacity=".55"/><path class="tw" d="M7-11Q7.6-8 11-7.4 7.6-6.8 7-3.8 6.4-6.8 3-7.4 6.4-8 7-11Z" fill="#fff"/><path class="tw tw2" d="M-8 4Q-7.6 5.6-6 6-7.6 6.4-8 8-8.4 6.4-10 6-8.4 5.6-8 4Z" fill="#fff"/></g>`
    },
    {
      id: 'shiny_golden', name: 'Golden Sun Pearl', price: 24, category: 'pearls',
      svg: `<g filter="url(#charmShadow)"><circle r="13" fill="url(#spGolden)"/><circle r="13" fill="url(#pearlRim)"/><ellipse cx="-4.4" cy="-5" rx="4.6" ry="2.6" fill="#fff" opacity=".92" transform="rotate(-35 -4.4 -5)"/><circle cx="4.5" cy="4.5" r="1.4" fill="#fff" opacity=".55"/><path class="tw" d="M7-11Q7.6-8 11-7.4 7.6-6.8 7-3.8 6.4-6.8 3-7.4 6.4-8 7-11Z" fill="#fff"/><path class="tw tw2" d="M-8 4Q-7.6 5.6-6 6-7.6 6.4-8 8-8.4 6.4-10 6-8.4 5.6-8 4Z" fill="#fff"/></g>`
    }
  ];

  /* --- State --- */
  const state = {
    type: 'bracelet', // 'bracelet' | 'necklace' | 'rings' | 'earrings'
    metal: 'silver',   // 'silver' | 'gold'
    size: '18 cm',
    engraving: 'Corona',
    activeTab: 'all',
    lastSlot: -1,
    // Slots for different types:
    braceletSlots: [null, null, null, null, null, null], // 6 slots
    necklaceSlots: [null, null, null, null, null],       // 5 pendant slots (lower chain)
    necklaceTop: [null, null, null, null, null, null, null, null, null], // 9 small-pearl slots (upper choker)
    bust: 'ivory', lastTop: -1, undo: [],
    style: { necklace: 'duo', bracelet: 'classic', earrings: 'hoop' },
    ringSlots: [null, null, null, null],                 // 4 horizontal ring roll slots
    earringSlots: [null, null]                           // 2 slots (Left & Right)
  };

  /* Coordinates along the Bracelet Oval Loop */
  const BRACELET_SLOTS = [
    { x: 125, y: 225, angle: -18 },
    { x: 175, y: 265, angle: -10 },
    { x: 235, y: 285, angle: -2 },
    { x: 295, y: 285, angle: 2 },
    { x: 355, y: 260, angle: 10 },
    { x: 405, y: 220, angle: 18 }
  ];

  const BUST_STYLES = { ivory: ['#f6ecdc', '#e0cfb4'], blush: ['#fbe0e6', '#e9b6c4'], lavender: ['#eadcff', '#c4a8ee'], midnight: ['#3a2f68', '#18123a'] };

  const STYLE_DEFS = {
    necklace: [
      { id: 'duo', name: 'Layered Duo', note: 'Choker + long chain', top: true, low: true, d: 282, n: 5, grad: ['#f48fb1', '#c2185b'] },
      { id: 'choker', name: 'Pearl Choker', note: '9 little pearls at the neck', top: true, low: false, grad: ['#b39ddb', '#5e35b1'] },
      { id: 'drop', name: 'Single Drop', note: 'One statement pendant', top: false, low: true, d: 205, n: 3, grad: ['#ffcc80', '#ef6c00'] },
      { id: 'princess', name: 'Princess Trio', note: 'Choker + 3 pendants', top: true, low: true, d: 232, n: 3, grad: ['#80cbc4', '#00796b'] },
      { id: 'long', name: 'Opera Long', note: 'Extra long, 5 pendants', top: false, low: true, d: 312, n: 5, grad: ['#ffab91', '#d84315'] }
    ],
    bracelet: [
      { id: 'classic', name: 'Oval Link', note: 'Charms hang from the chain', grad: ['#f06292', '#ad1457'] },
      { id: 'paperclip', name: 'Paperclip Chain', note: 'Long modern links', grad: ['#9575cd', '#4527a0'] },
      { id: 'tennis', name: 'Tennis Sparkle', note: 'A line of crystals', grad: ['#4dd0e1', '#00838f'] },
      { id: 'bangle', name: 'Golden Bangle', note: 'Stones set in a solid band', grad: ['#ffd54f', '#f57f17'] },
      { id: 'cuff', name: 'Pearl-End Cuff', note: 'Open cuff, pearl tips', grad: ['#ce93d8', '#7b1fa2'] }
    ],
    earrings: [
      { id: 'hoop', name: 'Huggie Drop', note: 'Hoop with a drop', grad: ['#ff8a65', '#bf360c'] },
      { id: 'stud', name: 'Statement Stud', note: 'Your piece sits on the ear', grad: ['#81c784', '#2e7d32'] },
      { id: 'chandelier', name: 'Chandelier', note: 'Fan frame + tiny chains', grad: ['#f48fb1', '#880e4f'] },
      { id: 'threader', name: 'Long Threader', note: 'A fine chain that falls', grad: ['#7986cb', '#283593'] },
      { id: 'dangle', name: 'Flower Dangle', note: 'Blossom stud + chain drops', grad: ['#ba68c8', '#4a148c'] }
    ]
  };
  const styleOf = t => STYLE_DEFS[t].find(s => s.id === state.style[t]) || STYLE_DEFS[t][0];

  /* Coordinates along the Draped Necklace Curve (old layout, kept for reference) */
  const NECKLACE_SLOTS = [
    { x: 125, y: 150, angle: -14 },
    { x: 185, y: 230, angle: -7 },
    { x: 270, y: 285, angle: 0 }, // Centerdrop
    { x: 355, y: 230, angle: 7 },
    { x: 415, y: 150, angle: 14 }
  ];

  /* ==========================================================================
     SYNTHESIZER (Key Clicks, Register Bell, Zipper, Music Box)
     ========================================================================== */
  class SynthEngine {
    constructor() {
      this.ctx = null;
      this.isPlayingMusic = false;
      this.musicTimer = null;
      this.noteIdx = 0;

      this.melody = [
        { f: 370.0, d: 0.6 },  // F#4
        { f: 415.3, d: 0.4 },  // G#4
        { f: 440.0, d: 0.8 },  // A4
        { f: 554.4, d: 1.0 },  // C#5
        { f: 493.9, d: 0.6 },  // B4
        { f: 440.0, d: 0.5 },  // A4
        { f: 415.3, d: 0.5 },  // G#4
        { f: 370.0, d: 0.8 },  // F#4
        { f: 329.6, d: 0.6 },  // E4
        { f: 370.0, d: 1.2 },  // F#4
        { f: 0,     d: 0.4 },  // Pause
        { f: 440.0, d: 0.6 },  // A4
        { f: 493.9, d: 0.6 },  // B4
        { f: 554.4, d: 0.8 },  // C#5
        { f: 659.3, d: 1.0 },  // E5
        { f: 587.3, d: 0.6 },  // D5
        { f: 554.4, d: 0.8 },  // C#5
        { f: 493.9, d: 1.4 },  // B4
        { f: 0,     d: 0.8 }
      ];
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Mechanical Key Click
    playKeyClick() {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.05);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }

    // Crystalline Pearl / Charm Chime
    playCharmSnap() {
      this.init();
      const now = this.ctx.currentTime;
      [1174, 1760, 2349].forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.05);

        gain.gain.setValueAtTime(0.12, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.4);
      });
    }

    // Tactile Velvet Zipper Zip Sound
    playZipper() {
      this.init();
      const now = this.ctx.currentTime;
      for (let i = 0; i < 12; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800 + (i % 3) * 200, now + i * 0.025);

        gain.gain.setValueAtTime(0.04, now + i * 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.025 + 0.02);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.025);
        osc.stop(now + i * 0.025 + 0.02);
      }
    }

    // Register Bell "Ka-Ching!"
    playRegisterKaChing() {
      this.init();
      const now = this.ctx.currentTime;
      [1568, 2093, 3136].forEach((f) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 1.2);
      });
    }

    // Music Box Toggle
    toggleMusic() {
      this.init();
      this.isPlayingMusic = !this.isPlayingMusic;
      const label = document.getElementById('music-label');
      const btn = document.getElementById('btn-music-toggle');

      if (this.isPlayingMusic) {
        if (label) label.textContent = 'Playing';
        if (btn) btn.classList.add('active');
        this.noteIdx = 0;
        this.playMelodyStep();
      } else {
        if (label) label.textContent = 'Off';
        if (btn) btn.classList.remove('active');
        if (this.musicTimer) clearTimeout(this.musicTimer);
      }
    }

    playMelodyStep() {
      if (!this.isPlayingMusic) return;
      const n = this.melody[this.noteIdx];
      if (n.f > 0) {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.f, now);

        gain.gain.setValueAtTime(0.11, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + n.d * 1.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + n.d * 1.4);
      }

      this.noteIdx = (this.noteIdx + 1) % this.melody.length;
      this.musicTimer = setTimeout(() => {
        this.playMelodyStep();
      }, n.d * 750);
    }
  }

  const audio = new SynthEngine();
  ['playKeyClick','playCharmSnap','playZipper','playRegisterKaChing','toggleMusic'].forEach(m=>{
    const f=audio[m].bind(audio); audio[m]=(...a)=>{ try{ f(...a); }catch(e){} };
  });

  /* ==========================================================================
     BACKGROUND FLOATING LANTERNS CANVAS
     ========================================================================== */
  function initLanternsCanvas() {
    const canvas = document.getElementById('lanterns-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }, { passive: true });

    const lanterns = Array.from({ length: 22 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 10 + Math.random() * 18,
      speed: 0.4 + Math.random() * 0.7,
      sway: Math.random() * Math.PI * 2,
      opacity: 0.2 + Math.random() * 0.4
    }));

    function loop() {
      ctx.clearRect(0, 0, w, h);
      lanterns.forEach(l => {
        l.y -= l.speed;
        l.sway += 0.02;
        if (l.y < -50) {
          l.y = h + 20;
          l.x = Math.random() * w;
        }

        const swayX = l.x + Math.sin(l.sway) * 12;

        const rad = l.size * 1.6;
        const g = ctx.createRadialGradient(swayX, l.y, 2, swayX, l.y, rad);
        g.addColorStop(0, `rgba(255, 235, 120, ${l.opacity})`);
        g.addColorStop(1, 'rgba(255, 180, 50, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(swayX, l.y, rad, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 179, 0, ${l.opacity * 0.8})`;
        ctx.fillRect(swayX - l.size * 0.35, l.y - l.size * 0.5, l.size * 0.7, l.size);
      });
      requestAnimationFrame(loop);
    }
    loop();
  }

  /* ==========================================================================
     RENDERERS & LOGIC
     ========================================================================== */

  /* 1. Render Left Tray Items */
  function renderTray() {
    renderGallery();
    const grid = document.getElementById('tray-grid');
    if (!grid) return;

    let items = INVENTORY;
    if (state.activeTab !== 'all') {
      items = INVENTORY.filter(c => c.category === state.activeTab);
    }

    grid.innerHTML = items.map(c => `
      <div class="tray-slot-item" data-id="${c.id}" role="button" tabindex="0" title="Attach ${c.name}">
        <div class="charm-svg-wrap">
          <svg viewBox="${c.isMini ? '-11 -11 22 22' : '-22 -22 44 44'}">${SHARED_SVG_DEFS}${c.svg}</svg>
        </div>
        <div class="charm-label-name">${c.name}</div>
        <div class="charm-label-price">${fmt(c.price)}</div>
      </div>
    `).join('');
  }

  /* 2. Render Stage (Handles Bracelet, Necklace, Rings, and Earrings) */
  function renderStage() {
    const svgEl = document.getElementById('stage-svg');
    const ringStage = document.getElementById('ring-stage');
    const earringsStage = document.getElementById('earrings-stage');
    const heartTag = document.getElementById('chain-engraving-tag');

    // Toggle Visibility of Stages
    if (state.type === 'bracelet' || state.type === 'necklace') {
      if (svgEl) svgEl.style.display = 'block';
      if (ringStage) ringStage.style.display = 'none';
      if (earringsStage) earringsStage.style.display = 'none';
      if (heartTag) heartTag.style.display = 'flex';
      renderChainStage();
    } else if (state.type === 'rings') {
      if (svgEl) svgEl.style.display = 'none';
      if (ringStage) ringStage.style.display = 'flex';
      if (earringsStage) earringsStage.style.display = 'none';
      if (heartTag) heartTag.style.display = 'none';
      renderRingsStage();
    } else if (state.type === 'earrings') {
      if (svgEl) svgEl.style.display = 'none';
      if (ringStage) ringStage.style.display = 'none';
      if (earringsStage) earringsStage.style.display = 'flex';
      if (heartTag) heartTag.style.display = 'none';
      renderEarringsStage();
    }

    const bustRow = document.getElementById('bust-row');
    if (bustRow) bustRow.classList.toggle('hide', state.type !== 'necklace');
    updateRegisterTotals();
  }

  /* Stage A: Bracelet or Necklace SVG Chain (Larger, High-Clarity Charms & Pearls) */
  function renderChainStage() {
    const svgEl = document.getElementById('stage-svg');
    if (!svgEl) return;

    const metalGrad = state.metal === 'gold' ? 'url(#goldWire)' : 'url(#silverChrome)';
    const metalStroke = state.metal === 'gold' ? '#b8860b' : '#94a3b8';

    let chainLinksHTML = '';
    let claspHTML = '';
    let slotsHTML = '';
    let bustHTML = '';

    if (state.type === 'bracelet') {
      const BS = state.style.bracelet, hang = BS === 'classic' || BS === 'paperclip', fx = n => +n.toFixed(1);
      const ep = a => [270 + Math.cos(a) * 165, 160 + Math.sin(a) * 105];
      if (hang) {
        const n = BS === 'classic' ? 26 : 20;
        for (let i = 0; i < n; i++) {
          const ang = i / n * 6.2832, [cx, cy] = ep(ang), deg = ang * 57.2958 + 90;
          const link = BS === 'classic'
            ? (s, w, c) => `<ellipse rx="15" ry="8" fill="none" stroke="${c}" stroke-width="${w}" transform="translate(0, ${s})"/>`
            : (s, w, c) => `<rect x="-19" y="-6.5" width="38" height="13" rx="6.5" fill="none" stroke="${c}" stroke-width="${w}" transform="translate(0, ${s})"/>`;
          chainLinksHTML += `<g transform="translate(${fx(cx)}, ${fx(cy)}) rotate(${fx(deg)})">${link(4, 7, 'rgba(0,0,0,0.18)')}${link(0, 5, metalGrad)}${link(0, 1.2, metalStroke)}</g>`;
        }
        claspHTML = `<g transform="translate(270, 52)"><path d="M-13 0 C-13 -7 13 -7 13 0 C13 7 -13 7 -13 0 Z" fill="${metalGrad}" stroke="${metalStroke}" stroke-width="1.5"/><circle cx="9" cy="0" r="2.8" fill="#fff" opacity="0.9"/></g>`;
      } else if (BS === 'tennis') {
        chainLinksHTML = `<ellipse cx="270" cy="160" rx="165" ry="105" fill="none" stroke="${metalStroke}" stroke-width="1.4"/>` + Array.from({ length: 64 }, (_, i) => {
          const [x, y] = ep(i / 64 * 6.2832);
          return `<g transform="translate(${fx(x)} ${fx(y)})"><circle r="5.8" fill="${metalGrad}"/><circle r="4" fill="url(#mgCrystal)"/><circle cx="-1.2" cy="-1.4" r="1" fill="#fff"/></g>`;
        }).join('');
      } else if (BS === 'bangle') {
        chainLinksHTML = `<ellipse cx="270" cy="166" rx="165" ry="105" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="20"/><ellipse cx="270" cy="160" rx="165" ry="105" fill="none" stroke="${metalGrad}" stroke-width="18"/><ellipse cx="270" cy="160" rx="165" ry="105" fill="none" stroke="${metalStroke}" stroke-width="1.2"/><ellipse cx="270" cy="157" rx="165" ry="105" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="3"/>`;
      } else {
        const cuff = 'M347.5 67.3 A165 105 0 1 1 192.5 67.3';
        chainLinksHTML = `<path d="${cuff}" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="18" stroke-linecap="round" transform="translate(0, 6)"/><path d="${cuff}" fill="none" stroke="${metalGrad}" stroke-width="16" stroke-linecap="round"/><path d="${cuff}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round" transform="translate(0, -3)"/>` +
          [[347.5, 67.3], [192.5, 67.3]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="15" fill="${metalGrad}"/><circle r="12" fill="url(#mpWhite)"/><circle r="12" fill="url(#pearlRim)"/><ellipse cx="-4" cy="-5" rx="4.5" ry="2.6" fill="#fff" opacity=".9" transform="rotate(-35 -4 -5)"/></g>`).join('');
      }
      const pts = hang ? BRACELET_SLOTS : [0, 1, 2, 3, 4, 5].map(i => { const [x, y] = ep((25 + 26 * i) * Math.PI / 180); return { x, y, angle: 0 }; });
      pts.forEach((pos, idx) => {
        const charm = state.braceletSlots[idx] ? INVENTORY.find(c => c.id === state.braceletSlots[idx]) : null;
        if (!charm) {
          slotsHTML += `<g class="empty-chain-slot" data-slot="${idx}" transform="translate(${fx(pos.x)}, ${fx(pos.y)})"><circle r="${hang ? 11 : 13}" fill="rgba(255,255,255,0.4)" stroke="#ff4081" stroke-width="1.6" stroke-dasharray="3, 3" style="cursor: pointer;"/><circle r="3.5" fill="#ff4081" opacity="0.7"/></g>`;
          return;
        }
        const badge = `<g class="remove-hover-badge" transform="translate(18, -4)"><circle r="8.5" fill="#e91e63"/><text dy="3" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">✕</text></g>`;
        slotsHTML += hang
          ? `<g class="attached-charm-group${idx === state.lastSlot ? ' drop-in' : ''}" data-slot="${idx}" transform="translate(${pos.x}, ${pos.y}) rotate(${pos.angle})" style="cursor: pointer;"><path d="M0 -16 L0 -6" stroke="${metalGrad}" stroke-width="3.5" stroke-linecap="round"/><circle cx="0" cy="-6" r="3.8" fill="none" stroke="${metalGrad}" stroke-width="2.5"/><g transform="translate(0, 20) scale(1.5)">${charm.svg}</g>${badge}</g>`
          : `<g class="attached-charm-group${idx === state.lastSlot ? ' drop-in' : ''}" data-slot="${idx}" transform="translate(${fx(pos.x)}, ${fx(pos.y)})" style="cursor: pointer;"><g transform="scale(1.3)">${charm.svg}</g>${badge}</g>`;
      });

    } else {
      // Layered necklace on a velvet bust: upper choker of small pearls + lower chain with pendants
      const NS = styleOf('necklace'), d = NS.d || 282, dy1 = (72 + .61 * (d - 72)).toFixed(1);
      const B = BUST_STYLES[state.bust] || BUST_STYLES.ivory, f1 = n => n.toFixed(1);
      const bustPath = 'M192 40C190 98 160 114 110 132C66 150 50 205 46 380L494 380C490 205 474 150 430 132C380 114 350 98 348 40Z';
      bustHTML = `
        <defs>
          <linearGradient id="bustG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${B[0]}"/><stop offset="1" stop-color="${B[1]}"/></linearGradient>
          <radialGradient id="bustShade" cx=".5" cy=".25" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity=".14"/></radialGradient>
        </defs>
        <path d="${bustPath}" fill="url(#bustG)"/><path d="${bustPath}" fill="url(#bustShade)"/>
        <ellipse cx="270" cy="40" rx="80" ry="12" fill="url(#goldWire)"/><ellipse cx="270" cy="38" rx="72" ry="8" fill="${B[0]}"/>`;

      const CH = [[196, 74], [270, 140], [344, 74]];
      const qb = t => [0, 1].map(k => (1 - t) ** 2 * CH[0][k] + 2 * (1 - t) * t * CH[1][k] + t * t * CH[2][k]);
      const cb = (t, p) => [0, 1].map(k => (1 - t) ** 3 * p[0][k] + 3 * (1 - t) ** 2 * t * p[1][k] + 3 * (1 - t) * t * t * p[2][k] + t ** 3 * p[3][k]);
      const segL = [[190, 72], [190, +dy1], [235, d], [270, d]], segR = [[270, d], [305, d], [350, +dy1], [350, 72]];
      const curves = [];
      if (NS.top) curves.push('M 196 74 Q 270 140 344 74');
      if (NS.low) curves.push(`M 190 72 C 190 ${dy1} 235 ${d} 270 ${d} C 305 ${d} 350 ${dy1} 350 72`);
      chainLinksHTML = curves.map(dd => `
        <path d="${dd}" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="5" transform="translate(0, 3)"/>
        <path d="${dd}" fill="none" stroke="${metalGrad}" stroke-width="3.4" stroke-linecap="round"/>
        <path d="${dd}" fill="none" stroke="${metalStroke}" stroke-width="1" stroke-dasharray="2.5, 3.5"/>`).join('');

      // 9 small-pearl stations on the choker
      if (NS.top) state.necklaceTop.forEach((id, i) => {
        const t = 0.06 + 0.88 * i / 8, [x, y] = qb(t), [x1, y1] = qb(Math.max(0, t - .01)), [x2, y2] = qb(Math.min(1, t + .01));
        const ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI, m = id ? INVENTORY.find(c => c.id === id) : null;
        if (!m) slotsHTML += `<g class="empty-chain-slot" data-top="${i}" transform="translate(${f1(x)} ${f1(y)})"><circle r="8" fill="rgba(255,255,255,0.55)" stroke="#ff4081" stroke-width="1.3" stroke-dasharray="2.5,2.5" style="cursor: pointer;"/><circle r="2.2" fill="#ff4081" opacity="0.75"/></g>`;
        else slotsHTML += `<g class="attached-mini-group${i === state.lastTop ? ' drop-in' : ''}" data-top="${i}" transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(ang)})" style="cursor: pointer;">${m.svg}</g>`;
      });

      // 5 pendants on the lower chain
      const LOW = !NS.low ? [] : NS.n === 3
        ? [{ i: 1, p: cb(.55, segL), a: -7, s: 1.3 }, { i: 2, p: [270, d], a: 0, s: 1.55 }, { i: 3, p: cb(.45, segR), a: 7, s: 1.3 }]
        : [{ i: 0, p: cb(.28, segL), a: -9, s: 1.15 }, { i: 1, p: cb(.62, segL), a: -5, s: 1.1 }, { i: 2, p: [270, d], a: 0, s: d > 300 ? 1.2 : 1.4 }, { i: 3, p: cb(.38, segR), a: 5, s: 1.1 }, { i: 4, p: cb(.72, segR), a: 9, s: 1.15 }];
      LOW.forEach(pos => {
        const idx = pos.i;
        const charm = state.necklaceSlots[idx] ? INVENTORY.find(c => c.id === state.necklaceSlots[idx]) : null;
        if (!charm) {
          slotsHTML += `<g class="empty-chain-slot" data-slot="${idx}" transform="translate(${f1(pos.p[0])}, ${f1(pos.p[1])})"><circle r="12" fill="rgba(255,255,255,0.4)" stroke="#ff4081" stroke-width="1.6" stroke-dasharray="3, 3" style="cursor: pointer;"/><circle r="4" fill="#ff4081" opacity="0.7"/></g>`;
          return;
        }
        slotsHTML += `
          <g class="attached-charm-group${idx === state.lastSlot ? ' drop-in' : ''}" data-slot="${idx}" transform="translate(${f1(pos.p[0])}, ${f1(pos.p[1])}) rotate(${pos.a})" style="cursor: pointer;">
            <path d="M0 -12 L0 -3" stroke="${metalGrad}" stroke-width="3" stroke-linecap="round"/>
            <circle cx="0" cy="-3" r="3.4" fill="none" stroke="${metalGrad}" stroke-width="2.2"/>
            <g transform="translate(0, ${f1(10 + 11 * pos.s)}) scale(${pos.s})">${charm.svg}</g>
            <g class="remove-hover-badge" transform="translate(18, -4)"><circle r="8.5" fill="#e91e63"/><text dy="3" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">✕</text></g>
          </g>`;
      });
    }

    svgEl.innerHTML = `
      ${SHARED_SVG_DEFS}
      ${bustHTML}<g id="chain-links-layer">${chainLinksHTML}</g>
      <g id="clasp-layer">${claspHTML}</g>
      <g id="slots-layer">${slotsHTML}</g>
    `;
  }

  /* Stage B: rings shown as real rings on velvet pillows */
  function renderRingsStage() {
    const el = document.getElementById('ring-stage');
    if (!el) return;
    const mg = state.metal === 'gold' ? 'url(#goldWire)' : 'url(#silverChrome)';
    const cells = state.ringSlots.map((id, i) => {
      const x = 20 + (i % 2) * 250, y = 14 + Math.floor(i / 2) * 124, cx = x + 115;
      const item = id ? INVENTORY.find(c => c.id === id) : null;
      const pillow = `<rect x="${x}" y="${y}" width="230" height="108" rx="30" fill="url(#pillowG)" stroke="#d4af37" stroke-width="1.5"/><rect x="${x + 14}" y="${y + 10}" width="202" height="14" rx="7" fill="#fff" opacity=".35"/>`;
      if (!item) return `<g class="ring-roll-slot" data-ring-slot="${i}">${pillow}<text x="${cx}" y="${y + 60}" text-anchor="middle" font-size="13" font-weight="700" fill="#880e4f">+ tap a ring from the tray</text></g>`;
      return `<g class="ring-roll-slot${i === state.lastSlot ? ' drop-in' : ''}" data-ring-slot="${i}">${pillow}<ellipse cx="${cx}" cy="${y + 70}" rx="38" ry="11" fill="none" stroke="${mg}" stroke-width="7"/><g transform="translate(${cx} ${y + 50}) scale(2.3)">${item.svg}</g><text x="${cx}" y="${y + 103}" text-anchor="middle" font-size="11.5" font-weight="700" fill="#5a0822">${item.name} · ${fmt(item.price)}</text></g>`;
    }).join('');
    el.innerHTML = `<svg viewBox="0 0 520 256" style="width:100%;height:100%">${SHARED_SVG_DEFS}<defs><linearGradient id="pillowG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fce2ea"/><stop offset=".6" stop-color="#f3b5c8"/><stop offset="1" stop-color="#d87e9d"/></linearGradient></defs>${cells}</svg>`;
  }

  /* Stage C: Earrings Display Stage (Left and Right Earring Stands) */
  const EAR_POS = { hoop: [24, 1.4], stud: [12, 1.8], chandelier: [40, 1.15], threader: [48, 1.1], dangle: [42, 1.15] };
  function earringBase(st, mg) {
    const ch = (x1, y1, x2, y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${mg}" stroke-width="1.8" stroke-dasharray="3 2" stroke-linecap="round"/>`;
    if (st === 'stud') return `<circle cx="0" cy="-14" r="5" fill="${mg}"/><path d="M0 -10V-2" stroke="${mg}" stroke-width="2.5"/>`;
    if (st === 'chandelier') return `<path d="M-18 -16 Q0 -30 18 -16 L10 6 H-10Z" fill="none" stroke="${mg}" stroke-width="3" stroke-linejoin="round"/><circle cx="0" cy="-12" r="3" fill="url(#mgCrystal)"/>` + [-8, 0, 8].map(x => ch(x, 6, x, x ? 24 : 28)).join('');
    if (st === 'threader') return `<circle cx="0" cy="-22" r="3.5" fill="${mg}"/>${ch(0, -18, 0, 40)}`;
    if (st === 'dangle') return `<circle cx="0" cy="-18" r="9" fill="${mg}"/>` + [0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-26" rx="3.2" ry="5.2" fill="url(#mpRose)" stroke="${mg}" stroke-width=".8" transform="rotate(${a} 0 -18)"/>`).join('') + `<circle cx="0" cy="-18" r="3.4" fill="url(#mgPink)"/>${ch(-5, -9, -5, 34)}${ch(5, -9, 5, 30)}<circle cx="-5" cy="12" r="2.4" fill="url(#mgAmeth)"/><circle cx="5" cy="8" r="2.4" fill="url(#mgPink)"/>`;
    return `<ellipse cx="0" cy="-6" rx="16" ry="16" fill="none" stroke="${mg}" stroke-width="5"/><ellipse cx="0" cy="-6" rx="16" ry="16" fill="none" stroke="#996515" stroke-width="1.2"/><circle cx="0" cy="10" r="3.5" fill="${mg}"/>`;
  }

  function renderEarringsStage() {
    const earringsStage = document.getElementById('earrings-stage');
    if (!earringsStage) return;
    const metalGrad = state.metal === 'gold' ? 'url(#goldWire)' : 'url(#silverChrome)';
    const st = state.style.earrings, [py, ps] = EAR_POS[st] || EAR_POS.hoop;

    earringsStage.innerHTML = ['Left Earring', 'Right Earring'].map((title, idx) => {
      const charmId = state.earringSlots[idx];
      const charm = charmId ? INVENTORY.find(c => c.id === charmId) : null;
      const dropSVG = charm
        ? `<g transform="translate(0, ${py}) scale(${ps})">${charm.svg}</g>`
        : `<circle cx="0" cy="${py}" r="14" fill="rgba(255,255,255,0.4)" stroke="#ff4081" stroke-width="1.8" stroke-dasharray="3, 3"/><text y="${py + 4}" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2185b">+ Drop</text>`;
      return `
        <div class="earring-card-stand" data-earring-slot="${idx}">
          <span class="earring-card-label">${title}</span>
          <div class="earring-svg-display">
            <svg viewBox="-40 -36 80 106" style="width: 100%; height: 100%;">
              ${SHARED_SVG_DEFS}
              ${earringBase(st, metalGrad)}
              ${dropSVG}
            </svg>
          </div>
          <span style="font-size: 0.78rem; font-weight: 700; color: #880e4f; margin-top: 4px;">
            ${charm ? charm.name : 'Click charm to attach'}
          </span>
        </div>
      `;
    }).join('');
  }

  /* 3. Update Register and Top Pill Totals */
  function updateRegisterTotals() {
    const cur = RATES[currentCurrency];
    let attachedCount = 0;
    let itemsSumUSD = 0;

    if (state.type === 'bracelet') {
      attachedCount = state.braceletSlots.filter(s => s !== null).length;
      itemsSumUSD = state.braceletSlots.reduce((sum, id) => {
        const c = INVENTORY.find(i => i.id === id);
        return sum + (c ? c.price : 0);
      }, 0);
    } else if (state.type === 'necklace') {
      attachedCount = state.necklaceSlots.filter(s => s !== null).length + state.necklaceTop.filter(s => s !== null).length;
      itemsSumUSD = state.necklaceSlots.concat(state.necklaceTop).reduce((sum, id) => {
        const c = INVENTORY.find(i => i.id === id);
        return sum + (c ? c.price : 0);
      }, 0);
    } else if (state.type === 'rings') {
      attachedCount = state.ringSlots.filter(s => s !== null).length;
      itemsSumUSD = state.ringSlots.reduce((sum, id) => {
        const c = INVENTORY.find(i => i.id === id);
        return sum + (c ? c.price : 0);
      }, 0);
    } else if (state.type === 'earrings') {
      attachedCount = state.earringSlots.filter(s => s !== null).length;
      itemsSumUSD = state.earringSlots.reduce((sum, id) => {
        const c = INVENTORY.find(i => i.id === id);
        return sum + (c ? c.price : 0);
      }, 0);
    }

    const hasEngraving = state.engraving.trim().length > 0 && (state.type === 'bracelet' || state.type === 'necklace');
    const engraveCostUSD = hasEngraving ? 5 : 0;
    const totalUSD = 45 + itemsSumUSD + engraveCostUSD;

    // Update Register Screen
    const regCount = document.getElementById('reg-count');
    const regTotal = document.getElementById('reg-total');
    if (regCount) regCount.textContent = `${attachedCount} item${attachedCount === 1 ? '' : 's'}`;
    if (regTotal) regTotal.textContent = fmt(totalUSD);

    // Update Top Pill
    const topTotal = document.getElementById('top-total');
    const cartItemLabel = document.getElementById('cart-item-label');
    if (topTotal) topTotal.textContent = fmt(totalUSD);
    if (cartItemLabel) cartItemLabel.textContent = `Your ${state.type}`;

    // Update Chain Title
    const chainTitle = document.getElementById('chain-spec-title');
    if (chainTitle) {
      const metalName = state.metal === 'gold' ? '18K Gold' : 'Silver';
      if (state.type === 'bracelet') chainTitle.textContent = `${metalName} ${styleOf('bracelet').name} bracelet`;
      else if (state.type === 'necklace') chainTitle.textContent = `${metalName} ${styleOf('necklace').name} necklace`;
      else if (state.type === 'rings') chainTitle.textContent = `Royal velvet ring cushion`;
      else if (state.type === 'earrings') chainTitle.textContent = `${metalName} ${styleOf('earrings').name} earrings`;
    }

    // Update Engraving Tag Text
    const heartPreview = document.getElementById('heart-text-preview');
    if (heartPreview) {
      heartPreview.textContent = state.engraving || 'Corona';
    }

    // Update Engraving Fee Label
    const engraveFee = document.getElementById('engrave-fee');
    if (engraveFee) engraveFee.textContent = currentCurrency === 'USD' ? '$5' : 'Rs 400';
  }

  /* --- Attach Item to Creation --- */
  const qs = s => document.querySelector(s);
  const SLOT_KEY = { bracelet: 'braceletSlots', necklace: 'necklaceSlots', rings: 'ringSlots', earrings: 'earringSlots' };
  const slotsOf = t => state[SLOT_KEY[t || state.type]];
  const say = html => { const s = qs('#status-text'); if (s) s.innerHTML = html; };

  function burst() {
    const bed = qs('#satin-bed'); if (!bed) return;
    const b = bed.getBoundingClientRect();
    for (let i = 0; i < 14; i++) {
      const s = document.createElement('i'), ang = Math.random() * 6.283, d = 40 + Math.random() * 80;
      s.className = 'spark';
      s.style.cssText = `left:${b.left + b.width / 2}px;top:${b.top + b.height / 2}px;--dx:${Math.cos(ang) * d}px;--dy:${Math.sin(ang) * d}px;--c:${['#ffd54f', '#fff', '#f48fb1', '#ce93d8'][i % 4]}`;
      document.body.append(s); setTimeout(() => s.remove(), 900);
    }
  }

  const SIZE_SETS = { necklace: [['40 cm', '45 cm', '50 cm'], 1], bracelet: [['16 cm', '18 cm', '20 cm'], 1], rings: [['Size 5', 'Size 6', 'Size 7', 'Size 8'], 2], earrings: [['Mini (12mm)', 'Classic (16mm)', 'Statement (20mm)'], 1] };
  function setType(t) {
    state.type = t; state.lastSlot = -1; state.lastTop = -1;
    document.querySelectorAll('.type-btn').forEach(b => b.classList.toggle('active', b.dataset.type === t));
    const [list, def] = SIZE_SETS[t]; state.size = list[def];
    qs('#sizes-pills').innerHTML = list.map((s, i) => `<button class="size-btn${i === def ? ' active' : ''}">${s}</button>`).join('');
    renderStage();
    renderGallery();
  }

  function attachItem(itemId) {
    const item = INVENTORY.find(c => c.id === itemId);
    if (!item) return;
    if (item.isMini) { if (state.type !== 'necklace') setType('necklace'); }
    else if (item.isRing) { if (state.type !== 'rings') setType('rings'); }
    else if (item.isEarring) { if (state.type !== 'earrings') setType('earrings'); }
    else if (state.type === 'rings' || state.type === 'earrings') setType('bracelet');
    const arr = item.isMini ? state.necklaceTop : slotsOf(), i = arr.indexOf(null);
    if (i === -1) { say(item.isMini ? 'The choker is full ✨ Tap a small pearl to remove it.' : `Your ${state.type} is full ✨ Tap a piece to remove it, then add another.`); return; }
    arr[i] = itemId; state.undo.push({ arr, i });
    if (item.isMini) { state.lastTop = i; state.lastSlot = -1; } else { state.lastSlot = i; state.lastTop = -1; }
    audio.playCharmSnap(); renderStage(); burst();
    say(`<strong>${item.name}</strong> ${item.isMini ? 'sits on your choker' : 'is yours'} ✨`);
  }

  /* --- Detach Item from Creation --- */
  function detachItem(slotIdx) {
    let removedItem = null;

    if (state.type === 'bracelet') {
      removedItem = INVENTORY.find(c => c.id === state.braceletSlots[slotIdx]);
      state.braceletSlots[slotIdx] = null;
    } else if (state.type === 'necklace') {
      removedItem = INVENTORY.find(c => c.id === state.necklaceSlots[slotIdx]);
      state.necklaceSlots[slotIdx] = null;
    } else if (state.type === 'rings') {
      removedItem = INVENTORY.find(c => c.id === state.ringSlots[slotIdx]);
      state.ringSlots[slotIdx] = null;
    } else if (state.type === 'earrings') {
      removedItem = INVENTORY.find(c => c.id === state.earringSlots[slotIdx]);
      state.earringSlots[slotIdx] = null;
    }

    audio.playKeyClick();
    renderStage();

    const statusText = document.getElementById('status-text');
    if (statusText && removedItem) {
      statusText.textContent = `Removed ${removedItem.name}. Click tray pieces to add more.`;
    }
  }

  /* ==========================================================================
     "BOX IT UP" PACKAGING CEREMONY
     ========================================================================== */
  function boxItUp() {
    if (!totals().items.length) { say('Pick at least one piece first ✨'); return; }
    audio.playRegisterKaChing();
    qs('#vintage-register').classList.add('drawer-open');
    qs('#pack-setup').classList.remove('hide'); qs('#pack-show').classList.add('hide');
    const o = qs('#gift-overlay'); o.classList.add('show'); o.setAttribute('aria-hidden', 'false');
  }

  const SHOP_WHATSAPP = ''; // <-- put your shop number here, e.g. '923001234567' (leave '' to let the customer pick a chat)
  const WRAPS = {
    purple: { n: 'Royal Lantern', box: '#8e4fd8', lid: '#a874ee', dark: '#3f1a82' },
    rose:   { n: 'Blush Rose',    box: '#e8557e', lid: '#f48fb1', dark: '#880e4f' },
    night:  { n: 'Midnight Gold', box: '#37474f', lid: '#546e7a', dark: '#0d1b24' }
  };
  let packWrap = 'purple', packTimers = [], packDone = false;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function totals() {
    const items = (state.type === 'necklace' ? state.necklaceSlots.concat(state.necklaceTop) : slotsOf()).filter(Boolean).map(id => INVENTORY.find(c => c.id === id));
    const eng = (state.type === 'bracelet' || state.type === 'necklace') && state.engraving.trim() ? 5 : 0;
    return { items, total: 45 + items.reduce((s, c) => s + c.price, 0) + eng };
  }

  function packScene() {
    const W = WRAPS[packWrap], { items } = totals(), n = items.length, sc = n > 8 ? .85 : n > 4 ? 1.2 : 1.6, gap = Math.min(n > 4 ? 30 : 44, 190 / Math.max(1, n - 1));
    const main = items.filter(c => !c.isMini), minis = items.filter(c => c.isMini), dy = minis.length && main.length ? 10 : 0;
    const row = (arr, k, y, scale, g) => arr.map((c, i) => `<g transform="translate(${(i - (arr.length - 1) / 2) * g} ${y}) scale(${scale})">${c.svg}</g>`).join('');
    const pieces = row(main, 0, dy, sc, Math.min(gap, 190 / Math.max(1, main.length - 1))) + row(minis, 0, minis.length && main.length ? -22 : 0, 1.5, Math.min(21, 200 / Math.max(1, minis.length - 1)));
    const to = esc(qs('#gift-to').value.trim() || 'You'), from = esc(qs('#gift-from').value.trim());
    let l1 = '', l2 = '';
    (qs('#gift-msg').value.trim() || 'Made with love').split(' ').forEach(w => { if (!l2 && (l1 + ' ' + w).trim().length <= 16) l1 = (l1 + ' ' + w).trim(); else l2 = (l2 + ' ' + w).trim(); });
    return `<svg viewBox="0 0 400 340" id="pk-svg">${SHARED_SVG_DEFS}
      <defs><linearGradient id="pkB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${W.lid}"/><stop offset="1" stop-color="${W.box}"/></linearGradient></defs>
      <ellipse cx="200" cy="318" rx="150" ry="14" fill="#000" opacity=".18"/>
      <rect x="80" y="170" width="240" height="130" rx="10" fill="${W.dark}"/>
      <rect x="92" y="180" width="216" height="46" rx="12" fill="#fce2ea"/>
      <g transform="translate(200 202)"><g id="pk-items">${pieces}</g></g>
      <path id="pk-tl" d="M92 226Q150 188 200 205L200 242L92 248Z" fill="#ffe3ee"/>
      <path id="pk-tr" d="M308 226Q250 188 200 205L200 242L308 248Z" fill="#ffd3e4"/>
      <rect x="80" y="232" width="240" height="68" rx="10" fill="url(#pkB)"/>
      <g id="pk-lid"><rect x="68" y="150" width="264" height="86" rx="10" fill="${W.lid}"/><rect x="68" y="224" width="264" height="12" rx="4" fill="${W.box}" opacity=".7"/><rect x="76" y="156" width="248" height="10" rx="5" fill="#fff" opacity=".25"/></g>
      <path class="pk-draw" pathLength="1" d="M200 150V300" stroke="url(#goldWire)" stroke-width="22" fill="none"/>
      <path class="pk-draw" pathLength="1" d="M68 194H332" stroke="url(#goldWire)" stroke-width="22" fill="none"/>
      <g transform="translate(200 146)"><g id="pk-bow">
        <path d="M0 0C-45-45-70 0-35 12Z" fill="url(#goldWire)" stroke="#c98f26"/><path d="M0 0C45-45 70 0 35 12Z" fill="url(#goldWire)" stroke="#c98f26"/>
        <path d="M-4 4L-22 34M4 4L22 34" stroke="#f2b93b" stroke-width="7" stroke-linecap="round"/><circle r="9" fill="url(#goldWire)" stroke="#c98f26"/></g></g>
      <g transform="translate(200 272)"><g id="pk-seal"><circle r="15" fill="#c62828" stroke="#ffd54f" stroke-width="2"/><text y="5" text-anchor="middle" font-size="15" fill="#ffd54f">✦</text></g></g>
      <g transform="translate(250 178)"><g id="pk-tag">
        <rect width="92" height="58" rx="6" fill="#fff7e6" stroke="#d4af37" stroke-width="1.5"/><circle cx="8" cy="8" r="2.5" fill="#d4af37"/>
        <text x="46" y="20" text-anchor="middle" font-size="10" font-weight="800" fill="#880e4f">To: ${to}</text>
        <text x="46" y="34" text-anchor="middle" font-size="8.5" fill="#5a0822">${esc(l1)}</text><text x="46" y="45" text-anchor="middle" font-size="8.5" fill="#5a0822">${esc(l2.slice(0, 18))}</text>
        <text x="46" y="55" text-anchor="middle" font-size="7.5" font-style="italic" fill="#99284a">${from ? '— ' + from : ''}</text></g></g>
    </svg>`;
  }

  function lanternBurst() {
    for (let i = 0; i < 26; i++) {
      const l = document.createElement('i');
      l.className = 'ln';
      l.style.cssText = `--w:${18 + Math.random() * 26}px;left:${Math.random() * 100}%;--d:${4 + Math.random() * 4}s;--x:${(Math.random() - .5) * 140}px;animation-delay:${Math.random() * 1.5}s`;
      l.addEventListener('animationend', () => l.remove());
      document.body.append(l);
    }
  }

  function runPack() {
    const st = qs('#pack-stage'), t = totals();
    st.className = 'pack-stage'; packDone = false; qs('#pack-end').classList.add('hide');
    qs('#pack-summary').innerHTML = `<strong>${state.type.toUpperCase()}</strong> · ${t.items.length} piece${t.items.length === 1 ? '' : 's'} · <span class="pack-total">${fmt(t.total)}</span>`;
    [[300, 's1', 'Placing your jewelry on satin… ✨'], [1600, 's2', 'Wrapping it in tissue paper…'], [2800, 's3', 'Closing the lid…'],
     [4000, 's4', 'Tying the ribbon…'], [5300, 's5', 'Adding your gift tag & wax seal…'], [6500, 's6', 'Your gift is ready! 🎁']].forEach(([ms, c, m]) =>
      packTimers.push(setTimeout(() => {
        st.classList.add(c); qs('#pk-status').textContent = m;
        if (c === 's1') audio.playCharmSnap(); if (c === 's3') audio.playZipper(); if (c === 's5') audio.playKeyClick();
        if (c === 's6') { packDone = true; audio.playRegisterKaChing(); lanternBurst(); qs('#pack-end').classList.remove('hide'); }
      }, ms)));
  }

  function resetAll() {
    state.braceletSlots = Array(6).fill(null); state.necklaceSlots = Array(5).fill(null); state.necklaceTop = Array(9).fill(null);
    state.ringSlots = Array(4).fill(null); state.earringSlots = Array(2).fill(null);
    state.undo = []; state.lastSlot = state.lastTop = -1; state.engraving = 'Corona'; state.style = { necklace: 'duo', bracelet: 'classic', earrings: 'hoop' }; state.bust = 'ivory'; state.activeTab = 'all';
    const eg = qs('#engrave-input'); if (eg) eg.value = 'Corona';
    ['#gift-to', '#gift-from', '#gift-msg'].forEach(s => { const e = qs(s); if (e) e.value = ''; });
    packWrap = 'purple'; packDone = false;
    document.querySelectorAll('.wrap-opt').forEach(x => x.classList.toggle('active', x.dataset.wrap === 'purple'));
    document.querySelectorAll('.bust-dot').forEach(x => x.classList.toggle('active', x.dataset.bust === 'ivory'));
    document.querySelectorAll('.tray-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'all'));
    qs('#pack-stage').innerHTML = ''; qs('#pk-status').textContent = '';
    qs('#pack-setup').classList.remove('hide'); qs('#pack-show').classList.add('hide'); qs('#pack-end').classList.add('hide');
    document.querySelectorAll('.ln').forEach(l => l.remove());
    renderTray(); setType('bracelet');
    say('A fresh start! Pick pearls & charms to design your next piece ✨');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closePack() {
    packTimers.forEach(clearTimeout); packTimers = [];
    qs('#gift-overlay').classList.remove('show');
    qs('#vintage-register').classList.remove('drawer-open');
    if (packDone) resetAll();
  }

  function savePicture() {
    const svg = qs('#stage-svg').style.display !== 'none' ? qs('#stage-svg') : qs('#ring-stage svg');
    if (!svg) { say('Saving a picture works for necklace, bracelet and rings 📸'); return; }
    const vb = svg.viewBox.baseVal, W = 1080, H = Math.round(W * vb.height / vb.width), c = svg.cloneNode(true);
    c.setAttribute('width', W); c.setAttribute('height', H); c.removeAttribute('style');
    const img = new Image();
    img.onload = () => {
      const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const x = cv.getContext('2d'), g = x.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#fff6f1'); g.addColorStop(1, '#f3d9d0'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.drawImage(img, 0, 0, W, H);
      const a = document.createElement('a'); a.download = 'my-pearl-bar-' + state.type + '.png'; a.href = cv.toDataURL('image/png'); a.click();
      say('Saved! Share it anywhere 💖');
    };
    img.onerror = () => say('Could not save the picture in this browser');
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(c));
  }

  function waOpen(num, text) { window.open(`https://wa.me/${num || ''}?text=${encodeURIComponent(text)}`, '_blank'); }
  function sendWhatsApp() {
    const t = totals(), to = qs('#gift-to').value.trim(), from = qs('#gift-from').value.trim(), note = qs('#gift-msg').value.trim();
    const metal = state.metal === 'gold' ? '18K Gold' : 'Sterling Silver';
    waOpen(SHOP_WHATSAPP, `👑 *THE PEARL BAR · NEW ORDER* 👑\n\n✨ *Piece:* ${metal} ${state.type} (${state.size})\n🦪 *Pieces:* ${t.items.map(c => c.name).join(', ') || 'None'}\n🎁 *Wrapping:* ${WRAPS[packWrap].n}\n` +
      (to || note ? `💌 *Gift card:* To ${to || '—'} · "${note}" · From ${from || '—'}\n` : '') + `💰 *Total:* ${fmt(t.total)}\n\nHello! I designed this on The Charm Bar and would like to confirm my order 💖`);
  }
  function sendGiftCard() {
    const t = totals(), to = qs('#gift-to').value.trim() || 'you', from = qs('#gift-from').value.trim(), note = qs('#gift-msg').value.trim() || 'Made with love';
    waOpen('', `💌 *A little gift for ${to}* 💌\n\n"${note}"\n${from ? '— ' + from + '\n' : ''}\nI designed a ${state.type} for you at The Pearl Bar: ${t.items.map(c => c.name).join(', ')} ✨`);
  }

  function surprise() {
    const t = state.type, pick = a => a[Math.floor(Math.random() * a.length)];
    const pool = INVENTORY.filter(c => t === 'rings' ? c.isRing : t === 'earrings' ? c.isEarring : !c.isRing && !c.isEarring && !c.isMini);
    const minis = INVENTORY.filter(c => c.isMini), main = slotsOf(), jobs = [];
    main.fill(null); state.undo = [];
    if (t === 'necklace') { state.necklaceTop.fill(null); state.necklaceTop.forEach((_, i) => jobs.push({ arr: state.necklaceTop, i, pool: minis, top: 1 })); }
    main.forEach((_, i) => jobs.push({ arr: main, i, pool }));
    let k = 0;
    const tm = setInterval(() => {
      if (k >= jobs.length) { clearInterval(tm); say('Surprise! Do you love it? 💖'); return; }
      const j = jobs[k++]; j.arr[j.i] = pick(j.pool).id;
      if (j.top) { state.lastTop = j.i; state.lastSlot = -1; } else { state.lastSlot = j.i; state.lastTop = -1; }
      audio.playCharmSnap(); renderStage(); if (!j.top) burst();
    }, 200);
  }

  function cardArt(type, id) {
    const W = '#fff', G = '#ffe082', dot = (x, y, r = 2.6, c = G) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
    const ln = (d, w = 2.4, x = '') => `<path d="${d}" fill="none" stroke="${W}" stroke-width="${w}" stroke-linecap="round" ${x}/>`;
    const Q = (a, c, b, t) => [0, 1].map(k => (1 - t) ** 2 * a[k] + 2 * (1 - t) * t * c[k] + t * t * b[k]);
    const dots = (a, c, b, n, r) => Array.from({ length: n }, (_, i) => { const [x, y] = Q(a, c, b, .08 + .84 * i / (n - 1)); return dot(+x.toFixed(1), +y.toFixed(1), r, i % 2 ? W : G); }).join('');
    const el = (sw, col, x = '') => `<ellipse cx="60" cy="40" rx="38" ry="24" fill="none" stroke="${col}" stroke-width="${sw}" ${x}/>`;
    const pair = f => [38, 82].map(f).join('');
    const A = {
      necklace: {
        duo: ln('M34 8Q60 30 86 8', 2) + dots([34, 8], [60, 30], [86, 8], 7, 2.1) + ln('M30 6Q60 130 90 6', 1.8) + dot(60, 70, 5) + dot(60, 70, 2, W),
        choker: ln('M30 12Q60 44 90 12', 3) + dots([30, 12], [60, 44], [90, 12], 9, 3.2),
        drop: ln('M32 6Q60 84 88 6', 2) + dot(60, 52, 9) + dot(60, 52, 4, W),
        princess: ln('M36 8Q60 26 84 8', 1.8) + ln('M32 6Q60 100 88 6') + dot(46, 41, 5) + dot(60, 54, 7) + dot(74, 41, 5),
        long: ln('M32 6Q60 140 88 6') + dot(43, 49, 4) + dot(52, 67, 4) + dot(60, 73, 5.5) + dot(68, 67, 4) + dot(77, 49, 4)
      },
      bracelet: {
        classic: el(4, W, 'stroke-dasharray="7 3"') + dot(46, 62, 4.5) + dot(60, 64, 5) + dot(74, 62, 4.5),
        paperclip: el(3, W, 'stroke-dasharray="14 3"') + dot(50, 63, 5) + dot(70, 63, 5),
        tennis: Array.from({ length: 22 }, (_, i) => dot(+(60 + 38 * Math.cos(i / 22 * 6.2832)).toFixed(1), +(40 + 24 * Math.sin(i / 22 * 6.2832)).toFixed(1), 3, i % 2 ? W : G)).join(''),
        bangle: el(9, G) + el(1.6, W, 'transform="translate(0 -2)"') + dot(46, 60, 4, W) + dot(60, 63, 4.5, W) + dot(74, 60, 4, W),
        cuff: `<path d="M77.8 18.8 A38 24 0 1 1 42.2 18.8" fill="none" stroke="${G}" stroke-width="7" stroke-linecap="round"/>` + dot(77.8, 18.8, 6, W) + dot(42.2, 18.8, 6, W)
      },
      earrings: {
        hoop: pair(x => `<circle cx="${x}" cy="28" r="13" fill="none" stroke="${W}" stroke-width="3"/>${dot(x, 56, 6)}${dot(x, 56, 2.4, W)}`),
        stud: pair(x => `<circle cx="${x}" cy="40" r="13" fill="${W}" stroke="${G}" stroke-width="3.5"/>${dot(x - 4, 36, 3, '#ffe9f1')}`),
        chandelier: pair(x => `${ln(`M${x - 12} 12H${x + 12}L${x + 6} 32H${x - 6}Z`, 2)}${[-6, 0, 6].map(o => ln(`M${x + o} 32V${o ? 48 : 52}`, 1.6)).join('')}${dot(x, 58, 4.5)}`),
        threader: pair(x => `${ln(`M${x} 8V62`, 1.8, 'stroke-dasharray="3 2"')}${dot(x, 67, 5)}${dot(x, 8, 3, W)}`),
        dangle: pair(x => `${dot(x, 16, 8)}${dot(x, 16, 3.4, W)}${ln(`M${x - 3.5} 24V58`, 1.6)}${ln(`M${x + 3.5} 24V52`, 1.6)}${dot(x - 3.5, 61, 3)}${dot(x + 3.5, 55, 3, W)}`)
      }
    };
    return A[type][id];
  }

  function renderGallery() {
    const g = qs('#style-gallery');
    if (!g) return;
    if (!g.children.length || g.dataset.cur !== currentCurrency) {
      const rows = [['necklace', 'Necklaces', '💎'], ['bracelet', 'Bracelets', '✨'], ['earrings', 'Earrings', '🌸']];
      g.innerHTML = `<div class="gal-head"><h2>Choose your style</h2><p>Tap a card, then design it above with your favourite pearls &amp; charms ✨</p></div>` + rows.map(([t, title, em]) => `
        <div class="gal-row" data-type="${t}"><h3>${em} ${title}</h3><div class="gal-cards">${STYLE_DEFS[t].map(s => `
          <button class="style-card" data-type="${t}" data-style="${s.id}" style="--c1:${s.grad[0]};--c2:${s.grad[1]}">
            <span class="sc-badge">Selected ✓</span>
            <svg class="sc-art" viewBox="0 0 120 80">${cardArt(t, s.id)}</svg>
            <strong>${s.name}</strong><small>${s.note}</small><em>from ${fmt(45)}</em>
          </button>`).join('')}</div></div>`).join('');
      g.dataset.cur = currentCurrency;
    }
    g.querySelectorAll('.gal-row').forEach(r => r.classList.toggle('current', r.dataset.type === state.type));
    g.querySelectorAll('.style-card').forEach(c => c.classList.toggle('active', state.style[c.dataset.type] === c.dataset.style));
  }

  function pickStyle(t, id) {
    const S = STYLE_DEFS[t].find(s => s.id === id);
    if (!S) return;
    state.style[t] = id;
    if (t === 'necklace') {
      if (!S.top) state.necklaceTop.fill(null);
      if (!S.low) state.necklaceSlots.fill(null); else if (S.n === 3) { state.necklaceSlots[0] = null; state.necklaceSlots[4] = null; }
      state.undo = [];
    }
    audio.playCharmSnap(); setType(t);
    qs('#box-base').scrollIntoView({ behavior: 'smooth', block: 'center' });
    say(`<strong>${S.name}</strong> selected ✨ Now add your pearls &amp; charms!`);
  }

  function setupExtras() {
    qs('#style-gallery').onclick = e => { const b = e.target.closest('.style-card'); if (b) pickStyle(b.dataset.type, b.dataset.style); };
    qs('#wrap-choices').onclick = e => { const b = e.target.closest('.wrap-opt'); if (!b) return; packWrap = b.dataset.wrap; document.querySelectorAll('.wrap-opt').forEach(x => x.classList.toggle('active', x === b)); };
    qs('#btn-start-pack').onclick = () => { qs('#pack-setup').classList.add('hide'); qs('#pack-show').classList.remove('hide'); qs('#pack-stage').innerHTML = packScene(); runPack(); };
    qs('#btn-wa-gift').onclick = sendGiftCard;
    qs('#btn-surprise').onclick = surprise;
    qs('#btn-save-pic').onclick = savePicture;
    qs('#btn-undo').onclick = () => {
      let h; while ((h = state.undo.pop()) && h.arr[h.i] == null);
      if (!h) { say('Nothing to undo yet'); return; }
      h.arr[h.i] = null; state.lastSlot = state.lastTop = -1; audio.playKeyClick(); renderStage(); say('Undone ↩');
    };
    qs('#bust-row').onclick = e => {
      const b = e.target.closest('[data-bust]'); if (!b) return;
      state.bust = b.dataset.bust; document.querySelectorAll('.bust-dot').forEach(x => x.classList.toggle('active', x === b)); renderStage();
    };
    qs('#stage-svg').addEventListener('click', e => {
      const g = e.target.closest('[data-top]'); if (!g) return;
      const i = +g.dataset.top; if (!state.necklaceTop[i]) return;
      state.necklaceTop[i] = null; state.lastTop = -1; audio.playKeyClick(); renderStage(); say('Removed. Pick another small pearl ✨');
    });
    qs('#btn-clear-tray').addEventListener('click', () => { state.necklaceTop.fill(null); state.undo = []; state.lastTop = -1; renderStage(); });
    qs('#btn-close-modal').addEventListener('click', closePack);
    qs('#btn-make-another').addEventListener('click', closePack);
  }

  /* ==========================================================================
     EVENT LISTENERS
     ========================================================================== */
  function setupEvents() {
    // Tray Tabs Filter
    document.querySelectorAll('.tray-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        audio.playKeyClick();
        document.querySelectorAll('.tray-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeTab = tab.dataset.tab;
        renderTray();
        if (tab.dataset.tab === 'rings') setType('rings');
        else if (tab.dataset.tab === 'earrings') setType('earrings');
        else if (tab.dataset.tab === 'mini') setType('necklace');
      });
    });

    // Tray Slot Item Click -> Attach Item
    const trayGrid = document.getElementById('tray-grid');
    if (trayGrid) {
      trayGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.tray-slot-item');
        if (!item) return;
        attachItem(item.dataset.id);
      });
    }

    // SVG Stage Click -> Detach Chain Piece
    const stageSvg = document.getElementById('stage-svg');
    if (stageSvg) {
      stageSvg.addEventListener('click', (e) => {
        const attached = e.target.closest('.attached-charm-group');
        if (attached) {
          const slotIdx = parseInt(attached.dataset.slot, 10);
          detachItem(slotIdx);
        }
      });
    }

    // Ring Stage Click -> Detach Ring
    const ringStage = document.getElementById('ring-stage');
    if (ringStage) {
      ringStage.addEventListener('click', (e) => {
        const slot = e.target.closest('.ring-roll-slot');
        if (!slot) return;
        const slotIdx = parseInt(slot.dataset.ringSlot, 10);
        if (state.ringSlots[slotIdx]) {
          detachItem(slotIdx);
        }
      });
    }

    // Earrings Stage Click -> Detach Earring Drop
    const earringsStage = document.getElementById('earrings-stage');
    if (earringsStage) {
      earringsStage.addEventListener('click', (e) => {
        const stand = e.target.closest('.earring-card-stand');
        if (!stand) return;
        const slotIdx = parseInt(stand.dataset.earringSlot, 10);
        if (state.earringSlots[slotIdx]) {
          detachItem(slotIdx);
        }
      });
    }

    // Jewelry Type Switcher
    document.querySelectorAll('.type-btn').forEach(btn => {
      btn.addEventListener('click', () => { audio.playKeyClick(); setType(btn.dataset.type); });
    });

    // Metal Switcher (Silver vs. Gold)
    document.querySelectorAll('.metal-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        audio.playKeyClick();
        document.querySelectorAll('.metal-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.metal = btn.dataset.metal;
        renderStage();
      });
    });

    // Sizes Pills Click
    const sizesPills = document.getElementById('sizes-pills');
    if (sizesPills) {
      sizesPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.size-btn');
        if (!btn) return;
        audio.playKeyClick();
        sizesPills.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.size = btn.textContent.trim();
        updateRegisterTotals();
      });
    }

    // Currency Switcher
    document.querySelectorAll('.curr-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        audio.playKeyClick();
        document.querySelectorAll('.curr-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCurrency = btn.dataset.curr;
        renderTray();
        updateRegisterTotals();
      });
    });

    // Register Keypad Clicks
    document.querySelectorAll('.reg-key').forEach(key => {
      key.addEventListener('click', () => {
        audio.playKeyClick();
      });
    });

    // Engraving Input
    const engraveInput = document.getElementById('engrave-input');
    if (engraveInput) {
      engraveInput.addEventListener('input', (e) => {
        state.engraving = e.target.value;
        updateRegisterTotals();
      });
    }

    // Reset Button
    const clearBtn = document.getElementById('btn-clear-tray');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        audio.playKeyClick();
        state.braceletSlots = [null, null, null, null, null, null];
        state.necklaceSlots = [null, null, null, null, null];
        state.ringSlots = [null, null, null, null];
        state.earringSlots = [null, null];
        state.engraving = 'Corona';
        if (engraveInput) engraveInput.value = 'Corona';
        renderStage();
      });
    }

    // "BOX IT UP" Button
    const boxItBtn = document.getElementById('btn-box-it');
    if (boxItBtn) {
      boxItBtn.addEventListener('click', boxItUp);
    }

    // WhatsApp Buttons
    const waDirect = document.getElementById('btn-whatsapp-direct');
    const waConfirm = document.getElementById('btn-confirm-whatsapp');
    if (waDirect) waDirect.addEventListener('click', sendWhatsApp);
    if (waConfirm) waConfirm.addEventListener('click', sendWhatsApp);

    // Make Another Button in Modal
    const makeAnotherBtn = document.getElementById('btn-make-another');
    if (makeAnotherBtn) {
      makeAnotherBtn.addEventListener('click', () => {
        const overlay = document.getElementById('gift-overlay');
        if (overlay) overlay.classList.remove('show');

        const boxEl = document.getElementById('enamel-box');
        if (boxEl) boxEl.classList.remove('box-closed');

        const regEl = document.getElementById('vintage-register');
        if (regEl) regEl.classList.remove('drawer-open');

        state.braceletSlots = [null, null, null, null, null, null];
        state.necklaceSlots = [null, null, null, null, null];
        state.ringSlots = [null, null, null, null];
        state.earringSlots = [null, null];
        renderStage();
      });
    }

    // Close Modal Button
    const closeX = document.getElementById('btn-close-modal');
    if (closeX) {
      closeX.addEventListener('click', () => {
        const overlay = document.getElementById('gift-overlay');
        if (overlay) overlay.classList.remove('show');
        const boxEl = document.getElementById('enamel-box');
        if (boxEl) boxEl.classList.remove('box-closed');
        const regEl = document.getElementById('vintage-register');
        if (regEl) regEl.classList.remove('drawer-open');
      });
    }

    // How It Works Modal
    const howBtn = document.getElementById('btn-how-works');
    const infoOverlay = document.getElementById('info-overlay');
    const closeInfo = document.getElementById('btn-close-info');
    const gotItBtn = document.getElementById('btn-got-it');

    if (howBtn && infoOverlay) {
      howBtn.addEventListener('click', () => {
        infoOverlay.classList.add('show');
      });
    }
    if (closeInfo && infoOverlay) {
      closeInfo.addEventListener('click', () => {
        infoOverlay.classList.remove('show');
      });
    }
    if (gotItBtn && infoOverlay) {
      gotItBtn.addEventListener('click', () => {
        infoOverlay.classList.remove('show');
      });
    }

    // Music Box Toggle
    const musicBtn = document.getElementById('btn-music-toggle');
    if (musicBtn) {
      musicBtn.addEventListener('click', () => {
        audio.toggleMusic();
      });
    }
  }

  /* --- Initialization --- */
  initLanternsCanvas();
  renderTray();
  renderStage();
  setupEvents();
  setupExtras();

})();