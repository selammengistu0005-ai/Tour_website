/* ============================================================
   ETHIOPIA EXPLORE TOURS — main.js
   Covers all sections + nav, hero, footer utilities
   ============================================================ */

/* strict mode removed — inline onclick handlers require global scope */

/* ================================================================
   TOUR DATA
   ================================================================ */
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

/* ================================================================
   DESTINATION DATA
   ================================================================ */
const DESTINATIONS = {
  lalibela: {
    name: 'Lalibela',
    region: 'Amhara Region',
    desc: 'Known as the "New Jerusalem," Lalibela is home to 11 monolithic rock-hewn churches carved in the 12th century, still used as active places of worship today.',
    highlights: ['Rock-Hewn Churches', 'UNESCO World Heritage', 'Timkat Festival', 'Pilgrimage City'],
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png',
    bestTime: 'Oct–Mar', altitude: '2,630m', flightFrom: '~1 hr from Addis'
  },
  axum: {
    name: 'Axum (Aksum)',
    region: 'Tigray Region',
    desc: 'The ancient capital of the Aksumite Empire, Axum is home to towering obelisks, ancient tombs, and is believed to house the original Ark of the Covenant.',
    highlights: ['Ancient Obelisks', 'Church of St. Mary of Zion', 'Ark of the Covenant', 'Queen of Sheba Palace'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
    bestTime: 'Oct–Mar', altitude: '2,131m', flightFrom: '~2 hrs from Addis'
  },
  gondar: {
    name: 'Gondar',
    region: 'Amhara Region',
    desc: 'The "Camelot of Africa," Gondar features a remarkable 17th-century Royal Enclosure with six castles.',
    highlights: ['Royal Enclosure', 'Fasil Ghebbi Castles', 'Debre Berhan Selassie Church', 'Timkat Celebrations'],
    image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600',
    bestTime: 'Oct–Mar', altitude: '2,133m', flightFrom: '~1 hr from Addis'
  },
  danakil: {
    name: 'Danakil Depression',
    region: 'Afar Region',
    desc: 'One of Earth\'s most extreme landscapes — below sea level, scorching hot, and filled with active volcanoes, colorful sulfur springs, and vast salt flats.',
    highlights: ['Erta Ale Lava Lake', 'Dallol Crater Colors', 'Karum Salt Lake', 'Afar Nomads'],
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png',
    bestTime: 'Nov–Feb', altitude: '−125m (below sea level)', flightFrom: '~3 hrs drive from Mekelle'
  },
  simien: {
    name: 'Simien Mountains',
    region: 'Amhara Region',
    desc: 'A UNESCO World Heritage site with dramatic escarpments, deep gorges and some of Africa\'s highest peaks.',
    highlights: ['Gelada Baboons', 'Ras Dashen (4,550m)', 'Endemic Wildlife', 'Panoramic Escarpments'],
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png',
    bestTime: 'Sep–Apr', altitude: 'Up to 4,550m', flightFrom: '~1 hr to Gondar, then drive'
  },
  addis: {
    name: 'Addis Ababa',
    region: 'Addis Ababa City',
    desc: 'Ethiopia\'s vibrant capital city, home to the African Union, world-class museums, incredible food scenes, and the starting point for most Ethiopian adventures.',
    highlights: ['National Museum (Lucy fossil)', 'Merkato Market', 'Holy Trinity Cathedral', 'Entoto Hills'],
    image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600',
    bestTime: 'Year-round', altitude: '2,355m', flightFrom: 'International Hub'
  },
  omo: {
    name: 'Omo Valley',
    region: 'SNNPR',
    desc: 'A living anthropological museum home to over 20 indigenous tribes including the Mursi, Hamer, Karo and Dassanech.',
    highlights: ['Mursi Lip Plates', 'Hamer Bull Jumping', 'Tribal Markets', 'Ancient Rock Art'],
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png',
    bestTime: 'Sep–Feb', altitude: '400–700m', flightFrom: '~1.5 hrs to Jinka'
  },
  harar: {
    name: 'Harar',
    region: 'Harari Region',
    desc: 'Africa\'s 4th holiest Islamic city, entirely contained within ancient walls. Famous for the mystical nightly hyena feeding ritual.',
    highlights: ['Jugol Old City (UNESCO)', 'Nightly Hyena Feeding', 'Rimbaud\'s House', '82 Mosques'],
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png',
    bestTime: 'Oct–Mar', altitude: '1,885m', flightFrom: '~1 hr from Addis'
  },
  bale: {
    name: 'Bale Mountains',
    region: 'Oromia Region',
    desc: 'Bale Mountains National Park protects Africa\'s largest Afroalpine habitat, sheltering the world\'s largest population of Ethiopian wolves.',
    highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest', 'Web Valley Plateau'],
    image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png',
    bestTime: 'Nov–Apr', altitude: 'Up to 4,377m', flightFrom: '~6 hrs drive from Addis'
  },
  tana: {
    name: 'Lake Tana',
    region: 'Amhara Region',
    desc: 'Ethiopia\'s largest lake, the source of the Blue Nile, dotted with ancient island monasteries.',
    highlights: ['Island Monasteries', 'Blue Nile Source', 'Hippos', 'Zege Peninsula'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600',
    bestTime: 'Oct–Mar', altitude: '1,788m', flightFrom: '~1 hr to Bahir Dar'
  }
};

/* ================================================================
   SEASONAL DATA
   ================================================================ */
const SEASONAL_DATA = {
  months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthStatus: ['peak','peak','shoulder','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
  destinations: [
    {
      name: 'Lalibela',
      status:  ['peak','peak','peak','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps:   [[10,22],[11,23],[12,24],[13,22],[14,20],[12,18],[10,16],[10,16],[11,19],[12,22],[11,22],[10,22]],
      notes:   [
        'Perfect dry season — churches uncrowded, clear skies.',
        'Excellent visibility and comfortable trekking temperatures.',
        'Still good but getting warmer; crowds thinning.',
        'Some afternoon showers possible.',
        'Increasing rains — pre-book transport.',
        'Heavy rains; access roads can flood.',
        'Peak rains — consider alternative destinations.',
        'Heavy rains continue; Timkat preparations begin.',
        'Rains easing; Meskel festival in late September.',
        'Ideal month — green landscape post-rains.',
        'Peak season begins; Timkat approaches.',
        'High season; book well in advance.'
      ]
    },
    {
      name: 'Simien Mountains',
      status:  ['peak','peak','shoulder','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps:   [[5,18],[6,19],[7,20],[8,19],[9,18],[7,15],[5,13],[5,13],[6,16],[7,18],[6,18],[5,18]],
      notes:   [
        'Clear skies and excellent gelada sightings.',
        'Best trekking conditions of the year.',
        'Comfortable; occasional afternoon cloud.',
        'Some rain possible at higher elevations.',
        'Increasing moisture; trails muddier.',
        'Heavy rain; trekking not recommended.',
        'Cold and very wet; trails impassable in places.',
        'Wettest month — avoid high trails.',
        'Rains clearing; landscape bright green.',
        'Post-rain greenery — stunning scenery.',
        'Peak season with crystal clear air.',
        'Excellent visibility to Ras Dashen summit.'
      ]
    },
    {
      name: 'Danakil Depression',
      status:  ['peak','peak','peak','shoulder','off-peak','off-peak','off-peak','off-peak','shoulder','shoulder','peak','peak'],
      temps:   [[28,38],[30,40],[32,42],[35,45],[38,48],[36,46],[35,45],[36,46],[34,44],[31,41],[29,39],[28,38]],
      notes:   [
        'Optimal window — bearable heat, clear skies.',
        'Best month for Danakil — cool nights.',
        'Still good; temperature rising.',
        'Getting very hot — sunrise starts recommended.',
        'Extremely hot; only for hardened adventurers.',
        'Dangerously hot; tours suspended.',
        'Hottest period — tours not operating.',
        'Hottest period — tours not operating.',
        'Heat easing; some tours resuming.',
        'Conditions improving; accessible again.',
        'Good conditions; book early.',
        'Peak season begins — popular time.'
      ]
    },
    {
      name: 'Omo Valley',
      status:  ['peak','peak','shoulder','shoulder','off-peak','rainy','rainy','rainy','peak','peak','peak','peak'],
      temps:   [[20,32],[21,33],[22,34],[22,33],[22,32],[20,29],[19,28],[19,28],[20,30],[21,32],[21,32],[20,32]],
      notes:   [
        'Ideal — dry roads, active tribal markets.',
        'Excellent conditions and cultural events.',
        'Good but roads beginning to soften.',
        'Short rains start; some routes affected.',
        'Unreliable access; check road conditions.',
        'Heavy rain; many roads impassable.',
        'Difficult access; cultural events limited.',
        'Rains easing; Hamer events resume.',
        'Post-rain — lush landscapes and active ceremonies.',
        'Peak season — Hamer bull jumping common.',
        'Excellent — Mursi and Hamer most active.',
        'Perfect dry season for tribal visits.'
      ]
    },
    {
      name: 'Bale Mountains',
      status:  ['peak','peak','peak','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps:   [[5,20],[6,21],[7,22],[8,20],[9,19],[7,16],[5,14],[5,14],[6,17],[7,20],[6,20],[5,20]],
      notes:   [
        'Best chance of Ethiopian wolf sightings.',
        'Excellent wildlife viewing — clear Sanetti Plateau.',
        'Good conditions; wildflowers appearing.',
        'Harenna Forest lush; some afternoon rain.',
        'Long rains beginning; roads can be tricky.',
        'Heavy rains; Harenna Forest extremely muddy.',
        'Wettest period — wolves still visible on plateau.',
        'Rains persist but wildlife active.',
        'Rains easing; landscape spectacularly green.',
        'Post-rain — top wolf viewing season.',
        'Excellent — crisp air and active wolves.',
        'Peak season; book ranger guides early.'
      ]
    },
    {
      name: 'Addis Ababa',
      status:  ['peak','peak','shoulder','shoulder','shoulder','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps:   [[10,23],[11,24],[12,24],[13,23],[14,22],[13,20],[12,19],[12,19],[12,21],[12,23],[11,23],[10,23]],
      notes:   [
        'Timkat celebrations — vibrant and colourful.',
        'Pleasant weather; museums uncrowded.',
        'Good all-round city weather.',
        'Occasional afternoon showers.',
        'Mix of sun and rain; pleasant temperatures.',
        'Rainy season — short showers most days.',
        'Wettest month — afternoon downpours.',
        'Heavy rains; Addis still very accessible.',
        'Meskel festival — huge flower bonfire ceremony.',
        'Irreechaa festival; post-rain greenery.',
        'Excellent city weather; cool evenings.',
        'Christmas (Genna) and New Year celebrations.'
      ]
    },
    {
      name: 'Harar',
      status:  ['peak','peak','peak','shoulder','shoulder','off-peak','off-peak','rainy','shoulder','peak','peak','peak'],
      temps:   [[13,25],[14,26],[15,27],[16,26],[17,26],[16,24],[15,23],[15,23],[15,24],[15,25],[14,25],[13,25]],
      notes:   [
        'Ideal — dry, cool nights, hyenas very active.',
        'Best conditions for exploring the old city.',
        'Good weather; vibrant market days.',
        'Warm but very pleasant for walking.',
        'Short rains possible; city still accessible.',
        'Some rain; hyena feeding still nightly.',
        'Dry and hot; old city atmospheric.',
        'Some rain; market activity continues.',
        'Rains easing; excellent photography light.',
        'Perfect conditions resume.',
        'Peak season; busy with visitors.',
        'Wonderful dry season; cool evenings.'
      ]
    },
    {
      name: 'Awash NP',
      status:  ['peak','peak','peak','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps:   [[18,30],[19,31],[20,33],[22,34],[23,35],[21,32],[20,30],[20,30],[20,31],[20,32],[19,31],[18,30]],
      notes:   [
        'Dry and clear — oryx and gazelle abundant.',
        'Excellent wildlife viewing conditions.',
        'Still good; Awash Falls at scenic low.',
        'Warming up; some afternoon cloud.',
        'Very hot; early morning game drives best.',
        'Rain arrives; river floods dramatically.',
        'Awash River in full flood — spectacular.',
        'Wettest month; hot springs very active.',
        'Rains easing; animals congregate near river.',
        'Peak season begins; wonderful birdlife.',
        'Excellent conditions; Afar culture visible.',
        'Best month for Awash NP wildlife.'
      ]
    }
  ]
};

/* ================================================================
   GALLERY DATA
   ================================================================ */
const GALLERY_ITEMS = [
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png', caption: 'Rock-Hewn Churches of Lalibela', category: 'lalibela', featured: true },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png', caption: 'Simien Mountains Escarpments', category: 'simien', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png', caption: 'Danakil Depression Salt Flats', category: 'danakil', featured: true },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png', caption: 'Omo Valley Tribal Culture', category: 'omo', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', caption: 'Bale Mountains Ethiopian Wolf Country', category: 'simien', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png', caption: 'Harar Walled Old City', category: 'culture', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174477/bc77fd18-8c0e-40a1-b1e7-0a316b2024b7.png', caption: 'Blue Nile Falls — Tis Abay', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174507/5d042f46-56a0-47a8-8b1d-caf46a0e1a1b.png', caption: 'Erta Ale Lava Lake at Night', category: 'danakil', featured: true },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174548/9eaf1fbc-7809-46ea-bd3d-670460ef4631.png', caption: 'Lake Tana Island Monastery', category: 'culture', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174649/844c14b4-2c6e-4737-8942-1cc248b1c8ba.png', caption: 'Sof Omar Cave Chambers', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174664/30a6c3d6-1e8c-4c14-b4ca-676367f9422b.png', caption: 'Wenchi Crater Lake Reflection', category: 'simien', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781174717/88129904-a7f2-479f-8f9a-9452878e191e.png', caption: 'Abijatta-Shalla Flamingos', category: 'wildlife', featured: true },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175074/530a6c26-af7d-4043-ab1f-399bfbaf9002.png', caption: 'Nech Sar Zebra Plains', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175008/b67d7884-18d9-4059-bdf2-cda0b96a2eb3.png', caption: 'Awash National Park Oryx', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781175168/b7e9d0a4-6520-4384-be75-f784921bb358.png', caption: 'Omo National Park Wilderness', category: 'omo', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176009/6c6d8f3a-66d6-4af3-9b1d-1b2c53a649ad.png', caption: 'Gheralta Cliff Churches — Tigray', category: 'lalibela', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176048/f213d2da-d0e5-4b06-8769-ac7e818eb17a.png', caption: 'Tis Issat Gorge Walk', category: 'simien', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176165/95098717-e8d1-413d-a4dc-691d9c0b7175.png', caption: 'Blue Nile Gorge Viewpoint', category: 'simien', featured: true },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176203/dc401f6a-5d9c-450b-8947-ad0b026c02da.png', caption: 'Rift Valley Lakes Circuit', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176259/fca38789-5a09-4cba-a64c-8f7724c39aad.png', caption: 'Lake Langano Shoreline', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176298/a0bf4153-8027-4016-9452-4f5c9d5a7ddf.png', caption: 'Lake Ziway Pelicans', category: 'wildlife', featured: false },
  { image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781176488/176a822e-a27c-4bfa-86d0-9a76fbf19ac8.png', caption: 'Lake Hawassa Fish Market', category: 'culture', featured: false }
];

/* ================================================================
   CHECKLISTS DATA  — 50 destinations
   ================================================================ */
const CHECKLISTS = {

  /* ── CULTURAL ─────────────────────────────────────────────── */
  addis: {
    title: 'Addis Ababa Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport (6+ months remaining)',
        'Ethiopian e-visa or visa on arrival confirmation',
        'Travel insurance certificate',
        'Flight tickets (printed + digital)',
        'Yellow fever vaccination certificate',
        'Hotel / accommodation bookings',
        'Emergency contact card'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Light layers for cool highland evenings (2,355m altitude)',
        'Smart-casual outfits for restaurants and museums',
        'Modest clothing for church visits (shoulders and knees covered)',
        'Comfortable walking shoes for cobblestone streets',
        'Light rain jacket (year-round showers possible)',
        'Sunglasses and hat for midday sun'
      ]},
      { icon: '💊', label: 'Health & Medicine', items: [
        'Altitude awareness — Addis is at 2,355m',
        'Standard travel vaccinations (Hep A, Typhoid)',
        'Malaria prophylaxis not needed for Addis itself',
        'Personal prescription medications',
        'Hand sanitiser and antibacterial wipes',
        'Lip balm and moisturiser for dry highland air',
        'Basic first aid kit'
      ]},
      { icon: '💰', label: 'Money & Connectivity', items: [
        'Ethiopian Birr (ETB) — exchange at airport or bank',
        'US Dollars or Euros as backup',
        'Credit card for hotels (Visa widely accepted)',
        'Local SIM card (Ethio Telecom) for data',
        'Power bank — load shedding possible',
        'Universal power adapter (Type C/F)'
      ]},
      { icon: '🗺️', label: 'Must-Do Preparation', items: [
        'Book National Museum visit (Lucy fossil)',
        'Research Merkato etiquette — stay alert with bags',
        'Note location of your country\'s embassy',
        'Download offline maps (Google Maps or Maps.me)',
        'Learn a few Amharic phrases (Selam = Hello)',
        'Arrange airport pickup in advance'
      ]}
    ]
  },

  lalibela: {
    title: 'Lalibela Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport (6+ months remaining)',
        'Ethiopian visa',
        'Travel insurance',
        'Domestic flight tickets to Lalibela Airport',
        'Church entry tickets (can pre-purchase)',
        'Yellow fever certificate'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Modest clothing — shoulders and knees covered for all church visits',
        'Shoes that slip on/off easily (removed at all church entrances)',
        'White shawl or scarf (available locally, respectful to wear)',
        'Warm layers for cold highland nights (2,630m)',
        'Comfortable walking shoes for uneven rock paths',
        'Rain jacket (even in dry season — surprise showers)',
        'Head covering (hat or scarf) for sun protection'
      ]},
      { icon: '💊', label: 'Health & Medicine', items: [
        'Altitude medication or acclimatisation plan (2,630m)',
        'Stay hydrated — altitude dehydrates quickly',
        'Malaria prophylaxis (lower altitude surrounding area)',
        'Standard travel vaccinations',
        'Sun protection — strong highland UV',
        'Blister plasters — lots of walking on rough rock'
      ]},
      { icon: '📷', label: 'Photography & Gear', items: [
        'Camera with wide-angle lens for church interiors',
        'Extra memory cards — many churches to photograph',
        'Torch / headlamp for dark church interiors',
        'Tripod if allowed (check with guide)',
        'Respectful photography — always ask priests for portraits',
        'Waterproof camera bag'
      ]},
      { icon: '💡', label: 'Tips & Etiquette', items: [
        'Hire a licensed local guide — essential for church history',
        'Tip generously — local economy depends on tourism',
        'Visit at dawn for sunrise light and fewer crowds',
        'Book accommodation well ahead for Timkat (Jan)',
        'Bring small Birr notes for donations at churches',
        'Respect ongoing worship — these are living churches'
      ]}
    ]
  },

  axum: {
    title: 'Axum Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport (6+ months remaining)',
        'Ethiopian visa',
        'Travel insurance',
        'Domestic flight to Axum Airport',
        'Site entry permits (purchased on arrival)',
        'Yellow fever certificate'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Modest clothing for church and sacred site visits',
        'Comfortable walking shoes for site exploration',
        'Layers for cool highland mornings',
        'Hat and sunglasses for outdoor stelae fields',
        'Light rain jacket',
        'Shawl or scarf for St. Mary of Zion Cathedral'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Altitude awareness (2,131m)',
        'Standard travel vaccinations',
        'High-factor sunscreen',
        'Sufficient water supply — hot afternoons',
        'Basic first aid kit'
      ]},
      { icon: '📷', label: 'Photography', items: [
        'Wide-angle lens for massive stelae',
        'Check photography permissions at each site',
        'Respectful approach to the Chapel of the Tablet',
        'Sunrise visit for best stelae lighting',
        'Drone use requires special permit'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Hire a knowledgeable local guide — history is complex',
        'Visit the Axum Museum before the main sites',
        'Bring a book on Aksumite history',
        'Combine with Yeha Temple day trip',
        'Allow 2 full days minimum'
      ]}
    ]
  },

  gondar: {
    title: 'Gondar Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport (6+ months remaining)',
        'Ethiopian visa',
        'Travel insurance',
        'Domestic flight or bus ticket',
        'Castle complex entry ticket (buy on-site)'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Comfortable walking shoes for castle grounds',
        'Layers for mild highland climate (2,133m)',
        'Modest clothing for church visits',
        'Light jacket for cool evenings',
        'Sunhat for afternoon castle exploration'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Altitude awareness (2,133m)',
        'Standard travel vaccinations',
        'High-factor sunscreen',
        'Insect repellent for evening walks'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Visit Fasil Ghebbi early morning for best light',
        'Combine with Simien Mountains (3 hrs away)',
        'Timkat (Jan) is spectacular here — book months ahead',
        'Hire a guide for Debre Berhan Selassie Church ceiling',
        'Try local tej (honey wine) in the old town'
      ]}
    ]
  },

  harar: {
    title: 'Harar Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport (6+ months remaining)',
        'Ethiopian visa',
        'Travel insurance',
        'Domestic flight to Dire Dawa + transfer, or direct',
        'Jugol old city wall entry fee (small amount)'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Modest, conservative clothing — Islamic city',
        'Women: head scarf recommended for mosque areas',
        'Comfortable shoes for narrow cobbled alleys',
        'Light layers — warm days, cool evenings',
        'Do not wear revealing clothing in the old city'
      ]},
      { icon: '🦁', label: 'Hyena Feeding Experience', items: [
        'Book through a reputable guide or your hotel',
        'Feeding happens after dark — bring a torch',
        'Wear closed shoes and long trousers',
        'Keep a respectful distance from hyenas',
        'Do not feed hyenas without the feeder\'s guidance',
        'Photography OK but use minimal flash'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Malaria prophylaxis recommended',
        'Standard travel vaccinations',
        'Insect repellent for evening hyena visit',
        'Stomach remedies — try local food cautiously'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Stay inside the walled city for full atmosphere',
        'Visit the Rimbaud House museum',
        'Try Harari coffee — birthplace of Ethiopian coffee culture',
        'Combine with Babille Elephant Sanctuary (1 hr away)',
        'Friday market is unmissable'
      ]}
    ]
  },

  gheralta: {
    title: 'Gheralta Mountains Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport',
        'Ethiopian visa',
        'Travel insurance with trekking cover',
        'Flight to Mekelle + transfer',
        'Local guide mandatory for cliff church access'
      ]},
      { icon: '👕', label: 'Clothing & Gear', items: [
        'Sturdy hiking boots with ankle support',
        'Grippy gloves for rock scrambles',
        'Long trousers for scrambling (not shorts)',
        'Modest clothing for church interiors',
        'Headlamp for dark interiors',
        'Hat and sun protection — exposed ridgelines',
        'Windproof jacket for ridge tops'
      ]},
      { icon: '🧗', label: 'Climbing Essentials', items: [
        'Confirm fitness level — some climbs are vertical',
        'Trust your local guide completely',
        'Basic rock climbing confidence recommended',
        'Wear shoes that slip off easily at church entrances',
        'Bring water for climbs — no supplies on routes'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Good physical fitness required',
        'Altitude awareness (up to 2,400m)',
        'High-factor sunscreen — extreme UV at altitude',
        'Knee support bandage if needed'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Abuna Yemata Guh church requires a rope climb — absolutely worth it',
        'Allow 3–5 days to visit multiple churches',
        'Combine with Axum and Lalibela on Northern Circuit',
        'Tipping guides generously is expected and fair',
        'Photography inside churches — ask priests first'
      ]}
    ]
  },

  /* ── NATURE & TREKKING ────────────────────────────────────── */
  simien: {
    title: 'Simien Mountains Trekking Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Permits', items: [
        'Valid passport',
        'Ethiopian visa',
        'Travel insurance with trekking and evacuation cover',
        'Simien Mountains NP entry permit (at gate)',
        'Mandatory armed scout fee (park regulation)',
        'Domestic flight to Gondar'
      ]},
      { icon: '🎒', label: 'Trekking Gear', items: [
        'Sturdy waterproof hiking boots (broken in)',
        'Trekking poles (essential for escarpment edges)',
        'Backpack 50–70L for multi-day treks',
        'Daypack for summit day',
        'Sleeping bag rated to −5°C minimum',
        'Tent (or confirm camp provides)',
        'Waterproof pack liner or dry bags',
        'Gaiters for muddy trails',
        'Headlamp with spare batteries'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Thermal base layers (top and bottom)',
        'Fleece mid-layer',
        'Waterproof shell jacket and trousers',
        'Warm hat and gloves (temperatures drop below zero at night)',
        'Buff / neck gaiter',
        '3–4 moisture-wicking t-shirts',
        'Comfortable camp trousers',
        'Thick wool or synthetic socks (4+ pairs)',
        'Camp shoes or sandals',
        'Sunglasses (UV400)'
      ]},
      { icon: '💊', label: 'Health & Safety', items: [
        'Acclimatise in Gondar (2,133m) before starting',
        'Altitude sickness medication (Acetazolamide) — consult doctor',
        'Watch for symptoms above 3,500m',
        'Water purification tablets or filter',
        'High-factor sunscreen and lip balm',
        'Blister prevention and treatment',
        'Electrolyte sachets',
        'Personal first aid kit'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Gelada baboons are best seen at Chenek camp (Jan–Apr)',
        'Ras Dashen summit (4,550m) requires a full day — start at 5am',
        'Hire a local guide and cook — strongly recommended',
        'Carry cash only (no ATMs in the mountains)',
        'Respect the Simien wolf if encountered — rare and endangered',
        'Leave No Trace strictly — carry all waste out'
      ]}
    ]
  },

  bale: {
    title: 'Bale Mountains Packing Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Permits', items: [
        'Valid passport',
        'Ethiopian visa',
        'Travel insurance with wildlife and evacuation cover',
        'Bale Mountains NP entry permit',
        'Scout/ranger fee for Sanetti Plateau',
        'Vehicle hire confirmation (4WD essential)'
      ]},
      { icon: '🎒', label: 'Trekking & Safari Gear', items: [
        'Waterproof hiking boots',
        'Trekking poles for Sanetti Plateau (very boggy)',
        'Binoculars (8×42 minimum) for wolf and nyala spotting',
        'Sleeping bag rated to 0°C for Dinsho camps',
        'Warm layers — Sanetti Plateau is cold even in dry season',
        'Rain gear — Harenna Forest is always humid',
        'Gaiters for boggy moorland'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Thermal base layers for Sanetti (3,800–4,000m)',
        'Fleece and waterproof jacket',
        'Long trousers for Harenna Forest (insects)',
        'Lightweight layers for lower Harenna (warm)',
        'Good sunglasses — intense plateau UV',
        'Warm hat and gloves for summit areas'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Altitude acclimatisation plan (up to 4,377m)',
        'Malaria prophylaxis for Harenna Forest (lower elevation)',
        'Insect repellent for forest areas',
        'Water purification',
        'Sunscreen — very strong UV on plateau',
        'Basic first aid and blister kit'
      ]},
      { icon: '🐺', label: 'Wildlife Etiquette', items: [
        'Maintain 50m distance from Ethiopian wolves',
        'Never feed any wildlife',
        'Stay on marked trails to protect Afroalpine vegetation',
        'No flash photography near wolves',
        'Report any injured wildlife to rangers'
      ]}
    ]
  },

  danakil: {
    title: 'Danakil Depression Extreme Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Safety', items: [
        'Valid passport',
        'Ethiopian visa',
        'Travel insurance with medical evacuation (ESSENTIAL)',
        'Confirm tour operator has licensed guides and security',
        'Emergency contact details left with someone at home',
        'Travel advisory check before departure'
      ]},
      { icon: '🌡️', label: 'Extreme Heat Essentials', items: [
        '4+ litres of water per person per day minimum',
        'Oral rehydration salts / electrolyte powder',
        'SPF 50+ sunscreen — reapply every 2 hours',
        'Sun hat with full brim — wide brim essential',
        'UV-blocking long-sleeve shirt (counterintuitively cooler)',
        'Sunglasses with 100% UV protection',
        'Cooling towel',
        'Lip balm with SPF'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Light, loose, long-sleeve shirts (2–3)',
        'Light, loose trousers — no shorts (salt, sharp rocks, UV)',
        'Sandals for camp; closed shoes for volcano hike',
        'Warm layer for Erta Ale night hike (cold at altitude)',
        'Wind jacket — Afar wind is strong',
        'Dust mask or buff for salt flats'
      ]},
      { icon: '💊', label: 'Health & Medical', items: [
        'Pre-existing heart or respiratory conditions — consult doctor before booking',
        'Anti-diarrhoea medication',
        'Anti-nausea medication',
        'Antibiotics (doctor prescription) for emergencies',
        'Blister treatment — sharp salt crystals damage feet',
        'Eye drops for dust and sulfur',
        'Antihistamine tablets',
        'Do NOT go independently — guided tours only'
      ]},
      { icon: '🌋', label: 'Erta Ale Volcano Night Hike', items: [
        'Headlamp with fresh batteries (mandatory)',
        'Closed toe shoes with good grip',
        'Long trousers to protect from lava rock',
        'Wind and cold-resistant jacket (summit is cooler)',
        'Stay strictly on guide-marked paths',
        'No alcohol before the hike',
        'Identify your emergency whistle location'
      ]},
      { icon: '📦', label: 'Logistics', items: [
        'Book tour minimum 4 weeks in advance',
        'Confirm vehicle is 4WD — normal vehicles cannot access',
        'Carry sufficient cash (no ATMs in Afar)',
        'Satellite phone or hire via tour operator',
        'Download offline maps before losing signal'
      ]}
    ]
  },

  ertaale: {
    title: 'Erta Ale Volcano Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance with full medical evacuation',
        'Confirmation of licensed tour operator',
        'Emergency contacts left at home'
      ]},
      { icon: '🌋', label: 'Volcano Hike Essentials', items: [
        'Sturdy closed-toe shoes with thick soles (lava rock)',
        'Headlamp with fresh batteries (night hike mandatory)',
        'Buff or dust mask for sulfur fumes',
        'Wind and cold-resistant jacket for summit',
        'Long trousers — lava rock is razor sharp',
        'Gloves for scrambling over lava'
      ]},
      { icon: '🌡️', label: 'Heat & Hydration', items: [
        '4+ litres water per day minimum',
        'Electrolyte sachets',
        'SPF 50+ sunscreen',
        'Wide-brim sun hat for approach hike',
        'Do not hike in midday heat'
      ]},
      { icon: '💊', label: 'Health', items: [
        'No respiratory or heart conditions',
        'Anti-nausea pills (sulfur smell can be strong)',
        'Eye drops for dust and fumes',
        'Blister kit',
        'Antibiotics in emergency kit'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Hike begins late afternoon — arrive at rim after dark for lava glow',
        'The lava lake level changes — some visits are spectacular, some lower',
        'Guides carry rifles for security in Afar region',
        'Sleep at summit rim camp — surreal experience',
        'Never lean over the crater edge'
      ]}
    ]
  },

  wenchi: {
    title: 'Wenchi Crater Lake Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Vehicle hire or tour booking'
      ]},
      { icon: '👕', label: 'Clothing & Gear', items: [
        'Comfortable hiking shoes',
        'Warm layers — 3,386m altitude, cool mornings',
        'Rain jacket (possible afternoon showers)',
        'Hat and sunglasses',
        'Swimwear if using hot springs'
      ]},
      { icon: '🏇', label: 'Activity Specific', items: [
        'Confirm horse trekking availability with operator',
        'Bring cash for horse hire and boat to monastery',
        'Sun protection for open crater rim',
        'Binoculars for birdwatching',
        'Picnic lunch — no restaurants at the rim'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Perfect day trip from Addis (2.5 hrs)',
        'Arrive by 8am for mist-free crater views',
        'The boat to the monastery island is a highlight',
        'Hot springs are natural and very relaxing after the hike',
        'Combine with Woliso hot springs on same trip'
      ]}
    ]
  },

  bluenilefalls: {
    title: 'Blue Nile Falls Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Flight to Bahir Dar or bus booking'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Waterproof jacket and trousers — you WILL get wet',
        'Waterproof bag for camera and valuables',
        'Old shoes you don\'t mind getting wet and muddy',
        'Change of clothes for after the visit',
        'Swimwear optional'
      ]},
      { icon: '📷', label: 'Photography', items: [
        'Waterproof camera or case',
        'Extra lens cloths — constant spray',
        'Visit Sep–Nov for fullest falls after rains',
        'Early morning for rainbows in the mist',
        'Wide-angle lens for full falls in frame'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Combine with Lake Tana monastery boats (Bahir Dar)',
        'Cross the old Portuguese bridge for best view angle',
        'Local boys will offer to guide — negotiate price upfront',
        'Falls are reduced Jan–Aug due to dam upstream',
        'Allow half a day total for falls + Tana boat'
      ]}
    ]
  },

  bluenilegorge: {
    title: 'Blue Nile Gorge Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Vehicle and driver confirmation'
      ]},
      { icon: '👕', label: 'Clothing & Gear', items: [
        'Comfortable walking shoes',
        'Layers — cool in gorge, hot on plateau',
        'Sun protection for rim viewpoints',
        'Water (2L minimum)',
        'Camera with zoom for gorge depth shots'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Stop at the bridge over the gorge on Addis–Bahir Dar road',
        'The descent and climb take about 45 min by car',
        'Gelada baboons often seen on the gorge walls',
        'Best light for photography in morning',
        'Combine as a stop en route to Bahir Dar or Gondar'
      ]}
    ]
  },

  tisissat: {
    title: 'Tis Issat Gorge Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Transport from Bahir Dar'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Waterproof jacket for falls spray',
        'Sturdy walking shoes for gorge paths',
        'Sunscreen and hat',
        'Water (no shops in gorge)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Trek through the gorge for 2–3 hours for full experience',
        'Local guide adds enormous value for history and flora',
        'Traditional papyrus boats visible on the river',
        'Visit Sep–Nov for most dramatic falls',
        'Great birdwatching on gorge walls'
      ]}
    ]
  },

  guassa: {
    title: 'Guassa Plateau Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance with trekking and evacuation cover',
        'Community conservation area permit',
        'Vehicle hire (4WD required)'
      ]},
      { icon: '🎒', label: 'Camping Gear', items: [
        'Warm sleeping bag (−5°C rated) — very cold at 3,600m',
        'Tent or confirm camp lodge availability',
        'Trekking poles',
        'Waterproof hiking boots',
        'Full cold-weather clothing layers',
        'Torch and extra batteries'
      ]},
      { icon: '🐺', label: 'Wildlife Viewing', items: [
        'Binoculars — essential for Ethiopian wolf spotting',
        'Patience — wolves are most active at dawn and dusk',
        'Telephoto lens for photography',
        'Notebook for recording sightings',
        'Stay quiet and still when wolves are near'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Stargazing here is extraordinary — no light pollution',
        'Best wolf viewing Oct–Mar',
        'Community guides support local conservation directly',
        'Bring all food and water — remote area',
        'Combine with Lalibela on northern circuit'
      ]}
    ]
  },

  choke: {
    title: 'Choke Mountains Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance with trekking cover',
        'Guide and mule hire confirmation'
      ]},
      { icon: '🎒', label: 'Trekking Gear', items: [
        'Waterproof hiking boots',
        'Full cold-weather layers (4,000m summit)',
        'Trekking poles',
        'Sleeping bag rated to 0°C',
        'Rain gear',
        'Headlamp'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Altitude plan — ascend slowly above 3,500m',
        'Water purification (streams available)',
        'Sunscreen and lip balm',
        'Energy snacks'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Very remote — bring all supplies from Bahir Dar',
        'Mules available for luggage — reduces strain',
        'Endemic birds are the highlight for birders',
        'Blue Nile headwaters are a spiritual highlight',
        'Almost no other tourists — truly off the beaten path'
      ]}
    ]
  },

  debrelibanos: {
    title: 'Debre Libanos Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Day trip transport from Addis'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Modest clothing for monastery',
        'Shoes that slip off easily at monastery entrance',
        'Comfortable walking shoes for gorge edges',
        'Layers — can be cool in gorge'
      ]},
      { icon: '🦅', label: 'Wildlife Viewing', items: [
        'Binoculars — lammergeyer vultures soar on thermals',
        'Gelada baboons on cliff edges — stunning sight',
        'Camera with zoom lens'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Only 2 hours from Addis — perfect day trip',
        'Portuguese Bridge nearby is worth a stop',
        'The gorge below is dramatic — look carefully for geladas',
        'Combine with Jemma Gorge for a full day',
        'Bring a picnic — local food options limited'
      ]}
    ]
  },

  jemmagorge: {
    title: 'Jemma River Gorge Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance with trekking cover',
        'Local guide hire (essential — remote area)'
      ]},
      { icon: '🎒', label: 'Trekking Gear', items: [
        'Sturdy hiking boots',
        'Trekking poles for steep descents',
        'Daypack with 2L water minimum',
        'Sun protection',
        'Snacks for full-day treks'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'One of Ethiopia\'s great undiscovered trekking frontiers',
        'Gelada baboon troops are enormous here',
        'Allow full day for gorge descent and return',
        'Combine with Debre Libanos for 2-day trip',
        'River can flood in rainy season — avoid July–August'
      ]}
    ]
  },

  kundi: {
    title: 'Kundi Mountain Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance with remote trekking cover',
        'Guide and logistics pre-arranged'
      ]},
      { icon: '🎒', label: 'Trekking Gear', items: [
        'Hiking boots',
        'Full trekking kit for multi-day',
        'Sleeping bag for cold nights',
        'All food and water supplies (nothing available locally)',
        'Water purification'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Village homestays are the authentic highlight',
        'Endemic birds make this a birder\'s destination',
        'Very few tourists — local English very limited',
        'Amharic phrasebook essential',
        'Allow 8+ hours from Addis to reach trailhead'
      ]}
    ]
  },

  gibegorge: {
    title: 'Gibe Gorge Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Local guide recommended'
      ]},
      { icon: '👕', label: 'Clothing & Gear', items: [
        'Lightweight hiking gear (warm at lower elevation)',
        'Long trousers for insects and scrambling',
        'Sturdy shoes',
        'Insect repellent',
        'Binoculars for raptors and hornbills'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Outstanding raptor diversity — lammergeyers, eagles, falcons',
        'Natural hot springs at base of gorge',
        'Tropical dry forest unlike anywhere else in Ethiopia',
        'Best combined with a Jimma visit',
        'Gibe River rafting possible with specialist operators'
      ]}
    ]
  },

  menagesha: {
    title: 'Menagesha Forest Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Park entry fee (paid at gate)',
        'Day trip transport from Addis (1 hr)'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Comfortable hiking shoes',
        'Light layers — cool inside forest',
        'Insect repellent',
        'Binoculars for colobus monkeys and birds'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Ethiopia\'s oldest protected forest — over 1,000 years',
        'Black-and-white colobus monkeys are frequently seen',
        'Ancient podocarpus trees are cathedral-like',
        'Excellent birding — over 200 species recorded',
        'Popular weekend escape from Addis — go on weekdays'
      ]}
    ]
  },

  harenna: {
    title: 'Harenna Forest Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Bale Mountains NP permit covers Harenna',
        'Travel insurance',
        'Vehicle hire (4WD for descent road)'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Light layers — warm and humid in forest',
        'Long trousers for insects',
        'Waterproof jacket (cloud forest drizzle)',
        'Sturdy shoes for muddy forest floor',
        'Insect repellent — strong formula'
      ]},
      { icon: '🌿', label: 'Wildlife & Nature', items: [
        'Binoculars for forest birds and monkeys',
        'Silence is key — African lions present',
        'Stay with guide at all times',
        'Wild coffee trees — do not pick beans',
        'Giant forest hog tracks may be visible'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Combine with Sanetti Plateau (same park) for contrast',
        'Dawn forest walks offer best wildlife chances',
        'Wild Arabica coffee grows here — birthplace of coffee',
        'The atmosphere is extraordinary — primeval and wild',
        'Colobus monkeys are very visible'
      ]}
    ]
  },

  kafa: {
    title: 'Kafa Biosphere Reserve Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Biosphere reserve permit',
        'Travel insurance',
        'Long-distance transport (8+ hrs from Addis)'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Light rain gear (rainforest — expect moisture)',
        'Long trousers for insects',
        'Sturdy waterproof shoes',
        'Layers — cool at altitude, warm in forest',
        'Insect repellent'
      ]},
      { icon: '☕', label: 'Coffee Heritage', items: [
        'Arrange a traditional coffee ceremony visit',
        'Visit a local wild coffee forest with a guide',
        'Purchase premium wild-harvested coffee to take home',
        'Learn about Kafa culture and coffee origin legend'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Plan 6–8 days minimum to do justice to Kafa',
        'Combine with Jimma for an excellent southwest circuit',
        'Very few visitors — rewards with solitude and authenticity',
        'Kafa people are extraordinarily hospitable',
        'Best dry season visit: Oct–Mar'
      ]}
    ]
  },

  yayu: {
    title: 'Yayu Coffee Forest Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Biosphere permit',
        'Travel insurance',
        'Long-distance transport (9+ hrs from Addis)'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Rain jacket and waterproof shoes',
        'Long trousers',
        'Insect repellent',
        'Light layers'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'One of the last intact wild coffee forests on Earth',
        'Hire a local forest guide — they know where wild coffee grows',
        'The canopy is extraordinarily dense and biodiverse',
        'Birdwatching is outstanding — forest species endemic to this zone',
        'Very few tourists — true frontier experience'
      ]}
    ]
  },

  /* ── WILDLIFE ─────────────────────────────────────────────── */
  omo: {
    title: 'Omo Valley Cultural & Safari Checklist',
    sections: [
      { icon: '📄', label: 'Documents & Entry', items: [
        'Valid passport (6+ months remaining)',
        'Ethiopian visa',
        'Travel insurance',
        'Domestic flight to Jinka Airport',
        'Photography permit for tribal villages (pay at regional office)',
        'Yellow fever certificate'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Lightweight, modest, earth-toned clothing',
        'Long-sleeved shirts for sun and insect protection',
        'Comfortable, durable trousers (not shorts in villages)',
        'Comfortable walking shoes for village paths',
        'Hat with brim for intense southern sun',
        'Sandals for camp evenings',
        'Lightweight rain jacket'
      ]},
      { icon: '🤝', label: 'Cultural Etiquette', items: [
        'Always hire a licensed local guide — essential for access',
        'Ask permission before photographing people',
        'Agree on a photography fee before raising camera',
        'Accept offers of hospitality graciously',
        'Do not touch cultural items without invitation',
        'Dress modestly and respectfully in all villages',
        'Do not give gifts directly to children (undermines communities)',
        'Learn a few words in local languages'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Malaria prophylaxis is essential — high risk area',
        'Yellow fever vaccination required',
        'Insect repellent (DEET 50%) for morning and evening',
        'Hepatitis A and typhoid vaccinations',
        'Drink only bottled or purified water',
        'Oral rehydration salts for heat and exertion',
        'Medical kit with antibiotics'
      ]},
      { icon: '💰', label: 'Money & Logistics', items: [
        'Carry sufficient Ethiopian Birr — no ATMs in remote areas',
        'Small denomination notes for photography fees',
        'Budget for village entry fees and market contributions',
        'All transport must be 4WD vehicle',
        'Carry extra fuel — stations scarce south of Jinka'
      ]}
    ]
  },

  awash: {
    title: 'Awash National Park Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'NP entry permit (at gate)',
        'Vehicle hire confirmation'
      ]},
      { icon: '🦁', label: 'Safari Essentials', items: [
        'Binoculars (8×42 minimum)',
        'Field guide to Ethiopian mammals and birds',
        'Camera with 200mm+ zoom lens',
        'Sunscreen and wide-brim hat',
        'Dust protection for camera gear',
        'Early start (5:30am) for best wildlife'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Earth-toned clothing — avoid white and bright colours',
        'Long trousers for evening insect protection',
        'Light layers — cool mornings, hot afternoons',
        'Closed shoes for bush walks'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Malaria prophylaxis recommended',
        'Insect repellent',
        'Sunscreen SPF 50+',
        'Hydration — very hot in afternoon',
        'Antibiotics in emergency kit'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Awash Falls viewpoint is spectacular at sunset',
        'Oryx, gazelle and baboons are reliably seen',
        'Hot springs at Filwoha are a unique highlight',
        'Combine with Awash town for Afar culture experience',
        'Only 2 hrs from Addis — great short break'
      ]}
    ]
  },

  nechsar: {
    title: 'Nech Sar National Park Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP entry permit',
        'Travel insurance',
        'Long-distance transport (6+ hrs from Addis)'
      ]},
      { icon: '🦓', label: 'Safari Gear', items: [
        'Binoculars',
        'Camera with zoom lens',
        'Field guide to southern Ethiopia mammals',
        'Sunscreen and hat — very hot plains'
      ]},
      { icon: '🚤', label: 'Boat Safari', items: [
        'Book boat safari through park office',
        'Life jacket provided — confirm before boarding',
        'Waterproof bag for camera',
        'Sunscreen — no shade on water'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'White grass plains are stunning at golden hour',
        'Crocodile and hippo boat safari on Lake Chamo is unmissable',
        'Combine with Arba Minch town stay',
        'Nechisar nightjar (endemic) spotted at dusk near gate',
        'Allow 2 days minimum'
      ]}
    ]
  },

  mago: {
    title: 'Mago National Park Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP entry permit and scout fee',
        'Travel insurance',
        'Photography permit for Mursi villages nearby'
      ]},
      { icon: '🎒', label: 'Safari & Cultural Gear', items: [
        'Binoculars and camera with zoom',
        'Long trousers and long-sleeve shirts',
        'Insect repellent (DEET)',
        'Hat and sunscreen',
        '4WD vehicle — no other option'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Malaria prophylaxis essential',
        'Yellow fever certificate',
        'Full vaccination course recommended',
        'Adequate water supply (scarce in park)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Combine with Omo Valley tribal visits',
        'Mursi village visits from Mago are possible with guide',
        'Buffalo, elephant and giraffe are the wildlife highlights',
        'Very remote — carry everything needed',
        'Best access Nov–Mar (dry season)'
      ]}
    ]
  },

  chebera: {
    title: 'Chebera Churchura NP Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP entry permit',
        'Travel insurance',
        '4WD vehicle hire (essential)'
      ]},
      { icon: '🐘', label: 'Safari Essentials', items: [
        'Binoculars',
        'Camera with long zoom (400mm+ for elephants)',
        'Insect repellent — dense forest',
        'Long trousers and long sleeves',
        'Quiet earth-toned clothing'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'One of Ethiopia\'s highest elephant densities — extraordinary',
        'Hippo pools are accessible and spectacular',
        'Very few other visitors — genuine wilderness',
        'Forest elephants are shyer — patience rewarded',
        'Best Nov–Feb (dry season) for accessibility'
      ]}
    ]
  },

  gambella: {
    title: 'Gambella National Park Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP entry permit',
        'Travel insurance with medical evacuation',
        'Domestic flight to Gambella (strongly recommended)'
      ]},
      { icon: '👕', label: 'Tropical Lowland Gear', items: [
        'Lightweight, loose, long-sleeved clothing',
        'Insect repellent (DEET 50%) — very high mosquito load',
        'Permethrin-treated clothing recommended',
        'Mosquito net for sleeping',
        'Sturdy shoes for wet terrain',
        'Rain gear — humid tropics'
      ]},
      { icon: '💊', label: 'Health', items: [
        'Malaria prophylaxis absolutely essential — high malaria risk',
        'Yellow fever vaccination required',
        'Typhoid and Hepatitis A vaccinations',
        'Japanese encephalitis vaccine (consult doctor)',
        'Sufficient personal medications',
        'Medical evacuation insurance critical — very remote'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'White-eared kob migration (Dec–Feb) is one of Africa\'s great wildlife events',
        'Almost no tourist infrastructure — self-sufficient only',
        'Anywaa and Nuer peoples are fascinating culturally',
        'Birdwatching is extraordinary — Shoebill possible',
        'Visit with a specialist wildlife operator'
      ]}
    ]
  },

  yangudi: {
    title: 'Yangudi Rassa NP Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP permit',
        'Travel insurance',
        '4WD vehicle and experienced driver'
      ]},
      { icon: '🦓', label: 'Safari Gear', items: [
        'Binoculars (essential — very open terrain)',
        'Camera with long zoom (500mm+)',
        'Extreme heat protection gear',
        'Water (5L per person per day)',
        'Satellite phone or emergency communication'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'African wild ass is one of the world\'s rarest mammals',
        'Grevy\'s zebra and Beisa oryx also present',
        'Extremely remote — plan meticulously',
        'Visit only Nov–Feb (cooler months)',
        'Specialist wildlife tour operator recommended'
      ]}
    ]
  },

  kafta: {
    title: 'Kafta Sheraro NP Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP permit',
        'Travel insurance',
        'Check security situation in Tigray before travel'
      ]},
      { icon: '🐘', label: 'Safari Gear', items: [
        'Binoculars',
        'Camera with zoom',
        'Long trousers and long sleeves',
        'Insect repellent',
        'Heat protection — very hot semi-arid terrain'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Northernmost elephant population in Africa',
        'Best visited in dry season (Nov–Feb)',
        'Very few visitors — largely unexplored',
        'Combine with Axum or Tigray rock churches visit',
        'Check regional security advice before booking'
      ]}
    ]
  },

  alatish: {
    title: 'Alatish National Park Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP permit',
        'Travel insurance with evacuation',
        'Specialist operator confirmation'
      ]},
      { icon: '🐘', label: 'Safari Gear', items: [
        'Binoculars and long-zoom camera',
        'Insect repellent',
        'Water supply (scarce)',
        'Full camping kit if staying overnight'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Seasonal elephant migration is spectacular (Dec–Mar)',
        'One of Ethiopia\'s least-visited parks',
        'Close to Sudanese border — check security',
        'Combine with Gondar visit (6 hrs away)',
        'Completely self-sufficient travel required'
      ]}
    ]
  },

  babille: {
    title: 'Babille Elephant Sanctuary Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Sanctuary entry permit',
        'Travel insurance'
      ]},
      { icon: '🐘', label: 'Safari Gear', items: [
        'Binoculars',
        'Camera with long zoom — elephants are shy',
        'Sunscreen and hat — semi-arid terrain',
        'Water (limited facilities)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'These elephants are genetically distinct from all others in Africa',
        'Desert landscape setting is unique and photogenic',
        'Combine with Harar visit (1 hr away)',
        'Early morning is best for elephant activity',
        'Local guide essential for finding elephants'
      ]}
    ]
  },

  borena: {
    title: 'Borena Plains Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Guide and transport arrangements'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Lightweight, modest clothing',
        'Long-sleeved shirts for sun',
        'Comfortable trousers',
        'Hat and sunglasses',
        'Insect repellent'
      ]},
      { icon: '🤝', label: 'Cultural Preparation', items: [
        'Research Borana pastoral culture beforehand',
        'Ask guide about singing well etiquette',
        'Photography fees apply — agree in advance',
        'Accept tea when offered — important hospitality',
        'Bring small gifts (not money — school supplies appropriate)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'The singing wells (Ele Bora) are an extraordinary cultural sight',
        'Cattle ceremonies are the cultural highlight',
        'Best Nov–Feb before extreme dry season',
        'Combine with Yabelo Wildlife Sanctuary (spotted hyena den)',
        'Very close to Kenyan border — passport always available'
      ]}
    ]
  },

  sofomar: {
    title: 'Sof Omar Caves Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Cave entry fee (paid at site)',
        'Travel insurance',
        'Transport from Robe (3 hrs)'
      ]},
      { icon: '🔦', label: 'Cave Essentials', items: [
        'Good torch or headlamp (cave is dark)',
        'Spare batteries',
        'Shoes with grip — cave floor is slippery',
        'Clothes you don\'t mind getting wet',
        'Keep valuables waterproofed'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Africa\'s largest cave system — 15km of chambers',
        'The Web River flows through the caves — dramatic',
        'Hire a local guide (mandatory and very informative)',
        'Sacred Muslim site — respectful behaviour required',
        'Best combined with Bale Mountains visit',
        'Photography allowed — bring wide-angle lens'
      ]}
    ]
  },

  abijattashalla: {
    title: 'Abijatta-Shalla Lakes Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP entry permit (at gate)',
        'Travel insurance',
        'Vehicle hire'
      ]},
      { icon: '🦩', label: 'Birdwatching Gear', items: [
        'Binoculars (essential — flamingos at distance)',
        'Camera with 500mm+ zoom for flamingos',
        'Field guide to Ethiopian birds',
        'Tripod for long-lens photography',
        'Dust protection for gear'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Lesser flamingos can number in the hundreds of thousands',
        'Lake Shala hot springs (90°C) are a surreal highlight',
        'Best flamingo viewing Nov–Feb',
        'Combine with Lake Langano (30 min away)',
        'Easy 2-hr drive from Addis'
      ]}
    ]
  },

  /* ── LAKES ────────────────────────────────────────────────── */
  laketana: {
    title: 'Lake Tana Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Domestic flight to Bahir Dar',
        'Monastery boat tour booking'
      ]},
      { icon: '⛵', label: 'Boat Tour Essentials', items: [
        'Confirm boat is life-jacketed and safe',
        'Bring sunscreen — no shade on the lake',
        'Wide-brim hat for the boat',
        'Modest clothing for monastery visits',
        'Small torch for dark monastery interiors'
      ]},
      { icon: '👕', label: 'Clothing', items: [
        'Modest clothing for monastery visits (shoulders and knees covered)',
        'Light layers — lake breeze can be cool',
        'Comfortable walking shoes for monastery grounds',
        'Rain jacket (possible afternoon showers)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Ura Kidane Mehret monastery has the most vivid murals',
        'Some monasteries are for men only — confirm before boat trip',
        'Hippos visible at dawn near shore',
        'Zege Peninsula coffee ceremony is a wonderful addition',
        'Combine with Blue Nile Falls (30 min away)'
      ]}
    ]
  },

  riftvalley: {
    title: 'Rift Valley Lakes Circuit Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Vehicle hire confirmation (self-drive or guided)',
        'NP entry fees (Abijatta-Shalla, Nech Sar)'
      ]},
      { icon: '🚗', label: 'Road Trip Essentials', items: [
        'Offline maps downloaded (signal patchy between lakes)',
        'Fuel plan — petrol stations every 50–80km',
        'Snacks and water for between-lake driving',
        'Camera with zoom and wide lens',
        'Binoculars for flamingos and waterbirds'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Allow 5–7 days for the full circuit (Addis to Arba Minch)',
        'Each lake has a different character — don\'t rush',
        'Flamingos are best at Abiata and Shala (Nov–Feb)',
        'Lake Langano is the safe-swimming lake — perfect overnight stop',
        'Arba Minch is the best base for Nech Sar and Lake Chamo'
      ]}
    ]
  },

  lakelangano: {
    title: 'Lake Langano Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Lodge booking (popular — book ahead)'
      ]},
      { icon: '🏊', label: 'Water Activity Gear', items: [
        'Swimwear — bilharzia-free swimming lake',
        'Sunscreen SPF 50+ (very strong sun on open water)',
        'Water shoes for rocky shore entry',
        'Inflatable toys / snorkel gear optional',
        'Life jacket for kayaking (available at lodges)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Best weekend escape from Addis (2 hrs)',
        'Boat tours at dawn for spectacular birding',
        'Hippos visible from lodge jetties at dusk',
        'Weaver bird colonies along the shore',
        'Combine with Abijatta-Shalla (30 min away) for flamingos'
      ]}
    ]
  },

  lakeziway: {
    title: 'Lake Ziway Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Boat hire booking'
      ]},
      { icon: '🦅', label: 'Birdwatching Gear', items: [
        'Binoculars — 400+ species recorded',
        'Camera with long zoom for pelicans and storks',
        'Field guide to Ethiopian birds',
        'Early morning start for most activity'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Hippos visible on early morning boat trips',
        'Island monasteries accessible by local boat',
        'The Zay people have unique island culture',
        'Bird market in Ziway town is charismatic',
        'Easy day trip from Addis (2 hrs south)'
      ]}
    ]
  },

  lakeabaya: {
    title: 'Lake Abaya Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Transport from Arba Minch'
      ]},
      { icon: '🚤', label: 'Boat Safari', items: [
        'Book boat through Arba Minch lodge or park office',
        'Life jacket confirmation',
        'Waterproof bag for camera',
        'Sunscreen — no shade on lake'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'The blood-red water is caused by iron-rich clay — unique and photogenic',
        'Enormous Nile crocodiles on shore near Arba Minch bridge',
        'Best photographed in afternoon light',
        'Combine with Lake Chamo boat safari (same day trip)',
        'Arba Minch viewpoint (Forty Springs) overlooks both lakes'
      ]}
    ]
  },

  lakechamo: {
    title: 'Lake Chamo Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP/lake entry permit',
        'Travel insurance'
      ]},
      { icon: '🚤', label: 'Boat Safari Essentials', items: [
        'Book licensed boat with park ranger on board',
        'Waterproof camera protection — water spray possible',
        'Telephoto lens for crocodile close-ups',
        'Life jacket (confirm it is provided)',
        'Sunscreen and hat — very exposed on water'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'The Crocodile Market sandbar has hundreds of enormous Nile crocodiles',
        'Morning boat trips are best (crocs basking)',
        'Hippo pods are huge and very close to boats',
        'Nile perch fishing possible with permits',
        'Combine with Nech Sar plains game drive same day'
      ]}
    ]
  },

  hawassa: {
    title: 'Lake Hawassa Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Accommodation booking (city hotel)'
      ]},
      { icon: '📷', label: 'Photography Gear', items: [
        'Camera with zoom for fish market birds',
        'Waterproof camera bag (fish market is chaotic)',
        'Wide-angle for fish market scenes',
        'Long zoom for lakeside herons and kingfishers'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Fish market is best 6–9am — extraordinary bird activity',
        'Marabou storks and pelicans steal fish dramatically',
        'Lakeside promenade walk at sunset is delightful',
        'Hippos visible from lodges at dawn and dusk',
        'Hawassa is clean, safe and a pleasant city base',
        '3-hour drive from Addis — good overnight stop on south trip'
      ]}
    ]
  },

  lakeshala: {
    title: 'Lake Shala Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Abijatta-Shalla NP permit',
        'Travel insurance'
      ]},
      { icon: '♨️', label: 'Hot Springs Visit', items: [
        'Confirm hot springs are accessible (open seasonally)',
        'Bring towel and swimwear for spring bathing',
        'Sandals for hot spring approach',
        'Water — steaming atmosphere is dehydrating',
        'Do not enter spring water if temperature too high (90°C spots)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Africa\'s deepest Rift Valley lake — dramatic caldera setting',
        'Springs create a steaming mist landscape — extremely photogenic',
        'Flamingos on the shallow edges',
        'Combine with Abijatta (flamingos) for full day',
        'Easy 2.5-hour drive from Addis'
      ]}
    ]
  },

  lakeabijatta: {
    title: 'Lake Abijatta Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'NP entry permit',
        'Travel insurance'
      ]},
      { icon: '🦩', label: 'Flamingo Viewing Gear', items: [
        'Binoculars (flamingos are at distance on open lake)',
        'Camera with 500mm+ zoom for flamingo photography',
        'Tripod for long-lens stability',
        'Dust protection — very dusty shore',
        'Sunscreen and hat — very exposed'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Best Nov–Feb when flamingo numbers peak at hundreds of thousands',
        'The soda lake turns pink at certain light angles',
        'Dawn light is best for photography',
        'Combine with Shala (30 min) for full lake experience',
        'The alkaline shore is hard on shoes — wear old ones'
      ]}
    ]
  },

  bishoftu: {
    title: 'Bishoftu Crater Lakes Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Transport from Addis (1 hr)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Perfect day trip or weekend from Addis',
        'Lake Hora: Irreechaa festival (Sep/Oct) is massive and colourful',
        'Water sports available on Lake Hora and Lake Babogaya',
        'Several crater lakes to walk between',
        'Ethiopian Defence Force training facility adjacent — some lakes restricted',
        'Lovely resort hotels on the crater rims'
      ]}
    ]
  },

  koka: {
    title: 'Koka Reservoir Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Fishing permit if fishing',
        'Travel insurance'
      ]},
      { icon: '🎣', label: 'Fishing & Birding', items: [
        'Fishing rods and tackle (Nile tilapia and perch)',
        'Binoculars for African fish eagle and pelicans',
        'Camera with zoom for water birds',
        'Sun protection — very exposed reservoir'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Easy 1.5-hour day trip from Addis',
        'African fish eagle is the headline bird',
        'Pelican flocks are spectacular at dawn',
        'Boat hire available for fishing',
        'Combine with Awash road trip'
      ]}
    ]
  },

  lakehayq: {
    title: 'Lake Hayq Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Transport (stop on Addis–Lalibela road)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Ideal lunch stop on the 2-day drive to Lalibela',
        'Hayq Estifanos monastery on the island is medieval and stunning',
        'Boat to island can be arranged locally',
        'Surrounded by juniper forest — beautiful highland setting',
        'Pelicans on the lake are a great photographic subject',
        'The town of Hayq has good local cafes for breaks'
      ]}
    ]
  },

  lakeardibo: {
    title: 'Lake Ardibo Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Transport (very remote — own vehicle or guide)'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'One of Ethiopia\'s least-visited highland lakes',
        'Perfect for travellers seeking solitude and authentic rural life',
        'Fishing is possible — bring basic tackle',
        'No tourist infrastructure — carry all supplies',
        'Combine with Lalibela circuit (Wollo region)'
      ]}
    ]
  },

  /* ── VOLCANIC ─────────────────────────────────────────────── */
  fentale: {
    title: 'Mt. Fentale Crater Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Guide hire for crater route'
      ]},
      { icon: '🌋', label: 'Volcano Hike Gear', items: [
        'Sturdy hiking boots (sharp volcanic rock)',
        'Sun protection — exposed summit',
        'Water (2L minimum)',
        'Wind jacket for summit',
        'Camera for crater and Rift Valley views'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'The 3km wide summit crater is dramatic and photogenic',
        'Lake Beseka (growing rapidly) visible from summit',
        'Awash River plains stretch to the horizon',
        'Allow 5–6 hours return from base',
        'Combine with Awash NP visit (nearby)'
      ]}
    ]
  },

  zuqualla: {
    title: 'Mt. Zuqualla Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Day trip transport from Addis (1.5 hrs)'
      ]},
      { icon: '👕', label: 'Clothing & Gear', items: [
        'Hiking shoes for forested crater trail',
        'Light layers — forested and cool',
        'Modest clothing for monastery',
        'Water and snacks'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Perfect half-day hike from Addis',
        'The crater lake and monastery together are magical',
        'Black-and-white colobus monkeys in the forest',
        'Panoramic views of the Rift escarpment from rim',
        'Sacred site — respectful behaviour at monastery'
      ]}
    ]
  },

  bilen: {
    title: 'Bilen Hot Springs Checklist',
    sections: [
      { icon: '📄', label: 'Documents', items: [
        'Valid passport and Ethiopian visa',
        'Travel insurance',
        'Transport (3 hrs from Addis, on Danakil road)'
      ]},
      { icon: '♨️', label: 'Hot Springs Essentials', items: [
        'Swimwear for natural spring bathing',
        'Towel',
        'Sandals for approaching the springs',
        'Water — heat is intense'
      ]},
      { icon: '💡', label: 'Tips', items: [
        'Natural geothermal pools used by locals for centuries',
        'Very relaxing stop on the long drive to the Danakil',
        'Test temperature before entering — some pools are very hot',
        'Small entry fee payable to local community',
        'Combine as a transit stop on Addis–Danakil route'
      ]}
    ]
  }

};

