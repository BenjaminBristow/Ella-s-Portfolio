/**
 * ELLA ROSE BOWIS // ADVERTISING & DIGITAL MARKETING
 * Clean, high-end portfolio logic for campaign filtering, 
 * modal video playback, and responsive navigation.
 */

const DATA = {
  campaigns: [
    {
      id: "porsche-heritage",
      client: "Porsche UK • Spec Commercial",
      title: "The Art of Precision: 911 Heritage",
      category: "automotive",
      aspect: "16:9 Widescreen",
      duration: "00:45",
      badge: "SPEC COMMERCIAL",
      desc: "High-octane commercial cut designed to drive emotional affinity among young automotive enthusiasts through speed-ramp pacing and aggressive sound design.",
      audience: "21–35 luxury automotive & motorsport enthusiasts",
      driveId: "1UVvJkHaoTgN7607sZZx4kE_z1E7sMu4Q",
      localFile: "Porsche (1).mp4",
      gradient: "linear-gradient(135deg, #1f0b0e, #360f14, #0d0f17)"
    },
    {
      id: "f1-apex-story",
      client: "Formula 1 • Fandom Campaign",
      title: "Split-Second Drama: Speed Meets Story",
      category: "automotive",
      aspect: "16:9 Widescreen",
      duration: "00:38",
      badge: "SPORTS MARKETING",
      desc: "Capturing motorsport tension and race telemetry rhythm to connect next-generation fans with the split-second drama of Formula 1.",
      audience: "Global Gen-Z & millennial motorsport fans",
      driveId: "1FoNxw-EIhaChn82EOmuq_8iPCtwomzqv",
      localFile: "f1 vid.mp4",
      gradient: "linear-gradient(135deg, #0c1624, #122c4d, #080a0f)"
    },
    {
      id: "netflix-midnight",
      client: "Netflix UK • Entertainment Spec Ad",
      title: "Midnight Thriller: Building Anticipation",
      category: "entertainment",
      aspect: "16:9 Widescreen",
      duration: "00:52",
      badge: "TRAILER CAMPAIGN",
      desc: "High-tension streaming campaign built around psychological suspense pacing, heartbeat sub-drops, and rapid cutaways.",
      audience: "18–34 streaming thriller & horror viewers",
      driveId: "1mP5mhi3Erc03GbWidzZ5gSl3jjcvR0dV",
      localFile: "netflix horror ad.mp4",
      gradient: "linear-gradient(135deg, #240a0a, #380d0d, #08090d)"
    },
    {
      id: "detailing-brand",
      client: "Modern Car Detailing • Visual Identity",
      title: "Precision Detailing: Brand Collateral",
      category: "brand",
      aspect: "Identity System",
      duration: "Brand Kit",
      badge: "BRAND COLLATERAL",
      desc: "Positioning an automotive bespoke care brand through minimalist dark-matte aesthetics and scarlet precision accents.",
      audience: "Luxury & sports vehicle owners",
      driveId: "18pTfUrs7_dVCiTOCymsQ6N8UKXMapnXv",
      isImage: true,
      gradient: "linear-gradient(135deg, #140909, #290d0d, #09090b)"
    },
    {
      id: "hot-pink-identity",
      client: "Creative Concept Lab • Visual Direction",
      title: "Cyber Neon: High-Energy Treatment",
      category: "brand",
      aspect: "Visual Deck",
      duration: "Color Edition",
      badge: "CREATIVE CONCEPT",
      desc: "Exploring thumb-stopping color harmony and typography designed to stand out in saturated social feeds.",
      audience: "Gen-Z digital native consumers",
      driveId: "1URhXERrwccCf1XBT1uCq1nnfB6QhynhJ",
      isImage: true,
      gradient: "linear-gradient(135deg, #290415, #4a0525, #0f0108)"
    },
    {
      id: "campaign-brief-deck",
      client: "University Strategic Brief • Treatment Deck",
      title: "Campaign Treatment & Strategy Deck",
      category: "brand",
      aspect: "Strategy PDF",
      duration: "Case Brief",
      badge: "STRATEGY BRIEF",
      desc: "End-to-end strategic marketing brief defining audience insights, narrative arcs, production treatments, and distribution channels.",
      audience: "Agency pitch panels & brand directors",
      driveId: "1LdiFZIfOVJDYaXaCqmH-uRv6sbo4IW9G",
      isDoc: true,
      gradient: "linear-gradient(135deg, #0e1824, #182e45, #070b10)"
    }
  ],

  reels: [
    {
      id: "r1",
      title: "Fast-Paced Hook & Trend Cut",
      tag: "VIRAL HOOK",
      dur: "00:15",
      driveId: "1y4WqR_U5j9vFw-4qv9QPEfiLNV4qunTi",
      localFile: "WhatsApp Video 2026-10-11 at 02.02.49.mp4",
      gradient: "linear-gradient(180deg, #26122a, #0f0812)"
    },
    {
      id: "r2",
      title: "Kinetic Montage & Audio Sync",
      tag: "AUDIO SYNC",
      dur: "00:18",
      driveId: "1ljpQr5U0jIVoKuOTf_4z_7dXs8CHuIAb",
      localFile: "WhatsApp Video 2026-10-11 at 02.02.58.mp4",
      gradient: "linear-gradient(180deg, #142330, #090e14)"
    },
    {
      id: "r3",
      title: "High-Retention Engagement Beat",
      tag: "RETENTION",
      dur: "00:14",
      driveId: "1sjgM9AG4Eot3E5J_nn7AeO7gIRfQWP3R",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.06.mp4",
      gradient: "linear-gradient(180deg, #2e1a12, #140b08)"
    },
    {
      id: "r4",
      title: "Atmospheric Visual Storytelling",
      tag: "LIFESTYLE",
      dur: "00:22",
      driveId: "1_eGnv9Kmm4WukEcZnJUmhsg21Q8ZN9Y-",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.14.mp4",
      gradient: "linear-gradient(180deg, #22142c, #0d0712)"
    },
    {
      id: "r5",
      title: "Dynamic Beat-Sync & Match Cut",
      tag: "BEAT SYNC",
      dur: "00:16",
      driveId: "1FVFo9kL8ASGaJqSizqj-_utDHmxDafis",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.20.mp4",
      gradient: "linear-gradient(180deg, #122730, #081014)"
    },
    {
      id: "r6",
      title: "Vibrant Grade & Color Pop",
      tag: "COLOR POP",
      dur: "00:20",
      driveId: "1petErbc1K4UomDnJW56wQaxCVE1DvUs-",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.24.mp4",
      gradient: "linear-gradient(180deg, #2c1220, #14080e)"
    },
    {
      id: "r7",
      title: "Lifestyle Rhythm & Movement",
      tag: "COMMUNITY",
      dur: "00:19",
      driveId: "1mY978BVW6y2y6DPzm6MJ0xrGnysCF8oq",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.31.mp4",
      gradient: "linear-gradient(180deg, #1c2b1e, #0a110b)"
    },
    {
      id: "r8",
      title: "Seamless Loop Social Activation",
      tag: "SEAMLESS LOOP",
      dur: "00:15",
      driveId: "17YEdKKGOXfsMnv9EmDAZxp0RK9n7ijCh",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.38.mp4",
      gradient: "linear-gradient(180deg, #242433, #0c0c12)"
    }
  ]
};

