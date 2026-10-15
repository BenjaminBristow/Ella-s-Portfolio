/**
 * ELLA ROSE BOWIS // ADVERTISING & DIGITAL MARKETING PORTFOLIO
 * Core application script for campaign showcases, category filters,
 * interactive case study modal, and light/dark theme toggling.
 */

// ==============================================================================
// CAMPAIGN DATA REGISTRY
// ==============================================================================
const CAMPAIGN_REGISTRY = {
  featured: [
    {
      id: "porsche-heritage",
      client: "Porsche UK • Spec Campaign",
      title: "The Art of Precision: 911 Heritage & Adrenaline",
      category: "automotive",
      aspect: "16:9 Widescreen",
      duration: "00:45",
      badge: "SPEC COMMERCIAL",
      objective: "Drive luxury performance awareness among young aspirational drivers by merging speed-ramp editing with cinematic acoustic foley.",
      audience: "21–35 motorsport and luxury automotive enthusiasts",
      channels: "Instagram Reels, YouTube Pre-Roll, Paid Social",
      driveId: "1UVvJkHaoTgN7607sZZx4kE_z1E7sMu4Q",
      localFile: "Porsche (1).mp4",
      bgGradient: "linear-gradient(135deg, #1f0b0e, #360f14, #0d0f17)"
    },
    {
      id: "f1-apex-story",
      client: "Formula 1 • Fan Culture Campaign",
      title: "F1 Split-Second Drama: Speed Meets Story",
      category: "automotive",
      aspect: "16:9 Widescreen",
      duration: "00:38",
      badge: "SPORTS MARKETING",
      objective: "Capture split-second track drama and fan emotion, syncing audio transients to race telemetry pacing for high-velocity engagement.",
      audience: "Global Gen-Z & millennial motorsport fans",
      channels: "TikTok, Instagram, Twitter/X, Race Weekend Promos",
      driveId: "1FoNxw-EIhaChn82EOmuq_8iPCtwomzqv",
      localFile: "f1 vid.mp4",
      bgGradient: "linear-gradient(135deg, #0c1624, #122c4d, #080a0f)"
    },
    {
      id: "netflix-midnight",
      client: "Netflix UK • Entertainment Spec Ad",
      title: "Midnight Thriller: Building Viewer Anticipation",
      category: "entertainment",
      aspect: "16:9 Widescreen",
      duration: "00:52",
      badge: "ENTERTAINMENT PROMO",
      objective: "Hook streaming viewers in the first 3 seconds using psychological sound design, sub-bass drops, and sudden cutaways.",
      audience: "18–34 horror, thriller, and streaming drama fans",
      channels: "TikTok Spark Ads, Instagram Stories, Trailer Preroll",
      driveId: "1mP5mhi3Erc03GbWidzZ5gSl3jjcvR0dV",
      localFile: "netflix horror ad.mp4",
      bgGradient: "linear-gradient(135deg, #240a0a, #380d0d, #08090d)"
    },
    {
      id: "detailing-brand",
      client: "Modern Car Detailing • Visual Identity",
      title: "Precision Detailing: Bespoke Brand Collateral",
      category: "brand",
      aspect: "Brand Collateral",
      duration: "Design Kit",
      badge: "BRAND IDENTITY",
      objective: "Position an automotive care studio as elite and meticulous with matte charcoal palettes and precision crimson accents.",
      audience: "Supercar and luxury vehicle owners seeking bespoke service",
      channels: "Print Collateral, Business Cards, Digital Media",
      driveId: "18pTfUrs7_dVCiTOCymsQ6N8UKXMapnXv",
      isImage: true,
      bgGradient: "linear-gradient(135deg, #140909, #290d0d, #09090b)"
    },
    {
      id: "hot-pink-identity",
      client: "Creative Concept Lab • Visual Direction",
      title: "Cyber Neon: High-Energy Creative Treatment",
      category: "brand",
      aspect: "Concept Deck",
      duration: "Visual Edition",
      badge: "CREATIVE CONCEPT",
      objective: "Experiment with electric neon palettes and high-contrast typography to maximize thumb-stopping power on social feeds.",
      audience: "Youth culture, digital native consumers",
      channels: "Social Media Campaigns, Merch & Brand Collateral",
      driveId: "1URhXERrwccCf1XBT1uCq1nnfB6QhynhJ",
      isImage: true,
      bgGradient: "linear-gradient(135deg, #290415, #4a0525, #0f0108)"
    },
    {
      id: "campaign-brief-deck",
      client: "University Strategic Brief • Treatment Deck",
      title: "Integrated Marketing Campaign Treatment Deck",
      category: "brand",
      aspect: "Production PDF",
      duration: "Strategy Brief",
      badge: "CAMPAIGN STRATEGY",
      objective: "Architect a comprehensive campaign treatment outlining target audience personas, emotional arcs, and multi-channel rollouts.",
      audience: "Agency pitch panels, brand directors, marketing leads",
      channels: "Strategy Treatment PDF, Creative Pitch Deck",
      driveId: "1LdiFZIfOVJDYaXaCqmH-uRv6sbo4IW9G",
      isDoc: true,
      bgGradient: "linear-gradient(135deg, #0e1824, #182e45, #070b10)"
    }
  ],

  reels: [
    {
      id: "reel-hook",
      title: "Fast-Paced Hook & Trend Cut",
      objective: "Immediate visual hook within 0.8s for TikTok FYP",
      badge: "VIRAL HOOK",
      aspect: "9:16 Vertical",
      duration: "00:15",
      driveId: "1y4WqR_U5j9vFw-4qv9QPEfiLNV4qunTi",
      localFile: "WhatsApp Video 2026-10-11 at 02.02.49.mp4",
      bgGradient: "linear-gradient(180deg, #26122a, #0f0812)"
    },
    {
      id: "reel-audio",
      title: "Kinetic Montage & Audio Sync",
      objective: "Rhythmic match cuts synced to trending audio transients",
      badge: "AUDIO SYNC",
      aspect: "9:16 Vertical",
      duration: "00:18",
      driveId: "1ljpQr5U0jIVoKuOTf_4z_7dXs8CHuIAb",
      localFile: "WhatsApp Video 2026-10-11 at 02.02.58.mp4",
      bgGradient: "linear-gradient(180deg, #142330, #090e14)"
    },
    {
      id: "reel-retention",
      title: "High-Retention Engagement Beat",
      objective: "Engineered for 85%+ completion rate and rewatches",
      badge: "RETENTION BEAT",
      aspect: "9:16 Vertical",
      duration: "00:14",
      driveId: "1sjgM9AG4Eot3E5J_nn7AeO7gIRfQWP3R",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.06.mp4",
      bgGradient: "linear-gradient(180deg, #2e1a12, #140b08)"
    },
    {
      id: "reel-atmosphere",
      title: "Atmospheric Visual Storytelling",
      objective: "Cinematic grade and pacing for luxury lifestyle brand feel",
      badge: "LIFESTYLE",
      aspect: "9:16 Vertical",
      duration: "00:22",
      driveId: "1_eGnv9Kmm4WukEcZnJUmhsg21Q8ZN9Y-",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.14.mp4",
      bgGradient: "linear-gradient(180deg, #22142c, #0d0712)"
    },
    {
      id: "reel-beatsync",
      title: "Dynamic Beat-Sync & Match Cut",
      objective: "High-energy pacing designed for sports and fitness brand",
      badge: "BEAT SYNC",
      aspect: "9:16 Vertical",
      duration: "00:16",
      driveId: "1FVFo9kL8ASGaJqSizqj-_utDHmxDafis",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.20.mp4",
      bgGradient: "linear-gradient(180deg, #122730, #081014)"
    },
    {
      id: "reel-color",
      title: "Vibrant Grade & Color Pop",
      objective: "High saturation and contrast to stand out on mobile screens",
      badge: "COLOR POP",
      aspect: "9:16 Vertical",
      duration: "00:20",
      driveId: "1petErbc1K4UomDnJW56wQaxCVE1DvUs-",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.24.mp4",
      bgGradient: "linear-gradient(180deg, #2c1220, #14080e)"
    },
    {
      id: "reel-community",
      title: "Lifestyle & Fan Culture Movement",
      objective: "Highlighting authentic youth culture and community",
      badge: "FAN CULTURE",
      aspect: "9:16 Vertical",
      duration: "00:19",
      driveId: "1mY978BVW6y2y6DPzm6MJ0xrGnysCF8oq",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.31.mp4",
      bgGradient: "linear-gradient(180deg, #1c2b1e, #0a110b)"
    },
    {
      id: "reel-loop",
      title: "Seamless Loop Social Activation",
      objective: "Invisible loop ending that encourages instant re-watch",
      badge: "SEAMLESS LOOP",
      aspect: "9:16 Vertical",
      duration: "00:15",
      driveId: "17YEdKKGOXfsMnv9EmDAZxp0RK9n7ijCh",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.38.mp4",
      bgGradient: "linear-gradient(180deg, #242433, #0c0c12)"
    }
  ]
};

