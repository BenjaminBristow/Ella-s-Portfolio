/**
 * ELLA FILMS & EDITS // CORE APPLICATION LOGIC
 * Cinematic portfolio application with interactive film player, 
 * live timecode HUD, dynamic film strip, and project showcases.
 */

// Project Data Registry
const PORTFOLIO_DATA = {
  featured: [
    {
      id: "porsche-spec",
      title: "Porsche 911 Spec Commercial",
      category: "COMMERCIAL SPEC AD // 16:9",
      aspect: "16:9 Cinema",
      software: "Premiere Pro • DaVinci Resolve Studio",
      description: "High-octane automotive commercial cut featuring precision speed ramps, roaring acoustic foley, and moody film-emulation color grading.",
      driveId: "1UVvJkHaoTgN7607sZZx4kE_z1E7sMu4Q",
      localFile: "Porsche (1).mp4",
      bgGradient: "linear-gradient(135deg, #1b0c0f, #3b0a17, #0d0f17)",
      tag: "FEATURED SPEC",
      duration: "00:45",
      fps: "24 FPS"
    },
    {
      id: "f1-apex",
      title: "Formula 1 High-Octane Apex Cut",
      category: "SPORTS & MOTORSPORT // 16:9",
      aspect: "16:9 Cinema",
      software: "Premiere Pro • After Effects",
      description: "Adrenaline-fueled Formula 1 edit synced to razor-sharp audio transients, kinetic speed ramps, and trackside telemetry aesthetics.",
      driveId: "1FoNxw-EIhaChn82EOmuq_8iPCtwomzqv",
      localFile: "f1 vid.mp4",
      bgGradient: "linear-gradient(135deg, #0a1420, #0d2847, #07080b)",
      tag: "MOTORSPORT",
      duration: "00:38",
      fps: "24 FPS"
    },
    {
      id: "netflix-horror",
      title: "Netflix Horror / Thriller Campaign Ad",
      category: "ENTERTAINMENT // 16:9",
      aspect: "16:9 Cinema",
      software: "DaVinci Resolve • Sound Design",
      description: "Psychological horror trailer cut focusing on atmospheric build-ups, heartbeat sub-drops, and unsettling jump cuts that heighten tension.",
      driveId: "1mP5mhi3Erc03GbWidzZ5gSl3jjcvR0dV",
      localFile: "netflix horror ad.mp4",
      bgGradient: "linear-gradient(135deg, #1f0808, #2e0b0b, #050608)",
      tag: "TRAILER SPEC",
      duration: "00:52",
      fps: "24 FPS"
    }
  ],

  shortForm: [
    {
      id: "reel-1",
      title: "Fast-Paced Hook & Trend Cut",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "Premiere Pro • CapCut Pro",
      driveId: "1y4WqR_U5j9vFw-4qv9QPEfiLNV4qunTi",
      localFile: "WhatsApp Video 2026-10-11 at 02.02.49.mp4",
      bgGradient: "linear-gradient(180deg, #1f1124, #0d0a14)",
      tag: "VIRAL HOOK",
      duration: "00:15"
    },
    {
      id: "reel-2",
      title: "Kinetic Montage & Sound Design",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "Premiere Pro • After Effects",
      driveId: "1ljpQr5U0jIVoKuOTf_4z_7dXs8CHuIAb",
      localFile: "WhatsApp Video 2026-10-11 at 02.02.58.mp4",
      bgGradient: "linear-gradient(180deg, #101c26, #090e15)",
      tag: "SOUND DESIGN",
      duration: "00:18"
    },
    {
      id: "reel-3",
      title: "High-Retention Engagement Beat",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "Premiere Pro",
      driveId: "1sjgM9AG4Eot3E5J_nn7AeO7gIRfQWP3R",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.06.mp4",
      bgGradient: "linear-gradient(180deg, #261610, #130a07)",
      tag: "RETENTION",
      duration: "00:14"
    },
    {
      id: "reel-4",
      title: "Atmospheric Visual Storytelling",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "DaVinci Resolve",
      driveId: "1_eGnv9Kmm4WukEcZnJUmhsg21Q8ZN9Y-",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.14.mp4",
      bgGradient: "linear-gradient(180deg, #1c1024, #0b0711)",
      tag: "CINEMATIC",
      duration: "00:22"
    },
    {
      id: "reel-5",
      title: "Dynamic Beat-Sync & Match Cut",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "Premiere Pro • After Effects",
      driveId: "1FVFo9kL8ASGaJqSizqj-_utDHmxDafis",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.20.mp4",
      bgGradient: "linear-gradient(180deg, #0e1e24, #080f12)",
      tag: "BEAT SYNC",
      duration: "00:16"
    },
    {
      id: "reel-6",
      title: "Color Pop & Film Emulation",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "DaVinci Resolve Studio",
      driveId: "1petErbc1K4UomDnJW56wQaxCVE1DvUs-",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.24.mp4",
      bgGradient: "linear-gradient(180deg, #26101c, #13080e)",
      tag: "COLOR GRADE",
      duration: "00:20"
    },
    {
      id: "reel-7",
      title: "Lifestyle Rhythm & Pace",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "Premiere Pro",
      driveId: "1mY978BVW6y2y6DPzm6MJ0xrGnysCF8oq",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.31.mp4",
      bgGradient: "linear-gradient(180deg, #182218, #0a0f0a)",
      tag: "LIFESTYLE",
      duration: "00:19"
    },
    {
      id: "reel-8",
      title: "Seamless Motion & Loop Edit",
      category: "SHORT FORM // 9:16",
      aspect: "9:16 Mobile",
      software: "Premiere Pro • After Effects",
      driveId: "17YEdKKGOXfsMnv9EmDAZxp0RK9n7ijCh",
      localFile: "WhatsApp Video 2026-10-11 at 02.03.38.mp4",
      bgGradient: "linear-gradient(180deg, #1d1d28, #0a0a0f)",
      tag: "SEAMLESS LOOP",
      duration: "00:15"
    }
  ],

  brand: [
    {
      id: "car-detailing-brand",
      title: "Modern Car Detailing Brand Identity",
      category: "BRANDING & PRINT // STILL",
      aspect: "Business Collateral",
      software: "Adobe Photoshop • Illustrator",
      description: "Sleek automotive identity kit featuring matte black textures, precision scarlet accents, and premium business collateral.",
      driveId: "18pTfUrs7_dVCiTOCymsQ6N8UKXMapnXv",
      isImage: true,
      tag: "BRAND DESIGN",
      bgGradient: "linear-gradient(135deg, #140707, #240a0a, #0a0505)"
    },
    {
      id: "hot-pink-version",
      title: "Neon Hot Pink Creative Treatment",
      category: "VISUAL IDENTITY // STILL",
      aspect: "Brand Concept",
      software: "Illustrator • Photoshop",
      description: "Bold, cyber-inspired color edition exploring high-energy hot pink typography and high-impact visual aesthetics.",
      driveId: "1URhXERrwccCf1XBT1uCq1nnfB6QhynhJ",
      isImage: true,
      tag: "COLOR EXPLORATION",
      bgGradient: "linear-gradient(135deg, #2b0416, #4d0426, #120108)"
    },
    {
      id: "campaign-brief",
      title: "Campaign Treatment & Strategy Deck",
      category: "PRODUCTION TREATMENT // DOC",
      aspect: "Production PDF",
      software: "Creative Strategy • Production",
      description: "Complete campaign architecture detailing target audience hooks, scene breakdowns, visual tone guidelines, and soundscapes.",
      driveId: "1LdiFZIfOVJDYaXaCqmH-uRv6sbo4IW9G",
      isDoc: true,
      tag: "CAMPAIGN BRIEF",
      bgGradient: "linear-gradient(135deg, #0b151e, #132433, #060b0f)"
    }
  ],

  aboutImage: {
    title: "The Face Behind The Brand",
    driveId: "19_C-N1Ap7uNoCJrlELGRy0XwkR8OcwIm",
    localFile: "The.png"
  }
};