/* ================================================================
   STATE VARIABLES
   ================================================================ */
let heroSlideIndex = 0;
let heroInterval   = null;
let currentLang    = 'en';
let calcState      = { base: 0, travelers: 2, hotel: 0, transport: 0 };
let recStep        = 0;
let recAnswers     = {};
let galleryFilter  = 'all';
let gallerySlideshow = null;
let lightboxItems  = [];
let lightboxIndex  = 0;
let checklistState = {};
let budgetState    = { duration: 10, accomm: 25, food: 15, activities: 20, transport: 10 };

/* ================================================================
   1. NAVIGATION
   ================================================================ */
function initNav() {
  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const backToTop   = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

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

  const searchInput = document.getElementById('tourSearch');
  const suggestBox  = document.getElementById('searchSuggestions');

  // Mark as bound to prevent double-binding on tour.html
  searchInput.dataset.bound = 'true';

  searchInput.addEventListener('input', () => {
    filterTours();
    showSuggestions(searchInput.value.toLowerCase().trim());
  });
  searchInput.addEventListener('blur', () => {
    setTimeout(() => { suggestBox.classList.remove('open'); suggestBox.innerHTML = ''; }, 150);
  });

  document.getElementById('tourSort').addEventListener('change', filterTours);
  document.getElementById('filterDestination').addEventListener('change', filterTours);
  document.getElementById('filterDuration').addEventListener('change', filterTours);
  document.getElementById('filterActivity').addEventListener('change', filterTours);
  document.getElementById('filterReset').addEventListener('click', resetFilters);
}

