// Les Misérables 6-part campaign data
const lesMisVideos = [
  {
    id: 'lesmis-1',
    title: 'Meet The Company',
    subtitle: 'The Company Part 1',
    badge: 'Cast & Energy',
    aspect: 'vertical',
    src: 'assets/BedfordSchoolDrama - Les Miserables/TheCompanyPart1-MeetTheCompany.mp4',
    desc: 'An energetic introduction to the incredible student ensemble behind Bedford School Drama’s Les Misérables.',
    audience: 'Audience & Community',
    format: '9:16 Vertical Video'
  },
  {
    id: 'lesmis-2',
    title: 'The Students',
    subtitle: 'The Company Part 2',
    badge: 'Behind The Scenes',
    aspect: 'vertical',
    src: 'assets/BedfordSchoolDrama - Les Miserables/TheCompanyPart2-TheStudents.mp4',
    desc: 'A closer look at the dedication, rehearsal process, and camaraderie among student performers.',
    audience: 'Cast & Crew',
    format: '9:16 Vertical Video'
  },
  {
    id: 'lesmis-3',
    title: 'The Lovebirds',
    subtitle: 'The Company Part 3',
    badge: 'Character Focus',
    aspect: 'vertical',
    src: 'assets/BedfordSchoolDrama - Les Miserables/TheCompanyPart3-TheLovebirds.mp4',
    desc: 'Highlighting the romantic chemistry and emotional depth brought by the lead cast members.',
    audience: 'Theatre Patrons',
    format: '9:16 Vertical Video'
  },
  {
    id: 'lesmis-4',
    title: 'The Pit Band (Part 1)',
    subtitle: 'Orchestral Power',
    badge: 'Live Music',
    aspect: 'vertical',
    src: 'assets/BedfordSchoolDrama - Les Miserables/TheBandPart1.mp4',
    desc: 'Showcasing the incredible live pit band driving the iconic score of Les Misérables.',
    audience: 'Music Lovers',
    format: '9:16 Vertical Video'
  },
  {
    id: 'lesmis-5',
    title: 'The Pit Band (Part 2)',
    subtitle: 'Instrumental Mastery',
    badge: 'Live Music',
    aspect: 'vertical',
    src: 'assets/BedfordSchoolDrama - Les Miserables/TheBandPart2.mp4',
    desc: 'Further exploration of the musicianship and dynamic arrangements powering the production.',
    audience: 'Music Lovers',
    format: '9:16 Vertical Video'
  },
  {
    id: 'lesmis-6',
    title: 'Our Musical Director',
    subtitle: 'Part 3 Spotlight',
    badge: 'Leadership',
    aspect: 'vertical',
    src: 'assets/BedfordSchoolDrama - Les Miserables/Part3-OurMusicalDirector.mp4',
    desc: 'An inspiring feature on the musical direction uniting cast, band, and vocal harmonies.',
    audience: 'Aspirants & Fans',
    format: '9:16 Vertical Video'
  }
];

// Orpheus in the Underworld campaign data
const orpheusVideos = [
  {
    id: 'orpheus-1',
    title: 'Main Ad',
    subtitle: 'Orpheus in the Underworld',
    badge: 'Flagship',
    aspect: 'vertical',
    src: 'assets/OrpheusInTheUnderworld/MainAd.mp4',
    desc: 'The official main promotional trailer capturing the grand scale and comedic energy of Orpheus in the Underworld.',
    audience: 'General Public',
    format: '9:16 Vertical Video'
  },
  {
    id: 'orpheus-2',
    title: 'Meet The Cast',
    subtitle: 'Character Spotlights',
    badge: 'Cast Intro',
    aspect: 'vertical',
    src: 'assets/OrpheusInTheUnderworld/MeetTheCast.mp4',
    desc: 'An introduction to the talented performers bringing classical Greek mythology to comedic life.',
    audience: 'Theatre Patrons',
    format: '9:16 Vertical Video'
  },
  {
    id: 'orpheus-3',
    title: 'Gala Night',
    subtitle: 'Opera Gala',
    badge: 'Gala',
    aspect: 'vertical',
    src: 'assets/OrpheusInTheUnderworld/ANightAtTheOperaGala.mp4',
    desc: 'Highlights from the glittering gala night celebrating the grandeur of operatic performance.',
    audience: 'VIPs & Donors',
    format: '9:16 Vertical Video'
  },
  {
    id: 'orpheus-4',
    title: 'Funny Mistakes',
    subtitle: 'Behind The Scenes',
    badge: 'Outtakes',
    aspect: 'vertical',
    src: 'assets/OrpheusInTheUnderworld/FunnyMistakes.mp4',
    desc: 'A lighthearted look at the giggles, flubbed lines, and backstage fun during rehearsals.',
    audience: 'Cast & Crew',
    format: '9:16 Vertical Video'
  }
];

