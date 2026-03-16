// ═══════════════════════════════════════════════════════════════════
// SOLUTIONS DATABASE
// ═══════════════════════════════════════════════════════════════════

const SOLUTIONS = [
  {
    id: 'roofing',
    title: 'Roofing & Terraces',
    icon: '🏠',
    tagline: 'Complete waterproofing systems for every roof type',
    description: 'From flat concrete roofs to metal sheet roofing, our waterproofing systems provide long-lasting protection against water ingress, heat, and UV degradation. Elastomeric coatings with up to 350% elongation handle thermal movement without cracking.',
    challenges: [
      'Water pooling on flat roofs',
      'Thermal cracking from extreme temperature cycles',
      'UV degradation of conventional coatings',
      'Leakage at joints and penetrations'
    ],
    recommendedProducts: ['hardproof-coolcoat'],
    image: ''
  },
  {
    id: 'industrial-floors',
    title: 'Industrial Floors',
    icon: '🏭',
    tagline: 'Heavy-duty flooring for demanding environments',
    description: 'Epoxy and polyurethane flooring systems engineered for warehouses, manufacturing plants, food processing units, and pharmaceutical facilities. Chemical resistant, easy to clean, and built to withstand heavy traffic and impact.',
    challenges: [
      'Heavy forklift and vehicle traffic',
      'Chemical spills and aggressive substances',
      'Hygiene and cleanroom requirements',
      'Concrete dusting and surface degradation'
    ],
    recommendedProducts: ['hardfloor-sl1000', 'hardfloor-mtp100'],
    image: ''
  },
  {
    id: 'basements',
    title: 'Basement Waterproofing',
    icon: '🏗️',
    tagline: 'Keep water out from below grade structures',
    description: 'Comprehensive waterproofing solutions for basements, retaining walls, and underground structures. Positive and negative side waterproofing systems that handle hydrostatic pressure and rising damp.',
    challenges: [
      'Hydrostatic water pressure',
      'Rising damp through concrete',
      'Construction joint leakage',
      'Difficult access for repairs after construction'
    ],
    recommendedProducts: ['hardproof-coolcoat'],
    image: ''
  },
  {
    id: 'facades',
    title: 'Facade Protection',
    icon: '🏢',
    tagline: 'Protect and beautify exterior walls',
    description: 'Weather-resistant coatings and sealers that protect building facades from rain penetration, pollution, and biological growth while maintaining breathability and aesthetic appearance.',
    challenges: [
      'Driving rain penetration',
      'Algae and fungal growth',
      'Pollution staining',
      'Thermal and structural cracking'
    ],
    recommendedProducts: ['paveguard-wb'],
    image: ''
  },
  {
    id: 'concrete-repair',
    title: 'Concrete Repair',
    icon: '🔧',
    tagline: 'Restore structural integrity to damaged concrete',
    description: 'Repair mortars, bonding agents, and protective coatings for rehabilitating deteriorated concrete structures. From micro-crack injection to full structural repair, our systems restore and protect.',
    challenges: [
      'Reinforcement corrosion and spalling',
      'Structural cracking and delamination',
      'Carbonation and chloride attack',
      'Aging infrastructure maintenance'
    ],
    recommendedProducts: [],
    image: ''
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOLUTIONS };
}