function showSuggestions(query) {
  const suggestBox = document.getElementById('searchSuggestions');
  if (!query) { suggestBox.classList.remove('open'); suggestBox.innerHTML = ''; return; }
  const matches = TOURS.filter(t =>
    t.title.toLowerCase().includes(query) ||
    t.description.toLowerCase().includes(query) ||
    t.highlights.some(h => h.toLowerCase().includes(query))
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
      document.getElementById('tourSearch').value = item.dataset.title;
      suggestBox.classList.remove('open');
      suggestBox.innerHTML = '';
      filterTours();
    });
  });
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

  // FIX: filter by destination key, not display name
  if (destination !== 'all') filtered = filtered.filter(t => t.destination === destination);
  if (activity !== 'all')    filtered = filtered.filter(t => t.activity === activity);

  if (duration !== 'all') {
    const [min, max] = duration === '15+' ? [15, Infinity] : duration.split('-').map(Number);
    filtered = filtered.filter(t => t.duration >= min && t.duration <= (max || Infinity));
  }

  if (sort === 'duration-asc')  filtered.sort((a, b) => a.duration - b.duration);
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
  document.getElementById('tourSearch').value        = '';
  document.getElementById('tourSort').value          = 'popularity';
  document.getElementById('filterDestination').value = 'all';
  document.getElementById('filterDuration').value    = 'all';
  document.getElementById('filterActivity').value    = 'all';
  renderTours([...TOURS].sort((a, b) => b.popularity - a.popularity));
}