// ==============================================================================
// CARD VISUAL CREATOR (Refined Dark Frame)
// ==============================================================================
function renderMockupSvg(title, badge, icon, gradient) {
  return `
    <div style="
      width: 100%;
      height: 100%;
      background: ${gradient};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem;
      box-sizing: border-box;
      position: relative;
    ">
      <div style="display: flex; justify-content: space-between; align-items: center; z-index: 1;">
        <span style="font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.6); letter-spacing: 1px;">ELLA ROSE BOWIS</span>
        <span style="font-size: 1.2rem; opacity: 0.85;">${icon}</span>
      </div>

      <div style="z-index: 1; text-align: center; margin: auto 0;">
        <div style="font-family: 'Cinzel', serif; font-size: 1.45rem; color: #fff; line-height: 1.2; text-shadow: 0 4px 15px rgba(0,0,0,0.8);">${title}</div>
        <div style="font-family: 'Space Mono', monospace; font-size: 0.68rem; color: var(--accent); margin-top: 0.4rem; letter-spacing: 1.2px; font-weight: 700;">${badge}</div>
      </div>

      <div style="display: flex; justify-content: space-between; font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.45); border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.4rem; z-index: 1;">
        <span>CAMPAIGN CUT</span>
        <span>LANCASTER UNI</span>
      </div>
    </div>
  `;
}

