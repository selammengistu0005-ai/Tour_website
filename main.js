/* ============================================================
   ETHIOPIA EXPLORE TOURS — main.js
   Covers all 11 sections + nav, hero, footer utilities
   ============================================================ */

/* strict mode removed — inline onclick handlers (scrollToCalculator) require global scope */

/* ── TOUR DATA ─────────────────────────────────────────────── */
const TOURS = [
  {
    id: 'lalibela-classic',
    title: 'Lalibela Classic',
    duration: 7,
    price: 650,
    destination: 'lalibela',
    activity: 'cultural',
    popularity: 95,
    badge: 'Most Popular',
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png',
    highlights: ['Rock-Hewn Churches', 'UNESCO Heritage', 'Timkat Festival'],
    description: '7 days exploring the legendary rock-hewn churches of Lalibela, a sacred pilgrimage city carved from solid rock.'
  },
  {
    id: 'simien-trek',
    title: 'Simien Mountains Trek',
    duration: 10,
    price: 850,
    destination: 'simien',
    activity: 'trekking',
    popularity: 88,
    badge: 'Adventure Pick',
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png',
    highlights: ['Gelada Baboons', 'Ras Dashen Peak', 'Stunning Escarpments'],
    description: '10 days trekking through Africa\'s Grand Canyon with dramatic cliffs, wildlife, and breathtaking highland scenery.'
  },
  {
    id: 'danakil-adventure',
    title: 'Danakil Adventure',
    duration: 5,
    price: 950,
    destination: 'danakil',
    activity: 'trekking',
    popularity: 82,
    badge: 'Bucket List',
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png',
    highlights: ['Erta Ale Volcano', 'Salt Flats', 'Dallol Crater'],
    description: '5 days in Earth\'s hottest place — volcanic lava lakes, sulfuric springs, and vast salt deserts of the Afar Triangle.'
  },
  {
    id: 'omo-valley',
    title: 'Omo Valley Cultural',
    duration: 12,
    price: 1100,
    destination: 'omo',
    activity: 'cultural',
    popularity: 78,
    badge: 'Cultural Gem',
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png',
    highlights: ['Mursi Tribes', 'Traditional Markets', 'Tribal Ceremonies'],
    description: '12 days immersed in the rich cultures of the Omo Valley, home to over 20 distinct indigenous tribes.'
  },
  {
    id: 'bale-wildlife',
    title: 'Bale Mountains Wildlife',
    duration: 8,
    price: 780,
    destination: 'bale',
    activity: 'wildlife',
    popularity: 74,
    badge: 'Wildlife Gem',
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png',
    highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest'],
    description: '8 days in Bale Mountains National Park, spotting Ethiopian wolves and mountain nyala in pristine highland wilderness.'
  },
  {
    id: 'harar-heritage',
    title: 'Harar Heritage',
    duration: 4,
    price: 580,
    destination: 'harar',
    activity: 'cultural',
    popularity: 70,
    badge: 'City Escape',
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png',
    highlights: ['Walled Old City', 'Hyena Feeding', 'Rimbaud\'s House', 'Coffee Origin'],
    description: '4 days in the walled city of Harar — Africa\'s 4th holiest Islamic city, famous for the nightly hyena feeding ritual.'
  }
];

/* ── DESTINATION DATA ──────────────────────────────────────── */
const DESTINATIONS = {
  lalibela: {
    name: 'Lalibela',
    region: 'Amhara Region',
    desc: 'Known as the "New Jerusalem," Lalibela is home to 11 monolithic rock-hewn churches carved in the 12th century, still used as active places of worship today.',
    highlights: ['Rock-Hewn Churches', 'UNESCO World Heritage', 'Timkat Festival', 'Pilgrimage City'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600',
    bestTime: 'Oct–Mar',
    altitude: '2,630m',
    flightFrom: '~1 hr from Addis'
  },
  axum: {
    name: 'Axum (Aksum)',
    region: 'Tigray Region',
    desc: 'The ancient capital of the Aksumite Empire, Axum is home to towering obelisks, ancient tombs, and is believed to house the original Ark of the Covenant.',
    highlights: ['Ancient Obelisks', 'Church of St. Mary of Zion', 'Ark of the Covenant', 'Queen of Sheba Palace'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
    bestTime: 'Oct–Mar',
    altitude: '2,131m',
    flightFrom: '~2 hrs from Addis'
  },
  gondar: {
    name: 'Gondar',
    region: 'Amhara Region',
    desc: 'The "Camelot of Africa," Gondar features a remarkable 17th-century Royal Enclosure with six castles — earning it the nickname of Africa\'s medieval city.',
    highlights: ['Royal Enclosure', 'Fasil Ghebbi Castles', 'Debre Berhan Selassie Church', 'Timkat Celebrations'],
    image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600',
    bestTime: 'Oct–Mar',
    altitude: '2,133m',
    flightFrom: '~1 hr from Addis'
  },
  danakil: {
    name: 'Danakil Depression',
    region: 'Afar Region',
    desc: 'One of Earth\'s most extreme landscapes — below sea level, scorching hot, and filled with active volcanoes, colorful sulfur springs, and vast salt flats.',
    highlights: ['Erta Ale Lava Lake', 'Dallol Crater Colors', 'Karum Salt Lake', 'Afar Nomads'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600',
    bestTime: 'Nov–Feb',
    altitude: '−125m (below sea level)',
    flightFrom: '~3 hrs drive from Mekelle'
  },
  simien: {
    name: 'Simien Mountains',
    region: 'Amhara Region',
    desc: 'A UNESCO World Heritage site with dramatic escarpments, deep gorges and some of Africa\'s highest peaks. Home to the endemic gelada baboon and Ethiopian wolf.',
    highlights: ['Gelada Baboons', 'Ras Dashen (4,550m)', 'Endemic Wildlife', 'Panoramic Escarpments'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
    bestTime: 'Sep–Apr',
    altitude: 'Up to 4,550m',
    flightFrom: '~1 hr to Gondar, then drive'
  },
  addis: {
    name: 'Addis Ababa',
    region: 'Addis Ababa City',
    desc: 'Ethiopia\'s vibrant capital city, home to the African Union, world-class museums, incredible food scenes, and the starting point for most Ethiopian adventures.',
    highlights: ['National Museum (Lucy fossil)', 'Merkato Market', 'Holy Trinity Cathedral', 'Entoto Hills'],
    image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600',
    bestTime: 'Year-round',
    altitude: '2,355m',
    flightFrom: 'International Hub'
  },
  omo: {
    name: 'Omo Valley',
    region: 'SNNPR',
    desc: 'A living anthropological museum — the Omo Valley is home to over 20 indigenous tribes including the Mursi, Hamer, Karo and Dassanech, each with unique traditions.',
    highlights: ['Mursi Lip Plates', 'Hamer Bull Jumping', 'Tribal Markets', 'Ancient Rock Art'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600',
    bestTime: 'Sep–Feb',
    altitude: '400–700m',
    flightFrom: '~1.5 hrs to Jinka'
  },
  harar: {
    name: 'Harar',
    region: 'Harari Region',
    desc: 'Africa\'s 4th holiest Islamic city, entirely contained within ancient walls. Famous for the mystical nightly hyena feeding ritual and as the birthplace of Ethiopian coffee.',
    highlights: ['Jugol Old City (UNESCO)', 'Nightly Hyena Feeding', 'Rimbaud\'s House', '82 Mosques'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
    bestTime: 'Oct–Mar',
    altitude: '1,885m',
    flightFrom: '~1 hr from Addis'
  },
  bale: {
    name: 'Bale Mountains',
    region: 'Oromia Region',
    desc: 'Bale Mountains National Park protects Africa\'s largest area of Afroalpine habitat, sheltering the world\'s largest population of Ethiopian wolves and mountain nyala.',
    highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest', 'Web Valley Plateau'],
    image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600',
    bestTime: 'Nov–Apr',
    altitude: 'Up to 4,377m',
    flightFrom: '~6 hrs drive from Addis'
  },
  tana: {
    name: 'Lake Tana',
    region: 'Amhara Region',
    desc: 'Ethiopia\'s largest lake, the source of the Blue Nile, dotted with ancient island monasteries housing remarkable medieval paintings and manuscripts.',
    highlights: ['Island Monasteries', 'Blue Nile Source', 'Hippos', 'Zege Peninsula'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600',
    bestTime: 'Oct–Mar',
    altitude: '1,788m',
    flightFrom: '~1 hr to Bahir Dar'
  }
};

/* ── STATE VARIABLES ───────────────────────────────────────── */
let heroSlideIndex = 0;
let heroInterval = null;
let currentLang = 'en';
let calcState = { base: 0, travelers: 2, hotel: 0, transport: 0 };
let activeNetworkNode = null;
let recStep = 0;
let recAnswers = {};
let galleryFilter = 'all';
let gallerySlideshow = null;
let lightboxItems = [];
let lightboxIndex = 0;
let checklistState = {};
let budgetState = { duration: 10, accomm: 25, food: 15, activities: 20, transport: 10 };

/* ================================================================
   1. NAVIGATION
   ================================================================ */
function initNav() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const backToTop = document.getElementById('backToTop');

  // Scroll effects
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Back to top
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // "Book Now" navbar button → scroll to contact section
  const bookNowBtn = document.querySelector('.nav-cta');
  if (bookNowBtn) {
    bookNowBtn.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Active nav link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* ================================================================
   2. LANGUAGE TOGGLE
   ================================================================ */
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'am' : 'en';
    document.body.classList.toggle('lang-am', currentLang === 'am');
    btn.textContent = currentLang === 'en' ? 'EN | አማ' : 'አማ | EN';

    // Swap all data-en / data-am elements
    document.querySelectorAll('[data-en][data-am]').forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
  });
}

/* ================================================================
   3. HERO SLIDESHOW
   ================================================================ */
function initHero() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('#heroSlideDots .dot');

  function goToSlide(idx) {
    slides[heroSlideIndex].classList.remove('active');
    dots[heroSlideIndex].classList.remove('active');
    heroSlideIndex = idx;
    slides[heroSlideIndex].classList.add('active');
    dots[heroSlideIndex].classList.add('active');
  }

  function nextSlide() {
    goToSlide((heroSlideIndex + 1) % slides.length);
  }

  heroInterval = setInterval(nextSlide, 5000);

  // Pause slideshow on hover, resume on mouse leave
  const heroSection = document.getElementById('hero');
  heroSection.addEventListener('mouseenter', () => clearInterval(heroInterval));
  heroSection.addEventListener('mouseleave', () => {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextSlide, 5000);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(heroInterval);
      goToSlide(parseInt(dot.dataset.slide));
      heroInterval = setInterval(nextSlide, 5000);
    });
  });
}

/* ================================================================
   4. TOUR PACKAGE EXPLORER
   ================================================================ */
function initTours() {
  renderTours(TOURS);

  document.getElementById('tourSearch').addEventListener('input', filterTours);
  document.getElementById('tourSort').addEventListener('change', filterTours);
  document.getElementById('filterDestination').addEventListener('change', filterTours);
  document.getElementById('filterDuration').addEventListener('change', filterTours);
  document.getElementById('filterActivity').addEventListener('change', filterTours);
  document.getElementById('filterReset').addEventListener('click', resetFilters);
}

function filterTours() {
  let filtered = [...TOURS];
  const query       = document.getElementById('tourSearch').value.toLowerCase();
  const destination = document.getElementById('filterDestination').value;
  const duration    = document.getElementById('filterDuration').value;
  const activity    = document.getElementById('filterActivity').value;
  const sort        = document.getElementById('tourSort').value;

  if (query) {
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.highlights.some(h => h.toLowerCase().includes(query))
    );
  }
  if (destination !== 'all') filtered = filtered.filter(t => t.destination === destination);
  if (activity !== 'all') filtered = filtered.filter(t => t.activity === activity);

  if (duration !== 'all') {
    const [min, max] = duration === '15+' ? [15, Infinity] : duration.split('-').map(Number);
    filtered = filtered.filter(t => t.duration >= min && t.duration <= (max || Infinity));
  }

  // Sort
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'duration-asc') filtered.sort((a, b) => a.duration - b.duration);
  else if (sort === 'duration-desc') filtered.sort((a, b) => b.duration - a.duration);
  else filtered.sort((a, b) => b.popularity - a.popularity);

  renderTours(filtered);
}