// ==========================================================================
// TIME-CODE GENERATOR (24 FPS CINEMATIC CLOCK)
// ==========================================================================
class CinematicTimecode {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.hours = 0;
    this.minutes = 1;
    this.seconds = 24;
    this.frames = 18;
    this.fps = 24;
    this.start();
  }

  start() {
    setInterval(() => {
      this.frames++;
      if (this.frames >= this.fps) {
        this.frames = 0;
        this.seconds++;
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
      }
      this.render();
    }, 1000 / this.fps);
  }

  render() {
    if (!this.element) return;
    const pad = (n) => String(n).padStart(2, "0");
    this.element.textContent = `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}:${pad(this.frames)}`;
  }
}

// ==========================================================================
// POSTER GENERATOR (HIGH QUALITY CINEMATIC SVG POSTERS)
// ==========================================================================
function createCinematicPosterSvg(title, category, iconText, gradient) {
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
        background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
        background-size: 16px 16px;
        opacity: 0.5;
      "></div>
      
      <!-- Top Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; z-index: 2;">
        <span style="
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 1px;
        ">ELLA // CUT 2026</span>
        <span style="font-size: 1.3rem; opacity: 0.85;">${iconText}</span>
      </div>

      <!-- Center Logo / Title Preview -->
      <div style="z-index: 2; text-align: center; margin: auto 0;">
        <div style="
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          line-height: 1;
          color: #fff;
          letter-spacing: 1.5px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        ">${title}</div>
        <div style="
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: #f5a623;
          margin-top: 0.4rem;
          letter-spacing: 1px;
        ">${category}</div>
      </div>

      <!-- Bottom Bar: Clapper Timecode -->
      <div style="display: flex; justify-content: space-between; align-items: center; z-index: 2; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.6rem;">
        <span style="font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #ff007f;">● 24 FPS CINEMA</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.5);">MASTER CUT</span>
      </div>
    </div>
  `;
}

// ==========================================================================
// RENDERERS
// ==========================================================================

function renderFilmStrip() {
  const track = document.getElementById("filmStripTrack");
  if (!track) return;

  const allItems = [
    ...PORTFOLIO_DATA.featured,
    ...PORTFOLIO_DATA.shortForm,
    ...PORTFOLIO_DATA.brand
  ];

  // Duplicate items for continuous seamless loop
  const doubleList = [...allItems, ...allItems];

  track.innerHTML = doubleList.map((item, index) => {
    return `
      <div class="film-frame-thumb" onclick="openScreeningRoom('${item.id}')" title="Play ${item.title}">
        <div class="frame-overlay">
          <span class="frame-counter">FRAME ${(index + 1).toString().padStart(3, '0')}</span>
          <span class="frame-title">${item.title}</span>
        </div>
        ${createCinematicPosterSvg(item.title, item.category, "🎞️", item.bgGradient || "linear-gradient(135deg, #161a24, #0b0d13)")}
      </div>
    `;
  }).join("");
}

function renderFeaturedWorks() {
  const container = document.getElementById("featuredGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.featured.map((p) => {
    return `
      <article class="cine-card" onclick="openScreeningRoom('${p.id}')">
        <div class="cine-card-media">
          <span class="cine-tag-badge">${p.tag}</span>
          <div class="cine-card-play-btn">▶</div>
          ${createCinematicPosterSvg(p.title, p.category, "🎬", p.bgGradient)}
        </div>
        <div class="cine-card-body">
          <h3 class="cine-card-title">${p.title}</h3>
          <p class="cine-card-desc">${p.description}</p>
          <div class="cine-card-meta">
            <span>⏱ ${p.duration}</span>
            <span>🎞 ${p.aspect}</span>
            <span>💻 ${p.software.split('•')[0]}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderShortFormReels() {
  const container = document.getElementById("shortformGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.shortForm.map((reel) => {
    return `
      <div class="reel-card" onclick="openScreeningRoom('${reel.id}')" title="Play ${reel.title}">
        <div class="reel-media">
          <div class="reel-overlay">
            <span class="reel-tag">${reel.tag}</span>
            <div class="reel-play-icon">▶</div>
            <div class="reel-info">
              <span class="reel-title">${reel.title}</span>
              <span class="reel-meta">${reel.duration} • 9:16</span>
            </div>
          </div>
          ${createCinematicPosterSvg(reel.title, reel.tag, "📱", reel.bgGradient)}
        </div>
      </div>
    `;
  }).join("");
}