// ==============================================================================
// RENDERERS
// ==============================================================================
function renderCampaigns(filter = "all") {
  const grid = document.getElementById("campaignGrid");
  if (!grid) return;

  const items = filter === "all" ? DATA.campaigns : DATA.campaigns.filter(c => c.category === filter);

  grid.innerHTML = items.map(c => `
    <article class="c-card" onclick="openModal('${c.id}')">
      <div class="c-media">
        <span class="c-badge">${c.badge}</span>
        <div class="c-play">▶</div>
        ${renderMockupSvg(c.title, c.badge, c.isDoc ? "📄" : "🎬", c.gradient)}
      </div>
      <div class="c-body">
        <span class="c-client">${c.client}</span>
        <h3 class="c-title">${c.title}</h3>
        <p class="c-desc">${c.desc}</p>
        <div class="c-meta">
          <span>⏱ ${c.duration}</span>
          <span>📐 ${c.aspect}</span>
          <span style="color: var(--accent); font-weight: 700;">View Brief ➔</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderReels() {
  const grid = document.getElementById("reelsGrid");
  if (!grid) return;

  grid.innerHTML = DATA.reels.map(r => `
    <div class="r-card" onclick="openModal('${r.id}')" title="Play ${r.title}">
      <div class="r-media">
        <div class="r-overlay">
          <span class="r-badge">${r.tag}</span>
          <div class="r-play">▶</div>
          <div class="r-info">
            <h4 class="r-title">${r.title}</h4>
            <span class="r-sub">${r.dur} • 9:16 Vertical</span>
          </div>
        </div>
        ${renderMockupSvg(r.title, r.tag, "📱", r.gradient)}
      </div>
    </div>
  `).join("");
}

// ==============================================================================
// MODAL CONTROLS
// ==============================================================================
let currentItem = null;

function openModal(id) {
  const all = [...DATA.campaigns, ...DATA.reels];
  currentItem = all.find(item => item.id === id);
  if (!currentItem) return;

  const modal = document.getElementById("videoModal");
  const mTag = document.getElementById("mTag");
  const mTitle = document.getElementById("mTitle");
  const mDesc = document.getElementById("mDesc");
  const mAud = document.getElementById("mAud");
  const mFmt = document.getElementById("mFmt");
  const mDriveLink = document.getElementById("mDriveLink");
  const mScreen = document.getElementById("mScreen");

  mTag.textContent = `${currentItem.badge || currentItem.tag} // ${currentItem.client || 'VERTICAL SOCIAL'}`;
  mTitle.textContent = currentItem.title;
  mDesc.textContent = currentItem.desc || currentItem.title;
  mAud.textContent = currentItem.audience || "Gen-Z & millennial consumers across social feeds";
  mFmt.textContent = currentItem.aspect || "9:16 Vertical Reel";
  mDriveLink.href = `https://drive.google.com/file/d/${currentItem.driveId}/view`;

  if (currentItem.aspect && currentItem.aspect.includes("9:16")) {
    mScreen.classList.add("vertical-screen");
  } else {
    mScreen.classList.remove("vertical-screen");
  }

  // Load Google Drive stream
  switchSource("drive");

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function switchSource(type) {
  if (!currentItem) return;
  const mScreen = document.getElementById("mScreen");
  const btnStream = document.getElementById("btnStream");
  const btnLocal = document.getElementById("btnLocal");

  if (type === "drive") {
    mScreen.innerHTML = `
      <iframe 
        src="https://drive.google.com/file/d/${currentItem.driveId}/preview" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
        title="${currentItem.title}"
      ></iframe>
    `;
    if (btnStream) { btnStream.className = "btn btn-sm btn-primary"; }
    if (btnLocal) { btnLocal.className = "btn btn-sm btn-ghost"; }
  } else {
    if (!currentItem.localFile) {
      alert("No local file configured for this item.");
      return;
    }
    mScreen.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%; background:#000;">
        <source src="assets/${encodeURIComponent(currentItem.localFile)}" type="video/mp4">
        <source src="../assets/${encodeURIComponent(currentItem.localFile)}" type="video/mp4">
        Your browser does not support video playback.
      </video>
    `;
    const v = mScreen.querySelector("video");
    if (v) {
      v.addEventListener("error", () => {
        mScreen.innerHTML = `
          <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-family: 'Space Mono', monospace; font-size: 0.85rem;">
            <p style="color: var(--accent); font-size: 1rem; margin-bottom: 0.5rem;">Local file "${currentItem.localFile}" not yet in assets/</p>
            <p style="margin-bottom: 1rem;">Download raw file from Google Drive to enable offline playback.</p>
            <button class="btn btn-sm btn-primary" onclick="window.switchSource('drive')">Back to Stream Preview</button>
          </div>
        `;
      });
    }
    if (btnStream) { btnStream.className = "btn btn-sm btn-ghost"; }
    if (btnLocal) { btnLocal.className = "btn btn-sm btn-primary"; }
  }
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const mScreen = document.getElementById("mScreen");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (mScreen) mScreen.innerHTML = "";
  currentItem = null;
}

// ==============================================================================
// INITIALIZATION
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCampaigns("all");
  renderReels();

  // Tab Filtering
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(t => {
    t.addEventListener("click", () => {
      tabs.forEach(tab => tab.classList.remove("active"));
      t.classList.add("active");
      renderCampaigns(t.dataset.filter);
    });
  });

  // Modal close handlers
  const closeBtn = document.getElementById("modalX");
  const bg = document.getElementById("modalBg");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (bg) bg.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Mobile drawer
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => drawer.classList.toggle("active"));
    document.querySelectorAll(".drawer-link").forEach(l => {
      l.addEventListener("click", () => drawer.classList.remove("active"));
    });
  }
});

// Contact message submit
window.submitMessage = function() {
  const name = document.getElementById("cName").value;
  const email = document.getElementById("cEmail").value;
  const type = document.getElementById("cType").value;
  const msg = document.getElementById("cMsg").value;
  const fb = document.getElementById("formFeedback");

  if (!fb) return;

  fb.className = "form-feedback success";
  fb.innerHTML = `✓ Thank you, ${name}. Message regarding [${type}] received. Confirmation sent to ${email}.`;

  const mailto = `mailto:bbristow.uk@gmail.com?subject=${encodeURIComponent(`Opportunity: ${name} (${type})`)}&body=${encodeURIComponent(`From: ${name} (${email})\nType: ${type}\n\n${msg}`)}`;

  setTimeout(() => {
    if (confirm("Would you like to open your email client to send this message directly to Ella as well?")) {
      window.location.href = mailto;
    }
  }, 600);
};

window.openModal = openModal;
window.switchSource = switchSource;