// Brand stills / Design collateral data pointing to your new JPEGs and PDF
const brandingItems = [
  {
    title: 'Mercedes Ad Campaign',
    desc: 'High-contrast commercial digital layout exploring sleek vehicle finishes and typography.',
    link: 'assets/MercedesAd.jpeg',
    tag: 'Visual Spec'
  },
  {
    title: 'Tattoo Social Media Concept',
    desc: 'Vibrant color grading and typography layout exploring bold aesthetic alternatives.',
    link: 'assets/TattooSocialMedia.jpeg',
    tag: 'Design System'
  },
  {
    title: 'Creative Strategy Plan',
    desc: 'Structured campaign blueprint outlining audience targeting, messaging, and release channels.',
    link: 'assets/ExampleWorkPlan.pdf',
    tag: 'Strategy Deck'
  }
];

// Main campaigns configuration pointing directly to your local MP4 video files
const campaignsData = {
  f1: {
    tag: 'Formula 1 • Fandom Campaign',
    title: 'Split-Second Drama',
    desc: 'Capturing pit-lane telemetry, screeching apex downshifts, and trackside fan roar in a high-octane 38-second edit.',
    audience: 'Motorsport Fandom',
    format: '16:9 Widescreen • 00:38',
    src: 'assets/f1-vid.mp4'
  },
  porsche: {
    tag: 'Porsche UK • Spec Commercial',
    title: 'The Art of Precision',
    desc: 'Celebrating six decades of iconic engineering with 35mm film-emulation color grading and crisp exhaust foley.',
    audience: 'Aspirational Drivers',
    format: '16:9 Cinema • 00:45',
    src: 'assets/PorscheAd.mp4'
  },
  netflix: {
    tag: 'Netflix UK • Streaming Spec',
    title: 'Midnight Thriller',
    desc: 'Visceral dread built with sub-bass heartbeat pulses and sharp blackouts designed to hook scrollers in under 3 seconds.',
    audience: 'Thriller Enthusiasts',
    format: '16:9 Trailer • 00:52',
    src: 'assets/NetflixHorrorAd.mp4'
  }
};

let currentActiveCampaign = null;

