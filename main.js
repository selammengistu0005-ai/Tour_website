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

/* ── TIMELINE DATA ─────────────────────────────────────────── */
const TIMELINES = {
  lalibela: [
    { day: 1, title: 'Arrival in Lalibela', location: 'Lalibela Airport', desc: 'Fly into Lalibela and transfer to your hotel. Evening orientation walk through the highland town with your guide.', activities: ['Airport Transfer', 'Town Walk', 'Welcome Dinner'], accommodation: 'Maribela Hotel', meals: 'Dinner', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 2, title: 'Northern Church Cluster', location: 'Lalibela', desc: 'Morning exploration of the Northern Group of churches — Bete Medhane Alem, the largest rock-hewn church in the world, and the iconic Bete Giyorgis.', activities: ['Bete Medhane Alem', 'Bete Maryam', 'Bete Giyorgis'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Lunch', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 3, title: 'Eastern Church Cluster', location: 'Lalibela', desc: 'Explore the Eastern Group and the trench-enclosed Bete Gabriel-Rufael. Afternoon visit to the revered Bete Abba Libanos.', activities: ['Bete Gabriel-Rufael', 'Bete Abba Libanos', 'Lalibela Market'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 4, title: 'Yemrihane Kristos Cave Church', location: 'North of Lalibela', desc: 'Day trip to the 12th-century cave church of Yemrihane Kristos, considered one of Ethiopia\'s finest examples of Aksumite architecture.', activities: ['Yemrihane Kristos Church', 'Village Walk', 'Local Lunch'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Lunch', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 5, title: 'Asheton Maryam Monastery', location: 'Mt. Abuna Yosef', desc: 'Trek up to the clifftop monastery of Asheton Maryam on the slopes of Mount Abuna Yosef for panoramic highland views.', activities: ['Mountain Trek', 'Asheton Maryam Monastery', 'Panoramic Views'], accommodation: 'Maribela Hotel', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 6, title: 'Local Village & Craft Tour', location: 'Lalibela surrounds', desc: 'Visit a traditional Amhara village to meet local artisans — watch weavers, potters, and cross-carvers at work. Traditional coffee ceremony.', activities: ['Village Visit', 'Coffee Ceremony', 'Crafts Workshop'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 7, title: 'Departure Day', location: 'Lalibela Airport', desc: 'Morning at leisure for last visits or souvenir shopping. Transfer to the airport for your onward flight. Farewell Ethiopia!', activities: ['Free Time', 'Last Photos', 'Airport Transfer'], accommodation: 'N/A', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' }
  ],
  simien: [
    { day: 1, title: 'Gondar: Gateway to Simien', location: 'Gondar', desc: 'Fly to Gondar and visit the remarkable Royal Enclosure castles before driving to Debark — gateway town to the Simien Mountains.', activities: ['Gondar Castles', 'Debark Town', 'Trek Briefing'], accommodation: 'Simien Lodge', meals: 'Dinner', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 2, title: 'Trek Begins: Buyit Ras', location: 'Buyit Ras', desc: 'Start the trek at Buyit Ras (3,260m). Encounter your first gelada baboon troops grazing on the escarpment edge with spectacular views.', activities: ['Trekking (12km)', 'Gelada Baboons', 'Escarpment Views'], accommodation: 'Camping', meals: 'All meals', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 3, title: 'Geech Camp', location: 'Geech (3,600m)', desc: 'Trek to Geech camp through stunning highland meadows. Look out for the thick-billed raven and Lammergeyer (bearded vulture) circling overhead.', activities: ['Trekking (14km)', 'Bird Watching', 'Geech Village'], accommodation: 'Camping', meals: 'All meals', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 4, title: 'Imet Gogo Viewpoint', location: 'Imet Gogo (3,926m)', desc: 'Day hike to Imet Gogo — one of the most spectacular viewpoints in Africa, with sheer 1,000m drop cliffs plunging to the lowlands below.', activities: ['Imet Gogo Summit', 'Panoramic Views', 'Rock Hyrax Spotting'], accommodation: 'Camping', meals: 'All meals', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 5, title: 'Chenek Camp & Ethiopian Wolf', location: 'Chenek (3,600m)', desc: 'Trek to Chenek camp, watching for Ethiopian wolves — the rarest canid in Africa. Afternoon search for the elusive Walia ibex on cliff ledges.', activities: ['Trekking (16km)', 'Ethiopian Wolf', 'Walia Ibex'], accommodation: 'Camping', meals: 'All meals', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 6, title: 'Ras Dashen Summit Push', location: 'Ras Dashen (4,550m)', desc: 'Summit day! Climb Ras Dashen — Ethiopia\'s highest peak and the 10th highest in Africa. Incredible views across the roof of the continent.', activities: ['Ras Dashen Summit (4,550m)', 'Achievement Ceremony', 'Descent to Camp'], accommodation: 'Camping', meals: 'All meals', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 7, title: 'Trek Out to Mekane Birhan', location: 'Mekane Birhan', desc: 'Long but rewarding descent through dramatic valleys. Celebration dinner with your trekking crew.', activities: ['Trek Out (18km)', 'Farewell Dinner'], accommodation: 'Guesthouse', meals: 'All meals', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 8, title: 'Return to Gondar', location: 'Gondar', desc: 'Transfer back to Gondar. Afternoon visit to Debre Berhan Selassie Church — its famous ceiling is covered with painted angel faces.', activities: ['Scenic Drive', 'Debre Berhan Selassie', 'Gondar Market'], accommodation: 'Gondar Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 9, title: 'Gondar to Addis', location: 'Addis Ababa', desc: 'Morning flight back to Addis Ababa. Afternoon rest or optional Merkato market visit — Africa\'s largest open-air market.', activities: ['Morning Flight', 'Merkato Market', 'Rest Day'], accommodation: 'Addis Hotel', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 10, title: 'Addis & Departure', location: 'Addis Ababa', desc: 'Final morning in Addis. Visit the National Museum to see Lucy — one of the oldest human ancestors ever discovered — before your departure flight.', activities: ['National Museum', 'Lucy Fossil', 'Departure'], accommodation: 'N/A', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' }
  ],
  danakil: [
    { day: 1, title: 'Fly to Mekelle', location: 'Mekelle', desc: 'Fly to Mekelle, capital of Tigray. Briefing and equipment check for the Danakil expedition. Early dinner and rest — 3am departure ahead.', activities: ['Arrival in Mekelle', 'Expedition Briefing', 'Early Rest'], accommodation: 'Mekelle Hotel', meals: 'Dinner', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 2, title: 'Erta Ale Volcano', location: 'Erta Ale (613m)', desc: '4WD drive to the Danakil. Sunset hike to the summit of Erta Ale to witness one of the world\'s only persistent lava lakes glowing at night.', activities: ['4WD Desert Drive', 'Erta Ale Night Hike', 'Active Lava Lake'], accommodation: 'Tented Camp', meals: 'All meals', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 3, title: 'Dallol Crater', location: 'Dallol (−125m)', desc: 'The alien landscape of Dallol — colorful sulfur springs, salt pillars, and acid pools in an otherworldly crater. World record for highest average temperature.', activities: ['Dallol Crater Walk', 'Yellow Lake', 'Salt Flats Photography'], accommodation: 'Desert Camp', meals: 'All meals', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 4, title: 'Karum Salt Lake & Caravan', location: 'Karum Salt Lake', desc: 'Watch Afar salt miners harvesting ancient salt blocks — a trade route unchanged for centuries. Camel caravans carry the salt to highland markets.', activities: ['Salt Miners Visit', 'Camel Caravan', 'Sunset at Salt Flats'], accommodation: 'Desert Camp', meals: 'All meals', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 5, title: 'Return & Departure', location: 'Mekelle → Addis', desc: 'Morning drive back to Mekelle through the Afar lowlands. Afternoon flight to Addis. You\'ve survived the world\'s most extreme landscape!', activities: ['Desert Drive', 'Mekelle Flight', 'Addis Return'], accommodation: 'N/A', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' }
  ],
  'historic-north': [
    { day: 1, title: 'Addis Ababa', location: 'Addis Ababa', desc: 'Arrive in Addis and tour the National Museum, Merkato and Holy Trinity Cathedral. Welcome dinner with traditional injera and tej honey wine.', activities: ['National Museum', 'Merkato Market', 'Welcome Dinner'], accommodation: 'Sheraton Addis', meals: 'Dinner', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 2, title: 'Bahir Dar & Blue Nile Falls', location: 'Bahir Dar', desc: 'Fly to Bahir Dar on Lake Tana. Visit the Blue Nile Falls (Tis Abay) — the "smoking water" — and take a boat to ancient island monasteries.', activities: ['Blue Nile Falls', 'Island Monasteries', 'Lake Tana Boat'], accommodation: 'Kuriftu Resort', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 3, title: 'Gondar Royal Enclosure', location: 'Gondar', desc: 'Drive to Gondar and spend the afternoon at the Fasil Ghebbi Royal Enclosure — six medieval castles built by 17th-century Ethiopian emperors.', activities: ['Fasil Ghebbi Castles', 'Debre Berhan Selassie Church', 'Gondar City Walk'], accommodation: 'Goha Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 4, title: 'Simien Mountains Day Trip', location: 'Simien Mountains', desc: 'Day trip to the Simien Mountains escarpment for panoramic views and gelada baboon encounters. Return to Gondar for the night.', activities: ['Gelada Baboons', 'Escarpment Views', 'Picnic Lunch'], accommodation: 'Goha Hotel', meals: 'Breakfast, Lunch', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 5, title: 'Axum: Ancient Capital', location: 'Axum', desc: 'Fly to Axum — the ancient capital of the Aksumite Empire. Visit the giant stelae field, ancient tombs, and the sacred Church of Our Lady Mary of Zion.', activities: ['Aksumite Stelae', 'Ancient Tombs', 'Church of St. Mary of Zion'], accommodation: 'Yeha Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 6, title: 'Axum Deeper Exploration', location: 'Axum', desc: 'Full day in Axum — explore the Queen of Sheba\'s Palace ruins, the Dongar site, and the fascinating Axum Museum with its remarkable artifacts.', activities: ['Queen of Sheba Palace', 'Dongar Ruins', 'Axum Museum'], accommodation: 'Yeha Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 7, title: 'Fly to Lalibela', location: 'Lalibela', desc: 'Morning flight to Lalibela. Check in and gentle afternoon introduction to the rock-hewn church complex with a sunset viewing.', activities: ['Flight to Lalibela', 'Bete Giyorgis Sunset View', 'Orientation Walk'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 8, title: 'Lalibela Northern Cluster', location: 'Lalibela', desc: 'Full day exploring the Northern Group of rock-hewn churches with your expert guide explaining the extraordinary history and living faith of these sacred sites.', activities: ['Bete Medhane Alem', 'Bete Maryam', 'Bete Giyorgis'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Lunch', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 9, title: 'Lalibela Eastern Cluster', location: 'Lalibela', desc: 'Eastern Group of churches and Bete Abba Libanos. Afternoon village visit and traditional coffee ceremony with a local Lalibela family.', activities: ['Eastern Church Group', 'Village Coffee Ceremony', 'Crafts Market'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Dinner', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 10, title: 'Yemrihane Kristos', location: 'North of Lalibela', desc: 'Day trip to the magnificent cave church of Yemrihane Kristos, set inside a natural cave and considered one of Ethiopia\'s most beautiful and spiritual sites.', activities: ['Yemrihane Kristos Cave Church', 'Mountain Drive', 'Picnic Lunch'], accommodation: 'Maribela Hotel', meals: 'Breakfast, Lunch', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 11, title: 'Return to Addis', location: 'Addis Ababa', desc: 'Morning flight back to Addis Ababa. Afternoon at leisure — optional Merkato shopping or relaxing at the hotel.', activities: ['Morning Flight', 'Addis Afternoon'], accommodation: 'Sheraton Addis', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' },
    { day: 12, title: 'Addis Free Day', location: 'Addis Ababa', desc: 'Free day in Addis Ababa. Recommended visits: the Ethnological Museum, the vibrant Piazza quarter, or a coffee ceremony tour through Tomoca Café.', activities: ['Ethnological Museum', 'Coffee Tour', 'Piazza Quarter'], accommodation: 'Sheraton Addis', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800' },
    { day: 13, title: 'Harar Day Trip', location: 'Harar', desc: 'Optional day trip to Harar — fly in the morning to explore the walled old city and attend the famous evening hyena feeding. Return to Addis.', activities: ['Harar Old City', 'Hyena Feeding', 'Islamic Heritage'], accommodation: 'Sheraton Addis', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800' },
    { day: 14, title: 'Final Day & Departure', location: 'Addis Ababa', desc: 'Final breakfast, last-minute shopping at Shiro Meda crafts market, and transfer to Bole International Airport. Until next time, Ethiopia!', activities: ['Shiro Meda Market', 'Airport Transfer'], accommodation: 'N/A', meals: 'Breakfast', image: 'https://images.unsplash.com/photo-1580746738099-b2c6e7d7c5a5?w=800' }
  ]
};

/* ── GALLERY DATA ──────────────────────────────────────────── */
const GALLERY_ITEMS = [
  { id: 1, category: 'lalibela', caption: 'Lalibela Classic', image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094302/730d2bc9-f739-4bac-8cdd-76c76e095f76.png', featured: true },
  { id: 2, category: 'simien', caption: 'Simien Mountains Trek', image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094329/39fd07c9-8a54-44b0-b0f9-e082e8af8b8a.png', featured: false },
  { id: 3, category: 'danakil', caption: 'Danakil Adventure', image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094396/424f20a3-7f73-4b6e-875e-ab67955a2a5f.png', featured: false },
  { id: 4, category: 'omo', caption: 'Omo Valley Cultural', image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094450/e7eb5639-1d6f-4361-b8b0-a60714783f73.png', featured: false },
  { id: 5, category: 'wildlife', caption: 'Bale Mountains Wildlife', image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094793/583ecc2c-8f90-41b9-b466-56b2d67757e7.png', featured: false },
  { id: 6, category: 'culture', caption: 'Harar Heritage', image: 'https://res.cloudinary.com/dza5rdls6/image/upload/v1781094835/42f8d671-65b1-49f7-8564-e30aa7924b6c.png', featured: false }
];

/* ── CHECKLIST DATA ────────────────────────────────────────── */
const CHECKLISTS = {
  lalibela: {
    title: 'Lalibela Packing Checklist',
    sections: [
      { icon: '🧳', label: 'Clothing', items: ['Modest clothing for church visits (shoulders/knees covered)', 'Comfortable walking shoes', 'Warm layer for cool highland evenings', 'Light rain jacket (rainy season: Jun–Sep)', 'Sun hat and sunglasses', 'White shawl/scarf (traditional, welcome by locals)'] },
      { icon: '📋', label: 'Documents & Money', items: ['Valid passport (6+ months validity)', 'Ethiopian tourist visa (get online or on arrival)', 'Travel insurance with medical coverage', 'USD cash for tips and souvenirs', 'Printed hotel/tour confirmations', 'Emergency contact card'] },
      { icon: '💊', label: 'Health & Safety', items: ['Antimalarial medication (consult your doctor)', 'Yellow fever vaccine certificate', 'Altitude sickness medication (2,630m)', 'Sunscreen SPF 50+', 'Insect repellent', 'Basic first aid kit', 'Hand sanitizer', 'Prescription medications with doctor\'s note'] },
      { icon: '📸', label: 'Tech & Gear', items: ['Camera with extra batteries', 'Power bank / portable charger', 'Universal power adapter (Type C/F/L)', 'Offline maps downloaded', 'Ethiopian SIM card (buy at airport)', 'Torch/headlamp for church interiors'] }
    ]
  },
  danakil: {
    title: 'Danakil Depression Checklist',
    sections: [
      { icon: '🧳', label: 'Clothing', items: ['Very lightweight breathable shirts (40°C+)', 'Long trousers to protect from sun', 'Sturdy hiking boots for lava fields', 'Wide-brim sun hat — essential!', 'Buff/neck scarf for dust protection', 'Long-sleeved shirt for night (can be cold)', 'Swimwear for hot springs'] },
      { icon: '💧', label: 'Hydration & Food', items: ['Minimum 4L water per day', 'Electrolyte sachets/tablets', 'High-energy snacks (nuts, dried fruit)', 'Oral rehydration salts', 'Spare food for emergencies'] },
      { icon: '💊', label: 'Health & Safety', items: ['Antimalarial medication', 'Strong insect repellent (DEET 50%+)', 'Sunscreen SPF 50+', 'Gastro medication', 'Paracetamol/ibuprofen', 'Blister plasters for lava hiking', 'Dust mask or N95 for Dallol gases'] },
      { icon: '📋', label: 'Documents & Essentials', items: ['Valid passport', 'Ethiopian visa', 'Travel insurance (medical evacuation cover)', 'USD cash only (no card facilities)', 'Emergency numbers saved offline', 'Tour operator contact details'] }
    ]
  },
  simien: {
    title: 'Simien Mountains Trek Checklist',
    sections: [
      { icon: '🥾', label: 'Trekking Gear', items: ['Sturdy hiking boots (broken in)', 'Trekking poles (highly recommended)', 'Daypack (25–30L)', 'Main bag for camp (carried by mules)', 'Gaiters for wet grass', 'Blister plasters and moleskin', 'Sleeping bag rated to −5°C'] },
      { icon: '🧳', label: 'Clothing (Layering System)', items: ['Moisture-wicking base layers', 'Fleece mid-layer', 'Waterproof/windproof outer shell', 'Warm hat and gloves (4,550m is cold!)', 'Thermal underwear for summit night', 'Gortex rain jacket', 'Sun hat for daytime'] },
      { icon: '💊', label: 'Health & Safety', items: ['Altitude sickness tablets (Acetazolamide)', 'Sunscreen SPF 50+', 'Lip balm with SPF', 'Blister and wound care', 'Stomach meds for camping food', 'Water purification tablets', 'Emergency whistle'] },
      { icon: '📸', label: 'Photography', items: ['Camera with weather sealing preferred', '3+ spare batteries (cold drains fast)', 'Lens cleaning kit for dust', 'Extra SD cards', 'Zoom lens for wildlife', 'Tripod for landscape shots'] }
    ]
  },
  omo: {
    title: 'Omo Valley Cultural Trip Checklist',
    sections: [
      { icon: '🧳', label: 'Clothing', items: ['Lightweight breathable shirts', 'Long trousers (respectful in villages)', 'Comfortable walking shoes', 'Sun hat essential (35°C+ lowlands)', 'Light evening jacket', 'Modest swimwear if visiting rivers'] },
      { icon: '🤝', label: 'Cultural Etiquette', items: ['Gifts for villages: pens, notebooks for children', 'Birr cash for market purchases', 'USD for tour fees/photography permits', 'Phrase guide in local languages (Hamer, Mursi)', 'Ask permission before photographing people', 'Respect traditional ceremonies — listen to your guide'] },
      { icon: '💊', label: 'Health & Safety', items: ['Strong antimalarial medication', 'DEET 50%+ insect repellent', 'Yellow fever certificate required', 'Sunscreen SPF 50+', 'Stomach and diarrhea medication', 'Water purification tablets', 'Oral rehydration salts'] },
      { icon: '📋', label: 'Documents & Money', items: ['Ethiopian tourist visa', 'Travel insurance', 'USD + Ethiopian Birr cash (no ATMs)', 'Photography permit (included in tour)', 'Tour operator emergency contact', 'Embassy contact details'] }
    ]
  },
  harar: {
    title: 'Harar Heritage Trip Checklist',
    sections: [
      { icon: '🧳', label: 'Clothing', items: ['Modest clothing (Islamic city — cover shoulders/knees)', 'Comfortable walking shoes for cobblestones', 'Light scarf/shawl for mosque visits', 'Sun hat and sunglasses', 'Casual evening outfit', 'Light jacket for cool Harari evenings'] },
      { icon: '📋', label: 'Documents & Money', items: ['Valid passport', 'Ethiopian tourist visa', 'Birr cash for market and cafes', 'USD for tips', 'Hyena feeding tip money (recommended)', 'Travel insurance'] },
      { icon: '💊', label: 'Health', items: ['Standard travel vaccinations', 'Stomach medication', 'Sunscreen', 'Insect repellent', 'Hand sanitizer for market visits'] },
      { icon: '🎭', label: 'Harar Experiences', items: ['Book hyena feeding night show in advance', 'Try Harari coffee (different from Addis style)', 'Visit Shewa Gate market at sunrise', 'Hire a licensed local Harari guide', 'Budget for basket weaving and incense purchases', 'Try local tej (honey wine) at a tej house'] }
    ]
  },
  bale: {
    title: 'Bale Mountains Wildlife Checklist',
    sections: [
      { icon: '🥾', label: 'Hiking & Wildlife Gear', items: ['Sturdy waterproof hiking boots', 'Binoculars 10×42 minimum for wolf spotting', 'Camera with telephoto lens (200mm+)', 'Trekking poles for high altitude', 'Gaiters for wet highland grass', 'Wildlife checklist for endemic species'] },
      { icon: '🧳', label: 'Clothing', items: ['Warm layers (Sanetti Plateau is cold)', 'Waterproof rain jacket', 'Fleece mid-layer', 'Base layers for cold mornings', 'Warm hat and gloves', 'Sunscreen for high-altitude UV'] },
      { icon: '💊', label: 'Health & Safety', items: ['Altitude medication for Sanetti Plateau (4,000m)', 'Sunscreen SPF 50+', 'Insect repellent', 'Water purification tablets', 'First aid kit', 'Anti-blister care'] },
      { icon: '📋', label: 'Documents', items: ['Passport and Ethiopian visa', 'National park entry permit (included in tour)', 'Travel insurance with evacuation cover', 'Emergency numbers offline', 'Bale Mountains NP rules and ethics guide'] }
    ]
  },
  addis: {
    title: 'Addis Ababa City Checklist',
    sections: [
      { icon: '🧳', label: 'Clothing', items: ['Smart-casual clothing for restaurants', 'Comfortable walking shoes', 'Light jacket for cool Addis evenings (2,355m)', 'Business attire if attending meetings', 'Sun hat and sunglasses', 'Rain jacket for afternoon showers'] },
      { icon: '📋', label: 'Documents & Money', items: ['Valid passport', 'Ethiopian tourist visa (e-visa recommended)', 'Travel insurance', 'Major credit/debit cards (accepted in hotels)', 'Ethiopian Birr (exchange at airport or hotels)', 'USD as backup'] },
      { icon: '🎭', label: 'Must-Do Experiences', items: ['National Museum (see Lucy fossil)', 'Merkato — Africa\'s largest market', 'Ethiopian cuisine tasting tour', 'Traditional music and dance at Yod Abyssinia', 'Addis Coffee — best coffee in the world', 'Holy Trinity Cathedral visit'] },
      { icon: '💊', label: 'Health', items: ['Recommended vaccinations up to date', 'Prescription medications', 'Sunscreen (moderate UV at altitude)', 'Stomach medication (food adjustment period)', 'Hand sanitizer'] }
    ]
  }
};

/* ── SEASONAL DATA ─────────────────────────────────────────── */
const SEASONAL_DATA = {
  months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthStatus: ['peak','peak','shoulder','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
  destinations: [
    {
      name: 'Lalibela',
      status: ['peak','peak','shoulder','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps: [[10,22],[11,23],[12,24],[12,23],[12,22],[11,20],[10,18],[10,18],[10,20],[10,22],[10,23],[10,22]],
      notes: ['Perfect dry weather, Timkat festival in Jan','Still ideal, clear views of churches','Pleasant with some showers beginning','Greener landscape, moderate rain','Rains increasing','Heavy rains, muddy paths','Main rainy season','Peak rain, limited access','End of rains, green scenery','Post-rain freshness, great views','Clear skies and cool','Excellent, Christmas celebrations']
    },
    {
      name: 'Simien Mts',
      status: ['peak','peak','peak','shoulder','shoulder','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps: [[-2,15],[-1,16],[0,17],[2,16],[4,17],[3,15],[2,13],[2,13],[2,15],[0,16],[-1,15],[-2,15]],
      notes: ['Best trekking weather, crisp views','Excellent visibility, low rainfall','Good trekking, occasional showers','Some rain, still hikeable','Increasing rain, lush scenery','Rainy season begins, slippery trails','Main rains, challenging trekking','Wettest month, not recommended','End of rains, stunning green','Superb trekking conditions','Clear and cold, great views','Perfect with possible frost at summit']
    },
    {
      name: 'Danakil',
      status: ['peak','peak','shoulder','shoulder','off-peak','off-peak','off-peak','off-peak','shoulder','peak','peak','peak'],
      temps: [[25,38],[26,40],[28,42],[30,45],[33,48],[35,50],[34,49],[34,48],[33,46],[29,42],[27,40],[25,38]],
      notes: ['Best time — less extreme heat','Still manageable, clear skies','Warming up, still doable','Getting very hot, caution advised','Extreme heat, not recommended','Dangerously hot (50°C+)','Off limits for most travelers','Off limits — extreme heat','Cooling slightly, adventurous option','Great conditions resuming','Excellent, cool nights on volcano','Peak season, ideal temperatures']
    },
    {
      name: 'Omo Valley',
      status: ['peak','peak','peak','shoulder','shoulder','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps: [[18,32],[19,34],[20,34],[20,33],[22,35],[21,32],[19,29],[19,29],[19,30],[18,31],[18,32],[18,32]],
      notes: ['Excellent — dry and colorful markets','Best for Hamer Bull Jumping ceremony','Hot but dry, lush savanna','Occasional showers, still good','Humidity rising, some rain','Rainy, roads may be difficult','Main rains, river crossings risky','Flooding possible, check with guide','End of rains, very green','Perfect weather, post-rain beauty','Ideal, dry and pleasant','Festive season, many ceremonies']
    },
    {
      name: 'Harar',
      status: ['peak','peak','shoulder','shoulder','off-peak','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps: [[12,26],[13,27],[14,27],[15,27],[17,27],[17,25],[16,23],[16,23],[15,24],[14,25],[13,26],[12,26]],
      notes: ['Best time, mild and dry','Excellent conditions','Comfortable with light showers','Some afternoon rain','Increasing humidity','Main rainy season','Wettest period','End of heavy rain','Clearing skies, lush surrounds','Perfect conditions','Ideal — cool evenings','Festive with Christmas and Epiphany']
    },
    {
      name: 'Addis Ababa',
      status: ['peak','peak','shoulder','shoulder','shoulder','rainy','rainy','rainy','shoulder','peak','peak','peak'],
      temps: [[7,22],[8,23],[10,24],[11,23],[12,24],[12,20],[11,19],[11,19],[11,21],[8,22],[7,22],[7,22]],
      notes: ['Cool and sunny, ideal city break','Still excellent conditions','Warming up, some afternoon showers','Light rains begin, still pleasant','Occasional heavy showers','Daily rain, bring umbrella','Rainy season peak, indoor activities','Meskel flowers bloom, rainy','Beautiful post-rain green city','Peak season, busy and vibrant','Clear skies, perfect weather','Christmas and Timkat preparations']
    }
  ]
};

/* ── RECOMMENDER QUESTIONS ─────────────────────────────────── */
const REC_QUESTIONS = [
  {
    q: 'What type of traveler are you?',
    options: [
      { icon: '🏛️', text: 'History & Culture Lover', value: 'cultural' },
      { icon: '🦁', text: 'Wildlife Enthusiast', value: 'wildlife' },
      { icon: '⛰️', text: 'Adventure Trekker', value: 'trekking' },
      { icon: '📸', text: 'Photographer & Explorer', value: 'all' }
    ]
  },
  {
    q: 'How much time do you have?',
    options: [
      { icon: '⚡', text: '3–5 Days', value: '1-5' },
      { icon: '📅', text: '6–9 Days', value: '6-9' },
      { icon: '🗓️', text: '10–14 Days', value: '10-14' },
      { icon: '🌍', text: '15+ Days', value: '15+' }
    ]
  },
  {
    q: 'When are you planning to visit?',
    options: [
      { icon: '☀️', text: 'Oct – Jan (Dry & Cool)', value: 'dry-cool' },
      { icon: '🌸', text: 'Feb – Apr (Warm & Clear)', value: 'warm' },
      { icon: '🌧️', text: 'Jun – Sep (Green Season)', value: 'rainy' },
      { icon: '🗓️', text: 'I\'m flexible', value: 'flexible' }
    ]
  },
  {
    q: 'How do you prefer to travel?',
    options: [
      { icon: '👫', text: 'Couple / Honeymoon', value: 'couple' },
      { icon: '👨‍👩‍👧‍👦', text: 'Family Group', value: 'family' },
      { icon: '🎒', text: 'Solo Adventurer', value: 'solo' },
      { icon: '👥', text: 'Group of Friends', value: 'group' }
    ]
  },
  {
    q: 'What landscape draws you most?',
    options: [
      { icon: '🏔️', text: 'Mountain Highlands', value: 'mountain' },
      { icon: '🌋', text: 'Volcanic Wonders', value: 'volcanic' },
      { icon: '🌿', text: 'Lush Wildlife Parks', value: 'wildlife' },
      { icon: '🕌', text: 'Ancient Cities & Towns', value: 'ancient' }
    ]
  }
];

/* ── STATE VARIABLES ───────────────────────────────────────── */
let heroSlideIndex = 0;
let heroInterval = null;
let currentLang = 'en';
let calcState = { base: 0, travelers: 2, hotel: 0, transport: 0 };
let activeNetworkNode = null;
let timelineTour = 'lalibela';
let timelineDay = 0;
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

/* Connection map — which nodes link to which */
const NETWORK_CONNECTIONS = [
  ['addis', 'lalibela'],
  ['addis', 'axum'],
  ['addis', 'gondar'],
  ['addis', 'simien'],
  ['addis', 'harar'],
  ['addis', 'bale'],
  ['addis', 'omo']
];

function initMap() {
  const canvas    = document.getElementById('networkCanvas');
  const container = canvas ? canvas.parentElement : null;
  const nodes     = document.querySelectorAll('.dest-node');
  const infoDefault = document.getElementById('networkInfoDefault');
  const infoDetail  = document.getElementById('networkInfoDetail');
  const closeBtn    = document.getElementById('networkInfoClose');

  if (!canvas || !container) return;

  /* ── Size canvas to match container ── */
  function resizeCanvas() {
    canvas.width  = container.offsetWidth;
    canvas.height = container.offsetHeight;
    drawNetworkLines(activeNetworkNode);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  /* ── Draw all connection lines ── */
  function drawNetworkLines(activeId) {
    const ctx = canvas.getContext('2d');
    const w   = canvas.width;
    const h   = canvas.height;
    ctx.clearRect(0, 0, w, h);

    /* Helper: get center px coords of a node from its % CSS position */
    function nodeCenter(destId) {
      const el = document.querySelector(`.dest-node[data-destination="${destId}"]`);
      if (!el) return null;
      const left = parseFloat(el.style.left) / 100 * w;
      const top  = parseFloat(el.style.top)  / 100 * h;
      return { x: left, y: top };
    }

    NETWORK_CONNECTIONS.forEach(([a, b]) => {
      const pA = nodeCenter(a);
      const pB = nodeCenter(b);
      if (!pA || !pB) return;

      const isActive = activeId && (a === activeId || b === activeId);

      ctx.beginPath();
      ctx.moveTo(pA.x, pA.y);
      ctx.lineTo(pB.x, pB.y);

      if (isActive) {
        /* Bright glowing line for active connections */
        ctx.strokeStyle = 'rgba(212, 130, 10, 0.85)';
        ctx.lineWidth   = 2;
        ctx.shadowColor = 'rgba(212, 130, 10, 0.7)';
        ctx.shadowBlur  = 12;
      } else if (activeId) {
        /* Dimmed lines when another node is active */
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth   = 1;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur  = 0;
      } else {
        /* Default idle state — soft glow */
        ctx.strokeStyle = 'rgba(193, 68, 14, 0.35)';
        ctx.lineWidth   = 1.2;
        ctx.shadowColor = 'rgba(193, 68, 14, 0.25)';
        ctx.shadowBlur  = 6;
      }

      ctx.stroke();
      ctx.shadowBlur = 0; /* reset shadow so it doesn't bleed */
    });
  }

  /* ── Node click handler ── */
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const destId = node.dataset.destination;
      const dest   = DESTINATIONS[destId];
      if (!dest) return;

      /* Update active node state */
      activeNetworkNode = destId;

      /* Apply active / dimmed classes */
      nodes.forEach(n => {
        n.classList.remove('active', 'dimmed');
        if (n.dataset.destination === destId) {
          n.classList.add('active');
        } else {
          n.classList.add('dimmed');
        }
      });

      /* Redraw lines with active highlight */
      drawNetworkLines(destId);

      /* ── Populate info panel ── */
      document.getElementById('networkDestImage').src = dest.image;
      document.getElementById('networkDestImage').alt = dest.name;
      document.getElementById('networkDestName').textContent = dest.name;
      document.getElementById('networkDestDesc').textContent = dest.desc;
      document.getElementById('networkDestRegion').textContent = dest.region;

      document.getElementById('networkDestStats').innerHTML = `
        <div class="network-stat-item">
          <span class="network-stat-label">Best Season</span>
          <span class="network-stat-value">${dest.bestTime}</span>
        </div>
        <div class="network-stat-item">
          <span class="network-stat-label">Altitude</span>
          <span class="network-stat-value">${dest.altitude}</span>
        </div>
        <div class="network-stat-item">
          <span class="network-stat-label">Getting There</span>
          <span class="network-stat-value">${dest.flightFrom}</span>
        </div>
        <div class="network-stat-item">
          <span class="network-stat-label">Tours Available</span>
          <span class="network-stat-value">${TOURS.filter(t => t.destination === destId).length} packages</span>
        </div>
      `;

      document.getElementById('networkDestHighlights').innerHTML =
        dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('');

      /* Show detail panel with animation */
      infoDefault.style.display = 'none';
      infoDetail.style.display  = 'block';
    });
  });

  /* ── Close button ── */
  closeBtn.addEventListener('click', () => {
    activeNetworkNode = null;

    nodes.forEach(n => n.classList.remove('active', 'dimmed'));
    drawNetworkLines(null);

    infoDetail.style.display  = 'none';
    infoDefault.style.display = 'flex';
  });

  /* ── Initial draw ── */
  drawNetworkLines(null);
}

/* ================================================================
   7. TOUR TIMELINE VISUALIZER
   ================================================================ */
function initTimeline() {
  const select = document.getElementById('timelineTourSelect');
  select.addEventListener('change', () => {
    timelineTour = select.value;
    timelineDay  = 0;
    renderTimeline();
  });

  document.getElementById('timelinePrev').addEventListener('click', () => {
    if (timelineDay > 0) { timelineDay--; renderTimeline(); }
  });
  document.getElementById('timelineNext').addEventListener('click', () => {
    const days = TIMELINES[timelineTour] || [];
    if (timelineDay < days.length - 1) { timelineDay++; renderTimeline(); }
  });

  renderTimeline();
}

function renderTimeline() {
  const days = TIMELINES[timelineTour] || [];
  if (!days.length) return;

  const nav = document.getElementById('timelineNav');
  nav.innerHTML = days.map((d, i) => `
    <button class="timeline-day-tab ${i === timelineDay ? 'active' : ''}" data-day="${i}">
      Day ${d.day}
    </button>
  `).join('');

  nav.querySelectorAll('.timeline-day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      timelineDay = parseInt(tab.dataset.day);
      renderTimeline();
    });
  });

  const day = days[timelineDay];
  document.getElementById('timelineDisplay').innerHTML = `
    <div class="timeline-day-card">
      <div class="timeline-day-img-wrap">
        <img class="timeline-day-img" src="${day.image}" alt="${day.title}" loading="lazy" />
      </div>
      <div class="timeline-day-info">
        <span class="timeline-day-badge">📅 Day ${day.day}</span>
        <h3>${day.title}</h3>
        <p>${day.desc}</p>
        <div class="timeline-detail-grid">
          <div class="timeline-detail-item">
            <span class="timeline-detail-label">📍 Location</span>
            <span class="timeline-detail-value">${day.location}</span>
          </div>
          <div class="timeline-detail-item">
            <span class="timeline-detail-label">🏨 Accommodation</span>
            <span class="timeline-detail-value">${day.accommodation}</span>
          </div>
          <div class="timeline-detail-item">
            <span class="timeline-detail-label">🍽️ Meals</span>
            <span class="timeline-detail-value">${day.meals}</span>
          </div>
          <div class="timeline-detail-item">
            <span class="timeline-detail-label">🗓️ Day</span>
            <span class="timeline-detail-value">${day.day} of ${days.length}</span>
          </div>
        </div>
        <div class="timeline-activities">
          ${day.activities.map(a => `<span class="timeline-activity-tag">✓ ${a}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('timelineDayCounter').textContent = `Day ${day.day} of ${days.length}`;
  document.getElementById('timelinePrev').disabled = timelineDay === 0;
  document.getElementById('timelineNext').disabled = timelineDay === days.length - 1;
}

/* ================================================================
   8. AI TRAVEL RECOMMENDER
   ================================================================ */

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
   12. TOUR COMPARISON TOOL
   ================================================================ */
function initCompare() {
  const selects = document.querySelectorAll('.compare-select');

  // Populate selects with tour options
  selects.forEach(sel => {
    TOURS.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.title} (${t.duration} days)`;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', renderCompareTable);
  });

  renderCompareTable();
}

function renderCompareTable() {
  const selects   = document.querySelectorAll('.compare-select');
  const selected  = [...selects].map(s => s.value).filter(Boolean);
  const tours     = selected.map(id => TOURS.find(t => t.id === id)).filter(Boolean);

  const tableHead  = document.getElementById('compareTableHead');
  const tableBody  = document.getElementById('compareTableBody');
  const emptyEl    = document.getElementById('compareEmpty');
  const tableWrap  = document.getElementById('compareTableWrap');

  if (tours.length < 2) {
    emptyEl.style.display = 'block';
    tableWrap.querySelector('.compare-table').style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  tableWrap.querySelector('.compare-table').style.display = '';

  // Header
  const headerCells = tours.map(t => `<th>${t.title}</th>`).join('');
  tableHead.innerHTML = `<th class="compare-feature-col">Feature</th>${headerCells}`;

  // Find max/min for highlighting
  const minPrice    = Math.min(...tours.map(t => t.price));
  const maxDuration = Math.max(...tours.map(t => t.duration));

  const rows = [
    { label: 'Duration', fn: t => `📅 ${t.duration} Days`, highlight: t => t.duration === maxDuration },
    { label: 'Price (per person)', fn: t => `$${t.price.toLocaleString()}`, highlight: t => t.price === minPrice },
    { label: 'Activity Type', fn: t => t.activity.charAt(0).toUpperCase() + t.activity.slice(1), highlight: () => false },
    { label: 'Best For', fn: t => t.badge, highlight: () => false },
    { label: 'Highlights', fn: t => t.highlights.map(h => `<span class="tag">${h}</span>`).join(' '), highlight: () => false },
    { label: 'Popularity', fn: t => `${'★'.repeat(Math.round(t.popularity/20))}${'☆'.repeat(5-Math.round(t.popularity/20))} ${t.popularity}%`, highlight: t => t.popularity === Math.max(...tours.map(x => x.popularity)) }
  ];

  tableBody.innerHTML = rows.map(row => `
    <tr>
      <td class="compare-feature-col">${row.label}</td>
      ${tours.map(t => `<td class="${row.highlight(t) ? 'compare-highlight' : ''}">${row.fn(t)}</td>`).join('')}
    </tr>
  `).join('');
}

/* ================================================================
   13. TRAVEL BUDGET PLANNER (with canvas donut chart)
   ================================================================ */
function initBudget() {
  const durationSlider = document.getElementById('budgetDuration');
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
  initTimeline();
  initRecommender();
  initSeasonal();
  initChecklist();
  initGallery();
  initCompare();
  initBudget();
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
      filtered = TOURS.filter(t => {
        const matchSearch   = !search || t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search);
        const matchActivity = activity === 'all' || t.activity === activity;
        let   matchDuration = true;
        if (duration !== 'all') {
          if (duration === '15+') matchDuration = t.duration >= 15;
          else { const [lo, hi] = duration.split('-').map(Number); matchDuration = t.duration >= lo && t.duration <= hi; }
        }
        return matchSearch && matchActivity && matchDuration;
      });
      if (sort === 'name-asc')         filtered.sort((a, b) => a.title.localeCompare(b.title));
      else if (sort === 'name-desc')   filtered.sort((a, b) => b.title.localeCompare(a.title));
      else if (sort === 'duration-asc')  filtered.sort((a, b) => a.duration - b.duration);
      else if (sort === 'duration-desc') filtered.sort((a, b) => b.duration - a.duration);
      renderCards(filtered);
    }

    document.getElementById('tourSearch').addEventListener('input', applyFilters);
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