function renderTours(tours) {
  const grid  = document.getElementById('toursGrid');
  const empty = document.getElementById('toursEmpty');

  if (!tours.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = tours.map(t => `
    <div class="tour-card reveal">
      <div class="tour-card-img-wrap">
        <img class="tour-card-img" src="${t.image}" alt="${t.title}" loading="eager" />
        <span class="tour-card-badge">${t.badge}</span>
      </div>
      <div class="tour-card-body">
        <span class="tour-card-type">${t.activity.charAt(0).toUpperCase() + t.activity.slice(1)}</span>
        <h3 class="tour-card-title">${t.title}</h3>
        <div class="tour-card-meta">
          <span>📅 ${t.duration} Days</span>
          <span>📍 ${t.destination.charAt(0).toUpperCase() + t.destination.slice(1)}</span>
        </div>
        <p style="font-size:var(--fs-sm);color:var(--clr-muted);line-height:1.55;">${t.description}</p>
        <div class="tour-card-highlights">
          ${t.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('') + `
    <div class="tour-card tour-card-viewall reveal">
      <div class="tour-viewall-inner">
        <div class="tour-viewall-icon">🌍</div>
        <h3 class="tour-viewall-title">Discover All Tours</h3>
        <p class="tour-viewall-sub">Explore our full collection of Ethiopian adventures — from quick escapes to epic journeys.</p>
        <a href="tour.html" class="btn-primary tour-viewall-btn">View All Tours</a>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

function resetFilters() {
  document.getElementById('tourSearch').value = '';
  document.getElementById('tourSort').value = 'popularity';
  document.getElementById('filterDestination').value = 'all';
  document.getElementById('filterDuration').value = 'all';
  document.getElementById('filterActivity').value = 'all';
  renderTours(TOURS.sort((a,b) => b.popularity - a.popularity));
}

function scrollToCalculator(tourId) {
  const calcTour = document.getElementById('calcTour');
  calcTour.value = tourId;
  calcTour.dispatchEvent(new Event('change'));
  document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}
// Expose globally so inline onclick="scrollToCalculator(...)" always works
window.scrollToCalculator = scrollToCalculator;

/* ================================================================
   5. TRIP COST CALCULATOR
   ================================================================ */
function initCalculator() {
    if (!document.getElementById('calcTour')) return;
  const calcTour   = document.getElementById('calcTour');
  const decrease   = document.getElementById('decreaseTravelers');
  const increase   = document.getElementById('increaseTravelers');
  const travelerIn = document.getElementById('calcTravelers');

  calcTour.addEventListener('change', () => {
    const opt = calcTour.options[calcTour.selectedIndex];
    calcState.base = parseInt(opt.dataset.base) || 0;
    calcState.tourId = opt.value || '';
    updateCalc();
  });

  decrease.addEventListener('click', () => {
    if (calcState.travelers > 1) {
      calcState.travelers--;
      travelerIn.value = calcState.travelers;
      updateCalc();
    }
  });

  increase.addEventListener('click', () => {
    if (calcState.travelers < 20) {
      calcState.travelers++;
      travelerIn.value = calcState.travelers;
      updateCalc();
    }
  });

  // Option card selection (hotel & transport)
  ['hotelOptions', 'transportOptions'].forEach(groupId => {
    const group = document.getElementById(groupId);
    group.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        group.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        if (groupId === 'hotelOptions') calcState.hotel = 0;
        else calcState.transport = 0;
        updateCalc();
      });
    });
  });

  // Book button
  document.getElementById('calcBook').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  updateCalc();
}

/* ================================================================
   6. DESTINATION NETWORK EXPLORER
   ================================================================ */