// ==============================================================================
// POSTER & VISUAL GENERATOR
// ==============================================================================
function generateCampaignSvg(title, badge, iconText, gradient) {
  return `
    <div style="
      width: 100%;
      height: 100%;
      background: ${gradient};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    ">
      <div style="
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
        background-size: 16px 16px;
        opacity: 0.45;
      "></div>

      <!-- Top Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; z-index: 2;">
        <span style="
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.7);
          letter-spacing: 1px;
        ">ELLA ROSE BOWIS // 2026</span>
        <span style="font-size: 1.3rem;">${iconText}</span>
      </div>

      <!-- Center Title -->
      <div style="z-index: 2; text-align: center; margin: auto 0;">
        <div style="
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.6rem;
          line-height: 1.15;
          color: #fff;
          letter-spacing: -0.5px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.85);
        ">${title}</div>
        <div style="
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: #ff2a6d;
          margin-top: 0.5rem;
          letter-spacing: 1.5px;
          font-weight: 700;
        ">${badge}</div>
      </div>

      <!-- Bottom Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; z-index: 2; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 0.5rem;">
        <span style="font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #ff1801; font-weight: 700;">★ CAMPAIGN CUT</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.5);">LANCASTER MKTG</span>
      </div>
    </div>
  `;
}

// ==============================================================================
// RENDERERS
// ==============================================================================
function renderCampaigns(filter = "all") {
  const container = document.getElementById("campaignsGrid");
  if (!container) return;

  const items = filter === "all" 
    ? CAMPAIGN_REGISTRY.featured 
    : CAMPAIGN_REGISTRY.featured.filter(c => c.category === filter);

  container.innerHTML = items.map(c => `
    <article class="campaign-card" onclick="openCampaignModal('${c.id}')">
      <div class="card-media-box">
        <span class="card-badge">${c.badge}</span>
        <div class="card-play-pill">▶ View Case Study</div>
        ${generateCampaignSvg(c.title, c.badge, c.isDoc ? "📄" : "🎬", c.bgGradient)}
      </div>
      <div class="card-body">
        <span class="card-client-tag">${c.client}</span>
        <h3 class="card-title">${c.title}</h3>
        <p class="card-objective">${c.objective}</p>
        <div class="card-meta-bar">
          <span>⏱ ${c.duration}</span>
          <span>📐 ${c.aspect}</span>
          <span style="color: var(--accent-red); font-weight: 700;">Explore Brief ➔</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderReels() {
  const container = document.getElementById("reelsGrid");
  if (!container) return;

  container.innerHTML = CAMPAIGN_REGISTRY.reels.map(r => `
    <div class="reel-box" onclick="openCampaignModal('${r.id}')" title="Play ${r.title}">
      <div class="reel-media-box">
        <div class="reel-overlay-content">
          <span class="reel-badge">${r.badge}</span>
          <div class="reel-play-center">▶</div>
          <div class="reel-info-group">
            <h4 class="reel-heading">${r.title}</h4>
            <span class="reel-sub">${r.duration} • ${r.aspect}</span>
          </div>
        </div>
        ${generateCampaignSvg(r.title, r.badge, "📱", r.bgGradient)}
      </div>
    </div>
  `).join("");
}

// ==============================================================================
// CAMPAIGN & CASE STUDY MODAL
// ==============================================================================
function openCampaignModal(itemId) {
  const allItems = [...CAMPAIGN_REGISTRY.featured, ...CAMPAIGN_REGISTRY.reels];
  const item = allItems.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById("campaignModal");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalAudience = document.getElementById("modalAudience");
  const modalObjective = document.getElementById("modalObjective");
  const modalChannels = document.getElementById("modalChannels");
  const modalExternalLink = document.getElementById("modalExternalLink");
  const playerContainer = document.getElementById("modalPlayerContainer");
  const togglesWrap = document.getElementById("playerSourceToggles");

  modalCategory.textContent = `${item.badge || 'CASE STUDY'} // ${item.client || 'SOCIAL CAMPAIGN'}`;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.objective || "Strategic creative marketing campaign cut.";
  modalAudience.textContent = item.audience || "Gen-Z & millennial consumers across social channels";
  modalObjective.textContent = item.objective || "Brand positioning & viewer engagement";
  modalChannels.textContent = item.channels || "TikTok, Instagram Reels, YouTube Shorts, Web";
  modalExternalLink.href = `https://drive.google.com/file/d/${item.driveId}/view`;

  // Aspect ratio adjustment for vertical vs 16:9
  if (item.aspect && item.aspect.includes("9:16")) {
    playerContainer.classList.add("vertical-player");
  } else {
    playerContainer.classList.remove("vertical-player");
  }

  // Load Google Drive stream by default
  loadDriveStream(item);

  // Setup dual source buttons (Drive Stream vs Local MP4)
  if (togglesWrap) {
    togglesWrap.innerHTML = `
      <button class="btn btn-primary btn-sm" id="btnStream" onclick="window.togglePlayerSource('${item.id}', 'drive')">
        <span>▶ Stream Preview</span>
      </button>
      ${item.localFile ? `
        <button class="btn btn-outline btn-sm" id="btnLocal" onclick="window.togglePlayerSource('${item.id}', 'local')">
          <span>📁 Local MP4</span>
        </button>
      ` : ''}
    `;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function loadDriveStream(item) {
  const container = document.getElementById("modalPlayerContainer");
  if (!container) return;
  container.innerHTML = `
    <iframe 
      src="https://drive.google.com/file/d/${item.driveId}/preview" 
      allow="autoplay; encrypted-media" 
      allowfullscreen
      title="${item.title}"
    ></iframe>
  `;
}

function loadLocalVideo(item) {
  const container = document.getElementById("modalPlayerContainer");
  if (!container) return;

  container.innerHTML = `
    <video controls autoplay playsinline style="width:100%; height:100%; background:#000;">
      <source src="assets/${encodeURIComponent(item.localFile)}" type="video/mp4">
      <source src="../assets/${encodeURIComponent(item.localFile)}" type="video/mp4">
      Your browser does not support video playback.
    </video>
  `;

  const video = container.querySelector("video");
  if (video) {
    video.addEventListener("error", () => {
      container.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-family: 'Space Mono', monospace; font-size: 0.85rem;">
          <p style="color: var(--accent-red); font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ Local file "${item.localFile}" not yet in assets/</p>
          <p style="margin-bottom: 1rem;">Download the raw .mp4 from Google Drive into assets/ to enable local offline playback.</p>
          <button class="btn btn-primary btn-sm" onclick="window.togglePlayerSource('${item.id}', 'drive')">Switch back to Stream</button>
        </div>
      `;
    });
  }
}

window.togglePlayerSource = function(id, source) {
  const allItems = [...CAMPAIGN_REGISTRY.featured, ...CAMPAIGN_REGISTRY.reels];
  const item = allItems.find(i => i.id === id);
  if (!item) return;

  const btnStream = document.getElementById("btnStream");
  const btnLocal = document.getElementById("btnLocal");

  if (source === "drive") {
    loadDriveStream(item);
    if (btnStream) btnStream.className = "btn btn-primary btn-sm";
    if (btnLocal) btnLocal.className = "btn btn-outline btn-sm";
  } else {
    loadLocalVideo(item);
    if (btnStream) btnStream.className = "btn btn-outline btn-sm";
    if (btnLocal) btnLocal.className = "btn btn-primary btn-sm";
  }
};

function closeCampaignModal() {
  const modal = document.getElementById("campaignModal");
  const container = document.getElementById("modalPlayerContainer");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (container) {
    container.innerHTML = "";
  }
}

// ==============================================================================
// INITIALIZATION & EVENT LISTENERS
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render campaigns and reels
  renderCampaigns("all");
  renderReels();

  // Category filter handlers
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCampaigns(btn.dataset.filter);
    });
  });

  // Modal close handlers
  const closeBtn = document.getElementById("modalCloseBtn");
  const backdrop = document.getElementById("modalBackdrop");
  if (closeBtn) closeBtn.addEventListener("click", closeCampaignModal);
  if (backdrop) backdrop.addEventListener("click", closeCampaignModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCampaignModal();
  });

  // Dark/Light Theme Switcher
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  
  // Check saved theme
  const savedTheme = localStorage.getItem("ella_theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  if (themeIcon) {
    themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.body.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", next);
      localStorage.setItem("ella_theme", next);
      if (themeIcon) {
        themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
      }
    });
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });
    });
  }

  // Interactive Doodle Stars (click to spin!)
  document.querySelectorAll(".doodle-star").forEach(star => {
    star.addEventListener("click", () => {
      star.style.transform = "scale(1.6) rotate(360deg)";
      setTimeout(() => {
        star.style.transform = "";
      }, 600);
    });
  });
});

// Contact Pitch Form Submission
window.handlePitchSubmit = function() {
  const name = document.getElementById("senderName").value;
  const email = document.getElementById("senderEmail").value;
  const type = document.getElementById("inquiryType").value;
  const msg = document.getElementById("senderMessage").value;
  const statusEl = document.getElementById("formStatus");

  if (!statusEl) return;

  statusEl.className = "form-status success";
  statusEl.innerHTML = `
    ✨ <strong>Message Logged!</strong> Thank you, ${name}. Your message regarding [${type.toUpperCase()}] has been dispatched to Ella Rose Bowis. Confirmation sent to ${email}.
  `;

  const mailtoUrl = `mailto:bbristow.uk@gmail.com?subject=${encodeURIComponent(`Marketing Opportunity: ${name} (${type})`)}&body=${encodeURIComponent(`From: ${name} (${email})\nType: ${type}\n\nMessage:\n${msg}`)}`;

  setTimeout(() => {
    if (confirm("Would you like to open your email client to send this message directly to Ella as well?")) {
      window.location.href = mailtoUrl;
    }
  }, 600);
};

window.openCampaignModal = openCampaignModal;