// Exposed globally for inline onclick
function scrollToCalculator(tourId) {
  const calcSection = document.getElementById('tours');
  if (calcSection) calcSection.scrollIntoView({ behavior: 'smooth' });
}
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

  if (calcTour) {
    calcTour.addEventListener('change', () => {
      const opt = calcTour.options[calcTour.selectedIndex];
      calcState.base   = parseInt(opt.dataset.base) || 0;
      calcState.tourId = opt.value || '';
      updateCalc();
    });
  }

  if (decrease) {
    decrease.addEventListener('click', () => {
      if (calcState.travelers > 1) {
        calcState.travelers--;
        travelerIn.value = calcState.travelers;
        updateCalc();
      }
    });
  }

  if (increase) {
    increase.addEventListener('click', () => {
      if (calcState.travelers < 20) {
        calcState.travelers++;
        travelerIn.value = calcState.travelers;
        updateCalc();
      }
    });
  }

  ['hotelOptions', 'transportOptions'].forEach(groupId => {
    const group = document.getElementById(groupId);
    if (!group) return;
    group.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        group.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        if (groupId === 'hotelOptions')     calcState.hotel     = parseInt(card.dataset.cost) || 0;
        else                                calcState.transport = parseInt(card.dataset.cost) || 0;
        updateCalc();
      });
    });
  });

  const calcBook = document.getElementById('calcBook');
  if (calcBook) {
    calcBook.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  updateCalc();
}