function initMap() {
  const pins = document.querySelectorAll('.map-pin, .pin-addis');
  const popup    = document.getElementById('mapPopup');
  const backdrop = document.getElementById('mapPopupBackdrop');
  const closeBtn = document.getElementById('mapPopupClose');

  if (!pins.length || !popup) return;

  /* ── Destination data keyed by data-dest ── */
  const MAP_DATA = {
    addis:         { name: 'Addis Ababa',            region: 'Central Ethiopia',   image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The vibrant capital of Ethiopia — a city of contrasts where ancient tradition meets modern Africa. Home to the African Union, world-class museums, and the famous Mercato market.', highlights: ['National Museum', 'Mercato Market', 'African Union HQ', 'Entoto Hills'], bestTime: 'Oct–May', altitude: '2,355m', getting: 'Direct flights worldwide' },
    simien:        { name: 'Simien Mountains',        region: 'Amhara Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png', desc: 'Africa\'s Grand Canyon — a UNESCO World Heritage site with dramatic escarpments, deep gorges, and some of the continent\'s highest peaks. Home to the endemic gelada baboon.', highlights: ['Gelada Baboons', 'Ras Dashen Peak', 'UNESCO Heritage', 'Panoramic Escarpments'], bestTime: 'Oct–Mar', altitude: '4,550m', getting: '~1 hr from Gondar' },
    bale:          { name: 'Bale Mountains',          region: 'Oromia Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', desc: 'A highland wilderness sheltering the Ethiopian wolf — Africa\'s rarest canid. Vast Afroalpine moorlands, the Harenna cloud forest, and mountain nyala await.', highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest', 'Sanetti Plateau'], bestTime: 'Nov–Mar', altitude: '4,377m', getting: '~6 hrs from Addis' },
    bluenilefalls: { name: 'Blue Nile Falls',         region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'Known locally as Tis Abay — "Smoking Water" — the Blue Nile Falls thunder 45 metres into a misty gorge, creating rainbows and drenching the surrounding forest.', highlights: ['45m Waterfall', 'Blue Nile Source', 'Lush Rainforest', 'Scenic Gorge'], bestTime: 'Sep–Nov', altitude: '1,700m', getting: '~30 min from Bahir Dar' },
    danakil:       { name: 'Danakil Depression',      region: 'Afar Region',        image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png', desc: 'One of Earth\'s most extreme environments — below sea level, scorching hot, with active volcanoes, neon sulfur springs, and vast salt flats stretching to the horizon.', highlights: ['Erta Ale Lava Lake', 'Dallol Crater', 'Salt Flats', 'Afar Nomads'], bestTime: 'Nov–Feb', altitude: '−125m', getting: '~3 hrs from Mekelle' },
    ertaale:       { name: 'Erta Ale Volcano',        region: 'Afar Region',        image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png', desc: 'One of the world\'s only permanent lava lakes, Erta Ale is a shield volcano deep in the Danakil. Hiking to the crater rim at night to witness churning molten lava is unforgettable.', highlights: ['Permanent Lava Lake', 'Night Hike', 'Danakil Heart', 'Raw Volcanic Power'], bestTime: 'Nov–Feb', altitude: '613m', getting: '~4 hrs 4WD from Semera' },
    laketana:      { name: 'Lake Tana',               region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600', desc: 'Ethiopia\'s largest lake and the source of the Blue Nile. Its island monasteries — some dating to the 14th century — house remarkable ancient murals, manuscripts, and royal mummies.', highlights: ['Island Monasteries', 'Blue Nile Source', 'Ancient Murals', 'Hippos & Birds'], bestTime: 'Oct–Mar', altitude: '1,788m', getting: '~1 hr flight from Addis' },
    sofomar:       { name: 'Sof Omar Caves',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Africa\'s longest cave system — over 15km of dramatic chambers carved by the Web River. Sacred to local Muslims, the caverns feature towering pillars and crystal-clear underground pools.', highlights: ['Africa\'s Longest Cave', 'Underground River', 'Sacred Site', 'Dramatic Chambers'], bestTime: 'Oct–Apr', altitude: '1,200m', getting: '~5 hrs from Addis' },
    wenchi:        { name: 'Wenchi Crater Lake',      region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A stunning caldera lake surrounded by forested rim trails, hot springs, and a small island monastery. One of Ethiopia\'s most scenic and peaceful natural retreats.', highlights: ['Crater Lake', 'Island Monastery', 'Hot Springs', 'Horse Trekking'], bestTime: 'Oct–Feb', altitude: '3,386m', getting: '~2.5 hrs from Addis' },
    abijattashalla: { name: 'Abijatta-Shalla Lakes', region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Twin Rift Valley lakes in a national park teeming with flamingos, pelicans, and over 300 bird species. Lake Shala\'s hot springs steam dramatically from the shore.', highlights: ['Flamingo Flocks', '300+ Bird Species', 'Hot Springs', 'Rift Valley'], bestTime: 'Nov–Mar', altitude: '1,540m', getting: '~2 hrs from Addis' },
    nechsar:       { name: 'Nech Sar National Park', region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Bridging Lakes Abaya and Chamo, Nech Sar ("White Grass") shelters crocodiles, hippos, zebra, and Grant\'s gazelle on the grassy plains between the waters.', highlights: ['Crocodiles & Hippos', 'Zebra Plains', 'Twin Lakes', 'Nechisar Nightjar'], bestTime: 'Oct–Mar', altitude: '1,108m', getting: '~6 hrs from Addis' },
    awash:         { name: 'Awash National Park',    region: 'Afar Region',        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s most accessible wildlife park, straddling the Awash River. Oryx, gazelle, and baboon roam the acacia savanna while the river gorge and Awash Falls dazzle visitors.', highlights: ['Awash Falls', 'Oryx & Gazelle', 'Hot Springs', 'Afar Culture'], bestTime: 'Nov–Mar', altitude: '1,000m', getting: '~2 hrs from Addis' },
    omo:           { name: 'Omo Valley',             region: 'SNNPR',              image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png', desc: 'One of Africa\'s last great cultural frontiers — home to over 20 indigenous tribes including the Mursi, Hamer, Karo, and Dassanech, each with extraordinary traditions.', highlights: ['Mursi Lip Plates', 'Hamer Bull Jumping', 'Tribal Markets', 'Omo River'], bestTime: 'Oct–Feb', altitude: '500m', getting: '~1 hr flight from Addis' },
    mago:          { name: 'Mago National Park',     region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Remote and wild, Mago protects buffalo, elephant, giraffe, and lion in one of Ethiopia\'s least-visited wilderness areas, bordering the Omo Valley tribal lands.', highlights: ['Buffalo & Elephant', 'Mursi Village Visits', 'Wild Frontier', 'Omo River'], bestTime: 'Nov–Mar', altitude: '600m', getting: '~1.5 hrs from Jinka' },
    chebera:       { name: 'Chebera Churchura NP',   region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of Ethiopia\'s newest and least-visited parks, with some of the country\'s highest elephant and hippo densities in lush montane forest.', highlights: ['Forest Elephants', 'Hippo Pools', 'Montane Forest', 'Off the Beaten Path'], bestTime: 'Nov–Feb', altitude: '1,500m', getting: '~7 hrs from Addis' },
    gambella:      { name: 'Gambella National Park', region: 'Gambella Region',    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote tropical lowland park hosting one of Africa\'s last great wildlife migrations — over a million white-eared kob and tiang antelope cross the plains each year.', highlights: ['Great Migration', 'White-Eared Kob', 'Nile Lechwe', 'Tropical Wilderness'], bestTime: 'Dec–Feb', altitude: '400m', getting: '~1.5 hr flight from Addis' },
    yangudi:       { name: 'Yangudi Rassa NP',       region: 'Afar Region',        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote Afar desert reserve protecting the African wild ass — one of the world\'s most endangered mammals — alongside Grevy\'s zebra and Beisa oryx.', highlights: ['African Wild Ass', 'Grevy\'s Zebra', 'Afar Desert', 'Rare & Remote'], bestTime: 'Nov–Feb', altitude: '400m', getting: '~5 hrs from Addis' },
    kafta:         { name: 'Kafta Sheraro NP',       region: 'Tigray Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s largest national park, protecting the northernmost elephant population in Africa and vast dry savanna stretching to the Eritrean border.', highlights: ['Northern Elephants', 'Vast Savanna', 'Tigray Landscape', 'Rare & Wild'], bestTime: 'Nov–Feb', altitude: '600m', getting: '~1 hr from Shire' },
    alatish:       { name: 'Alatish National Park',  region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A little-known park on the Sudan border famous for its spectacular seasonal elephant migration — one of Africa\'s hidden wildlife spectacles.', highlights: ['Elephant Migration', 'Sudan Border', 'Remote Wilderness', 'Hidden Gem'], bestTime: 'Dec–Mar', altitude: '700m', getting: '~6 hrs from Gondar' },
    gheralta:      { name: 'Gheralta Mountains',     region: 'Tigray Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'Dramatic sandstone massifs riddled with Tigrinya rock-hewn churches perched on near-vertical cliff faces, requiring rope-assisted climbs to reach some of the most atmospheric churches in Africa.', highlights: ['Cliff Churches', 'Rock Climbing', 'Ancient Murals', 'Tigray Heritage'], bestTime: 'Oct–Mar', altitude: '2,400m', getting: '~2 hrs from Mekelle' },
    bluenilegorge: { name: 'Blue Nile Gorge',        region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s Grand Canyon — a spectacular 1,500m deep gorge carved by the Blue Nile over millennia, offering breathtaking views and dramatic driving on the road between Addis and Bahir Dar.', highlights: ['1,500m Deep Gorge', 'Blue Nile River', 'Dramatic Viewpoints', 'Gelada Baboons'], bestTime: 'Oct–Apr', altitude: '900m', getting: '~3 hrs from Addis' },
    riftvalley:    { name: 'Rift Valley Lakes',      region: 'Oromia / SNNPR',    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A chain of seven stunning soda and freshwater lakes in the Ethiopian Rift Valley — each with its own personality, from flamingo-pink Abiata to the resort shores of Langano.', highlights: ['Flamingo Colonies', '7 Linked Lakes', 'Birdwatcher\'s Paradise', 'Rift Scenery'], bestTime: 'Oct–Mar', altitude: '1,540m', getting: '~2 hrs from Addis' },
    lakelangano:   { name: 'Lake Langano',           region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The only bilharzia-free lake in the Rift Valley — a favourite weekend escape from Addis with russet-brown waters, hippos, and excellent bird watching on its shores.', highlights: ['Safe Swimming', 'Hippos', 'Weaver Birds', 'Weekend Retreat'], bestTime: 'Year-round', altitude: '1,585m', getting: '~2 hrs from Addis' },
    lakeziway:     { name: 'Lake Ziway',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A freshwater Rift Valley lake renowned for its pelicans, hippos, and the traditional reed boats of the Zay people — the island monasteries add a spiritual dimension to a beautiful setting.', highlights: ['Pelicans & Hippos', 'Island Monasteries', 'Zay People', 'Freshwater Lake'], bestTime: 'Oct–Mar', altitude: '1,636m', getting: '~2 hrs from Addis' },
    lakeabaya:     { name: 'Lake Abaya',             region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s largest Rift Valley lake, tinted blood-red by mineral-rich sediment. Its shores are home to crocodiles, hippos, and the Arba Minch region\'s rich birdlife.', highlights: ['Red-Tinted Waters', 'Crocodiles', 'Hippo Pods', 'Arba Minch Views'], bestTime: 'Oct–Mar', altitude: '1,285m', getting: '~6 hrs from Addis' },
    lakechamo:     { name: 'Lake Chamo',             region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Famous for the "Crocodile Market" — a sandbar teeming with hundreds of enormous Nile crocodiles and basking hippos — Lake Chamo is one of Africa\'s great wildlife spectacles.', highlights: ['Crocodile Market', 'Hippos', 'Boat Safaris', 'Nile Perch'], bestTime: 'Oct–Mar', altitude: '1,235m', getting: '~6 hrs from Addis' },
    hawassa:       { name: 'Lake Hawassa',           region: 'Sidama Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A lively, beautiful lake at the heart of Hawassa city — famous for the rowdy fish market where marabou storks and pelicans steal scraps, and for its lakeside promenade walks.', highlights: ['Fish Market', 'Marabou Storks', 'Lakeside Walks', 'Hawassa City'], bestTime: 'Year-round', altitude: '1,708m', getting: '~3 hrs from Addis' },
    lakeshala:     { name: 'Lake Shala',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Africa\'s deepest Rift Valley lake, framed by steep caldera walls. Its famous hot springs bubble from the shore at over 90°C, creating a dramatic steaming landscape.', highlights: ['90°C Hot Springs', 'Deepest Rift Lake', 'Flamingos', 'Caldera Walls'], bestTime: 'Oct–Mar', altitude: '1,558m', getting: '~2.5 hrs from Addis' },
    lakeabijatta:  { name: 'Lake Abijatta',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A shallow, alkaline soda lake that turns pink with millions of lesser flamingos at peak season — one of Ethiopia\'s greatest bird spectacles inside the Abijatta-Shalla NP.', highlights: ['Million Flamingos', 'Soda Lake', 'Endemic Birds', 'Pink Horizons'], bestTime: 'Nov–Feb', altitude: '1,540m', getting: '~2 hrs from Addis' },
    chilalo:       { name: 'Mount Chilalo',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The third highest peak in Ethiopia, rising from the Arsi highlands. Its Afroalpine moorlands shelter the endemic Arsi mountain nyala and stunning highland flora.', highlights: ['3rd Highest Peak', 'Arsi Nyala', 'Alpine Moorland', 'Endemic Plants'], bestTime: 'Oct–Mar', altitude: '4,036m', getting: '~4 hrs from Addis' },
    mountbatu:     { name: 'Mount Batu',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote and rarely visited peak in the Arsi Mountains, offering pristine high-altitude trekking through heather moorland and giant lobelia forests with spectacular views.', highlights: ['Remote Trekking', 'Giant Lobelias', 'Heather Moorland', 'Solitude'], bestTime: 'Oct–Mar', altitude: '4,204m', getting: '~5 hrs from Addis' },
    tulludimtu:    { name: 'Mt. Tullu Dimtu',        region: 'Oromia Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', desc: 'The second highest peak in Ethiopia and the crown of the Bale Mountains, its summit offers panoramic views across the Sanetti Plateau — the world\'s largest Afroalpine habitat.', highlights: ['2nd Highest Peak', 'Sanetti Plateau', 'Ethiopian Wolf', 'Panoramic Views'], bestTime: 'Oct–Mar', altitude: '4,377m', getting: '~6 hrs from Addis' },
    guassa:        { name: 'Guassa Plateau',         region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A high-altitude community conservation area and one of the best places to see the Ethiopian wolf outside Bale. Vast heather moorlands and starry skies make for magical camping.', highlights: ['Ethiopian Wolf', 'Community Conservation', 'Heather Moorland', 'Star Gazing'], bestTime: 'Oct–Mar', altitude: '3,600m', getting: '~4 hrs from Addis' },
    borena:        { name: 'Borena Plains',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The ancient pastoral homeland of the Borana people — a semi-arid savanna of acacia scrub, singing wells, and cattle culture stretching to the Kenyan border.', highlights: ['Borana Culture', 'Singing Wells', 'Acacia Savanna', 'Kenya Borderlands'], bestTime: 'Nov–Feb', altitude: '1,000m', getting: '~7 hrs from Addis' },
    babille:       { name: 'Babille Elephant Sanctuary', region: 'Oromia Region', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Home to one of Africa\'s most genetically distinct elephant populations, the Babille sanctuary protects a small herd in striking desert-edge landscape near Harar.', highlights: ['Unique Elephants', 'Desert Landscape', 'Near Harar', 'Rare Subspecies'], bestTime: 'Nov–Feb', altitude: '1,400m', getting: '~1 hr from Harar' },
    bilen:         { name: 'Bilen Hot Springs',      region: 'Afar Region',        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Natural geothermal hot springs in the Awash Valley — a relaxing stop on the road to the Danakil Depression, used by locals for bathing and healing for centuries.', highlights: ['Hot Springs', 'Geothermal Activity', 'Awash Valley', 'Local Tradition'], bestTime: 'Nov–Mar', altitude: '800m', getting: '~3 hrs from Addis' },
    fentale:       { name: 'Mt. Fentale Crater',     region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A dormant shield volcano on the edge of the Rift Valley with a massive 3km-wide summit crater. The hike rewards with sweeping views over Lake Beseka and the Awash plains.', highlights: ['3km Summit Crater', 'Rift Valley Views', 'Lake Beseka', 'Volcano Hike'], bestTime: 'Oct–Mar', altitude: '1,625m', getting: '~2.5 hrs from Addis' },
    koka:          { name: 'Koka Reservoir',         region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A large artificial lake on the Awash River famed for excellent sport fishing and spectacular birdwatching, with pelicans, storks, and African fish eagles in abundance.', highlights: ['Sport Fishing', 'African Fish Eagle', 'Pelicans & Storks', 'Easy Day Trip'], bestTime: 'Year-round', altitude: '1,590m', getting: '~1.5 hrs from Addis' },
    lakehayq:      { name: 'Lake Hayq',              region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A serene highland lake surrounded by juniper forest and a hilltop monastery — one of Ethiopia\'s hidden gems, perfectly placed on the road between Addis and Lalibela.', highlights: ['Hilltop Monastery', 'Juniper Forest', 'Freshwater Lake', 'Quiet Beauty'], bestTime: 'Oct–Mar', altitude: '2,030m', getting: '~6 hrs from Addis' },
    lakeardibo:    { name: 'Lake Ardibo',             region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote and little-visited highland lake in the Wollo region, offering peaceful scenery, good fishing, and a taste of rural Ethiopian highland life far from the tourist trail.', highlights: ['Remote & Peaceful', 'Highland Scenery', 'Wollo Culture', 'Fishing'], bestTime: 'Oct–Mar', altitude: '2,200m', getting: '~7 hrs from Addis' },
    zuqualla:      { name: 'Mt. Zuqualla',           region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'An extinct volcano just south of Addis — perfect for a day hike to the crater rim, where a sacred lake and ancient monastery nestle in the cool forested caldera.', highlights: ['Crater Lake', 'Ancient Monastery', 'Colobus Monkeys', 'Easy Addis Day Trip'], bestTime: 'Year-round', altitude: '2,989m', getting: '~1.5 hrs from Addis' },
    debrelibanos:  { name: 'Debre Libanos',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of Ethiopia\'s most sacred monasteries, perched above a spectacular gorge where gelada baboons roam the cliff edges and lammergeyer vultures soar overhead.', highlights: ['Sacred Monastery', 'Jemma Gorge', 'Gelada Baboons', 'Lammergeyers'], bestTime: 'Oct–Apr', altitude: '2,600m', getting: '~2 hrs from Addis' },
    jemmagorge:    { name: 'Jemma River Gorge',      region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of Ethiopia\'s most dramatic and least-explored gorge systems — a raw trekking frontier of towering cliffs, roaring rapids, and enormous gelada baboon troops.', highlights: ['Untouched Wilderness', 'Gelada Troops', 'Towering Cliffs', 'Remote Trekking'], bestTime: 'Oct–Mar', altitude: '1,200m', getting: '~3 hrs from Addis' },
    kundi:         { name: 'Kundi Mountain',         region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote highland peak in southwest Ethiopia offering village homestay trekking, remarkable endemic birdlife, and a true off-the-beaten-path highland experience.', highlights: ['Village Homestays', 'Endemic Birds', 'Remote Highlands', 'Authentic Culture'], bestTime: 'Oct–Mar', altitude: '2,800m', getting: '~8 hrs from Addis' },
    gibegorge:     { name: 'Gibe Gorge',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A spectacular river canyon in southwest Ethiopia with tropical dry forest, natural hot springs, and outstanding birding — particularly for raptors and hornbills.', highlights: ['Tropical Forest', 'Hot Springs', 'Raptor Watching', 'Gibe River'], bestTime: 'Oct–Mar', altitude: '1,000m', getting: '~4 hrs from Addis' },
    choke:         { name: 'Choke Mountains',        region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The high-altitude source of the Blue Nile — a vast rolling highland massif above Lake Tana, with endemic wildlife, Afroalpine moorlands, and trekking routes rarely walked by outsiders.', highlights: ['Blue Nile Headwaters', 'Afroalpine Moorland', 'Endemic Wildlife', 'Remote Trekking'], bestTime: 'Oct–Mar', altitude: '4,000m', getting: '~3 hrs from Bahir Dar' },
    menagesha:     { name: 'Menagesha Forest',       region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s oldest protected forest — a cool highland escape just outside Addis, with giant podocarpus trees, black-and-white colobus monkeys, and excellent birding trails.', highlights: ['Ancient Forest', 'Colobus Monkeys', 'Podocarpus Trees', 'Easy Addis Escape'], bestTime: 'Year-round', altitude: '2,800m', getting: '~1 hr from Addis' },
    harenna:       { name: 'Harenna Forest',         region: 'Oromia Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', desc: 'A mysterious Afromontane cloud forest on the southern slopes of the Bale Mountains — home to wild coffee trees, African lions, giant forest hogs, and colobus monkeys under a cathedral canopy.', highlights: ['Wild Coffee', 'African Lions', 'Cloud Forest', 'Colobus Monkeys'], bestTime: 'Oct–Mar', altitude: '1,500m', getting: '~7 hrs from Addis' },
    kafa:          { name: 'Kafa Biosphere Reserve', region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The birthplace of coffee — the wild montane forests of Kafa are where Coffea arabica was first discovered. A UNESCO Biosphere Reserve of extraordinary biodiversity and cultural richness.', highlights: ['Birthplace of Coffee', 'UNESCO Biosphere', 'Kafa Culture', 'Rainforest'], bestTime: 'Oct–Mar', altitude: '1,900m', getting: '~8 hrs from Addis' },
    yayu:          { name: 'Yayu Coffee Forest',     region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of the last great wild coffee forests on Earth — a UNESCO Biosphere Reserve where wild Coffea arabica grows beneath a vast intact rainforest canopy in western Ethiopia.', highlights: ['Wild Arabica Coffee', 'UNESCO Biosphere', 'Intact Rainforest', 'Western Frontier'], bestTime: 'Oct–Mar', altitude: '1,600m', getting: '~9 hrs from Addis' },
    bishoftu:      { name: 'Bishoftu Crater Lakes',  region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A cluster of stunning volcanic crater lakes just an hour from Addis — popular for weekend escapes, water sports, birdwatching, and the spectacular Irreechaa festival held at Lake Hora each October.', highlights: ['Crater Lakes', 'Irreechaa Festival', 'Water Sports', 'Easy Addis Day Trip'], bestTime: 'Year-round', altitude: '1,920m', getting: '~1 hr from Addis' },
    harar:         { name: 'Harar',                  region: 'Harari Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png', desc: 'Africa\'s 4th holiest Islamic city, encircled by a 16th-century wall. Its 82 mosques, colorful painted houses, and the legendary nightly hyena feeding ritual make it utterly unique.', highlights: ['Walled Old City', 'Hyena Feeding', 'Rimbaud\'s House', '82 Mosques'], bestTime: 'Oct–Mar', altitude: '1,885m', getting: '~1.5 hr flight from Addis' },
    lalibela:      { name: 'Lalibela',               region: 'Amhara Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png', desc: 'Known as the "New Jerusalem," Lalibela\'s 11 monolithic rock-hewn churches were carved from solid red rock in the 12th century and remain active places of worship today.', highlights: ['Rock-Hewn Churches', 'UNESCO Heritage', 'Timkat Festival', 'Living Pilgrimage'], bestTime: 'Oct–Mar', altitude: '2,630m', getting: '~1 hr flight from Addis' },
    axum:          { name: 'Axum',                   region: 'Tigray Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'Capital of the ancient Aksumite Empire — towering stelae, underground royal tombs, and the Church of St. Mary of Zion, believed by Ethiopians to house the original Ark of the Covenant.', highlights: ['Ancient Obelisks', 'Ark of the Covenant', 'Royal Tombs', 'Queen of Sheba'], bestTime: 'Oct–Mar', altitude: '2,131m', getting: '~2 hr flight from Addis' },
    gondar:        { name: 'Gondar',                 region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600', desc: 'The "Camelot of Africa" — a walled Royal Enclosure containing six medieval castles built by successive emperors in the 17th century, earning Gondar its nickname as Africa\'s medieval city.', highlights: ['Royal Enclosure', '6 Castles', 'Debre Berhan Church', 'Timkat Festival'], bestTime: 'Oct–Mar', altitude: '2,133m', getting: '~1 hr flight from Addis' }
  };

  /* ── Category labels ── */
  const CAT_LABELS = {
    cultural: 'Cultural',
    nature:   'Nature',
    wildlife: 'Wildlife',
    lakes:    'Lakes',
    volcanic: 'Volcanic'
  };

  /* ── Open popup ── */
  function openPopup(destId) {
    const dest = MAP_DATA[destId];
    if (!dest) return;

    /* Mark active pin — dim all others */
    pins.forEach(p => {
      p.classList.remove('active');
      if (!p.classList.contains('pin-addis')) {
        p.classList.add('dimmed');
        }
      });
      
    const activePin = document.querySelector(`[data-dest="${destId}"]`);
    if (activePin) {
      activePin.classList.add('active');
      activePin.classList.remove('dimmed');
    }

    /* Determine category from pin class */
    let cat = 'cultural';
    if (activePin) {
      if (activePin.classList.contains('pin-wildlife')) cat = 'wildlife';
      else if (activePin.classList.contains('pin-nature'))   cat = 'nature';
      else if (activePin.classList.contains('pin-lakes'))    cat = 'lakes';
      else if (activePin.classList.contains('pin-volcanic')) cat = 'volcanic';
    }

    /* Populate */
    document.getElementById('mapPopupImg').src              = dest.image;
    document.getElementById('mapPopupImg').alt              = dest.name;
    document.getElementById('mapPopupName').textContent     = dest.name;
    document.getElementById('mapPopupDesc').textContent     = dest.desc;
    document.getElementById('mapPopupRegion').textContent   = dest.region;

    /* Category badge */
    const badgeEl = document.getElementById('mapPopupCatBadge');
    if (badgeEl) {
      badgeEl.textContent  = CAT_LABELS[cat] || cat;
      badgeEl.className    = `map-popup-cat-badge cat-${cat}`;
    }

    document.getElementById('mapPopupHighlights').innerHTML =
      dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('');

    document.getElementById('mapPopupMeta').innerHTML = `
      <span><b>Best Time</b>${dest.bestTime}</span>
      <span><b>Altitude</b>${dest.altitude}</span>
      <span><b>Getting There</b>${dest.getting}</span>
    `;

    /* Show */
    popup.classList.add('visible');
    backdrop.classList.add('visible');
  }

  /* ── Close popup ── */
  function closePopup() {
    popup.classList.remove('visible');
    backdrop.classList.remove('visible');
    pins.forEach(p => {
      p.classList.remove('active');
      p.classList.remove('dimmed');
      p.classList.remove('cat-hidden');
    });
  }

  /* ── Pin click listeners ── */
  pins.forEach(pin => {
    pin.addEventListener('click', () => openPopup(pin.dataset.dest));
  });

  closeBtn.addEventListener('click', closePopup);
  backdrop.addEventListener('click', closePopup);

  /* ── CTA button in popup ── */
  const popupCta = document.getElementById('mapPopupCta');
  if (popupCta) {
    popupCta.addEventListener('click', () => {
      closePopup();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── View Network expand/collapse ── */
  const mapFrame       = document.getElementById('mapFrame');
  const networkOverlay = document.getElementById('mapNetworkOverlay');
  const viewNetworkBtn = document.getElementById('mapViewNetworkBtn');
  const mapCloseBtn    = document.getElementById('mapCloseBtn');

  viewNetworkBtn.addEventListener('click', () => {
    mapFrame.classList.add('expanded');
    networkOverlay.classList.add('hidden');
    document.body.style.overflow = 'hidden';
  });

  mapCloseBtn.addEventListener('click', () => {
    mapFrame.classList.remove('expanded');
    networkOverlay.classList.remove('hidden');
    document.body.style.overflow = '';
    closePopup();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (mapFrame.classList.contains('expanded')) {
        mapFrame.classList.remove('expanded');
        networkOverlay.classList.remove('hidden');
        document.body.style.overflow = '';
      }
      closePopup();
    }
  });

  /* ── Mobile destination cards ── */
  const mobileCards = document.querySelectorAll('.mobile-dest-card');
  mobileCards.forEach(card => {
    card.addEventListener('click', () => openPopup(card.dataset.dest));
  });

  /* ── Map search (top-bar) ── */
  const mapSearchInput    = document.getElementById('mapSearchInput');
  const mapSearchDropdown = document.getElementById('mapSearchDropdown');

  if (mapSearchInput && mapSearchDropdown) {
    mapSearchInput.addEventListener('input', () => {
      const q = mapSearchInput.value.toLowerCase().trim();
      if (!q) { mapSearchDropdown.classList.remove('open'); mapSearchDropdown.innerHTML = ''; return; }

      const matches = Object.entries(MAP_DATA).filter(([, d]) =>
        d.name.toLowerCase().includes(q) ||
        (d.region && d.region.toLowerCase().includes(q)) ||
        (d.highlights && d.highlights.some(h => h.toLowerCase().includes(q)))
      ).slice(0, 8);

      if (!matches.length) { mapSearchDropdown.classList.remove('open'); mapSearchDropdown.innerHTML = ''; return; }

      const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      mapSearchDropdown.innerHTML = matches.map(([id, d]) => `
        <div class="map-search-item" data-dest="${id}">
          <span class="map-search-item-name">${d.name.replace(re, '<mark>$1</mark>')}</span>
          <span class="map-search-item-region">${d.region}</span>
        </div>
      `).join('');
      mapSearchDropdown.classList.add('open');

      mapSearchDropdown.querySelectorAll('.map-search-item').forEach(item => {
        item.addEventListener('mousedown', () => {
          mapSearchInput.value = '';
          mapSearchDropdown.classList.remove('open');
          mapSearchDropdown.innerHTML = '';
          openPopup(item.dataset.dest);
          /* Scroll pin into view if possible */
          const pin = document.querySelector(`.map-pin[data-dest="${item.dataset.dest}"]`);
          if (pin) pin.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    });

    mapSearchInput.addEventListener('blur', () => {
      setTimeout(() => { mapSearchDropdown.classList.remove('open'); mapSearchDropdown.innerHTML = ''; }, 180);
    });

    /* Wire sidenav search button to focus the map search input */
    const sidenavSearchBtn = document.getElementById('sidenavSearch');
    if (sidenavSearchBtn) {
      sidenavSearchBtn.addEventListener('click', () => {
        mapSearchInput.focus();
      });
    }
  }

  /* ── Category filter (top-bar) ── */
  const catBtns = document.querySelectorAll('.map-cat-btn');

  function applyMapCategoryFilter(activeCat) {
    pins.forEach(pin => {
      const pinCat = pin.dataset.cat;
      if (activeCat === 'all' || pinCat === activeCat) {
        pin.style.display = '';
        pin.classList.remove('cat-hidden');
      } else {
        pin.style.display = 'none';
        pin.classList.add('cat-hidden');
      }
    });
    /* Close popup if active pin is now hidden */
    const activePin = document.querySelector('.map-pin.active');
    if (activePin && activePin.classList.contains('cat-hidden')) closePopup();
  }

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyMapCategoryFilter(btn.dataset.cat);
    });
  });

  /* ── Sidenav button states ── */
  const sidenavBtns = document.querySelectorAll('.map-sidenav-btn');
  sidenavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sidenavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── Zoom controls ── */
  const zoomInBtn  = document.getElementById('mapZoomIn');
  const zoomOutBtn = document.getElementById('mapZoomOut');
  const zoomResetBtn = document.getElementById('mapZoomReset');

  if (zoomInBtn && zoomOutBtn) {
    let zoomLevel = 1;
    const ZOOM_STEP = 0.15;
    const ZOOM_MIN  = 0.6;
    const ZOOM_MAX  = 2.2;

    function applyZoom() {
      const pinsContainer = mapFrame.querySelector('.map-pins') || mapFrame;
      /* Scale all pins together by adjusting a wrapper if present */
      const zoomTarget = mapFrame.querySelector('.map-pins-layer') || null;
      if (zoomTarget) {
        zoomTarget.style.transform = `scale(${zoomLevel})`;
        zoomTarget.style.transformOrigin = 'center center';
      } else {
        /* Fallback: scale each pin's font-size indicator via CSS var */
        mapFrame.style.setProperty('--map-zoom', zoomLevel);
      }
      if (zoomInBtn)  zoomInBtn.disabled  = zoomLevel >= ZOOM_MAX;
      if (zoomOutBtn) zoomOutBtn.disabled = zoomLevel <= ZOOM_MIN;
    }

    zoomInBtn.addEventListener('click', () => {
      zoomLevel = Math.min(ZOOM_MAX, +(zoomLevel + ZOOM_STEP).toFixed(2));
      applyZoom();
    });
    zoomOutBtn.addEventListener('click', () => {
      zoomLevel = Math.max(ZOOM_MIN, +(zoomLevel - ZOOM_STEP).toFixed(2));
      applyZoom();
    });
    if (zoomResetBtn) {
      zoomResetBtn.addEventListener('click', () => { zoomLevel = 1; applyZoom(); });
    }
  }
}

/* ================================================================
   8. AI TRAVEL RECOMMENDER
   ================================================================ */
const REC_QUESTIONS = [
  {
    q: 'What type of experience are you looking for?',
    options: [
      { value: 'cultural',  icon: '🏛️', text: 'Historical & Cultural' },
      { value: 'wildlife',  icon: '🦁', text: 'Wildlife & Safari' },
      { value: 'trekking',  icon: '🥾', text: 'Trekking & Adventure' },
      { value: 'all',       icon: '✨', text: 'A Bit of Everything' }
    ]
  },
  {
    q: 'How long is your ideal trip?',
    options: [
      { value: '1-5',   icon: '⚡', text: '1–5 Days (Short Break)' },
      { value: '6-9',   icon: '🗓️', text: '6–9 Days (One Week)' },
      { value: '10-14', icon: '🌍', text: '10–14 Days (Two Weeks)' },
      { value: '15+',   icon: '🏕️', text: '15+ Days (Epic Journey)' }
    ]
  },
  {
    q: 'What is your budget level?',
    options: [
      { value: 'budget',   icon: '💰', text: 'Budget Traveler' },
      { value: 'mid',      icon: '💳', text: 'Mid-Range Comfort' },
      { value: 'luxury',   icon: '🥂', text: 'Luxury Experience' },
      { value: 'flexible', icon: '🎯', text: 'Flexible / Not Sure' }
    ]
  },
  {
    q: 'Who are you traveling with?',
    options: [
      { value: 'solo',   icon: '🧍', text: 'Solo' },
      { value: 'couple', icon: '👫', text: 'Couple' },
      { value: 'family', icon: '👨‍👩‍👧', text: 'Family with Kids' },
      { value: 'group',  icon: '👥', text: 'Group of Friends' }
    ]
  },
  {
    q: 'What landscape excites you most?',
    options: [
      { value: 'mountain',  icon: '🏔️', text: 'Mountains & Highlands' },
      { value: 'volcanic',  icon: '🌋', text: 'Volcanic & Extreme' },
      { value: 'wildlife',  icon: '🐘', text: 'Wildlife & Savanna' },
      { value: 'ancient',   icon: '⛪', text: 'Ancient Cities & Ruins' }
    ]
  }
];


function initRecommender() {
  recStep = 0;
  recAnswers = {};

  document.getElementById('recStartBtn').addEventListener('click', () => {
    document.getElementById('recStartScreen').style.display = 'none';
    document.getElementById('recContentWrap').classList.add('active');
    document.querySelector('.recommender-container').classList.add('started');
    renderRecQuestion();
  });

  document.getElementById('recNext').addEventListener('click', advanceRec);
  document.getElementById('recBack').addEventListener('click', () => {
    if (recStep > 0) { recStep--; renderRecQuestion(); }
  });
  document.getElementById('recRestart').addEventListener('click', () => {
    recStep = 0;
    recAnswers = {};
    document.getElementById('recResults').style.display = 'none';
    document.getElementById('recQuestionWrap').style.display = 'block';
    document.getElementById('recNext').style.display = 'inline-flex';
    renderRecQuestion();
  });
}

function renderRecQuestion() {
  const total = REC_QUESTIONS.length;
  const q     = REC_QUESTIONS[recStep];

  document.getElementById('recProgressFill').style.width = `${((recStep) / total) * 100}%`;
  document.getElementById('recProgressLabel').textContent = `Question ${recStep + 1} of ${total}`;
  document.getElementById('recBack').style.display = recStep > 0 ? 'inline-flex' : 'none';
  document.getElementById('recNext').textContent   = recStep === total - 1 ? 'See My Recommendations →' : 'Next →';

  const selected = recAnswers[recStep];
  document.getElementById('recQuestionWrap').innerHTML = `
    <div class="rec-question">
      <h3>${q.q}</h3>
      <div class="rec-options">
        ${q.options.map(o => `
          <button class="rec-option ${selected === o.value ? 'selected' : ''}" data-value="${o.value}">
            <span class="rec-option-icon">${o.icon}</span>
            <span class="rec-option-text">${o.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.rec-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rec-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      recAnswers[recStep] = btn.dataset.value;
    });
  });
}

function advanceRec() {
  if (!recAnswers[recStep]) {
    // Visual shake feedback when no answer selected
    const wrap = document.getElementById('recQuestionWrap');
    wrap.classList.remove('shake');
    // Force reflow so the animation restarts
    void wrap.offsetWidth;
    wrap.classList.add('shake');
    return;
  }

  if (recStep < REC_QUESTIONS.length - 1) {
    recStep++;
    renderRecQuestion();
  } else {
    showRecResults();
  }
}

function showRecResults() {
  const activity  = recAnswers[0];
  const duration  = recAnswers[1];
  const travelStyle = recAnswers[3];
  const landscape = recAnswers[4];

  // Score each tour
  const scored = TOURS.map(tour => {
    let score = 0;

    // Activity match
    if (activity === 'all' || tour.activity === activity) score += 30;
    if (activity === 'all') score += 10;

    // Duration match
    const dMap = { '1-5': [1,5], '6-9': [6,9], '10-14': [10,14], '15+': [15,99] };
    const [lo, hi] = dMap[duration] || [0, 99];
    if (tour.duration >= lo && tour.duration <= hi) score += 25;
    else if (Math.abs(tour.duration - (lo + hi) / 2) <= 3) score += 10;

    // Landscape match
    const landscapeMap = {
      mountain: ['simien', 'bale'],
      volcanic: ['danakil'],
      wildlife: ['bale', 'omo'],
      ancient:  ['lalibela', 'axum', 'harar']
    };
    if ((landscapeMap[landscape] || []).includes(tour.destination)) score += 20;

    // Travel style bonus
    if (travelStyle === 'couple' && tour.activity === 'cultural') score += 10;
    if (travelStyle === 'solo'   && tour.activity === 'trekking') score += 10;
    if (travelStyle === 'family' && tour.duration <= 8)           score += 10;
    if (travelStyle === 'group'  && tour.popularity > 80)         score += 10;

    // Popularity bonus
    score += tour.popularity / 20;

    return { ...tour, score };
  });

  const best = scored.sort((a, b) => b.score - a.score)[0];

  document.getElementById('recProgressFill').style.width = '100%';
  document.getElementById('recProgressLabel').textContent = 'Your perfect destination is ready!';
  document.getElementById('recQuestionWrap').style.display = 'none';
  document.getElementById('recNext').style.display = 'none';
  document.getElementById('recBack').style.display = 'none';

  document.getElementById('recResultsGrid').innerHTML = `
    <div class="tour-card reveal" style="margin:0 auto;">
      <div class="tour-card-img-wrap">
        <img class="tour-card-img" src="${best.image}" alt="${best.title}" loading="lazy" />
        <span class="tour-card-badge">🏆 Your Perfect Match</span>
      </div>
      <div class="tour-card-body">
        <span class="tour-card-type">${best.activity.charAt(0).toUpperCase() + best.activity.slice(1)}</span>
        <h3 class="tour-card-title">${best.title}</h3>
        <p style="font-size:0.95rem; color: var(--clr-text-muted); margin: 0.5rem 0 1rem;">${best.description}</p>
        <div class="tour-card-highlights">
          ${best.highlights.slice(0,3).map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
        <div class="tour-card-footer">
        <button class="tour-card-btn" onclick="scrollToCalculator('${best.id}')">Book This Tour</button>
      </div>
    </div>
  `;

  document.getElementById('recResults').style.display = 'flex';

  requestAnimationFrame(() => {
    document.querySelectorAll('#recResultsGrid .reveal').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  });
}

/* ================================================================
   9. SEASONAL TRAVEL DASHBOARD
   ================================================================ */
function initSeasonal() {
  const btns = document.querySelectorAll('.month-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSeasonal(parseInt(btn.dataset.month));
    });
  });
  renderSeasonal(0);
}

function renderSeasonal(monthIdx) {
  const months    = SEASONAL_DATA.months;
  const statuses  = SEASONAL_DATA.monthStatus;
  const status    = statuses[monthIdx];
  const badge     = document.getElementById('seasonalMonthBadge');

  document.getElementById('seasonalMonthName').textContent = months[monthIdx];

  const statusLabels = { peak: 'Peak Season', shoulder: 'Shoulder Season', 'off-peak': 'Off-Peak Season', rainy: 'Rainy Season' };
  badge.textContent = statusLabels[status] || status;
  badge.className = `seasonal-badge ${status}`;

  const grid = document.getElementById('seasonalGrid');
  grid.innerHTML = SEASONAL_DATA.destinations.map(dest => {
    const s = dest.status[monthIdx];
    const [lo, hi] = dest.temps[monthIdx];
    const note  = dest.notes[monthIdx];
    const barW  = Math.round(((hi - lo) / 40) * 100);

    return `
      <div class="seasonal-card reveal">
        <div class="seasonal-card-header">
          <span class="seasonal-dest-name">${dest.name}</span>
          <span class="seasonal-status ${s}">${statusLabels[s] || s}</span>
        </div>
        <div class="temp-range">🌡️ <strong>${lo}°C – ${hi}°C</strong></div>
        <div class="temp-bar-wrap">
          <div class="temp-bar-fill" style="width:${Math.min(barW, 100)}%"></div>
        </div>
        <p class="seasonal-note">${note}</p>
      </div>
    `;
  }).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

/* ================================================================
   10. PACKING CHECKLIST GENERATOR
   ================================================================ */
function initChecklist() {
  document.getElementById('generateChecklist').addEventListener('click', generateChecklist);
  document.getElementById('checklistPrint').addEventListener('click', () => window.print());
  document.getElementById('checklistDownload').addEventListener('click', downloadChecklist);
}

function generateChecklist() {
  const dest = document.getElementById('checklistDest').value;
  if (!dest) {
    alert('Please select a destination first.');
    return;
  }

  const data   = CHECKLISTS[dest];
  const output = document.getElementById('checklistOutput');

  document.getElementById('checklistTitle').textContent = data.title;
  checklistState = {};

  const sectionsEl = document.getElementById('checklistSections');
  sectionsEl.innerHTML = data.sections.map((section, si) => `
    <div class="checklist-section">
      <div class="checklist-section-header">
        <span class="checklist-section-icon">${section.icon}</span>
        ${section.label}
      </div>
      <div class="checklist-items">
        ${section.items.map((item, ii) => {
          const key = `${si}-${ii}`;
          return `
            <label class="checklist-item" id="item-${key}">
              <input type="checkbox" data-key="${key}" />
              <span class="checklist-item-text">${item}</span>
            </label>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  output.style.display = 'block';

  // Attach checkbox listeners
  sectionsEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const key = cb.dataset.key;
      checklistState[key] = cb.checked;
      const label = document.getElementById(`item-${key}`);
      label.classList.toggle('checked', cb.checked);
      updateChecklistProgress(data);
    });
  });

  updateChecklistProgress(data);
}

function updateChecklistProgress(data) {
  const total   = data.sections.reduce((s, sec) => s + sec.items.length, 0);
  const checked = Object.values(checklistState).filter(Boolean).length;

  document.getElementById('checklistProgressText').textContent = `${checked} of ${total} items checked`;
  document.getElementById('checklistProgressFill').style.width = `${total ? (checked / total) * 100 : 0}%`;
}

function downloadChecklist() {
  const dest = document.getElementById('checklistDest').value;
  if (!dest) return;

  const data  = CHECKLISTS[dest];
  let content = `${data.title}\n${'='.repeat(data.title.length)}\n\n`;

  data.sections.forEach(section => {
    content += `${section.icon} ${section.label}\n${'-'.repeat(30)}\n`;
    section.items.forEach(item => {
      content += `[ ] ${item}\n`;
    });
    content += '\n';
  });

  const blob = new Blob([content], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${dest}-checklist.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ================================================================
   11. GALLERY
   ================================================================ */
function initGallery() {
  renderGallery('all');

  // Filter buttons
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      galleryFilter = btn.dataset.filter;
      renderGallery(galleryFilter);
    });
  });

  // Slideshow toggle
  const slideshowBtn = document.getElementById('slideshowToggle');
  slideshowBtn.addEventListener('click', () => {
    if (gallerySlideshow) {
      clearInterval(gallerySlideshow);
      gallerySlideshow = null;
      slideshowBtn.textContent = '▶ Start Slideshow';
    } else {
      const items = getFilteredGallery(galleryFilter);
      if (!items.length) return;
      lightboxItems = items;
      lightboxIndex = 0;
      openLightbox(0);
      gallerySlideshow = setInterval(() => {
        lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
        updateLightbox();
      }, 3000);
      slideshowBtn.textContent = '■ Stop Slideshow';
    }
  });

  // Lightbox controls
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxOverlay').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
    updateLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb.style.display === 'none') return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxItems.length; updateLightbox(); }
  });
}

function getFilteredGallery(filter) {
  return filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);
}

function renderGallery(filter) {
  const items = getFilteredGallery(filter);
  const grid  = document.getElementById('galleryGrid');

  grid.innerHTML = items.map((item, idx) => `
    <div class="gallery-item ${item.featured ? 'featured' : ''} reveal" data-idx="${idx}">
      <img src="${item.image}" alt="${item.caption}" loading="lazy" />
      <div class="gallery-item-overlay">
        <span class="gallery-item-caption">${item.caption}</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach((el, idx) => {
    el.addEventListener('click', () => {
      lightboxItems = items;
      lightboxIndex = idx;
      openLightbox(idx);
    });
    setTimeout(() => el.classList.add('visible'), idx * 50);
  });
}

function openLightbox(idx) {
  lightboxIndex = idx;
  document.getElementById('lightbox').style.display = 'block';
  document.body.style.overflow = 'hidden';
  updateLightbox();
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
  if (gallerySlideshow) {
    clearInterval(gallerySlideshow);
    gallerySlideshow = null;
    document.getElementById('slideshowToggle').textContent = '▶ Start Slideshow';
  }
}

function updateLightbox() {
  const item = lightboxItems[lightboxIndex];
  document.getElementById('lightboxImg').src = item.image;
  document.getElementById('lightboxImg').alt = item.caption;
  document.getElementById('lightboxCaption').textContent = `${item.caption} (${lightboxIndex + 1} / ${lightboxItems.length})`;
}

/* ================================================================
   13. TRAVEL BUDGET PLANNER (with canvas donut chart)
   ================================================================ */
function initBudget() {
  const durationSlider = document.getElementById('budgetDuration');
  if (!durationSlider) return;
  durationSlider.addEventListener('input', () => {
    budgetState.duration = parseInt(durationSlider.value);
    document.getElementById('budgetDurationVal').textContent = budgetState.duration;
    updateBudget();
  });

  const optionGroups = [
    { id: 'budgetAccomm', key: 'accomm' },
    { id: 'budgetFood', key: 'food' },
    { id: 'budgetActivities', key: 'activities' },
    { id: 'budgetTransport', key: 'transport' }
  ];

  optionGroups.forEach(({ id, key }) => {
    const group = document.getElementById(id);
    group.querySelectorAll('.budget-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.budget-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        budgetState[key] = parseInt(btn.dataset.cost);
        updateBudget();
      });
    });
  });

  updateBudget();
}

function updateBudget() {
  const d = budgetState.duration;
  const accomm     = budgetState.accomm * d;
  const food       = budgetState.food * d;
  const activities = budgetState.activities * d;
  const transport  = budgetState.transport * d;
  const total      = accomm + food + activities + transport;

  document.getElementById('budgetGrandTotal').textContent    = `$${total.toLocaleString()}`;
  document.getElementById('budgetTotalCenter').textContent   = `$${total.toLocaleString()}`;

  const categories = [
    { label: 'Accommodation', value: accomm,     color: '#C1440E' },
    { label: 'Food & Dining', value: food,        color: '#D4820A' },
    { label: 'Activities',    value: activities,  color: '#2D5016' },
    { label: 'Transport',     value: transport,   color: '#4A7C3F' }
  ];

  document.getElementById('budgetBreakdownList').innerHTML = categories.map(c => `
    <div class="budget-breakdown-row">
      <div class="budget-breakdown-dot" style="background:${c.color}"></div>
      <span class="budget-breakdown-label">${c.label}</span>
      <span class="budget-breakdown-val">$${c.value.toLocaleString()}</span>
    </div>
  `).join('');

  drawBudgetDonut(categories, total);
}

function drawBudgetDonut(categories, total) {
  const canvas = document.getElementById('budgetChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  const R = Math.min(w, h) / 2 - 8;
  const lineW = R * 0.38; // donut thickness

  ctx.clearRect(0, 0, w, h);

  if (!total) {
    // Empty ring placeholder
    ctx.beginPath();
    ctx.arc(cx, cy, R - lineW / 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = lineW;
    ctx.stroke();
    return;
  }

  let startAngle = -Math.PI / 2;
  const gapAngle = 0.03; // small gap between slices

  categories.forEach(cat => {
    if (!cat.value) return;
    const slice = (cat.value / total) * Math.PI * 2 - gapAngle;
    ctx.beginPath();
    ctx.arc(cx, cy, R - lineW / 2, startAngle, startAngle + slice);
    ctx.strokeStyle = cat.color;
    ctx.lineWidth = lineW;
    ctx.lineCap = 'butt';
    ctx.stroke();
    startAngle += slice + gapAngle;
  });
}

/* ================================================================
   14. CONTACT FORM
   ================================================================ */
function initContact() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('contactName').value.trim();
    const email   = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message || !emailValid) {
      // Highlight empty or invalid required fields
      [
        { id: 'contactName',    val: name },
        { id: 'contactEmail',   val: emailValid ? email : '' },
        { id: 'contactMessage', val: message }
      ].forEach(({ id, val }) => {
        const el = document.getElementById(id);
        el.style.borderColor = val ? '' : 'var(--clr-terracotta)';
      });
      if (email && !emailValid) {
        const emailEl = document.getElementById('contactEmail');
        emailEl.style.borderColor = 'var(--clr-terracotta)';
        emailEl.placeholder = 'Please enter a valid email address';
      }
      return;
    }

    // Simulate submission
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';

    setTimeout(() => {
      form.reset();
      form.style.opacity = '';
      form.style.pointerEvents = '';
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }, 1000);
  });

  // Clear red border on input
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
}

/* ================================================================
   15. SCROLL REVEAL (Intersection Observer)
   ================================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Re-observe when new cards are added (tours/gallery render)
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  });

  ['toursGrid', 'galleryGrid', 'seasonalGrid', 'recResultsGrid'].forEach(id => {
    const el = document.getElementById(id);
    if (el) mutationObserver.observe(el, { childList: true });
  });
}

/* ================================================================
   INIT — wait for DOM
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangToggle();
  initHero();
  initTours();
  initCalculator();
  initMap();
  initBudget();
  initRecommender();   // ← ADD THIS
  initSeasonal();      // ← ADD THIS
  initChecklist();     // ← ADD THIS
  initGallery();       // ← ADD THIS
  initContact();
  initScrollReveal();
});

/* ================================================================
   TOUR PAGE — renders cards, filters, and nav for tour.html
   ================================================================ */
if (document.getElementById('toursGrid') && !document.getElementById('tourSearch').dataset.bound) {
  (function () {
    'use strict';

    const IMG = {
      simien:        'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png',
      bale:          'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png',
      danakil:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png',
      lalibela:      'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png',
      omo:           'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png',
      harar:         'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png',
      placeholder:   'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
      bluenile:      'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174477/bc77fd18-8c0e-40a1-b1e7-0a316b2024b7.png',
      ertaale:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174507/5d042f46-56a0-47a8-8b1d-caf46a0e1a1b.png',
      laketana:      'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174548/9eaf1fbc-7809-46ea-bd3d-670460ef4631.png',
      sofomar:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174649/844c14b4-2c6e-4737-8942-1cc248b1c8ba.png',
      wenchi:        'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174664/30a6c3d6-1e8c-4c14-b4ca-676367f9422b.png',
      abjatta:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174717/88129904-a7f2-479f-8f9a-9452878e191e.png',
      nechsar:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175074/530a6c26-af7d-4043-ab1f-399bfbaf9002.png',
      awash:         'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175008/b67d7884-18d9-4059-bdf2-cda0b96a2eb3.png',
      omonational:   'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175168/b7e9d0a4-6520-4384-be75-f784921bb358.png',
      mago:          'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175290/f4798a73-60cb-4157-9b96-1dd786d14096.png',
      chebera:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175419/0d0a8f2b-8421-4152-852b-4391cd39c998.png',
      gambella:      'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175464/d5893b14-cc8b-4774-96d1-b72f4deb7983.png',
      yangudi:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175506/79080e2a-3014-4ea3-8b25-8c7c61ece78b.png',
      kafta:         'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175712/ce961f73-64a3-47b6-8a57-3f398c7402d4.png',
      alitash:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175737/dbf038ef-8a94-4c3e-8256-9e04bc90b32c.png',
      gheralta:      'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176009/6c6d8f3a-66d6-4af3-9b1d-1b2c53a649ad.png',
      tisissat:      'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176048/f213d2da-d0e5-4b06-8769-ac7e818eb17a.png',
      bluenilegorge: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176165/95098717-e8d1-413d-a4dc-691d9c0b7175.png',
      riftvalley:    'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176203/dc401f6a-5d9c-450b-8947-ad0b026c02da.png',
      langano:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176259/fca38789-5a09-4cba-a64c-8f7724c39aad.png',
      ziway:         'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176298/a0bf4153-8027-4016-9452-4f5c9d5a7ddf.png',
      abaya:         'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176423/27437e10-3e38-42d9-ace0-0d59b2adc280.png',
      chamo:         'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176436/7c13d8cc-672d-46dd-a221-816609f86284.png',
      hawassa:       'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176488/176a822e-a27c-4bfa-86d0-9a76fbf19ac8.png'
    };

    const TOURS = [
      { id: 1,  title: 'Simien Mountains',                  duration: 10, activity: 'trekking', badge: 'Adventure Pick',    image: IMG.simien,        highlights: ['Gelada Baboons', 'Ras Dashen Peak', 'Dramatic Escarpments'],          description: 'Trek through Africa\'s Grand Canyon — dramatic cliffs, endemic wildlife, and breathtaking highland scenery.' },
      { id: 2,  title: 'Bale Mountains',                    duration: 8,  activity: 'wildlife',  badge: 'Wildlife Gem',     image: IMG.bale,          highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest'],                  description: 'Spot Ethiopian wolves and mountain nyala in Africa\'s largest Afroalpine habitat.' },
      { id: 3,  title: 'Blue Nile Falls',                   duration: 3,  activity: 'nature',    badge: 'Scenic Wonder',    image: IMG.bluenile,      highlights: ['Tis Abay Falls', 'Gorge Views', 'Lake Tana Boats'],                   description: 'Visit the thundering Blue Nile Falls — the smoking water — and sail to ancient island monasteries.' },
      { id: 4,  title: 'Danakil Depression',                duration: 5,  activity: 'trekking',  badge: 'Bucket List',      image: IMG.danakil,       highlights: ['Erta Ale Volcano', 'Salt Flats', 'Dallol Crater'],                    description: 'Explore Earth\'s hottest place — volcanic lava lakes, sulfuric springs, and vast salt deserts.' },
      { id: 5,  title: 'Erta Ale Volcano',                  duration: 3,  activity: 'trekking',  badge: 'Extreme Adventure', image: IMG.ertaale,      highlights: ['Active Lava Lake', 'Night Hike', 'Afar Desert'],                      description: 'Night hike to one of the world\'s only persistent lava lakes glowing in the Afar darkness.' },
      { id: 6,  title: 'Lake Tana',                         duration: 4,  activity: 'cultural',  badge: 'Hidden Gem',       image: IMG.laketana,      highlights: ['Island Monasteries', 'Blue Nile Source', 'Hippos'],                   description: 'Ethiopia\'s largest lake — source of the Blue Nile, dotted with ancient island monasteries.' },
      { id: 7,  title: 'Sof Omar Caves',                    duration: 3,  activity: 'nature',    badge: 'Underground Wonder', image: IMG.sofomar,     highlights: ['Limestone Caves', 'Web River', 'Bat Colonies'],                       description: 'Explore Africa\'s largest cave system carved by the Web River through ancient limestone.' },
      { id: 8,  title: 'Wenchi Crater Lake',                duration: 3,  activity: 'nature',    badge: 'Scenic Escape',    image: IMG.wenchi,        highlights: ['Crater Lake', 'Hot Springs', 'Monastery Island'],                     description: 'A stunning volcanic crater lake with a monastery island, hot springs, and lush forest rim.' },
      { id: 9,  title: 'Abijatta-Shalla Lakes',             duration: 4,  activity: 'wildlife',  badge: 'Bird Paradise',    image: IMG.abjatta,       highlights: ['Flamingos', 'Hot Springs', 'Rift Valley Views'],                      description: 'Twin lakes in the Rift Valley — Abijatta for flamingos, Shalla for hot springs and deep waters.' },
      { id: 10, title: 'Nech Sar National Park',            duration: 5,  activity: 'wildlife',  badge: 'Wildlife Safari',  image: IMG.nechsar,       highlights: ['Zebras', 'Crocodiles', 'White Grass Plains'],                         description: 'White grass plains between lakes Abaya and Chamo, home to zebras, crocs, and hippos.' },
      { id: 11, title: 'Awash National Park',               duration: 4,  activity: 'wildlife',  badge: 'Classic Safari',   image: IMG.awash,         highlights: ['Oryx', 'Awash Falls', 'Afar Lowlands'],                               description: 'Ethiopia\'s most accessible park — oryx, baboons, and spectacular Awash Falls.' },
      { id: 12, title: 'Omo National Park',                 duration: 7,  activity: 'wildlife',  badge: 'Wild South',       image: IMG.omonational,   highlights: ['Elephant Herds', 'Buffalo', 'Remote Wilderness'],                     description: 'One of Africa\'s largest and most remote parks — vast wilderness teeming with large mammals.' },
      { id: 13, title: 'Mago National Park',                duration: 5,  activity: 'wildlife',  badge: 'Tribal Country',   image: IMG.mago,          highlights: ['Mursi Tribe', 'Buffalo', 'Omo River'],                                description: 'Adjacent to the Omo Valley — combine tribal cultural visits with genuine African safari.' },
      { id: 14, title: 'Chebera Churchura National Park',   duration: 5,  activity: 'wildlife',  badge: 'Elephant Haven',   image: IMG.chebera,       highlights: ['Elephant Herds', 'Hippos', 'Rainforest'],                             description: 'A hidden gem sheltering one of Ethiopia\'s largest elephant populations in lush rainforest.' },
      { id: 15, title: 'Gambella National Park',            duration: 7,  activity: 'wildlife',  badge: 'Great Migration',  image: IMG.gambella,      highlights: ['White-eared Kob Migration', 'Nile Lechwe', 'Papyrus Swamps'],         description: 'Witness one of Africa\'s greatest animal migrations — white-eared kob in the thousands.' },
      { id: 16, title: 'Yangudi Rassa National Park',       duration: 4,  activity: 'wildlife',  badge: 'Rare Encounter',   image: IMG.yangudi,       highlights: ['African Wild Ass', 'Grevy\'s Zebra', 'Afar Plains'],                  description: 'One of the last refuges of the critically endangered African wild ass in the Afar lowlands.' },
      { id: 17, title: 'Kafta Sheraro National Park',       duration: 5,  activity: 'wildlife',  badge: 'Northern Wild',    image: IMG.kafta,         highlights: ['Elephant Herds', 'Tekezé River', 'Dry Woodland'],                    description: 'Ethiopia\'s northernmost park along the Tekezé River, sheltering large elephant populations.' },
      { id: 18, title: 'Alatish National Park',             duration: 4,  activity: 'wildlife',  badge: 'New Frontier',     image: IMG.alitash,       highlights: ['Lions', 'Elephants', 'Border Wilderness'],                            description: 'A newly established park on the Sudanese border — raw, untouched, and genuinely wild.' },
      { id: 19, title: 'Gheralta Mountains',                duration: 5,  activity: 'cultural',  badge: 'Cliff Churches',   image: IMG.gheralta,      highlights: ['Rock-Hewn Churches', 'Tigray Cliffs', 'Ancient Art'],                 description: 'Dramatic sandstone towers hiding ancient Tigrayan rock-hewn churches with remarkable frescoes.' },
      { id: 20, title: 'Tis Issat Gorge',                   duration: 3,  activity: 'nature',    badge: 'Gorge Trek',       image: IMG.tisissat,      highlights: ['Blue Nile Gorge', 'Waterfall Trek', 'Village Life'],                  description: 'Trek through the dramatic gorge below the Blue Nile Falls — a world of its own.' },
      { id: 21, title: 'Blue Nile Gorge',                   duration: 4,  activity: 'trekking',  badge: 'Epic Trek',        image: IMG.bluenilegorge, highlights: ['Ethiopia\'s Grand Canyon', 'Suspension Bridge', 'Rare Birds'],        description: 'One of the deepest gorges in Africa — a dramatic drive and trek through Ethiopia\'s heartland.' },
      { id: 22, title: 'Rift Valley Lakes',                 duration: 7,  activity: 'nature',    badge: 'Lakes Circuit',    image: IMG.riftvalley,    highlights: ['8 Rift Lakes', 'Flamingos', 'Hot Springs'],                           description: 'A road trip through the Ethiopian Rift Valley visiting eight spectacular alkaline lakes.' },
      { id: 23, title: 'Lake Langano',                      duration: 3,  activity: 'nature',    badge: 'Beach Escape',     image: IMG.langano,       highlights: ['Bilharzia-Free Swimming', 'Pelicans', 'Shoreline Lodges'],            description: 'The only bilharzia-free lake in Ethiopia — perfect for swimming, sailing, and relaxing.' },
      { id: 24, title: 'Lake Ziway',                        duration: 3,  activity: 'wildlife',  badge: 'Bird Haven',       image: IMG.ziway,         highlights: ['400+ Bird Species', 'Hippos', 'Island Churches'],                    description: 'A birdwatcher\'s paradise with 400+ species and ancient island churches on the Rift Valley floor.' },
      { id: 25, title: 'Lake Abaya',                        duration: 4,  activity: 'nature',    badge: 'Red Waters',       image: IMG.abaya,         highlights: ['Red-Brown Waters', 'Crocodiles', 'Nech Sar Views'],                   description: 'Ethiopia\'s second largest lake — famously red-brown waters, giant crocodiles, and hippos.' },
      { id: 26, title: 'Lake Chamo',                        duration: 4,  activity: 'wildlife',  badge: 'Crocodile Beach',  image: IMG.chamo,         highlights: ['Crocodile Market', 'Hippos', 'Nechisar Plains'],                      description: 'The famous Crocodile Market — the largest gathering of Nile crocodiles anywhere in Ethiopia.' },
      { id: 27, title: 'Lake Hawassa',                      duration: 3,  activity: 'wildlife',  badge: 'City & Nature',    image: IMG.hawassa,       highlights: ['Fish Market', 'Marabou Storks', 'Hippos'],                            description: 'Hawassa\'s stunning lakeside — marabou storks, hippos, and the legendary fish market.' },
      { id: 28, title: 'Lake Shala',                        duration: 3,  activity: 'nature',    badge: 'Deep & Hot',       image: IMG.placeholder,   highlights: ['Ethiopia\'s Deepest Lake', 'Hot Springs', 'Flamingos'],               description: 'Ethiopia\'s deepest lake with steaming hot springs on its shores and flocks of flamingos.' },
      { id: 29, title: 'Lake Abijatta',                     duration: 3,  activity: 'wildlife',  badge: 'Flamingo Lake',    image: IMG.placeholder,   highlights: ['Lesser Flamingos', 'Soda Lake', 'Rift Valley Scenery'],               description: 'A shallow soda lake turning pink with thousands of lesser flamingos at certain times of year.' },
      { id: 30, title: 'Mount Chilalo',                     duration: 4,  activity: 'trekking',  badge: 'Highland Trek',    image: IMG.simien,        highlights: ['4,036m Summit', 'Arsi Highlands', 'Endemic Flora'],                   description: 'Trek to the summit of Mount Chilalo in the Arsi highlands — spectacular views and endemic plants.' },
      { id: 31, title: 'Mount Batu',                        duration: 4,  activity: 'trekking',  badge: 'Summit Challenge', image: IMG.bale,          highlights: ['4,307m Summit', 'Bale Highlands', 'Ethiopian Wolf'],                  description: 'A challenging summit in the Bale highlands with chances of spotting the Ethiopian wolf.' },
      { id: 32, title: 'Mount Tullu Dimtu',                 duration: 5,  activity: 'trekking',  badge: 'Second Highest',   image: IMG.bale,          highlights: ['4,377m Peak', 'Sanetti Plateau', 'Roof of Ethiopia'],                 description: 'Ethiopia\'s second highest peak on the Sanetti Plateau — a high-altitude wilderness experience.' },
      { id: 33, title: 'Guassa Plateau',                    duration: 5,  activity: 'wildlife',  badge: 'Wolf Country',     image: IMG.simien,        highlights: ['Ethiopian Wolf', 'Gelada Baboons', 'Community Conservation'],         description: 'One of the best places in the world to see the Ethiopian wolf in a community-managed reserve.' },
      { id: 34, title: 'Borena Plains',                     duration: 6,  activity: 'cultural',  badge: 'Pastoral Culture', image: IMG.omo,           highlights: ['Borena Pastoralists', 'Cattle Ceremonies', 'Mega Wells'],             description: 'Journey to the Borena lowlands — traditional pastoralist culture, cattle ceremonies, and ancient wells.' },
      { id: 35, title: 'Babille Elephant Sanctuary',        duration: 4,  activity: 'wildlife',  badge: 'Elephant Walk',    image: IMG.placeholder,   highlights: ['Rare Desert Elephants', 'Volcanic Landscape', 'Somali Border'],       description: 'Track rare desert-adapted elephants in a striking volcanic landscape near the Somali border.' },
      { id: 36, title: 'Bilen Hot Springs',                 duration: 3,  activity: 'nature',    badge: 'Natural Spa',      image: IMG.placeholder,   highlights: ['Thermal Springs', 'Scenic Gorge', 'Relaxation'],                      description: 'Soak in natural thermal hot springs set within a beautiful gorge in southern Ethiopia.' },
      { id: 37, title: 'Fentale Crater',                    duration: 3,  activity: 'trekking',  badge: 'Volcanic Hike',    image: IMG.danakil,       highlights: ['Volcanic Crater', 'Afar Views', 'Lava Fields'],                       description: 'Hike to the rim of the Fentale volcano crater for panoramic views across the Afar lowlands.' },
      { id: 38, title: 'Koka Reservoir',                    duration: 3,  activity: 'wildlife',  badge: 'Bird Watching',    image: IMG.placeholder,   highlights: ['Pelicans', 'African Fish Eagle', 'Rift Valley'],                      description: 'A birder\'s stop on the Rift Valley road — pelicans, fish eagles, and water birds abound.' },
      { id: 39, title: 'Lake Hayq',                         duration: 3,  activity: 'cultural',  badge: 'Sacred Waters',    image: IMG.placeholder,   highlights: ['Hayq Estifanos Monastery', 'Highland Lake', 'Medieval History'],      description: 'Visit the ancient Hayq Estifanos monastery on a serene highland lake with deep medieval history.' },
      { id: 40, title: 'Lake Ardibo',                       duration: 3,  activity: 'nature',    badge: 'Hidden Lake',      image: IMG.placeholder,   highlights: ['Remote Highland Lake', 'Scenic Landscape', 'Wollo Region'],           description: 'A hidden highland lake in the Wollo region — remote, peaceful, and rarely visited.' },
      { id: 41, title: 'Mount Zuqualla',                    duration: 2,  activity: 'cultural',  badge: 'Crater Monastery', image: IMG.lalibela,      highlights: ['Crater Lake', 'Ancient Monastery', 'Addis Day Trip'],                 description: 'An easy day trip from Addis — a sacred crater lake and ancient monastery above the Rift escarpment.' },
      { id: 42, title: 'Debre Libanos Gorge',               duration: 3,  activity: 'nature',    badge: 'Gorge & Monks',    image: IMG.placeholder,   highlights: ['Jemma River Gorge', 'Gelada Baboons', 'Debre Libanos Monastery'],    description: 'One of Ethiopia\'s most dramatic gorges — gelada baboons, lammergeyers, and a revered monastery.' },
      { id: 43, title: 'Jemma River Gorge',                 duration: 4,  activity: 'trekking',  badge: 'Wild Gorge',       image: IMG.simien,        highlights: ['Remote Trekking', 'Gelada Baboons', 'Untouched Wilderness'],          description: 'A remote and largely unexplored gorge system — one of Ethiopia\'s great trekking frontiers.' },
      { id: 44, title: 'Kundi Mountain',                    duration: 4,  activity: 'trekking',  badge: 'Off the Beaten',   image: IMG.bale,          highlights: ['Remote Highlands', 'Endemic Birds', 'Village Stays'],                 description: 'Off-the-beaten-path highland trekking with village homestays and remarkable endemic birdlife.' },
      { id: 45, title: 'Gibe Gorge',                        duration: 4,  activity: 'nature',    badge: 'River Canyon',     image: IMG.placeholder,   highlights: ['Gibe River', 'Hot Springs', 'Tropical Forest'],                       description: 'A spectacular river gorge with tropical forest, hot springs, and superb birding opportunities.' },
      { id: 46, title: 'Choke Mountains',                   duration: 5,  activity: 'trekking',  badge: 'Blue Nile Source', image: IMG.simien,        highlights: ['Blue Nile Headwaters', 'Alpine Moorland', 'Endemic Wildlife'],        description: 'Trek to the headwaters of the Blue Nile high in the Choke Mountains above Lake Tana.' },
      { id: 47, title: 'Menagesha Suba Forest',             duration: 2,  activity: 'nature',    badge: 'Ancient Forest',   image: IMG.bale,          highlights: ['Ancient Podocarpus Forest', 'Colobus Monkeys', 'Addis Day Trip'],     description: 'Ethiopia\'s oldest protected forest — giant podocarpus trees, colobus monkeys, and cool highland air.' },
      { id: 48, title: 'Harenna Forest',                    duration: 5,  activity: 'wildlife',  badge: 'Cloud Forest',     image: IMG.bale,          highlights: ['Wild Coffee', 'Lions', 'Cloud Forest Canopy'],                        description: 'Descend into the mysterious Harenna cloud forest — wild coffee, African lions, and colobus monkeys.' },
      { id: 49, title: 'Kafa Biosphere Reserve',            duration: 6,  activity: 'nature',    badge: 'Coffee Origin',    image: IMG.placeholder,   highlights: ['Birthplace of Coffee', 'Rainforest', 'Kafa Culture'],                 description: 'Visit the birthplace of coffee — the wild forests of Kafa where Coffea arabica was first discovered.' },
      { id: 50, title: 'Yayu Coffee Forest Biosphere',      duration: 6,  activity: 'nature',    badge: 'UNESCO Biosphere', image: IMG.placeholder,   highlights: ['Wild Arabica Coffee', 'Biosphere Reserve', 'Indigenous Forest'],     description: 'Explore the Yayu UNESCO Biosphere Reserve — one of the last great wild coffee forests on Earth.' }
    ];

    let filtered = [...TOURS];

    function renderCards(list) {
      const grid  = document.getElementById('toursGrid');
      const empty = document.getElementById('toursEmpty');
      const count = document.getElementById('toursCount');
      if (!list.length) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        count.innerHTML = '<strong>0</strong> tours found';
        return;
      }
      empty.style.display = 'none';
      count.innerHTML = `<strong>${list.length}</strong> tour${list.length !== 1 ? 's' : ''} available`;
      grid.innerHTML = list.map(t => `
        <div class="tour-card reveal">
          <div class="tour-card-img-wrap">
            <img class="tour-card-img" src="${t.image}" alt="${t.title}" loading="${[IMG.ertaale, IMG.wenchi, IMG.gheralta, IMG.hawassa, IMG.bluenilegorge].includes(t.image) ? 'eager' : 'lazy'}" />
            <span class="tour-card-badge">${t.badge}</span>
          </div>
          <div class="tour-card-body">
            <span class="tour-card-type">${t.activity.charAt(0).toUpperCase() + t.activity.slice(1)}</span>
            <h3 class="tour-card-title">${t.title}</h3>
            <div class="tour-card-meta">
              <span>📅 ${t.duration} Days</span>
            </div>
            <p style="font-size:var(--fs-sm);color:var(--clr-muted);line-height:1.55;">${t.description}</p>
            <div class="tour-card-highlights">
              ${t.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
      requestAnimationFrame(() => {
        grid.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 40);
        });
      });
    }

    function applyFilters() {
      const search   = document.getElementById('tourSearch').value.toLowerCase();
      const activity = document.getElementById('filterActivity').value;
      const duration = document.getElementById('filterDuration').value;
      const sort     = document.getElementById('tourSort').value;
      const destination = document.getElementById('filterDestination').value;
      filtered = TOURS.filter(t => {
        const matchSearch      = !search || t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search);
        const matchActivity    = activity === 'all' || t.activity === activity;
        const matchDestination = destination === 'all' || t.title === destination;
        let   matchDuration    = true;
        if (duration !== 'all') {
          if (duration === '15+') matchDuration = t.duration >= 15;
          else { const [lo, hi] = duration.split('-').map(Number); matchDuration = t.duration >= lo && t.duration <= hi; }
        }
        return matchSearch && matchActivity && matchDuration && matchDestination;
      });
      if (sort === 'name-asc')         filtered.sort((a, b) => a.title.localeCompare(b.title));
      else if (sort === 'name-desc')   filtered.sort((a, b) => b.title.localeCompare(a.title));
      else if (sort === 'duration-asc')  filtered.sort((a, b) => a.duration - b.duration);
      else if (sort === 'duration-desc') filtered.sort((a, b) => b.duration - a.duration);
      renderCards(filtered);
    }

    const searchInput   = document.getElementById('tourSearch');
    
    const suggestBox    = document.getElementById('searchSuggestions');

    function showSuggestions(query) {
      if (!query) { suggestBox.classList.remove('open'); suggestBox.innerHTML = ''; return; }
      const matches = TOURS.filter(t =>
        t.title.toLowerCase().includes(query) || t.description.toLowerCase().includes(query)
      ).slice(0, 8);
      if (!matches.length) { suggestBox.classList.remove('open'); suggestBox.innerHTML = ''; return; }
      const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      suggestBox.innerHTML = matches.map(t => `
        <div class="suggestion-item" data-title="${t.title}">
          🗺️ ${t.title.replace(re, '<mark>$1</mark>')}
          <span class="suggestion-badge">${t.duration} days · ${t.activity}</span>
        </div>
      `).join('');
      suggestBox.classList.add('open');
      suggestBox.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('mousedown', () => {
          searchInput.value = item.dataset.title;
          suggestBox.classList.remove('open');
          suggestBox.innerHTML = '';
          applyFilters();
        });
      });
    }

    searchInput.addEventListener('input', () => {
      applyFilters();
      showSuggestions(searchInput.value.toLowerCase().trim());
    });
    searchInput.addEventListener('blur', () => {
      setTimeout(() => { suggestBox.classList.remove('open'); suggestBox.innerHTML = ''; }, 150);
    });
    document.getElementById('tourSort').addEventListener('change', applyFilters);
    document.getElementById('filterActivity').addEventListener('change', applyFilters);
    document.getElementById('filterDuration').addEventListener('change', applyFilters);
    document.getElementById('filterReset').addEventListener('click', () => {
      document.getElementById('tourSearch').value = '';
      document.getElementById('tourSort').value = 'default';
      document.getElementById('filterActivity').value = 'all';
      document.getElementById('filterDuration').value = 'all';
      applyFilters();
    });

    document.getElementById('bookNow').addEventListener('click', () => {
      window.location.href = 'index.html#contact';
    });

    renderCards(TOURS);

  })();
}

/* ── TOUR PAGE HERO SLIDESHOW ── */
if (document.getElementById('tourHero')) {
  const slides = document.querySelectorAll('.tour-hero-slide');
  const dots   = document.querySelectorAll('.tour-hero-dot');
  const title  = document.getElementById('tourHeroTitle');
  const sub    = document.getElementById('tourHeroSub');

  const TEXTS = [
    { title: 'Where the Earth Still Burns',     sub: 'Witness nature\'s raw power in Ethiopia\'s volcanic heart' },
    { title: 'Hidden Worlds Await You',          sub: 'Crater lakes, forest trails, and island monasteries' },
    { title: 'Ancient Stones, Living Faith',     sub: 'Rock-hewn churches carved into Ethiopia\'s dramatic cliffs' },
    { title: 'Life at the Water\'s Edge',        sub: 'Where wildlife, culture, and lakeside beauty meet' },
    { title: 'One of Africa\'s Greatest Gorges', sub: 'A journey through Ethiopia\'s grand canyon' },
  ];

  let current = 0;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    title.style.opacity = '0';
    sub.style.opacity   = '0';
    setTimeout(() => {
      title.textContent   = TEXTS[current].title;
      sub.textContent     = TEXTS[current].sub;
      title.style.opacity = '1';
      sub.style.opacity   = '1';
    }, 300);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => goToSlide(+dot.dataset.slide));
  });

  setInterval(() => goToSlide((current + 1) % slides.length), 5000);
}