// Populate grids on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Populate Les Mis grid
  const lesmisContainer = document.getElementById('lesmisGrid');
  if (lesmisContainer) {
    lesmisContainer.innerHTML = lesMisVideos.map(v => `
      <div class="theatre-video-card" onclick="openTheatreModal('${v.src}', '${v.title}', '${v.subtitle}', '${v.desc}', '${v.badge}')">
        <div class="tv-media">
          <div class="tv-overlay">
            <span class="tv-badge">${v.badge}</span>
            <div class="tv-play">▶</div>
            <div class="tv-info">
              <h4 class="tv-title">${v.title}</h4>
              <span class="tv-sub">${v.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Populate Orpheus grid
  const orpheusContainer = document.getElementById('orpheusGrid');
  if (orpheusContainer) {
    orpheusContainer.innerHTML = orpheusVideos.map(v => `
      <div class="theatre-video-card" onclick="openTheatreModal('${v.src}', '${v.title}', '${v.subtitle}', '${v.desc}', '${v.badge}')">
        <div class="tv-media">
          <div class="tv-overlay">
            <span class="tv-badge">${v.badge}</span>
            <div class="tv-play">▶</div>
            <div class="tv-info">
              <h4 class="tv-title">${v.title}</h4>
              <span class="tv-sub">${v.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Populate Branding grid
  const brandingContainer = document.getElementById('brandingGrid');
  if (brandingContainer) {
    brandingContainer.innerHTML = brandingItems.map(item => `
      <div class="brand-tile" onclick="openBrandingModal('${item.link}', '${item.title}', '${item.desc}', '${item.tag}')">
        <div class="brand-tile-body">
          <span class="frame-tag">${item.tag}</span>
          <h4 class="brand-tile-title">${item.title}</h4>
          <p class="brand-tile-desc">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Mobile drawer toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // Modal close handlers
  const modal = document.getElementById('videoModal');
  const modalX = document.getElementById('modalX');
  const modalBackdrop = document.getElementById('modalBackdrop');

  if (modalX) modalX.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
});

function openCampaignModal(key) {
  currentActiveCampaign = campaignsData[key];
  if (!currentActiveCampaign) return;

  document.getElementById('mTag').innerText = currentActiveCampaign.tag;
  document.getElementById('mTitle').innerText = currentActiveCampaign.title;
  document.getElementById('mDesc').innerText = currentActiveCampaign.desc;
  document.getElementById('mAud').innerText = currentActiveCampaign.audience;
  document.getElementById('mFmt').innerText = currentActiveCampaign.format;
  document.getElementById('mDriveLink').href = currentActiveCampaign.src;

  const screen = document.getElementById('mScreen');
  screen.className = 'modal-screen';
  screen.innerHTML = `<video src="${currentActiveCampaign.src}" controls autoplay style="width: 100%; height: 100%; object-fit: contain; background: #000;"></video>`;

  const modal = document.getElementById('videoModal');
  modal.classList.add('active');
}

function openBrandingModal(link, title, desc, tag) {
  document.getElementById('mTag').innerText = 'Visual Identity • ' + tag;
  document.getElementById('mTitle').innerText = title;
  document.getElementById('mDesc').innerText = desc;
  document.getElementById('mAud').innerText = 'Digital Asset';
  document.getElementById('mFmt').innerText = link.endsWith('.pdf') ? 'PDF Document' : 'Image Asset';
  document.getElementById('mDriveLink').href = link;

  const screen = document.getElementById('mScreen');
  screen.className = 'modal-screen';

  if (link.endsWith('.pdf')) {
    screen.innerHTML = `<iframe src="${link}" style="width: 100%; height: 100%; border: none; background: #fff;"></iframe>`;
  } else {
    screen.innerHTML = `<img src="${link}" alt="${title}" style="max-width: 100%; max-height: 100%; object-fit: contain; background: #111;">`;
  }

  const modal = document.getElementById('videoModal');
  modal.classList.add('active');
}

function openTheatreModal(src, title, subtitle, desc, badge) {
  document.getElementById('mTag').innerText = 'Live Production • ' + badge;
  document.getElementById('mTitle').innerText = title + ' (' + subtitle + ')';
  document.getElementById('mDesc').innerText = desc;
  document.getElementById('mAud').innerText = 'Bedford School Drama';
  document.getElementById('mFmt').innerText = '9:16 Vertical Video';
  document.getElementById('mDriveLink').href = src;

  const screen = document.getElementById('mScreen');
  screen.className = 'modal-screen vertical-screen';
  screen.innerHTML = `<video src="${src}" controls autoplay style="width: 100%; height: 100%; object-fit: contain; background: #000;"></video>`;

  const modal = document.getElementById('videoModal');
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  modal.classList.remove('active');
  const screen = document.getElementById('mScreen');
  screen.innerHTML = '';
  currentActiveCampaign = null;
}

function submitPitch() {
  const name = document.getElementById('cName').value;
  const email = document.getElementById('cEmail').value;
  const title = document.getElementById('cTitle').value;
  const msg = document.getElementById('cMsg').value;

  const mailtoLink = `mailto:ellabowis@icloud.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + msg)}`;
  
  window.location.href = mailtoLink;

  const status = document.getElementById('formStatus');
  status.innerText = 'Opening your email client...';
  document.getElementById('contactForm').reset();
  setTimeout(() => {
    status.innerText = '';
  }, 5000);
}