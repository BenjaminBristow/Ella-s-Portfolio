// ==============================================================================
// ELLA ROSE BOWIS // ADVERTISING & MARKETING PORTFOLIO (APP.JS)
// ==============================================================================

const REGISTRY = {
  f1: {
    id: "f1",
    title: "Formula 1: Speed Meets Story",
    client: "Formula 1 • Fandom Campaign",
    badge: "SPORTS MARKETING",
    duration: "00:38",
    format: "16:9 Widescreen",
    desc: "Capturing motorsport tension and race telemetry rhythm to connect next-generation fans with the split-second drama of Formula 1.",
    driveId: "1FoNxw-EIhaChn82EOmuq_8iPCtwomzqv",
    localFile: "f1-video.html"
  },
  porsche: {
    id: "porsche",
    title: "Porsche 911: The Art of Precision",
    client: "Porsche UK • Spec Commercial",
    badge: "AUTOMOTIVE LUXURY",
    duration: "00:45",
    format: "16:9 Widescreen",
    desc: "Speed-ramp pacing, roaring exhaust foley, and moody 35mm film-emulation color grading designed to engage young luxury performance drivers.",
    driveId: "1UVvJkHaoTgN7607sZZx4kE_z1E7sMu4Q",
    localFile: "porschead.html"
  },
  netflix: {
    id: "netflix",
    title: "Netflix Horror: Midnight Thriller",
    client: "Netflix UK • Entertainment Spec Ad",
    badge: "PSYCHOLOGICAL THRILLER",
    duration: "00:52",
    format: "16:9 Widescreen",
    desc: "Engineered around visceral dread—sub-bass heartbeat pulses, sudden cutaways, and psychological suspense to stop the mobile scroll.",
    driveId: "1mP5mhi3Erc03GbWidzZ5gSl3jjcvR0dV",
    localFile: "netflixhorrorad.html"
  },
  lesMis: [
    {
      id: "lesmis-1",
      title: "The Company (Part 1): Meet The Cast",
      badge: "CAST SPOTLIGHT",
      dur: "00:18",
      format: "9:16 Vertical Reel",
      desc: "Introducing the powerhouse ensemble cast behind the revolution, establishing early audience affinity prior to opening night.",
      driveId: "1ljpQr5U0jIVoKuOTf_4z_7dXs8CHuIAb",
      localFile: "BedfordSchoolDrama - Les Miserables/TheCompanyPart1-MeetTheCompany.html",
      gradient: "linear-gradient(180deg, #3d1017, #150406)"
    },
    {
      id: "lesmis-2",
      title: "The Company (Part 2): The Students",
      badge: "BARRICADE HEROES",
      dur: "00:15",
      format: "9:16 Vertical Reel",
      desc: "Spotlighting the student revolutionary leaders with high-tempo cutaways to fuel excitement and viral ticket sharing.",
      driveId: "1y4WqR_U5j9vFw-4qv9QPEfiLNV4qunTi",
      localFile: "BedfordSchoolDrama - Les Miserables/TheCompanyPart2-TheStudents.html",
      gradient: "linear-gradient(180deg, #42121a, #1a0508)"
    },
    {
      id: "lesmis-3",
      title: "The Company (Part 3): The Lovebirds",
      badge: "ROMANTIC ARC",
      dur: "00:20",
      format: "9:16 Vertical Reel",
      desc: "Highlighting the romantic storyline of Marius and Cosette amidst the rebellion, designed for emotional audience resonance.",
      driveId: "1petErbc1K4UomDnJW56wQaxCVE1DvUs-",
      localFile: "BedfordSchoolDrama - Les Miserables/TheCompanyPart3-TheLovebirds.html",
      gradient: "linear-gradient(180deg, #351016, #140407)"
    },
    {
      id: "lesmis-director",
      title: "Our Musical Director: Behind The Baton",
      badge: "DIRECTOR FOCUS",
      dur: "00:14",
      format: "9:16 Vertical Reel",
      desc: "Exclusive rehearsal insight with the musical director bringing Boublil & Schönberg's legendary score to life.",
      driveId: "1sjgM9AG4Eot3E5J_nn7AeO7gIRfQWP3R",
      localFile: "BedfordSchoolDrama - Les Miserables/ADPart3-OurMusicalDirector.html",
      gradient: "linear-gradient(180deg, #44141d, #170407)"
    },
    {
      id: "lesmis-band1",
      title: "The Band (Part 1): Pit Orchestra",
      badge: "LIVE ORCHESTRA",
      dur: "00:16",
      format: "9:16 Vertical Reel",
      desc: "Celebrating the live pit musicians whose brass, strings, and percussion deliver the theatrical wall of sound.",
      driveId: "1FVFo9kL8ASGaJqSizqj-_utDHmxDafis",
      localFile: "BedfordSchoolDrama - Les Miserables/TheBandPart1.html",
      gradient: "linear-gradient(180deg, #381118, #130406)"
    },
    {
      id: "lesmis-band2",
      title: "The Band (Part 2): Overture & Rhythm",
      badge: "OVERTURE RHYTHM",
      dur: "00:22",
      format: "9:16 Vertical Reel",
      desc: "A rhythmic deep-dive into the technical synchronicity required between conductor, orchestra, and stage performers.",
      driveId: "1_eGnv9Kmm4WukEcZnJUmhsg21Q8ZN9Y-",
      localFile: "BedfordSchoolDrama - Les Miserables/TheBandPart2.html",
      gradient: "linear-gradient(180deg, #40131b, #160407)"
    }
  ],
  companionTheatre: [
    {
      id: "orpheus",
      title: "Orpheus in the Underworld: Meet The Cast",
      badge: "COMIC OPERA",
      dur: "00:15",
      format: "9:16 Vertical Reel",
      desc: "Witty character introductions and backstage energy for the satirical Offenbach comic operetta.",
      driveId: "17YEdKKGOXfsMnv9EmDAZxp0RK9n7ijCh",
      localFile: "OrpheusInTheUnderworld-MeetTheCast.html",
      gradient: "linear-gradient(180deg, #2b1120, #10060d)"
    },
    {
      id: "opera-gala",
      title: "A Night At The Opera Gala",
      badge: "GALA PROMOTION",
      dur: "00:19",
      format: "9:16 Vertical Reel",
      desc: "High-elegance promotional cut showcasing classical vocal highlights and gala ticket calls.",
      driveId: "1mY978BVW6y2y6DPzm6MJ0xrGnysCF8oq",
      localFile: "ANightAtTheOperaGala.html",
      gradient: "linear-gradient(180deg, #1b1629, #090812)"
    }
  ],
  branding: [
    {
      id: "car-detailing",
      title: "Modern Car Detailing Brand Collateral",
      badge: "PRINT & IDENTITY",
      desc: "Luxury automotive business card collateral featuring matte black textures and precision red accents.",
      format: "Print & Identity System",
      driveId: "18pTfUrs7_dVCiTOCymsQ6N8UKXMapnXv",
      localFile: "CarDetailingAd.html",
      gradient: "linear-gradient(135deg, #160909, #310f0f, #0c0a0d)"
    },
    {
      id: "hotpink-edition",
      title: "Creative Brand Identity (Hot Pink Edition)",
      badge: "VISUAL CONCEPT",
      desc: "High-voltage neon typography exploring bold typographic contrast for youth digital culture.",
      format: "Visual Concept Deck",
      driveId: "1URhXERrwccCf1XBT1uCq1nnfB6QhynhJ",
      localFile: "hotpinkversion.html",
      gradient: "linear-gradient(135deg, #2e0618, #54082c, #130209)"
    },
    {
      id: "strategy-plan",
      title: "Campaign Strategy & Production Plan",
      badge: "STRATEGY BRIEF",
      desc: "Comprehensive campaign roadmap detailing audience persona hooks, scene breakdowns, and media rollout cadence.",
      format: "Campaign Strategy PDF",
      driveId: "1LdiFZIfOVJDYaXaCqmH-uRv6sbo4IW9G",
      localFile: "ExampleOfMyWork:Plan.html",
      gradient: "linear-gradient(135deg, #0e1b29, #19334f, #080e15)"
    }
  ]
};

