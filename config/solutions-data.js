// ═══════════════════════════════════════════════════════════════════
// SOLUTIONS DATABASE
// Built from current product taxonomy (Waterproofing, Flooring Systems,
// Epoxy Systems, Concrete Admixtures, Repair Systems, Surface Protection,
// Decorative Concrete, Sports Flooring)
// ═══════════════════════════════════════════════════════════════════

const SOLUTIONS = [
  {
    id: 'roof-terrace-waterproofing',
    title: 'Roof & Terrace Waterproofing',
    icon: '🏠',
    tagline: 'Stop leaks, reduce heat gain, and protect exposed slabs',
    description: 'Complete roof systems covering primers, elastomeric coatings, PU membranes, sealants, and crack treatment for concrete and metal roofs.',
    challenges: [
      'Recurring monsoon leakage and seepage into top floors',
      'Thermal cracking due to daily expansion and contraction',
      'UV degradation and premature coating failure',
      'Joint/penetration failures around pipes and parapets'
    ],
    recommendedProducts: [
      'hp100-primer-wb',
      'hp110-primer-sb',
      'hp120-primer-pu',
      'hardproof-coolcoat',
      'hp400-acr300',
      'hp500-pu200',
      'hp520-pu400',
      'hp510-pu350'
    ],
    image: ''
  },
  {
    id: 'wet-areas-bathrooms-balconies',
    title: 'Bathrooms, Balconies & Wet Areas',
    icon: '🚿',
    tagline: 'Flexible waterproofing for internal wet zones',
    description: 'Targeted waterproofing for toilets, bathrooms, kitchens, balconies, and utility areas where concealed seepage causes paint and plaster damage.',
    challenges: [
      'Leakage to adjacent rooms and lower floors',
      'Tile/grout lines allowing moisture ingress',
      'Movement cracks in screed and plaster',
      'Chronic damp patches and mold growth'
    ],
    recommendedProducts: [
      'hp310-cm200',
      'hp100-primer-wb',
      'hp510-pu350',
      'hs410-tile',
      'hc710-bond'
    ],
    image: ''
  },
  {
    id: 'basement-underground',
    title: 'Basement & Underground Waterproofing',
    icon: '🏗️',
    tagline: 'Systems for hydrostatic pressure and negative-side seepage',
    description: 'For basements, retaining walls, foundations, and underground parking where groundwater pressure, active leaks, and rising damp are common.',
    challenges: [
      'Hydrostatic pressure through walls/slabs',
      'Active leaks from construction joints and cracks',
      'Persistent dampness and odor in enclosed areas',
      'Difficult post-construction access for repairs'
    ],
    recommendedProducts: [
      'hp320-cm300',
      'hp600-dp100',
      'hp700-inj-pu',
      'hp710-inj-ep',
      'ff400-wp100',
      'he520-dampblock'
    ],
    image: ''
  },
  {
    id: 'industrial-flooring',
    title: 'Industrial & Commercial Flooring',
    icon: '🏭',
    tagline: 'From dust-proof concrete to heavy-duty seamless systems',
    description: 'Flooring solutions spanning primers, epoxy/PU coatings, self-leveling systems, hardeners, and specialty anti-static or chemical-resistant floors.',
    challenges: [
      'Forklift traffic, abrasion, and impact loading',
      'Chemical spills and aggressive cleaning cycles',
      'Dusting concrete and poor housekeeping standards',
      'Need for hygienic, seamless, easy-clean floors'
    ],
    recommendedProducts: [
      'hardfloor-mtp100',
      'hf100-ep100',
      'hardfloor-sl1000',
      'hf300-sl1003',
      'hf330-erc300',
      'hf410-pu600',
      'hf510-pu-sl',
      'hf500-esd',
      'nmx20',
      'hf600-qh',
      'hf610-mh'
    ],
    image: ''
  },
  {
    id: 'concrete-repair-rehab',
    title: 'Concrete Repair & Rehabilitation',
    icon: '🔧',
    tagline: 'Repair mortars, grouts, crack injection, and corrosion control',
    description: 'End-to-end repair chemistry for spalling, delamination, cracks, exposed rebar, machine foundations, and structural strengthening interventions.',
    challenges: [
      'Spalling concrete and exposed corroded rebar',
      'Structural/non-structural cracks and delamination',
      'Failed repairs due to poor bonding and shrinkage',
      'Need for rapid return-to-service in operational sites'
    ],
    recommendedProducts: [
      'ff100-rm40',
      'ff110-rmf40',
      'ff210-microcon',
      'ff200-gp2',
      'ff220-anchorflow',
      'ff310-cp200',
      'ff300-rr100',
      'ff700-epoxy-injection',
      'he300-inj200',
      'he600-anchor',
      'ff500-ca500',
      'ff510-ca700'
    ],
    image: ''
  },
  {
    id: 'facade-surface-protection',
    title: 'Facade & Surface Protection',
    icon: '🏢',
    tagline: 'Seal, protect, and preserve exposed concrete, masonry, and stone',
    description: 'External wall and surface protection systems including anti-carbonation, silane/siloxane repellents, PU protection, and breathable sealers.',
    challenges: [
      'Driving rain penetration and damp facades',
      'Carbonation-led corrosion in RCC members',
      'Staining, efflorescence, and pollution deposits',
      'UV/weather exposure reducing coating life'
    ],
    recommendedProducts: [
      'hs300-ac200',
      'hs500-silane',
      'hs510-siloxane',
      'hs100-wb100',
      'hs110-sb200',
      'hs200-pu300',
      'hs400-stone',
      'hs420-concrete'
    ],
    image: ''
  },
  {
    id: 'decorative-pavers-hardscape',
    title: 'Decorative Concrete, Pavers & Hardscape',
    icon: '🧱',
    tagline: 'Protection and enhancement for aesthetic concrete surfaces',
    description: 'Sealers, color enhancers, release agents, dyes, and hardeners for stamped concrete, pavers, pathways, courtyards, and decorative floors.',
    challenges: [
      'Color fading and weathering of decorative finishes',
      'Oil/dirt staining on pavers and pathways',
      'Moss and moisture retention in outdoor surfaces',
      'Need for wet-look or enriched finish aesthetics'
    ],
    recommendedProducts: [
      'paveguard-wb',
      'pg110-sb',
      'paveguard-color',
      'pg300-stamp',
      'pg400-hardener',
      'pg410-release',
      'pg420-dye'
    ],
    image: ''
  },
  {
    id: 'concrete-production-admixtures',
    title: 'Concrete Production & Admixture Design',
    icon: '🧪',
    tagline: 'Workability, strength, durability, and waterproofing from batching stage',
    description: 'Admixture-driven solutions for RMC plants, precast yards, and site concreting to optimize slump, strength, set time, and long-term durability.',
    challenges: [
      'Workability loss during transport and placement delays',
      'Strength targets without excess water/cement penalties',
      'Hot/cold weather setting control requirements',
      'Durability demands: waterproofing, freeze-thaw, curing quality'
    ],
    recommendedProducts: [
      'hc100-sp100',
      'hc110-sp200',
      'hc120-sp300',
      'hc200-r100',
      'hc210-a100',
      'hc300-wp100',
      'hc400-air100',
      'hc500-sc100',
      'hc700-curing',
      'hc720-release'
    ],
    image: ''
  },
  {
    id: 'sports-flooring',
    title: 'Sports Flooring & Running Tracks',
    icon: '🏃',
    tagline: 'Layered acrylic/PU systems for performance and durability',
    description: 'System-based sports surfacing for courts and tracks with primer, base, cushion, topcoat, and line-marking layers.',
    challenges: [
      'Inconsistent traction and ball rebound',
      'High wear from repetitive athletic use',
      'UV/weather exposure in outdoor courts',
      'Need for player comfort and shock attenuation'
    ],
    recommendedProducts: [
      'sf100-primer',
      'sf200-basecoat',
      'sf300-cushion',
      'sf400-topcoat',
      'sf500-line',
      'sf600-track'
    ],
    image: ''
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOLUTIONS };
}