function updateCalc() {
  const totalEl    = document.getElementById('calcTotal');
  const perPersonEl = document.getElementById('calcPerPerson');
  if (!totalEl) return;

  const perPerson = calcState.base + calcState.hotel + calcState.transport;
  const total     = perPerson * calcState.travelers;

  totalEl.textContent     = `$${total.toLocaleString()}`;
  if (perPersonEl) perPersonEl.textContent = `$${perPerson.toLocaleString()} per person`;
}

/* ================================================================
   6. DESTINATION MAP EXPLORER
   ================================================================ */
function initMap() {
  const pins     = document.querySelectorAll('.map-pin, .pin-addis');
  const popup    = document.getElementById('mapPopup');
  const backdrop = document.getElementById('mapPopupBackdrop');
  const closeBtn = document.getElementById('mapPopupClose');

  if (!pins.length || !popup) return;

  const MAP_DATA = {
    addis:         { name: 'Addis Ababa',            region: 'Central Ethiopia',   image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The vibrant capital of Ethiopia — a city of contrasts where ancient tradition meets modern Africa. Home to the African Union, world-class museums, and the famous Mercato market.', highlights: ['National Museum', 'Mercato Market', 'African Union HQ', 'Entoto Hills'], bestTime: 'Oct–May', altitude: '2,355m', getting: 'Direct flights worldwide' },
    lalibela:      { name: 'Lalibela',               region: 'Amhara Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png', desc: 'Known as the "New Jerusalem," Lalibela\'s 11 monolithic rock-hewn churches were carved from solid red rock in the 12th century and remain active places of worship today.', highlights: ['Rock-Hewn Churches', 'UNESCO Heritage', 'Timkat Festival', 'Living Pilgrimage'], bestTime: 'Oct–Mar', altitude: '2,630m', getting: '~1 hr flight from Addis' },
    axum:          { name: 'Axum',                   region: 'Tigray Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'Capital of the ancient Aksumite Empire — towering stelae, underground royal tombs, and the Church of St. Mary of Zion, believed by Ethiopians to house the original Ark of the Covenant.', highlights: ['Ancient Obelisks', 'Ark of the Covenant', 'Royal Tombs', 'Queen of Sheba'], bestTime: 'Oct–Mar', altitude: '2,131m', getting: '~2 hr flight from Addis' },
    gondar:        { name: 'Gondar',                 region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600', desc: 'The "Camelot of Africa" — a walled Royal Enclosure containing six medieval castles built by successive emperors in the 17th century.', highlights: ['Royal Enclosure', '6 Castles', 'Debre Berhan Church', 'Timkat Festival'], bestTime: 'Oct–Mar', altitude: '2,133m', getting: '~1 hr flight from Addis' },
    harar:         { name: 'Harar',                  region: 'Harari Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png', desc: 'Africa\'s 4th holiest Islamic city, encircled by a 16th-century wall. Its 82 mosques, colorful painted houses, and the legendary nightly hyena feeding ritual make it utterly unique.', highlights: ['Walled Old City', 'Hyena Feeding', 'Rimbaud\'s House', '82 Mosques'], bestTime: 'Oct–Mar', altitude: '1,885m', getting: '~1.5 hr flight from Addis' },
    simien:        { name: 'Simien Mountains',        region: 'Amhara Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png', desc: 'Africa\'s Grand Canyon — a UNESCO World Heritage site with dramatic escarpments, deep gorges, and some of the continent\'s highest peaks. Home to the endemic gelada baboon.', highlights: ['Gelada Baboons', 'Ras Dashen Peak', 'UNESCO Heritage', 'Panoramic Escarpments'], bestTime: 'Oct–Mar', altitude: '4,550m', getting: '~1 hr from Gondar' },
    bale:          { name: 'Bale Mountains',          region: 'Oromia Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', desc: 'A highland wilderness sheltering the Ethiopian wolf — Africa\'s rarest canid. Vast Afroalpine moorlands, the Harenna cloud forest, and mountain nyala await.', highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest', 'Sanetti Plateau'], bestTime: 'Nov–Mar', altitude: '4,377m', getting: '~6 hrs from Addis' },
    danakil:       { name: 'Danakil Depression',      region: 'Afar Region',        image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png', desc: 'One of Earth\'s most extreme environments — below sea level, scorching hot, with active volcanoes, neon sulfur springs, and vast salt flats stretching to the horizon.', highlights: ['Erta Ale Lava Lake', 'Dallol Crater', 'Salt Flats', 'Afar Nomads'], bestTime: 'Nov–Feb', altitude: '−125m', getting: '~3 hrs from Mekelle' },
    ertaale:       { name: 'Erta Ale Volcano',        region: 'Afar Region',        image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png', desc: 'One of the world\'s only permanent lava lakes, Erta Ale is a shield volcano deep in the Danakil. Hiking to the crater rim at night to witness churning molten lava is unforgettable.', highlights: ['Permanent Lava Lake', 'Night Hike', 'Danakil Heart', 'Raw Volcanic Power'], bestTime: 'Nov–Feb', altitude: '613m', getting: '~4 hrs 4WD from Semera' },
    omo:           { name: 'Omo Valley',             region: 'SNNPR',              image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png', desc: 'One of Africa\'s last great cultural frontiers — home to over 20 indigenous tribes including the Mursi, Hamer, Karo, and Dassanech, each with extraordinary traditions.', highlights: ['Mursi Lip Plates', 'Hamer Bull Jumping', 'Tribal Markets', 'Omo River'], bestTime: 'Oct–Feb', altitude: '500m', getting: '~1 hr flight from Addis' },
    laketana:      { name: 'Lake Tana',               region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=600', desc: 'Ethiopia\'s largest lake and the source of the Blue Nile. Its island monasteries — some dating to the 14th century — house remarkable ancient murals, manuscripts, and royal mummies.', highlights: ['Island Monasteries', 'Blue Nile Source', 'Ancient Murals', 'Hippos & Birds'], bestTime: 'Oct–Mar', altitude: '1,788m', getting: '~1 hr flight from Addis' },
    bluenilefalls: { name: 'Blue Nile Falls',         region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'Known locally as Tis Abay — "Smoking Water" — the Blue Nile Falls thunder 45 metres into a misty gorge, creating rainbows and drenching the surrounding forest.', highlights: ['45m Waterfall', 'Blue Nile Source', 'Lush Rainforest', 'Scenic Gorge'], bestTime: 'Sep–Nov', altitude: '1,700m', getting: '~30 min from Bahir Dar' },
    gheralta:      { name: 'Gheralta Mountains',     region: 'Tigray Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'Dramatic sandstone massifs riddled with Tigrinya rock-hewn churches perched on near-vertical cliff faces.', highlights: ['Cliff Churches', 'Rock Climbing', 'Ancient Murals', 'Tigray Heritage'], bestTime: 'Oct–Mar', altitude: '2,400m', getting: '~2 hrs from Mekelle' },
    wenchi:        { name: 'Wenchi Crater Lake',      region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A stunning caldera lake surrounded by forested rim trails, hot springs, and a small island monastery.', highlights: ['Crater Lake', 'Island Monastery', 'Hot Springs', 'Horse Trekking'], bestTime: 'Oct–Feb', altitude: '3,386m', getting: '~2.5 hrs from Addis' },
    bluenilegorge: { name: 'Blue Nile Gorge',        region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s Grand Canyon — a spectacular 1,500m deep gorge carved by the Blue Nile, offering breathtaking views.', highlights: ['1,500m Deep Gorge', 'Blue Nile River', 'Dramatic Viewpoints', 'Gelada Baboons'], bestTime: 'Oct–Apr', altitude: '900m', getting: '~3 hrs from Addis' },
    riftvalley:    { name: 'Rift Valley Lakes',      region: 'Oromia / SNNPR',    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A chain of seven stunning soda and freshwater lakes in the Ethiopian Rift Valley.', highlights: ['Flamingo Colonies', '7 Linked Lakes', 'Birdwatcher\'s Paradise', 'Rift Scenery'], bestTime: 'Oct–Mar', altitude: '1,540m', getting: '~2 hrs from Addis' },
    lakelangano:   { name: 'Lake Langano',           region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The only bilharzia-free lake in the Rift Valley — a favourite weekend escape with russet-brown waters and hippos.', highlights: ['Safe Swimming', 'Hippos', 'Weaver Birds', 'Weekend Retreat'], bestTime: 'Year-round', altitude: '1,585m', getting: '~2 hrs from Addis' },
    lakeziway:     { name: 'Lake Ziway',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A freshwater Rift Valley lake renowned for pelicans, hippos, and the traditional reed boats of the Zay people.', highlights: ['Pelicans & Hippos', 'Island Monasteries', 'Zay People', 'Freshwater Lake'], bestTime: 'Oct–Mar', altitude: '1,636m', getting: '~2 hrs from Addis' },
    lakeabaya:     { name: 'Lake Abaya',             region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s largest Rift Valley lake, tinted blood-red by mineral-rich sediment.', highlights: ['Red-Tinted Waters', 'Crocodiles', 'Hippo Pods', 'Arba Minch Views'], bestTime: 'Oct–Mar', altitude: '1,285m', getting: '~6 hrs from Addis' },
    lakechamo:     { name: 'Lake Chamo',             region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Famous for the "Crocodile Market" — a sandbar teeming with hundreds of enormous Nile crocodiles and basking hippos.', highlights: ['Crocodile Market', 'Hippos', 'Boat Safaris', 'Nile Perch'], bestTime: 'Oct–Mar', altitude: '1,235m', getting: '~6 hrs from Addis' },
    hawassa:       { name: 'Lake Hawassa',           region: 'Sidama Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A lively, beautiful lake famous for the rowdy fish market where marabou storks and pelicans steal scraps.', highlights: ['Fish Market', 'Marabou Storks', 'Lakeside Walks', 'Hawassa City'], bestTime: 'Year-round', altitude: '1,708m', getting: '~3 hrs from Addis' },
    awash:         { name: 'Awash National Park',    region: 'Afar Region',        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s most accessible wildlife park, straddling the Awash River. Oryx, gazelle, and baboon roam the acacia savanna.', highlights: ['Awash Falls', 'Oryx & Gazelle', 'Hot Springs', 'Afar Culture'], bestTime: 'Nov–Mar', altitude: '1,000m', getting: '~2 hrs from Addis' },
    nechsar:       { name: 'Nech Sar National Park', region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Bridging Lakes Abaya and Chamo, Nech Sar shelters crocodiles, hippos, zebra, and Grant\'s gazelle on grassy plains.', highlights: ['Crocodiles & Hippos', 'Zebra Plains', 'Twin Lakes', 'Nechisar Nightjar'], bestTime: 'Oct–Mar', altitude: '1,108m', getting: '~6 hrs from Addis' },
    mago:          { name: 'Mago National Park',     region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Remote and wild, Mago protects buffalo, elephant, giraffe, and lion in one of Ethiopia\'s least-visited wilderness areas.', highlights: ['Buffalo & Elephant', 'Mursi Village Visits', 'Wild Frontier', 'Omo River'], bestTime: 'Nov–Mar', altitude: '600m', getting: '~1.5 hrs from Jinka' },
    sofomar:       { name: 'Sof Omar Caves',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Africa\'s longest cave system — over 15km of dramatic chambers carved by the Web River. Sacred to local Muslims.', highlights: ['Africa\'s Longest Cave', 'Underground River', 'Sacred Site', 'Dramatic Chambers'], bestTime: 'Oct–Apr', altitude: '1,200m', getting: '~5 hrs from Addis' },
    abijattashalla: { name: 'Abijatta-Shalla',       region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Twin Rift Valley lakes teeming with flamingos, pelicans, and over 300 bird species. Lake Shala\'s hot springs steam dramatically from the shore.', highlights: ['Flamingo Flocks', '300+ Bird Species', 'Hot Springs', 'Rift Valley'], bestTime: 'Nov–Mar', altitude: '1,540m', getting: '~2 hrs from Addis' },
    guassa:        { name: 'Guassa Plateau',         region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A high-altitude community conservation area and one of the best places to see the Ethiopian wolf outside Bale.', highlights: ['Ethiopian Wolf', 'Community Conservation', 'Heather Moorland', 'Star Gazing'], bestTime: 'Oct–Mar', altitude: '3,600m', getting: '~4 hrs from Addis' },
    debrelibanos:  { name: 'Debre Libanos',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of Ethiopia\'s most sacred monasteries, perched above a spectacular gorge where gelada baboons roam the cliff edges.', highlights: ['Sacred Monastery', 'Jemma Gorge', 'Gelada Baboons', 'Lammergeyers'], bestTime: 'Oct–Apr', altitude: '2,600m', getting: '~2 hrs from Addis' },
    fentale:       { name: 'Mt. Fentale Crater',     region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A dormant shield volcano on the edge of the Rift Valley with a massive 3km-wide summit crater.', highlights: ['3km Summit Crater', 'Rift Valley Views', 'Lake Beseka', 'Volcano Hike'], bestTime: 'Oct–Mar', altitude: '1,625m', getting: '~2.5 hrs from Addis' },
    zuqualla:      { name: 'Mt. Zuqualla',           region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'An extinct volcano just south of Addis — a sacred crater lake and ancient monastery nestle in the cool forested caldera.', highlights: ['Crater Lake', 'Ancient Monastery', 'Colobus Monkeys', 'Easy Addis Day Trip'], bestTime: 'Year-round', altitude: '2,989m', getting: '~1.5 hrs from Addis' },
    bilen:         { name: 'Bilen Hot Springs',      region: 'Afar Region',        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Natural geothermal hot springs in the Awash Valley — a relaxing stop on the road to the Danakil Depression.', highlights: ['Hot Springs', 'Geothermal Activity', 'Awash Valley', 'Local Tradition'], bestTime: 'Nov–Mar', altitude: '800m', getting: '~3 hrs from Addis' },
    gambella:      { name: 'Gambella National Park', region: 'Gambella Region',    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote tropical lowland park hosting one of Africa\'s last great wildlife migrations — over a million white-eared kob.', highlights: ['Great Migration', 'White-Eared Kob', 'Nile Lechwe', 'Tropical Wilderness'], bestTime: 'Dec–Feb', altitude: '400m', getting: '~1.5 hr flight from Addis' },
    yangudi:       { name: 'Yangudi Rassa NP',       region: 'Afar Region',        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote Afar desert reserve protecting the African wild ass — one of the world\'s most endangered mammals.', highlights: ['African Wild Ass', 'Grevy\'s Zebra', 'Afar Desert', 'Rare & Remote'], bestTime: 'Nov–Feb', altitude: '400m', getting: '~5 hrs from Addis' },
    kafta:         { name: 'Kafta Sheraro NP',       region: 'Tigray Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s largest national park, protecting the northernmost elephant population in Africa.', highlights: ['Northern Elephants', 'Vast Savanna', 'Tigray Landscape', 'Rare & Wild'], bestTime: 'Nov–Feb', altitude: '600m', getting: '~1 hr from Shire' },
    alatish:       { name: 'Alatish National Park',  region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A little-known park on the Sudan border famous for its spectacular seasonal elephant migration.', highlights: ['Elephant Migration', 'Sudan Border', 'Remote Wilderness', 'Hidden Gem'], bestTime: 'Dec–Mar', altitude: '700m', getting: '~6 hrs from Gondar' },
    babille:       { name: 'Babille Elephant Sanctuary', region: 'Oromia Region', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Home to one of Africa\'s most genetically distinct elephant populations in a striking desert-edge landscape near Harar.', highlights: ['Unique Elephants', 'Desert Landscape', 'Near Harar', 'Rare Subspecies'], bestTime: 'Nov–Feb', altitude: '1,400m', getting: '~1 hr from Harar' },
    borena:        { name: 'Borena Plains',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The ancient pastoral homeland of the Borana people — a semi-arid savanna of acacia scrub, singing wells, and cattle culture.', highlights: ['Borana Culture', 'Singing Wells', 'Acacia Savanna', 'Kenya Borderlands'], bestTime: 'Nov–Feb', altitude: '1,000m', getting: '~7 hrs from Addis' },
    jemmagorge:    { name: 'Jemma River Gorge',      region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of Ethiopia\'s most dramatic gorge systems — a raw trekking frontier of towering cliffs and enormous gelada baboon troops.', highlights: ['Untouched Wilderness', 'Gelada Troops', 'Towering Cliffs', 'Remote Trekking'], bestTime: 'Oct–Mar', altitude: '1,200m', getting: '~3 hrs from Addis' },
    lakeshala:     { name: 'Lake Shala',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Africa\'s deepest Rift Valley lake, framed by steep caldera walls with famous 90°C hot springs on the shore.', highlights: ['90°C Hot Springs', 'Deepest Rift Lake', 'Flamingos', 'Caldera Walls'], bestTime: 'Oct–Mar', altitude: '1,558m', getting: '~2.5 hrs from Addis' },
    lakeabijatta:  { name: 'Lake Abijatta',          region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A shallow, alkaline soda lake that turns pink with millions of lesser flamingos at peak season.', highlights: ['Million Flamingos', 'Soda Lake', 'Endemic Birds', 'Pink Horizons'], bestTime: 'Nov–Feb', altitude: '1,540m', getting: '~2 hrs from Addis' },
    bishoftu:      { name: 'Bishoftu Crater Lakes',  region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A cluster of stunning volcanic crater lakes just an hour from Addis — popular for water sports and birdwatching.', highlights: ['Crater Lakes', 'Irreechaa Festival', 'Water Sports', 'Easy Addis Day Trip'], bestTime: 'Year-round', altitude: '1,920m', getting: '~1 hr from Addis' },
    koka:          { name: 'Koka Reservoir',         region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A large artificial lake on the Awash River famed for excellent sport fishing and spectacular birdwatching.', highlights: ['Sport Fishing', 'African Fish Eagle', 'Pelicans & Storks', 'Easy Day Trip'], bestTime: 'Year-round', altitude: '1,590m', getting: '~1.5 hrs from Addis' },
    lakehayq:      { name: 'Lake Hayq',              region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A serene highland lake surrounded by juniper forest and a hilltop monastery — one of Ethiopia\'s hidden gems.', highlights: ['Hilltop Monastery', 'Juniper Forest', 'Freshwater Lake', 'Quiet Beauty'], bestTime: 'Oct–Mar', altitude: '2,030m', getting: '~6 hrs from Addis' },
    lakeardibo:    { name: 'Lake Ardibo',             region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote and little-visited highland lake in the Wollo region, offering peaceful scenery and authentic rural Ethiopian life.', highlights: ['Remote & Peaceful', 'Highland Scenery', 'Wollo Culture', 'Fishing'], bestTime: 'Oct–Mar', altitude: '2,200m', getting: '~7 hrs from Addis' },
    choke:         { name: 'Choke Mountains',        region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The high-altitude source of the Blue Nile — a vast rolling highland massif with endemic wildlife and Afroalpine moorlands.', highlights: ['Blue Nile Headwaters', 'Afroalpine Moorland', 'Endemic Wildlife', 'Remote Trekking'], bestTime: 'Oct–Mar', altitude: '4,000m', getting: '~3 hrs from Bahir Dar' },
    menagesha:     { name: 'Menagesha Forest',       region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'Ethiopia\'s oldest protected forest — a cool highland escape with giant podocarpus trees and colobus monkeys.', highlights: ['Ancient Forest', 'Colobus Monkeys', 'Podocarpus Trees', 'Easy Addis Escape'], bestTime: 'Year-round', altitude: '2,800m', getting: '~1 hr from Addis' },
    harenna:       { name: 'Harenna Forest',         region: 'Oromia Region',      image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', desc: 'A mysterious Afromontane cloud forest on the southern slopes of the Bale Mountains — home to wild coffee trees, African lions, and colobus monkeys.', highlights: ['Wild Coffee', 'African Lions', 'Cloud Forest', 'Colobus Monkeys'], bestTime: 'Oct–Mar', altitude: '1,500m', getting: '~7 hrs from Addis' },
    kafa:          { name: 'Kafa Biosphere Reserve', region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'The birthplace of coffee — the wild montane forests of Kafa are where Coffea arabica was first discovered.', highlights: ['Birthplace of Coffee', 'UNESCO Biosphere', 'Kafa Culture', 'Rainforest'], bestTime: 'Oct–Mar', altitude: '1,900m', getting: '~8 hrs from Addis' },
    yayu:          { name: 'Yayu Coffee Forest',     region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of the last great wild coffee forests on Earth — a UNESCO Biosphere Reserve in western Ethiopia.', highlights: ['Wild Arabica Coffee', 'UNESCO Biosphere', 'Intact Rainforest', 'Western Frontier'], bestTime: 'Oct–Mar', altitude: '1,600m', getting: '~9 hrs from Addis' },
    chebera:       { name: 'Chebera Churchura NP',   region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'One of Ethiopia\'s newest and least-visited parks, with some of the country\'s highest elephant and hippo densities.', highlights: ['Forest Elephants', 'Hippo Pools', 'Montane Forest', 'Off the Beaten Path'], bestTime: 'Nov–Feb', altitude: '1,500m', getting: '~7 hrs from Addis' },
    kundi:         { name: 'Kundi Mountain',         region: 'SNNPR',              image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A remote highland peak in southwest Ethiopia offering village homestay trekking and remarkable endemic birdlife.', highlights: ['Village Homestays', 'Endemic Birds', 'Remote Highlands', 'Authentic Culture'], bestTime: 'Oct–Mar', altitude: '2,800m', getting: '~8 hrs from Addis' },
    gibegorge:     { name: 'Gibe Gorge',             region: 'Oromia Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A spectacular river canyon in southwest Ethiopia with tropical dry forest, natural hot springs, and outstanding birding.', highlights: ['Tropical Forest', 'Hot Springs', 'Raptor Watching', 'Gibe River'], bestTime: 'Oct–Mar', altitude: '1,000m', getting: '~4 hrs from Addis' },
    tisissat:      { name: 'Tis Issat Gorge',        region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', desc: 'The dramatic gorge below the Blue Nile Falls — walk through the mist to the foot of the falls.', highlights: ['Blue Nile Gorge', 'Waterfall Trek', 'Village Life', 'Papyrus Boats'], bestTime: 'Sep–Nov', altitude: '1,700m', getting: '~30 min from Bahir Dar' },
    guassa:        { name: 'Guassa Plateau',         region: 'Amhara Region',      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600', desc: 'A high-altitude community conservation area and one of the best places to see the Ethiopian wolf outside Bale.', highlights: ['Ethiopian Wolf', 'Community Conservation', 'Heather Moorland', 'Star Gazing'], bestTime: 'Oct–Mar', altitude: '3,600m', getting: '~4 hrs from Addis' }
  };

  const CAT_LABELS = { cultural: 'Cultural', nature: 'Nature', wildlife: 'Wildlife', lakes: 'Lakes', volcanic: 'Volcanic' };

  function openPopup(destId) {
    const dest = MAP_DATA[destId];
    if (!dest) return;

    pins.forEach(p => {
      p.classList.remove('active');
      if (!p.classList.contains('pin-addis')) p.classList.add('dimmed');
    });

    const activePin = document.querySelector(`[data-dest="${destId}"]`);
    if (activePin) { activePin.classList.add('active'); activePin.classList.remove('dimmed'); }

    let cat = 'cultural';
    if (activePin) {
      if (activePin.classList.contains('pin-wildlife'))      cat = 'wildlife';
      else if (activePin.classList.contains('pin-nature'))   cat = 'nature';
      else if (activePin.classList.contains('pin-lakes'))    cat = 'lakes';
      else if (activePin.classList.contains('pin-volcanic')) cat = 'volcanic';
    }

    document.getElementById('mapPopupImg').src            = dest.image;
    document.getElementById('mapPopupImg').alt            = dest.name;
    document.getElementById('mapPopupName').textContent   = dest.name;
    document.getElementById('mapPopupDesc').textContent   = dest.desc;
    document.getElementById('mapPopupRegion').textContent = dest.region;

    const badgeEl = document.getElementById('mapPopupCatBadge');
    if (badgeEl) { badgeEl.textContent = CAT_LABELS[cat] || cat; badgeEl.className = `map-popup-cat-badge cat-${cat}`; }

    document.getElementById('mapPopupHighlights').innerHTML =
      dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('');

    document.getElementById('mapPopupMeta').innerHTML = `
      <span><b>Best Time</b>${dest.bestTime}</span>
      <span><b>Altitude</b>${dest.altitude}</span>
      <span><b>Getting There</b>${dest.getting}</span>
    `;

    popup.classList.add('visible');
    backdrop.classList.add('visible');
  }

  function closePopup() {
    popup.classList.remove('visible');
    backdrop.classList.remove('visible');
    pins.forEach(p => { p.classList.remove('active', 'dimmed', 'cat-hidden'); });
  }

  pins.forEach(pin => pin.addEventListener('click', () => openPopup(pin.dataset.dest)));
  closeBtn.addEventListener('click', closePopup);
  backdrop.addEventListener('click', closePopup);

  const popupCta = document.getElementById('mapPopupCta');
  if (popupCta) {
    // FIX: CTA now scrolls to tours, not contact
    popupCta.addEventListener('click', () => {
      closePopup();
      document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
    });
  }

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

  // Mobile destination cards
  document.querySelectorAll('.mobile-dest-card').forEach(card => {
    card.addEventListener('click', () => openPopup(card.dataset.dest));
  });

  // Map search
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
          const pin = document.querySelector(`.map-pin[data-dest="${item.dataset.dest}"]`);
          if (pin) pin.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    });

    mapSearchInput.addEventListener('blur', () => {
      setTimeout(() => { mapSearchDropdown.classList.remove('open'); mapSearchDropdown.innerHTML = ''; }, 180);
    });

    const sidenavSearchBtn = document.getElementById('sidenavSearch');
    if (sidenavSearchBtn) sidenavSearchBtn.addEventListener('click', () => mapSearchInput.focus());
  }

  // Category filter
  const catBtns = document.querySelectorAll('.map-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const activeCat = btn.dataset.cat;
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
      const activePin = document.querySelector('.map-pin.active');
      if (activePin && activePin.classList.contains('cat-hidden')) closePopup();
    });
  });

  // Sidenav button states
  const sidenavBtns = document.querySelectorAll('.map-sidenav-btn');
  sidenavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sidenavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Zoom controls
  const zoomInBtn    = document.getElementById('mapZoomIn');
  const zoomOutBtn   = document.getElementById('mapZoomOut');
  const zoomResetBtn = document.getElementById('mapZoomReset');

  if (zoomInBtn && zoomOutBtn) {
    let zoomLevel = 1;
    const ZOOM_STEP = 0.15, ZOOM_MIN = 0.6, ZOOM_MAX = 2.2;

    function applyZoom() {
      mapFrame.style.setProperty('--map-zoom', zoomLevel);
      zoomInBtn.disabled  = zoomLevel >= ZOOM_MAX;
      zoomOutBtn.disabled = zoomLevel <= ZOOM_MIN;
    }

    zoomInBtn.addEventListener('click', () => { zoomLevel = Math.min(ZOOM_MAX, +(zoomLevel + ZOOM_STEP).toFixed(2)); applyZoom(); });
    zoomOutBtn.addEventListener('click', () => { zoomLevel = Math.max(ZOOM_MIN, +(zoomLevel - ZOOM_STEP).toFixed(2)); applyZoom(); });
    if (zoomResetBtn) zoomResetBtn.addEventListener('click', () => { zoomLevel = 1; applyZoom(); });
  }
}

/* ================================================================
   7. AI TRAVEL RECOMMENDER
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
      { value: '1-5',   icon: '⚡',  text: '1–5 Days (Short Break)' },
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
      { value: 'solo',   icon: '🧍',    text: 'Solo' },
      { value: 'couple', icon: '👫',    text: 'Couple' },
      { value: 'family', icon: '👨‍👩‍👧', text: 'Family with Kids' },
      { value: 'group',  icon: '👥',    text: 'Group of Friends' }
    ]
  },
  {
    q: 'What landscape excites you most?',
    options: [
      { value: 'mountain', icon: '🏔️', text: 'Mountains & Highlands' },
      { value: 'volcanic', icon: '🌋', text: 'Volcanic & Extreme' },
      { value: 'wildlife', icon: '🐘', text: 'Wildlife & Savanna' },
      { value: 'ancient',  icon: '⛪', text: 'Ancient Cities & Ruins' }
    ]
  }
];

function initRecommender() {
  recStep    = 0;
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
    recStep    = 0;
    recAnswers = {};
    document.getElementById('recResults').style.display       = 'none';
    document.getElementById('recQuestionWrap').style.display  = 'block';
    document.getElementById('recNext').style.display          = 'inline-flex';
    renderRecQuestion();
  });
}

function renderRecQuestion() {
  const total = REC_QUESTIONS.length;
  const q     = REC_QUESTIONS[recStep];

  document.getElementById('recProgressFill').style.width   = `${(recStep / total) * 100}%`;
  document.getElementById('recProgressLabel').textContent  = `Question ${recStep + 1} of ${total}`;
  document.getElementById('recBack').style.display         = recStep > 0 ? 'inline-flex' : 'none';
  document.getElementById('recNext').textContent           = recStep === total - 1 ? 'See My Recommendations →' : 'Next →';

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
    const wrap = document.getElementById('recQuestionWrap');
    wrap.classList.remove('shake');
    void wrap.offsetWidth;
    wrap.classList.add('shake');
    return;
  }
  if (recStep < REC_QUESTIONS.length - 1) { recStep++; renderRecQuestion(); }
  else showRecResults();
}

function showRecResults() {
  const activity    = recAnswers[0];
  const duration    = recAnswers[1];
  const budget      = recAnswers[2];
  const travelStyle = recAnswers[3];
  const landscape   = recAnswers[4];

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

    // Budget match
    const budgetMap = { budget: [0, 700], mid: [600, 950], luxury: [900, 9999], flexible: [0, 9999] };
    const [bLo, bHi] = budgetMap[budget] || [0, 9999];
    if (tour.price >= bLo && tour.price <= bHi) score += 15;

    // Landscape match
    const landscapeMap = {
      mountain: ['simien', 'bale'],
      volcanic: ['danakil'],
      wildlife: ['bale', 'omo'],
      ancient:  ['lalibela', 'harar']
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

  // FIX: show top 3 results, not just 1
  const top3 = scored.sort((a, b) => b.score - a.score).slice(0, 3);

  document.getElementById('recProgressFill').style.width  = '100%';
  document.getElementById('recProgressLabel').textContent = 'Your perfect destinations are ready!';
  document.getElementById('recQuestionWrap').style.display = 'none';
  document.getElementById('recNext').style.display         = 'none';
  document.getElementById('recBack').style.display         = 'none';

  document.getElementById('recResultsGrid').innerHTML = top3.map((tour, idx) => `
    <div class="tour-card reveal" style="margin:0 auto;">
      <div class="tour-card-img-wrap">
        <img class="tour-card-img" src="${tour.image}" alt="${tour.title}" loading="lazy" />
        <span class="tour-card-badge">${idx === 0 ? '🏆 Best Match' : idx === 1 ? '🥈 Great Fit' : '🥉 Also Consider'}</span>
      </div>
      <div class="tour-card-body">
        <span class="tour-card-type">${tour.activity.charAt(0).toUpperCase() + tour.activity.slice(1)}</span>
        <h3 class="tour-card-title">${tour.title}</h3>
        <p style="font-size:0.9rem;color:var(--clr-muted);margin:0.5rem 0 1rem;line-height:1.55;">${tour.description}</p>
        <div class="tour-card-highlights">
          ${tour.highlights.slice(0, 3).map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
      <div class="tour-card-footer">
        <div>
          <span class="tour-price">$${tour.price}</span>
          <span class="tour-price-note"> / person</span>
        </div>
        <button class="tour-card-btn" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book Now</button>
      </div>
    </div>
  `).join('');

  document.getElementById('recResults').style.display = 'flex';

  requestAnimationFrame(() => {
    document.querySelectorAll('#recResultsGrid .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 120);
    });
  });
}

/* ================================================================
   8. SEASONAL TRAVEL DASHBOARD
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
  const months   = SEASONAL_DATA.months;
  const statuses = SEASONAL_DATA.monthStatus;
  const status   = statuses[monthIdx];
  const badge    = document.getElementById('seasonalMonthBadge');

  document.getElementById('seasonalMonthName').textContent = months[monthIdx];

  const statusLabels = { peak: 'Peak Season', shoulder: 'Shoulder Season', 'off-peak': 'Off-Peak Season', rainy: 'Rainy Season' };
  badge.textContent  = statusLabels[status] || status;
  badge.className    = `seasonal-badge ${status}`;

  const grid = document.getElementById('seasonalGrid');
  grid.innerHTML = SEASONAL_DATA.destinations.map(dest => {
    const s        = dest.status[monthIdx];
    const [lo, hi] = dest.temps[monthIdx];
    const note     = dest.notes[monthIdx];
    const barW     = Math.round(((hi - lo) / 40) * 100);
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
   9. PACKING CHECKLIST GENERATOR
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
  if (!data) {
    alert('Checklist not available for this destination yet.');
    return;
  }

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

  sectionsEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const key   = cb.dataset.key;
      checklistState[key] = cb.checked;
      document.getElementById(`item-${key}`).classList.toggle('checked', cb.checked);
      updateChecklistProgress(data);
    });
  });

  updateChecklistProgress(data);
}

function updateChecklistProgress(data) {
  const total   = data.sections.reduce((s, sec) => s + sec.items.length, 0);
  const checked = Object.values(checklistState).filter(Boolean).length;
  document.getElementById('checklistProgressText').textContent    = `${checked} of ${total} items checked`;
  document.getElementById('checklistProgressFill').style.width    = `${total ? (checked / total) * 100 : 0}%`;
}

function downloadChecklist() {
  const dest = document.getElementById('checklistDest').value;
  if (!dest) return;
  const data    = CHECKLISTS[dest];
  let content   = `${data.title}\n${'='.repeat(data.title.length)}\n\n`;
  data.sections.forEach(section => {
    content += `${section.icon} ${section.label}\n${'-'.repeat(30)}\n`;
    section.items.forEach(item => { content += `[ ] ${item}\n`; });
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
   10. GALLERY
   ================================================================ */
function initGallery() {
  renderGallery('all');

  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      galleryFilter = btn.dataset.filter;
      renderGallery(galleryFilter);
    });
  });

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

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb.style.display === 'none') return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length; updateLightbox(); }
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
  document.getElementById('lightboxImg').src           = item.image;
  document.getElementById('lightboxImg').alt           = item.caption;
  document.getElementById('lightboxCaption').textContent = `${item.caption} (${lightboxIndex + 1} / ${lightboxItems.length})`;
}

/* ================================================================
   11. TRAVEL BUDGET PLANNER
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
    { id: 'budgetAccomm',     key: 'accomm' },
    { id: 'budgetFood',       key: 'food' },
    { id: 'budgetActivities', key: 'activities' },
    { id: 'budgetTransport',  key: 'transport' }
  ];

  optionGroups.forEach(({ id, key }) => {
    const group = document.getElementById(id);
    if (!group) return;
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
  const d          = budgetState.duration;
  const accomm     = budgetState.accomm * d;
  const food       = budgetState.food * d;
  const activities = budgetState.activities * d;
  const transport  = budgetState.transport * d;
  const total      = accomm + food + activities + transport;

  const grandTotalEl   = document.getElementById('budgetGrandTotal');
  const centerTotalEl  = document.getElementById('budgetTotalCenter');
  if (grandTotalEl)  grandTotalEl.textContent  = `$${total.toLocaleString()}`;
  if (centerTotalEl) centerTotalEl.textContent = `$${total.toLocaleString()}`;

  const categories = [
    { label: 'Accommodation', value: accomm,     color: '#C1440E' },
    { label: 'Food & Dining', value: food,        color: '#D4820A' },
    { label: 'Activities',    value: activities,  color: '#2D5016' },
    { label: 'Transport',     value: transport,   color: '#4A7C3F' }
  ];

  const breakdownEl = document.getElementById('budgetBreakdownList');
  if (breakdownEl) {
    breakdownEl.innerHTML = categories.map(c => `
      <div class="budget-breakdown-row">
        <div class="budget-breakdown-dot" style="background:${c.color}"></div>
        <span class="budget-breakdown-label">${c.label}</span>
        <span class="budget-breakdown-val">$${c.value.toLocaleString()}</span>
      </div>
    `).join('');
  }

  drawBudgetDonut(categories, total);
}

function drawBudgetDonut(categories, total) {
  const canvas = document.getElementById('budgetChart');
  if (!canvas) return;
  const ctx   = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  const R     = Math.min(w, h) / 2 - 8;
  const lineW = R * 0.38;

  ctx.clearRect(0, 0, w, h);

  if (!total) {
    ctx.beginPath();
    ctx.arc(cx, cy, R - lineW / 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth   = lineW;
    ctx.stroke();
    return;
  }

  let startAngle = -Math.PI / 2;
  const gapAngle = 0.03;

  categories.forEach(cat => {
    if (!cat.value) return;
    const slice = (cat.value / total) * Math.PI * 2 - gapAngle;
    ctx.beginPath();
    ctx.arc(cx, cy, R - lineW / 2, startAngle, startAngle + slice);
    ctx.strokeStyle = cat.color;
    ctx.lineWidth   = lineW;
    ctx.lineCap     = 'butt';
    ctx.stroke();
    startAngle += slice + gapAngle;
  });
}

/* ================================================================
   12. CONTACT FORM
   ================================================================ */
function initContact() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name      = document.getElementById('contactName').value.trim();
    const email     = document.getElementById('contactEmail').value.trim();
    const message   = document.getElementById('contactMessage').value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message || !emailValid) {
      [
        { id: 'contactName',    val: name },
        { id: 'contactEmail',   val: emailValid ? email : '' },
        { id: 'contactMessage', val: message }
      ].forEach(({ id, val }) => {
        document.getElementById(id).style.borderColor = val ? '' : 'var(--clr-terracotta)';
      });
      if (email && !emailValid) {
        const emailEl = document.getElementById('contactEmail');
        emailEl.style.borderColor = 'var(--clr-terracotta)';
        emailEl.placeholder       = 'Please enter a valid email address';
      }
      return;
    }

    form.style.opacity       = '0.5';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
      form.reset();
      form.style.opacity       = '';
      form.style.pointerEvents = '';
      success.style.display    = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }, 1000);
  });

  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
}

/* ================================================================
   13. SCROLL REVEAL
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
  initRecommender();
  initSeasonal();
  initChecklist();
  initGallery();
  initContact();
  initScrollReveal();
});

/* ================================================================
   TOUR PAGE (tour.html) — separate card renderer
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

    const TOURS_PAGE = [
      { id: 1,  title: 'Simien Mountains',          duration: 10, activity: 'trekking',  badge: 'Adventure Pick',     image: IMG.simien,        highlights: ['Gelada Baboons', 'Ras Dashen Peak', 'Dramatic Escarpments'],           description: 'Trek through Africa\'s Grand Canyon — dramatic cliffs, endemic wildlife, and breathtaking highland scenery.' },
      { id: 2,  title: 'Bale Mountains',            duration: 8,  activity: 'wildlife',  badge: 'Wildlife Gem',       image: IMG.bale,          highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Harenna Forest'],                   description: 'Spot Ethiopian wolves and mountain nyala in Africa\'s largest Afroalpine habitat.' },
      { id: 3,  title: 'Blue Nile Falls',           duration: 3,  activity: 'nature',    badge: 'Scenic Wonder',      image: IMG.bluenile,      highlights: ['Tis Abay Falls', 'Gorge Views', 'Lake Tana Boats'],                    description: 'Visit the thundering Blue Nile Falls and sail to ancient island monasteries.' },
      { id: 4,  title: 'Danakil Depression',        duration: 5,  activity: 'trekking',  badge: 'Bucket List',        image: IMG.danakil,       highlights: ['Erta Ale Volcano', 'Salt Flats', 'Dallol Crater'],                     description: 'Explore Earth\'s hottest place — volcanic lava lakes, sulfuric springs, and vast salt deserts.' },
      { id: 5,  title: 'Erta Ale Volcano',          duration: 3,  activity: 'trekking',  badge: 'Extreme Adventure',  image: IMG.ertaale,       highlights: ['Active Lava Lake', 'Night Hike', 'Afar Desert'],                       description: 'Night hike to one of the world\'s only persistent lava lakes glowing in the Afar darkness.' },
      { id: 6,  title: 'Lake Tana',                 duration: 4,  activity: 'cultural',  badge: 'Hidden Gem',         image: IMG.laketana,      highlights: ['Island Monasteries', 'Blue Nile Source', 'Hippos'],                    description: 'Ethiopia\'s largest lake — source of the Blue Nile, dotted with ancient island monasteries.' },
      { id: 7,  title: 'Sof Omar Caves',            duration: 3,  activity: 'nature',    badge: 'Underground Wonder', image: IMG.sofomar,       highlights: ['Limestone Caves', 'Web River', 'Bat Colonies'],                        description: 'Explore Africa\'s largest cave system carved by the Web River through ancient limestone.' },
      { id: 8,  title: 'Wenchi Crater Lake',        duration: 3,  activity: 'nature',    badge: 'Scenic Escape',      image: IMG.wenchi,        highlights: ['Crater Lake', 'Hot Springs', 'Monastery Island'],                      description: 'A stunning volcanic crater lake with a monastery island, hot springs, and lush forest rim.' },
      { id: 9,  title: 'Abijatta-Shalla Lakes',     duration: 4,  activity: 'wildlife',  badge: 'Bird Paradise',      image: IMG.abjatta,       highlights: ['Flamingos', 'Hot Springs', 'Rift Valley Views'],                       description: 'Twin lakes in the Rift Valley — Abijatta for flamingos, Shalla for hot springs and deep waters.' },
      { id: 10, title: 'Nech Sar National Park',    duration: 5,  activity: 'wildlife',  badge: 'Wildlife Safari',    image: IMG.nechsar,       highlights: ['Zebras', 'Crocodiles', 'White Grass Plains'],                          description: 'White grass plains between lakes Abaya and Chamo, home to zebras, crocs, and hippos.' },
      { id: 11, title: 'Awash National Park',       duration: 4,  activity: 'wildlife',  badge: 'Classic Safari',     image: IMG.awash,         highlights: ['Oryx', 'Awash Falls', 'Afar Lowlands'],                                description: 'Ethiopia\'s most accessible park — oryx, baboons, and spectacular Awash Falls.' },
      { id: 12, title: 'Omo National Park',         duration: 7,  activity: 'wildlife',  badge: 'Wild South',         image: IMG.omonational,   highlights: ['Elephant Herds', 'Buffalo', 'Remote Wilderness'],                      description: 'One of Africa\'s largest and most remote parks — vast wilderness teeming with large mammals.' },
      { id: 13, title: 'Mago National Park',        duration: 5,  activity: 'wildlife',  badge: 'Tribal Country',     image: IMG.mago,          highlights: ['Mursi Tribe', 'Buffalo', 'Omo River'],                                 description: 'Adjacent to the Omo Valley — combine tribal cultural visits with genuine African safari.' },
      { id: 14, title: 'Chebera Churchura NP',      duration: 5,  activity: 'wildlife',  badge: 'Elephant Haven',     image: IMG.chebera,       highlights: ['Elephant Herds', 'Hippos', 'Rainforest'],                              description: 'A hidden gem sheltering one of Ethiopia\'s largest elephant populations in lush rainforest.' },
      { id: 15, title: 'Gambella National Park',    duration: 7,  activity: 'wildlife',  badge: 'Great Migration',    image: IMG.gambella,      highlights: ['White-eared Kob Migration', 'Nile Lechwe', 'Papyrus Swamps'],          description: 'Witness one of Africa\'s greatest animal migrations — white-eared kob in the thousands.' },
      { id: 16, title: 'Yangudi Rassa NP',          duration: 4,  activity: 'wildlife',  badge: 'Rare Encounter',     image: IMG.yangudi,       highlights: ['African Wild Ass', 'Grevy\'s Zebra', 'Afar Plains'],                   description: 'One of the last refuges of the critically endangered African wild ass in the Afar lowlands.' },
      { id: 17, title: 'Kafta Sheraro NP',          duration: 5,  activity: 'wildlife',  badge: 'Northern Wild',      image: IMG.kafta,         highlights: ['Elephant Herds', 'Tekezé River', 'Dry Woodland'],                     description: 'Ethiopia\'s northernmost park along the Tekezé River, sheltering large elephant populations.' },
      { id: 18, title: 'Alatish National Park',     duration: 4,  activity: 'wildlife',  badge: 'New Frontier',       image: IMG.alitash,       highlights: ['Lions', 'Elephants', 'Border Wilderness'],                             description: 'A newly established park on the Sudanese border — raw, untouched, and genuinely wild.' },
      { id: 19, title: 'Gheralta Mountains',        duration: 5,  activity: 'cultural',  badge: 'Cliff Churches',     image: IMG.gheralta,      highlights: ['Rock-Hewn Churches', 'Tigray Cliffs', 'Ancient Art'],                  description: 'Dramatic sandstone towers hiding ancient Tigrayan rock-hewn churches with remarkable frescoes.' },
      { id: 20, title: 'Tis Issat Gorge',           duration: 3,  activity: 'nature',    badge: 'Gorge Trek',         image: IMG.tisissat,      highlights: ['Blue Nile Gorge', 'Waterfall Trek', 'Village Life'],                   description: 'Trek through the dramatic gorge below the Blue Nile Falls — a world of its own.' },
      { id: 21, title: 'Blue Nile Gorge',           duration: 4,  activity: 'trekking',  badge: 'Epic Trek',          image: IMG.bluenilegorge, highlights: ['Ethiopia\'s Grand Canyon', 'Suspension Bridge', 'Rare Birds'],         description: 'One of the deepest gorges in Africa — a dramatic drive and trek through Ethiopia\'s heartland.' },
      { id: 22, title: 'Rift Valley Lakes',         duration: 7,  activity: 'nature',    badge: 'Lakes Circuit',      image: IMG.riftvalley,    highlights: ['8 Rift Lakes', 'Flamingos', 'Hot Springs'],                            description: 'A road trip through the Ethiopian Rift Valley visiting eight spectacular alkaline lakes.' },
      { id: 23, title: 'Lake Langano',              duration: 3,  activity: 'nature',    badge: 'Beach Escape',       image: IMG.langano,       highlights: ['Bilharzia-Free Swimming', 'Pelicans', 'Shoreline Lodges'],             description: 'The only bilharzia-free lake in Ethiopia — perfect for swimming, sailing, and relaxing.' },
      { id: 24, title: 'Lake Ziway',                duration: 3,  activity: 'wildlife',  badge: 'Bird Haven',         image: IMG.ziway,         highlights: ['400+ Bird Species', 'Hippos', 'Island Churches'],                     description: 'A birdwatcher\'s paradise with 400+ species and ancient island churches.' },
      { id: 25, title: 'Lake Abaya',                duration: 4,  activity: 'nature',    badge: 'Red Waters',         image: IMG.abaya,         highlights: ['Red-Brown Waters', 'Crocodiles', 'Nech Sar Views'],                    description: 'Ethiopia\'s second largest lake — famously red-brown waters, giant crocodiles, and hippos.' },
      { id: 26, title: 'Lake Chamo',                duration: 4,  activity: 'wildlife',  badge: 'Crocodile Beach',    image: IMG.chamo,         highlights: ['Crocodile Market', 'Hippos', 'Nechisar Plains'],                       description: 'The famous Crocodile Market — the largest gathering of Nile crocodiles anywhere in Ethiopia.' },
      { id: 27, title: 'Lake Hawassa',              duration: 3,  activity: 'wildlife',  badge: 'City & Nature',      image: IMG.hawassa,       highlights: ['Fish Market', 'Marabou Storks', 'Hippos'],                             description: 'Hawassa\'s stunning lakeside — marabou storks, hippos, and the legendary fish market.' },
      { id: 28, title: 'Lake Shala',                duration: 3,  activity: 'nature',    badge: 'Deep & Hot',         image: IMG.placeholder,   highlights: ['Ethiopia\'s Deepest Lake', 'Hot Springs', 'Flamingos'],                description: 'Ethiopia\'s deepest lake with steaming hot springs on its shores and flocks of flamingos.' },
      { id: 29, title: 'Lake Abijatta',             duration: 3,  activity: 'wildlife',  badge: 'Flamingo Lake',      image: IMG.placeholder,   highlights: ['Lesser Flamingos', 'Soda Lake', 'Rift Valley Scenery'],               description: 'A shallow soda lake turning pink with thousands of lesser flamingos.' },
      { id: 30, title: 'Mount Chilalo',             duration: 4,  activity: 'trekking',  badge: 'Highland Trek',      image: IMG.simien,        highlights: ['4,036m Summit', 'Arsi Highlands', 'Endemic Flora'],                   description: 'Trek to the summit of Mount Chilalo in the Arsi highlands.' },
      { id: 31, title: 'Mount Batu',               duration: 4,  activity: 'trekking',  badge: 'Summit Challenge',   image: IMG.bale,          highlights: ['4,307m Summit', 'Bale Highlands', 'Ethiopian Wolf'],                  description: 'A challenging summit in the Bale highlands with chances of spotting the Ethiopian wolf.' },
      { id: 32, title: 'Mount Tullu Dimtu',        duration: 5,  activity: 'trekking',  badge: 'Second Highest',     image: IMG.bale,          highlights: ['4,377m Peak', 'Sanetti Plateau', 'Roof of Ethiopia'],                 description: 'Ethiopia\'s second highest peak on the Sanetti Plateau — a high-altitude wilderness experience.' },
      { id: 33, title: 'Guassa Plateau',           duration: 5,  activity: 'wildlife',  badge: 'Wolf Country',       image: IMG.simien,        highlights: ['Ethiopian Wolf', 'Gelada Baboons', 'Community Conservation'],         description: 'One of the best places in the world to see the Ethiopian wolf in a community-managed reserve.' },
      { id: 34, title: 'Borena Plains',            duration: 6,  activity: 'cultural',  badge: 'Pastoral Culture',   image: IMG.omo,           highlights: ['Borena Pastoralists', 'Cattle Ceremonies', 'Mega Wells'],             description: 'Journey to the Borena lowlands — traditional pastoralist culture, cattle ceremonies, and ancient wells.' },
      { id: 35, title: 'Babille Elephant Sanctuary', duration: 4, activity: 'wildlife', badge: 'Elephant Walk',      image: IMG.placeholder,   highlights: ['Rare Desert Elephants', 'Volcanic Landscape', 'Somali Border'],       description: 'Track rare desert-adapted elephants in a striking volcanic landscape near the Somali border.' },
      { id: 36, title: 'Bilen Hot Springs',        duration: 3,  activity: 'nature',    badge: 'Natural Spa',        image: IMG.placeholder,   highlights: ['Thermal Springs', 'Scenic Gorge', 'Relaxation'],                      description: 'Soak in natural thermal hot springs set within a beautiful gorge.' },
      { id: 37, title: 'Fentale Crater',           duration: 3,  activity: 'trekking',  badge: 'Volcanic Hike',      image: IMG.danakil,       highlights: ['Volcanic Crater', 'Afar Views', 'Lava Fields'],                       description: 'Hike to the rim of the Fentale volcano crater for panoramic views across the Afar lowlands.' },
      { id: 38, title: 'Koka Reservoir',           duration: 3,  activity: 'wildlife',  badge: 'Bird Watching',      image: IMG.placeholder,   highlights: ['Pelicans', 'African Fish Eagle', 'Rift Valley'],                      description: 'A birder\'s stop on the Rift Valley road — pelicans, fish eagles, and water birds abound.' },
      { id: 39, title: 'Lake Hayq',                duration: 3,  activity: 'cultural',  badge: 'Sacred Waters',      image: IMG.placeholder,   highlights: ['Hayq Estifanos Monastery', 'Highland Lake', 'Medieval History'],      description: 'Visit the ancient Hayq Estifanos monastery on a serene highland lake.' },
      { id: 40, title: 'Lake Ardibo',              duration: 3,  activity: 'nature',    badge: 'Hidden Lake',        image: IMG.placeholder,   highlights: ['Remote Highland Lake', 'Scenic Landscape', 'Wollo Region'],           description: 'A hidden highland lake in the Wollo region — remote, peaceful, and rarely visited.' },
      { id: 41, title: 'Mount Zuqualla',           duration: 2,  activity: 'cultural',  badge: 'Crater Monastery',   image: IMG.lalibela,      highlights: ['Crater Lake', 'Ancient Monastery', 'Addis Day Trip'],                 description: 'An easy day trip from Addis — a sacred crater lake and ancient monastery.' },
      { id: 42, title: 'Debre Libanos Gorge',      duration: 3,  activity: 'nature',    badge: 'Gorge & Monks',      image: IMG.placeholder,   highlights: ['Jemma River Gorge', 'Gelada Baboons', 'Debre Libanos Monastery'],    description: 'One of Ethiopia\'s most dramatic gorges — geladas, lammergeyers, and a revered monastery.' },
      { id: 43, title: 'Jemma River Gorge',        duration: 4,  activity: 'trekking',  badge: 'Wild Gorge',         image: IMG.simien,        highlights: ['Remote Trekking', 'Gelada Baboons', 'Untouched Wilderness'],          description: 'A remote and largely unexplored gorge system — one of Ethiopia\'s great trekking frontiers.' },
      { id: 44, title: 'Kundi Mountain',           duration: 4,  activity: 'trekking',  badge: 'Off the Beaten',     image: IMG.bale,          highlights: ['Remote Highlands', 'Endemic Birds', 'Village Stays'],                 description: 'Off-the-beaten-path highland trekking with village homestays and endemic birdlife.' },
      { id: 45, title: 'Gibe Gorge',               duration: 4,  activity: 'nature',    badge: 'River Canyon',       image: IMG.placeholder,   highlights: ['Gibe River', 'Hot Springs', 'Tropical Forest'],                       description: 'A spectacular river gorge with tropical forest, hot springs, and superb birding.' },
      { id: 46, title: 'Choke Mountains',          duration: 5,  activity: 'trekking',  badge: 'Blue Nile Source',   image: IMG.simien,        highlights: ['Blue Nile Headwaters', 'Alpine Moorland', 'Endemic Wildlife'],        description: 'Trek to the headwaters of the Blue Nile high in the Choke Mountains above Lake Tana.' },
      { id: 47, title: 'Menagesha Forest',         duration: 2,  activity: 'nature',    badge: 'Ancient Forest',     image: IMG.bale,          highlights: ['Ancient Podocarpus Forest', 'Colobus Monkeys', 'Addis Day Trip'],     description: 'Ethiopia\'s oldest protected forest — giant podocarpus trees and colobus monkeys.' },
      { id: 48, title: 'Harenna Forest',           duration: 5,  activity: 'wildlife',  badge: 'Cloud Forest',       image: IMG.bale,          highlights: ['Wild Coffee', 'Lions', 'Cloud Forest Canopy'],                        description: 'Descend into the mysterious Harenna cloud forest — wild coffee, African lions, and colobus monkeys.' },
      { id: 49, title: 'Kafa Biosphere Reserve',   duration: 6,  activity: 'nature',    badge: 'Coffee Origin',      image: IMG.placeholder,   highlights: ['Birthplace of Coffee', 'Rainforest', 'Kafa Culture'],                 description: 'Visit the birthplace of coffee — the wild forests of Kafa where Coffea arabica was first discovered.' },
      { id: 50, title: 'Yayu Coffee Forest',       duration: 6,  activity: 'nature',    badge: 'UNESCO Biosphere',   image: IMG.placeholder,   highlights: ['Wild Arabica Coffee', 'Biosphere Reserve', 'Indigenous Forest'],     description: 'Explore the Yayu UNESCO Biosphere Reserve — one of the last great wild coffee forests on Earth.' }
    ];

    let filtered = [...TOURS_PAGE];

    function renderCards(list) {
      const grid  = document.getElementById('toursGrid');
      const empty = document.getElementById('toursEmpty');
      const count = document.getElementById('toursCount');
      if (!list.length) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        if (count) count.innerHTML = '<strong>0</strong> tours found';
        return;
      }
      empty.style.display = 'none';
      if (count) count.innerHTML = `<strong>${list.length}</strong> tour${list.length !== 1 ? 's' : ''} available`;
      grid.innerHTML = list.map(t => `
        <div class="tour-card reveal">
          <div class="tour-card-img-wrap">
            <img class="tour-card-img" src="${t.image}" alt="${t.title}" loading="lazy" />
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
      const search      = document.getElementById('tourSearch').value.toLowerCase();
      const activity    = document.getElementById('filterActivity').value;
      const duration    = document.getElementById('filterDuration').value;
      const sort        = document.getElementById('tourSort').value;
      filtered = TOURS_PAGE.filter(t => {
        const matchSearch   = !search || t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search);
        const matchActivity = activity === 'all' || t.activity === activity;
        let   matchDuration = true;
        if (duration !== 'all') {
          if (duration === '15+') matchDuration = t.duration >= 15;
          else { const [lo, hi] = duration.split('-').map(Number); matchDuration = t.duration >= lo && t.duration <= hi; }
        }
        return matchSearch && matchActivity && matchDuration;
      });
      if (sort === 'duration-asc')       filtered.sort((a, b) => a.duration - b.duration);
      else if (sort === 'duration-desc') filtered.sort((a, b) => b.duration - a.duration);
      renderCards(filtered);
    }

    const searchInput = document.getElementById('tourSearch');
    searchInput.addEventListener('input', applyFilters);
    document.getElementById('tourSort').addEventListener('change', applyFilters);
    document.getElementById('filterActivity').addEventListener('change', applyFilters);
    document.getElementById('filterDuration').addEventListener('change', applyFilters);
    document.getElementById('filterReset').addEventListener('click', () => {
      searchInput.value = '';
      document.getElementById('tourSort').value     = 'popularity';
      document.getElementById('filterActivity').value = 'all';
      document.getElementById('filterDuration').value = 'all';
      applyFilters();
    });

    renderCards(TOURS_PAGE);
  })();
}

/* ================================================================
   TOUR PAGE HERO SLIDESHOW
   ================================================================ */
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
    { title: 'One of Africa\'s Greatest Gorges', sub: 'A journey through Ethiopia\'s grand canyon' }
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

  dots.forEach(dot => dot.addEventListener('click', () => goToSlide(+dot.dataset.slide)));
  setInterval(() => goToSlide((current + 1) % slides.length), 5000);
}