function createSvgMockup(title, badge, icon, gradient) {
  return `
    <div style="width:100%; height:100%; background:${gradient}; display:flex; flex-direction:column; justify-content:space-between; padding:1.5rem; position:relative; overflow:hidden; box-sizing:border-box;">
      <div style="display:flex; justify-content:space-between; align-items:center; z-index:1;">
        <span style="font-family:'Space Mono',monospace; font-size:0.65rem; color:rgba(255,255,255,0.6); letter-spacing:1px;">ELLA ROSE BOWIS</span>
        <span style="font-size:1.25rem;">${icon}</span>
      </div>
      <div style="z-index:1; text-align:center; margin:auto 0;">
        <div style="font-family:'Cinzel',serif; font-size:1.35rem; color:#fff; line-height:1.2; text-shadow:0 4px 15px rgba(0,0,0,0.85);">${title}</div>
        <div style="font-family:'Space Mono',monospace; font-size:0.68rem; color:#ff3355; margin-top:0.4rem; letter-spacing:1.2px; font-weight:700;">${badge}</div>
      </div>
      <div style="display:flex; justify-content:space-between; font-family:'Space Mono',monospace; font-size:0.65rem; color:rgba(255,255,255,0.45); border-top:1px solid rgba(255,255,255,0.08); padding-top:0.4rem; z-index:1;">
        <span>CAMPAIGN CUT</span>
        <span>LANCASTER UNI</span>
      </div>
    </div>
  `;
}