function renderBrandWorks() {
  const container = document.getElementById("brandGrid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.brand.map((item) => {
    return `
      <article class="brand-card" onclick="openScreeningRoom('${item.id}')">
        <div class="brand-media">
          ${createCinematicPosterSvg(item.title, item.tag, item.isDoc ? "📄" : "🎨", item.bgGradient)}
        </div>
        <div class="brand-body">
          <h3 class="brand-title">${item.title}</h3>
          <p class="brand-desc">${item.description}</p>
        </div>
      </article>
    `;
  }).join("");
}

function setupAboutImage() {
  const container = document.getElementById("aboutImageContainer");
  if (!container) return;

  // Render styled photographer / editor contact sheet card
  container.innerHTML = `
    <div style="
      width: 100%;
      height: 100%;
      background: linear-gradient(145deg, #191c28, #0e111a);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      text-align: center;
      position: relative;
    ">
      <span style="font-size: 3.5rem; margin-bottom: 0.5rem; filter: drop-shadow(0 0 15px rgba(255,0,127,0.4));">🎥</span>
      <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; color: #fff; letter-spacing: 1px;">THE FACE BEHIND THE BRAND</h3>
      <p style="font-family: 'Space Mono', monospace; font-size: 0.75rem; color: #ff007f; margin-top: 0.3rem;">DIRECTOR & LEAD EDITOR</p>
      
      <div style="margin-top: 1.25rem;">
        <a href="https://drive.google.com/file/d/${PORTFOLIO_DATA.aboutImage.driveId}/view" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
          <span>View High-Res Still</span> ↗
        </a>
      </div>
    </div>
  `;
}