function renderLesMisGrid() {
  const container = document.getElementById("lesmisGrid");
  if (!container) return;
  container.innerHTML = REGISTRY.lesMis.map(m => `
    <div class="theatre-video-card" onclick="window.openCampaignModal('${m.id}')" title="Play ${m.title}">
      <div class="tv-media">
        <div class="tv-overlay">
          <span class="tv-badge">${m.badge}</span>
          <div class="tv-play">▶</div>
          <div class="tv-info">
            <h4 class="tv-title">${m.title}</h4>
            <span class="tv-sub">${m.dur} • ${m.format}</span>
          </div>
        </div>
        ${createSvgMockup(m.title, m.badge, "🎭", m.gradient)}
      </div>
    </div>
  `).join("");
}

function renderCompanionGrid() {
  const container = document.getElementById("companionGrid");
  if (!container) return;
  container.innerHTML = REGISTRY.companionTheatre.map(c => `
    <div class="theatre-video-card" onclick="window.openCampaignModal('${c.id}')" title="Play ${c.title}">
      <div class="tv-media">
        <div class="tv-overlay">
          <span class="tv-badge">${c.badge}</span>
          <div class="tv-play">▶</div>
          <div class="tv-info">
            <h4 class="tv-title">${c.title}</h4>
            <span class="tv-sub">${c.dur} • ${c.format}</span>
          </div>
        </div>
        ${createSvgMockup(c.title, c.badge, "🏛️", c.gradient)}
      </div>
    </div>
  `).join("");
}

function renderBrandingGrid() {
  const container = document.getElementById("brandingGrid");
  if (!container) return;
  container.innerHTML = REGISTRY.branding.map(b => `
    <div class="brand-tile" onclick="window.openCampaignModal('${b.id}')">
      <div class="brand-tile-media">
        ${createSvgMockup(b.title, b.badge, b.id === 'strategy-plan' ? "📄" : "🎨", b.gradient)}
      </div>
      <div class="brand-tile-body">
        <h4 class="brand-tile-title">${b.title}</h4>
        <p class="brand-tile-desc">${b.desc}</p>
      </div>
    </div>
  `).join("");
}

let currentItem = null;

function getItemById(id) {
  if (REGISTRY[id]) return REGISTRY[id];
  const allList = [...REGISTRY.lesMis, ...REGISTRY.companionTheatre, ...REGISTRY.branding];
  return allList.find(item => item.id === id);
}

function openCampaignModal(id) {
  currentItem = getItemById(id);
  if (!currentItem) return;

  const modal = document.getElementById("videoModal");
  const mTag = document.getElementById("mTag");
  const mTitle = document.getElementById("mTitle");
  const mDesc = document.getElementById("mDesc");
  const mAud = document.getElementById("mAud");
  const mFmt = document.getElementById("mFmt");
  const mDriveLink = document.getElementById("mDriveLink");
  const mScreen = document.getElementById("mScreen");

  if (!modal) return;

  mTag.textContent = `${currentItem.badge} // ${currentItem.client || 'THEATRE / SOCIAL'}`;
  mTitle.textContent = currentItem.title;
  mDesc.textContent = currentItem.desc || currentItem.title;
  mAud.textContent = currentItem.client || "Gen-Z & Live Audiences";
  mFmt.textContent = currentItem.format || "9:16 Vertical Reel";
  mDriveLink.href = `https://drive.google.com/file/d/${currentItem.driveId}/view`;

  if (currentItem.format && currentItem.format.includes("9:16")) {
    mScreen.classList.add("vertical-screen");
  } else {
    mScreen.classList.remove("vertical-screen");
  }

  window.switchPlayer("drive");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function switchPlayer(source) {
  if (!currentItem) return;
  const mScreen = document.getElementById("mScreen");
  const btnStream = document.getElementById("btnStream");
  const btnLocal = document.getElementById("btnLocal");
  if (!mScreen) return;

  if (source === "drive") {
    mScreen.innerHTML = `
      <iframe src="https://drive.google.com/file/d/${currentItem.driveId}/preview" allow="autoplay; encrypted-media" allowfullscreen title="${currentItem.title}"></iframe>
    `;
    if (btnStream) btnStream.className = "btn btn-sm btn-primary";
    if (btnLocal) btnLocal.className = "btn btn-sm btn-outline";
  } else {
    mScreen.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%; background:#000;">
        <source src="assets/${encodeURIComponent(currentItem.localFile)}" type="video/mp4">
        <source src="../assets/${encodeURIComponent(currentItem.localFile)}" type="video/mp4">
        Your browser does not support video playback.
      </video>
    `;
    if (btnStream) btnStream.className = "btn btn-sm btn-outline";
    if (btnLocal) btnLocal.className = "btn btn-sm btn-primary";
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

// Explicitly bind functions to window scope so HTML onclick attributes find them instantly
window.openCampaignModal = openCampaignModal;
window.switchPlayer = switchPlayer;
window.closeModal = closeModal;

window.submitPitch = function() {
  const name = document.getElementById("cName").value;
  const email = document.getElementById("cEmail").value;
  const type = document.getElementById("cType").value;
  const msg = document.getElementById("cMsg").value;
  const status = document.getElementById("formStatus");

  if (!status) return;

  status.className = "form-status success";
  status.innerHTML = `✓ Thank you, ${name}. Message regarding [${type}] logged. Direct confirmation sent to ${email}.`;

  const mailto = `mailto:bbristow.uk@gmail.com?subject=${encodeURIComponent(`Opportunity: ${name} (${type})`)}&body=${encodeURIComponent(`From: ${name} (${email})\nType: ${type}\n\n${msg}`)}`;

  setTimeout(() => {
    if (confirm("Would you like to open your email client to send this message directly to Ella as well?")) {
      window.location.href = mailto;
    }
  }, 600);
};

document.addEventListener("DOMContentLoaded", () => {
  renderLesMisGrid();
  renderCompanionGrid();
  renderBrandingGrid();

  const closeBtn = document.getElementById("modalX");
  const backdrop = document.getElementById("modalBackdrop");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
    });
    document.querySelectorAll(".m-link").forEach(l => {
      l.addEventListener("click", () => mobileDrawer.classList.remove("active"));
    });
  }
});