// ==========================================================================
// CINEMATIC SCREENING ROOM MODAL / LIGHTBOX
// ==========================================================================

function openScreeningRoom(projectId) {
  const allProjects = [
    ...PORTFOLIO_DATA.featured,
    ...PORTFOLIO_DATA.shortForm,
    ...PORTFOLIO_DATA.brand
  ];

  const project = allProjects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("screeningModal");
  const modalTag = document.getElementById("modalTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalAspect = document.getElementById("modalAspect");
  const modalSoftware = document.getElementById("modalSoftware");
  const modalDirectLink = document.getElementById("modalDirectLink");
  const screenContainer = document.getElementById("modalScreenContainer");

  modalTag.textContent = `${project.tag || 'SCENE'} // ${project.category}`;
  modalTitle.textContent = project.title;
  modalAspect.textContent = project.aspect || "16:9 Cinema";
  modalSoftware.textContent = project.software || "Premiere Pro Studio";
  modalDirectLink.href = `https://drive.google.com/file/d/${project.driveId}/view`;

  // Check aspect ratio mode (9:16 vertical vs 16:9 widescreen)
  if (project.aspect && project.aspect.includes("9:16")) {
    screenContainer.classList.add("vertical-mode");
  } else {
    screenContainer.classList.remove("vertical-mode");
  }

  // Load Google Drive Preview stream by default
  loadDriveStream(project);

  // Setup stream vs local toggle buttons in modal footer
  const specActions = document.querySelector(".spec-actions");
  if (specActions) {
    specActions.innerHTML = `
      <button class="btn btn-primary btn-sm" id="btnStreamDrive" onclick="window.switchPlayerSource('${project.id}', 'drive')">
        <span>▶ Drive Stream</span>
      </button>
      ${project.localFile ? `
        <button class="btn btn-outline btn-sm" id="btnPlayLocal" onclick="window.switchPlayerSource('${project.id}', 'local')">
          <span>📁 Local MP4</span>
        </button>
      ` : ''}
      <a href="https://drive.google.com/file/d/${project.driveId}/view" target="_blank" rel="noopener" class="btn btn-outline btn-sm" id="modalDirectLink">
        <span>Open in Drive</span> ↗
      </a>
    `;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function loadDriveStream(project) {
  const screenContainer = document.getElementById("modalScreenContainer");
  if (!screenContainer) return;
  screenContainer.innerHTML = `
    <iframe 
      src="https://drive.google.com/file/d/${project.driveId}/preview" 
      allow="autoplay; encrypted-media" 
      allowfullscreen
      title="${project.title}"
    ></iframe>
  `;
}

function loadLocalVideo(project) {
  const screenContainer = document.getElementById("modalScreenContainer");
  if (!screenContainer) return;

  screenContainer.innerHTML = `
    <video controls autoplay playsinline style="width:100%; height:100%; background:#000;">
      <source src="assets/${encodeURIComponent(project.localFile)}" type="video/mp4">
      <source src="../assets/${encodeURIComponent(project.localFile)}" type="video/mp4">
      Your browser does not support video playback.
    </video>
  `;

  const videoEl = screenContainer.querySelector("video");
  if (videoEl) {
    videoEl.addEventListener("error", () => {
      screenContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-family: 'Space Mono', monospace; font-size: 0.85rem;">
          <p style="color: var(--accent-amber); font-size: 1.1rem; margin-bottom: 0.75rem;">⚠️ Local file "${project.localFile}" not yet found in assets/</p>
          <p style="margin-bottom: 1rem;">The file in assets/ is currently a Google Drive webpage preview. Download the raw .mp4 from Google Drive and place it in the assets folder.</p>
          <button class="btn btn-primary btn-sm" onclick="window.switchPlayerSource('${project.id}', 'drive')">Switch back to Drive Stream</button>
        </div>
      `;
    });
  }
}

window.switchPlayerSource = function (projectId, source) {
  const allProjects = [
    ...PORTFOLIO_DATA.featured,
    ...PORTFOLIO_DATA.shortForm,
    ...PORTFOLIO_DATA.brand
  ];
  const project = allProjects.find((p) => p.id === projectId);
  if (!project) return;

  const btnDrive = document.getElementById("btnStreamDrive");
  const btnLocal = document.getElementById("btnPlayLocal");

  if (source === "drive") {
    loadDriveStream(project);
    if (btnDrive) { btnDrive.className = "btn btn-primary btn-sm"; }
    if (btnLocal) { btnLocal.className = "btn btn-outline btn-sm"; }
  } else {
    loadLocalVideo(project);
    if (btnDrive) { btnDrive.className = "btn btn-outline btn-sm"; }
    if (btnLocal) { btnLocal.className = "btn btn-primary btn-sm"; }
  }
};


function closeScreeningRoom() {
  const modal = document.getElementById("screeningModal");
  const screenContainer = document.getElementById("modalScreenContainer");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // Clear iframe to halt any video playback
  if (screenContainer) {
    screenContainer.innerHTML = "";
  }
}

// ==========================================================================
// USER INTERACTIONS & EVENT LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Live Timecode HUD
  new CinematicTimecode("liveTimecode");

  // Render portfolio components
  renderFilmStrip();
  renderFeaturedWorks();
  renderShortFormReels();
  renderBrandWorks();
  setupAboutImage();

  // Modal Close Handlers
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modalClose) modalClose.addEventListener("click", closeScreeningRoom);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeScreeningRoom);

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeScreeningRoom();
  });

  // Hero Highlight Reel Button
  const heroReelBtn = document.getElementById("playHeroReel");
  if (heroReelBtn) {
    heroReelBtn.addEventListener("click", () => {
      openScreeningRoom("porsche-spec");
    });
  }

  // Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
    });

    // Close on link click
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });
    });
  }

  // Film Grain Toggle
  const btnToggleGrain = document.getElementById("btnToggleGrain");
  const filmGrain = document.getElementById("filmGrain");
  if (btnToggleGrain && filmGrain) {
    btnToggleGrain.addEventListener("click", () => {
      const isVisible = filmGrain.style.display !== "none";
      filmGrain.style.display = isVisible ? "none" : "block";
      btnToggleGrain.textContent = isVisible ? "Enable 35mm Grain" : "Disable 35mm Grain";
    });
  }
});

// Handle Call Sheet / Contact Form Submission
window.handleFormSubmit = function () {
  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const scope = document.getElementById("projectType").value;
  const msg = document.getElementById("projectMessage").value;
  const statusEl = document.getElementById("formStatus");

  if (!statusEl) return;

  statusEl.className = "form-status success";
  statusEl.innerHTML = `
    🎬 <strong>Brief Logged!</strong> Thank you, ${name}. Your production request for [${scope.toUpperCase()}] has been dispatched to Ella. Direct confirmation sent to ${email}.
  `;

  // Prepare mailto fallback
  const mailtoUrl = `mailto:bbristow.uk@gmail.com?subject=${encodeURIComponent(`New Project Brief: ${name} (${scope})`)}&body=${encodeURIComponent(`From: ${name} (${email})\nScope: ${scope}\n\nProject Brief:\n${msg}`)}`;
  
  setTimeout(() => {
    const directConfirm = confirm("Would you like to open your email client to send the project brief directly to Ella as well?");
    if (directConfirm) {
      window.location.href = mailtoUrl;
    }
  }, 600);
};

// Make openScreeningRoom globally available for inline onclicks
window.openScreeningRoom = openScreeningRoom;
