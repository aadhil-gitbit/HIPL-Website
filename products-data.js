// ═══════════════════════════════════════════════════════════════════
// HARDEX COMPLETE PRODUCT DATABASE (96 PRODUCTS)
// ═══════════════════════════════════════════════════════════════════
// Two-tier tooltip system:
// - shortDesc: Professional, accessible (shows first)
// - realTalk: Direct, honest, consumer psychology (click to expand)
//
// TO UPDATE: Search for "TODO" markers and replace with real data
// TOKEN COST TO REGENERATE THIS FILE: ~200 tokens
// ═══════════════════════════════════════════════════════════════════

const PRODUCTS = [
  
  // ═══════════════════════════════════════════════════════════════════
  // HARDPROOF — FLooring Solutions (16 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'hp100-primer-wb',
    name: 'HARDPROOF PRIMER WB',
    icon: '🎨',
    category: 'Waterproofing',
    subcategory: 'Primers',
    featured: false,
    
    shortDesc: 'Water-based primer for acrylic waterproofing systems',
    application: 'Surface preparation for acrylic coatings on concrete and masonry',
    coverage: '0.10-0.15 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'The boring first step that everyone skips—then wonders why their waterproofing failed in 6 months. This makes the topcoat actually stick.',
    
    tds: '/assets/tds/hardproof-primer-wb.pdf', // TODO: Add actual TDS
    msds: null,
    
    seo: {
      title: 'HARDPROOF PRIMER WB - Water-Based Waterproofing Primer | Hardex India',
      description: 'Water-based primer for acrylic waterproofing systems. Ensures proper adhesion and long-lasting waterproofing performance.',
      keywords: ['waterproofing primer', 'water-based primer', 'acrylic primer', 'surface preparation']
    }
  },
  
  {
    id: 'hp110-primer-sb',
    name: 'HARDPROOF PRIMER SB',
    icon: '🧪',
    category: 'Waterproofing',
    subcategory: 'Primers',
    featured: false,
    
    shortDesc: 'Solvent-based primer for polyurethane waterproofing systems',
    application: 'Primer for PU membrane applications on concrete surfaces',
    coverage: '0.10-0.15 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'PU systems need this or they peel off like cheap wallpaper. Not optional if you want your terrace to last more than two monsoons.',
    
    tds: '/assets/tds/hardproof-primer-sb.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF PRIMER SB - Solvent-Based PU Primer | Hardex India',
      description: 'Solvent-based primer for polyurethane waterproofing membranes. Essential for PU system adhesion and durability.',
      keywords: ['PU primer', 'solvent primer', 'polyurethane primer', 'membrane primer']
    }
  },
  
  {
    id: 'hp120-primer-pu',
    name: 'HARDPROOF PRIMER PU',
    icon: '🔷',
    category: 'Waterproofing',
    subcategory: 'Primers',
    featured: false,
    
    shortDesc: 'Polyurethane primer for advanced membrane waterproofing',
    application: 'High-performance PU waterproof membrane systems',
    coverage: '0.12-0.18 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'The premium option. When your contractor says "trust me, we don\'t need primer"—you need this guy fired and this product applied.',
    
    tds: '/assets/tds/hardproof-primer-pu.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF PRIMER PU - Polyurethane Membrane Primer | Hardex India',
      description: 'High-performance polyurethane primer for advanced waterproofing membrane systems. Professional-grade adhesion.',
      keywords: ['PU primer', 'membrane primer', 'polyurethane waterproofing', 'advanced primer']
    }
  },
  
  {
    id: 'hp200-iw100',
    name: 'HARDPROOF IW100',
    icon: '💧',
    category: 'Waterproofing',
    subcategory: 'Integral Admixtures',
    featured: false,
    
    shortDesc: 'Liquid waterproofing admixture for concrete batching',
    application: 'Mixed directly into concrete for inherent water resistance',
    coverage: 'Dosage: 1-2% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Add this to your concrete mix and the whole structure becomes waterproof from day one. Way cheaper than fixing leaks later.',
    
    tds: '/assets/tds/hardproof-iw100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF IW100 - Integral Waterproofing Admixture | Hardex India',
      description: 'Liquid integral waterproofing admixture for concrete. Makes structures inherently water-resistant during construction.',
      keywords: ['concrete admixture', 'integral waterproofing', 'waterproof concrete', 'construction chemicals']
    }
  },
  
  {
    id: 'hp210-iw200',
    name: 'HARDPROOF IW200',
    icon: '🧱',
    category: 'Waterproofing',
    subcategory: 'Integral Admixtures',
    featured: false,
    
    shortDesc: 'Powder waterproofing admixture for cement mortar',
    application: 'Plastering, masonry mortar, and general construction',
    coverage: 'Dosage: 1-2 kg per bag of cement', // TODO: Add actual dosage
    
    realTalk: 'Your mason is already mixing mortar. Add one scoop of this powder and your walls won\'t seep water during heavy rains. Simple.',
    
    tds: '/assets/tds/hardproof-iw200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF IW200 - Powder Waterproofing for Mortar | Hardex India',
      description: 'Powder integral waterproofing admixture for cement mortar, plaster, and masonry work. Easy to use and effective.',
      keywords: ['mortar waterproofing', 'powder admixture', 'plastering waterproofing', 'masonry protection']
    }
  },
  
  {
    id: 'hp300-cm100',
    name: 'HARDPROOF CM100',
    icon: '🏊',
    category: 'Waterproofing',
    subcategory: 'Cementitious Coatings',
    featured: false,
    
    shortDesc: 'Rigid cementitious waterproofing for water-retaining structures',
    application: 'Water tanks, reservoirs, swimming pools, underground structures',
    coverage: '1.5-2.0 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your water tank leaks and you\'re losing water (and money) every day. This creates a hard, waterproof shell that lasts for years.',
    
    tds: '/assets/tds/hardproof-cm100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF CM100 - Rigid Cementitious Waterproofing | Hardex India',
      description: 'Rigid cement-based waterproofing for water tanks, pools, and reservoirs. Durable and long-lasting protection.',
      keywords: ['water tank waterproofing', 'cementitious coating', 'swimming pool waterproofing', 'reservoir protection']
    }
  },
  
  {
    id: 'hp310-cm200',
    name: 'HARDPROOF CM200',
    icon: '🚿',
    category: 'Waterproofing',
    subcategory: 'Cementitious Coatings',
    featured: false,
    
    shortDesc: 'Flexible cementitious coating for wet areas and bathrooms',
    application: 'Toilets, bathrooms, balconies, kitchens, wet areas',
    coverage: '1.5-2.0 kg/m² for 2 coats', // TODO: Add actual coverage
    
    realTalk: 'Your bathroom walls are seeping water into the bedroom next door. Two coats of this and the problem stops. Permanently.',
    
    tds: '/assets/tds/hardproof-cm200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF CM200 - Flexible Bathroom Waterproofing | Hardex India',
      description: 'Flexible cementitious waterproofing for bathrooms, toilets, and wet areas. Prevents seepage and dampness.',
      keywords: ['bathroom waterproofing', 'toilet waterproofing', 'wet area protection', 'flexible coating']
    }
  },
  
  {
    id: 'hp320-cm300',
    name: 'HARDPROOF CM300',
    icon: '🏠',
    category: 'Waterproofing',
    subcategory: 'Cementitious Coatings',
    featured: false,
    
    shortDesc: 'Two-component flexible coating for basement waterproofing',
    application: 'Basements, retaining walls, underground parking, foundations',
    coverage: '2.0-2.5 kg/m² for 2 coats', // TODO: Add actual coverage
    
    realTalk: 'Your basement smells like a cave and everything stored there gets moldy. This creates a waterproof barrier against groundwater pressure.',
    
    tds: '/assets/tds/hardproof-cm300.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF CM300 - Basement Waterproofing System | Hardex India',
      description: 'Two-component flexible cementitious waterproofing for basements and underground structures. Resists water pressure.',
      keywords: ['basement waterproofing', 'underground waterproofing', 'foundation protection', '2K coating']
    }
  },
  
  {
    id: 'hp400-acr300',
    name: 'HARDPROOF ACR300',
    icon: '🏢',
    category: 'Waterproofing',
    subcategory: 'Acrylic Coatings',
    featured: false,
    
    shortDesc: 'Acrylic elastomeric coating for terrace and roof waterproofing',
    application: 'Terraces, roofs, balconies, sunshades, chajjas',
    coverage: '1.5-2.0 kg/m² for 2-3 coats', // TODO: Add actual coverage
    
    realTalk: 'Standard terrace coating. Does the job. Won\'t reflect heat like COOLCOAT, but it\'ll stop your ceiling from getting wet patches.',
    
    tds: '/assets/tds/hardproof-acr300.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF ACR300 - Acrylic Terrace Waterproofing | Hardex India',
      description: 'Elastomeric acrylic coating for terrace and roof waterproofing. Flexible, durable, and weather-resistant.',
      keywords: ['terrace waterproofing', 'roof coating', 'acrylic waterproofing', 'elastomeric coating']
    }
  },
  
  {
    id: 'hardproof-coolcoat',
    name: 'HARDPROOF COOLCOAT',
    icon: '🛡️',
    category: 'Waterproofing',
    subcategory: 'Heat Reflective',
    featured: true,
    
    shortDesc: 'Heat-reflective elastomeric waterproofing for roofs and terraces',
    application: 'Roofs, terraces, metal sheds - waterproofing with thermal insulation',
    coverage: '1.5-2.0 kg/m² for 2-3 coats', // TODO: Add actual coverage
    
    realTalk: 'Your terrace leaks every monsoon and your top floor is an oven in summer. This stops the water AND drops your temperature 5-8°C. Fix two problems with one coating.',
    
    tds: '/assets/tds/hardproof-coolcoat.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF COOLCOAT - Heat Reflective Roof Waterproofing | Hardex India',
      description: 'Premium heat-reflective waterproofing coating. Stops leaks and reduces roof surface temperature by 5-8°C. Dual benefit solution.',
      keywords: ['heat reflective coating', 'cool roof', 'waterproofing', 'thermal insulation', 'energy saving']
    }
  },
  
  {
    id: 'hp500-pu200',
    name: 'HARDPROOF PU200',
    icon: '💎',
    category: 'Waterproofing',
    subcategory: 'PU Membranes',
    featured: false,
    
    shortDesc: 'Single-component polyurethane liquid membrane for terraces',
    application: 'Terrace waterproofing, podium decks, balconies',
    coverage: '1.5-2.0 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'The premium option for terraces. More expensive than acrylic, but lasts 10+ years without peeling. One-time investment.',
    
    tds: '/assets/tds/hardproof-pu200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF PU200 - Polyurethane Liquid Membrane | Hardex India',
      description: 'Single-component PU liquid membrane for long-lasting terrace waterproofing. Premium durability and performance.',
      keywords: ['PU membrane', 'liquid waterproofing', 'terrace membrane', 'polyurethane coating']
    }
  },
  
  {
    id: 'hp510-pu350',
    name: 'HARDPROOF PU350',
    icon: '🔧',
    category: 'Waterproofing',
    subcategory: 'Sealants',
    featured: false,
    
    shortDesc: 'Polyurethane-based sealant for concrete expansion joints and cracks',
    application: 'Crack sealing, expansion joints, construction joints',
    coverage: 'Per linear meter based on crack width', // TODO: Add actual coverage
    
    realTalk: 'That crack in your wall keeps getting bigger every monsoon. Fill it with this and it stretches with the building movement—won\'t crack open again.',
    
    tds: '/assets/tds/hardproof-pu350.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF PU350 - Polyurethane Crack Sealant | Hardex India',
      description: 'Flexible PU sealant for concrete cracks and expansion joints. Accommodates movement without failure.',
      keywords: ['crack sealant', 'PU sealant', 'expansion joint', 'concrete repair']
    }
  },
  
  {
    id: 'hp520-pu400',
    name: 'HARDPROOF PU400',
    icon: '⚡',
    category: 'Waterproofing',
    subcategory: 'PU Membranes',
    featured: false,
    
    shortDesc: 'Heavy-duty two-component polyurethane membrane system',
    application: 'Industrial roofs, high-traffic terraces, demanding applications',
    coverage: '2.0-2.5 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'When regular waterproofing isn\'t enough. For roofs that get walked on daily, industrial buildings, or anywhere failure isn\'t an option.',
    
    tds: '/assets/tds/hardproof-pu400.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF PU400 - Heavy Duty PU Membrane | Hardex India',
      description: 'Two-component heavy-duty polyurethane membrane for demanding applications. Industrial-grade performance.',
      keywords: ['heavy duty membrane', '2K PU', 'industrial waterproofing', 'high traffic roof']
    }
  },
  
  {
    id: 'hp600-dp100',
    name: 'HARDPROOF DP100',
    icon: '🌊',
    category: 'Waterproofing',
    subcategory: 'Damp Proofing',
    featured: false,
    
    shortDesc: 'Damp-proof coating for rising damp in walls and foundations',
    application: 'Ground floor walls, rising damp treatment, foundation protection',
    coverage: '0.20-0.30 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your ground floor walls are always damp and paint keeps peeling. This blocks moisture from the ground creeping up into your walls.',
    
    tds: '/assets/tds/hardproof-dp100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF DP100 - Rising Damp Treatment | Hardex India',
      description: 'Damp-proof coating for rising damp in walls. Blocks moisture migration from ground level.',
      keywords: ['damp proofing', 'rising damp', 'wall dampness', 'moisture barrier']
    }
  },
  
  {
    id: 'hp700-inj-pu',
    name: 'HARDPROOF INJ PU',
    icon: '💉',
    category: 'Waterproofing',
    subcategory: 'Injection Grouts',
    featured: false,
    
    shortDesc: 'Polyurethane injection grout for active water leakage repair',
    application: 'Active leaks, running water, basement seepage, crack injection',
    coverage: 'Based on crack volume', // TODO: Add actual coverage
    
    realTalk: 'Water is actively pouring through a crack right now. This expands on contact with water and plugs the leak in minutes. Emergency fix.',
    
    tds: '/assets/tds/hardproof-inj-pu.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF INJ PU - Polyurethane Injection Grout | Hardex India',
      description: 'PU injection grout for active water leakage repair. Fast-reacting solution for emergency leak stopping.',
      keywords: ['injection grout', 'leak repair', 'PU injection', 'active leakage']
    }
  },
  
  {
    id: 'hp710-inj-ep',
    name: 'HARDPROOF INJ EP',
    icon: '🏗️',
    category: 'Waterproofing',
    subcategory: 'Injection Grouts',
    featured: false,
    
    shortDesc: 'Epoxy injection resin for structural crack repair and bonding',
    application: 'Structural cracks, crack stabilization, load-bearing repairs',
    coverage: 'Based on crack volume and depth', // TODO: Add actual coverage
    
    realTalk: 'This isn\'t just sealing—it\'s welding the crack back together. For when the crack is structural and you need the strength back.',
    
    tds: '/assets/tds/hardproof-inj-ep.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPROOF INJ EP - Epoxy Crack Injection | Hardex India',
      description: 'Structural epoxy injection resin for crack repair. Restores structural integrity and waterproofs simultaneously.',
      keywords: ['epoxy injection', 'structural repair', 'crack injection', 'concrete bonding']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // HARDFLOOR — Industrial Flooring (12 products including NMX20)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'hf100-ep100',
    name: 'HARDFLOOR EP100',
    icon: '🎯',
    category: 'Flooring Systems',
    subcategory: 'Epoxy Primers',
    featured: false,
    
    shortDesc: 'Epoxy primer for industrial floor coating systems',
    application: 'Primer coat for epoxy and PU floor systems',
    coverage: '0.15-0.20 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Skip this and your expensive epoxy topcoat peels off in 6 months. Not optional—it\'s the foundation of everything above it.',
    
    tds: '/assets/tds/hardfloor-ep100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR EP100 - Epoxy Floor Primer | Hardex India',
      description: 'Industrial-grade epoxy primer for floor coating systems. Ensures adhesion and long-term performance.',
      keywords: ['epoxy primer', 'floor primer', 'industrial flooring', 'coating primer']
    }
  },
  
  {
    id: 'hardfloor-mtp100',
    name: 'HARDFLOOR MTP100',
    icon: '💦',
    category: 'Flooring Systems',
    subcategory: 'Moisture Tolerant',
    featured: true,
    
    shortDesc: 'Moisture-tolerant epoxy primer for damp concrete substrates',
    application: 'New concrete, high humidity areas, damp floors up to 6% moisture',
    coverage: '0.15-0.20 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Your floor is still damp but you need to finish the project. This bonds to wet concrete when normal epoxy fails. Project saver.',
    
    tds: '/assets/tds/hardfloor-mtp100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR MTP100 - Moisture Tolerant Epoxy Primer | Hardex India',
      description: 'Advanced moisture-tolerant epoxy primer for damp substrates. Apply on concrete up to 6% moisture content.',
      keywords: ['moisture tolerant', 'damp floor primer', 'wet concrete', 'humidity resistant']
    }
  },
  
  {
    id: 'hf200-erc150',
    name: 'HARDFLOOR ERC150',
    icon: '🖌️',
    category: 'Flooring Systems',
    subcategory: 'Wall Coatings',
    featured: false,
    
    shortDesc: 'Solvent-based epoxy roller coating for walls and vertical surfaces',
    application: 'Industrial walls, pharmaceutical clean rooms, food processing areas',
    coverage: '0.15-0.20 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Clean room walls need to be washable and chemical-resistant. This creates a seamless, easy-to-clean surface that meets hygiene standards.',
    
    tds: '/assets/tds/hardfloor-erc150.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR ERC150 - Epoxy Wall Coating | Hardex India',
      description: 'Solvent-based epoxy coating for walls in clean rooms and industrial facilities. Chemical-resistant and washable.',
      keywords: ['epoxy wall coating', 'clean room', 'industrial walls', 'pharmaceutical coating']
    }
  },
  
  {
    id: 'hf310-erc200',
    name: 'HARDFLOOR ERC200',
    icon: '🏭',
    category: 'Flooring Systems',
    subcategory: 'Epoxy Coatings',
    featured: false,
    
    shortDesc: 'Epoxy roller coat for light industrial and commercial floors',
    application: 'Warehouses, light manufacturing, commercial spaces, showrooms',
    coverage: '0.20-0.30 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your warehouse floor is dusty and looks unprofessional. Roll this on and you get a clean, dust-free surface that clients don\'t cringe at.',
    
    tds: '/assets/tds/hardfloor-erc200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR ERC200 - Light Industrial Epoxy Coating | Hardex India',
      description: 'Epoxy roller coating for light industrial floors. Dust-proof, easy to clean, professional appearance.',
      keywords: ['warehouse flooring', 'industrial coating', 'epoxy floor', 'commercial flooring']
    }
  },
  
  {
    id: 'hf330-erc300',
    name: 'HARDFLOOR ERC300',
    icon: '⚙️',
    category: 'Flooring Systems',
    subcategory: 'Heavy Duty Coatings',
    featured: false,
    
    shortDesc: 'Heavy-duty epoxy roller coating for demanding industrial environments',
    application: 'Heavy manufacturing, automotive plants, chemical facilities',
    coverage: '0.30-0.40 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Forklifts, chemical spills, 24/7 operations. This takes the beating and keeps going. Built for factories that can\'t afford downtime.',
    
    tds: '/assets/tds/hardfloor-erc300.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR ERC300 - Heavy Duty Industrial Epoxy | Hardex India',
      description: 'Heavy-duty epoxy coating for demanding industrial floors. Resists chemicals, abrasion, and heavy traffic.',
      keywords: ['heavy duty epoxy', 'industrial floor coating', 'chemical resistant', 'high traffic']
    }
  },
  
  {
    id: 'hardfloor-sl1000',
    name: 'HARDFLOOR SL1000',
    icon: '🔷',
    category: 'Flooring Systems',
    subcategory: 'Self-Leveling Epoxy',
    featured: true,
    
    shortDesc: 'Self-leveling epoxy flooring system for smooth, seamless surfaces',
    application: 'Clean rooms, electronics manufacturing, commercial spaces, showrooms',
    coverage: '1.2-1.5 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'Your factory floor is cracked, dusty, and embarrassing when clients visit. One application gives you a glass-smooth surface that looks like you spent serious money.',
    
    tds: '/assets/tds/hardfloor-sl1000.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR SL1000 - Self-Leveling Epoxy Flooring | Hardex India',
      description: 'Premium self-leveling epoxy for smooth, seamless industrial floors. High-gloss finish, chemical resistant, durable.',
      keywords: ['self-leveling epoxy', 'smooth floor', 'industrial flooring', 'seamless epoxy']
    }
  },
  
  {
    id: 'hf300-sl1003',
    name: 'HARDFLOOR SL1003',
    icon: '🏗️',
    category: 'Flooring Systems',
    subcategory: 'Epoxy Screed',
    featured: false,
    
    shortDesc: 'Heavy-duty self-leveling epoxy screed for industrial applications',
    application: 'Heavy machinery areas, high-impact zones, severe duty floors',
    coverage: '2.0-3.0 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'When regular epoxy isn\'t enough. For areas where forklifts drop loads, machinery vibrates 24/7, and normal floors crack in months.',
    
    tds: '/assets/tds/hardfloor-sl1003.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR SL1003 - Heavy Duty Epoxy Screed | Hardex India',
      description: 'Industrial-strength epoxy screed for heavy-duty applications. Maximum impact and abrasion resistance.',
      keywords: ['epoxy screed', 'heavy duty floor', 'industrial screed', 'high impact flooring']
    }
  },
  
  {
    id: 'hf400-tc500',
    name: 'HARDFLOOR TC500',
    icon: '✨',
    category: 'Flooring Systems',
    subcategory: 'Topcoats',
    featured: false,
    
    shortDesc: 'Clear epoxy topcoat for floor protection and gloss finish',
    application: 'Protective finish over epoxy floors, decorative systems',
    coverage: '0.15-0.20 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'The final layer that makes everything shine and protects your investment. Skip it and watch your floor dull out in 6 months.',
    
    tds: '/assets/tds/hardfloor-tc500.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR TC500 - Epoxy Topcoat | Hardex India',
      description: 'Clear epoxy topcoat for floor protection. High-gloss finish, UV resistant, chemical protection.',
      keywords: ['epoxy topcoat', 'clear coat', 'floor sealer', 'gloss finish']
    }
  },
  
  {
    id: 'hf410-pu600',
    name: 'HARDFLOOR PU600',
    icon: '🍕',
    category: 'Flooring Systems',
    subcategory: 'PU Flooring',
    featured: false,
    
    shortDesc: 'Polyurethane floor coating for food industry and wet processing areas',
    application: 'Food processing, commercial kitchens, beverage plants, wet areas',
    coverage: '0.25-0.35 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Food-grade floors that get washed down daily with hot water and chemicals. This stays intact when epoxy would fail. FDA compliant.',
    
    tds: '/assets/tds/hardfloor-pu600.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR PU600 - Food Industry PU Flooring | Hardex India',
      description: 'Polyurethane flooring for food processing and wet areas. Thermal shock resistant, hygienic, chemical resistant.',
      keywords: ['food grade flooring', 'PU floor', 'food processing', 'wet area flooring']
    }
  },
  
  {
    id: 'hf500-esd',
    name: 'HARDFLOOR ESD',
    icon: '⚡',
    category: 'Flooring Systems',
    subcategory: 'Specialty Systems',
    featured: false,
    
    shortDesc: 'Anti-static epoxy flooring for electronics manufacturing',
    application: 'Electronics assembly, server rooms, explosive environments',
    coverage: '1.5-2.0 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Static electricity kills electronics. One spark destroys a ₹50,000 component. This floor dissipates charge before damage happens.',
    
    tds: '/assets/tds/hardfloor-esd.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR ESD - Anti-Static Epoxy Flooring | Hardex India',
      description: 'Conductive epoxy flooring for electronics manufacturing. Prevents static discharge damage to sensitive components.',
      keywords: ['ESD flooring', 'anti-static floor', 'electronics flooring', 'conductive epoxy']
    }
  },
  
  {
    id: 'hf510-pu-sl',
    name: 'HARDFLOOR PU SL',
    icon: '🧪',
    category: 'Flooring Systems',
    subcategory: 'PU Systems',
    featured: false,
    
    shortDesc: 'Self-leveling polyurethane for heavy chemical exposure areas',
    application: 'Chemical plants, laboratories, battery manufacturing, acid storage',
    coverage: '2.0-2.5 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'When acids, solvents, and chemicals are spilled daily. Epoxy melts, concrete dissolves. This keeps going. Chemical warfare flooring.',
    
    tds: '/assets/tds/hardfloor-pu-sl.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR PU SL - Chemical Resistant PU Flooring | Hardex India',
      description: 'Self-leveling polyurethane for extreme chemical resistance. Withstands acids, solvents, and harsh chemicals.',
      keywords: ['chemical resistant flooring', 'PU self leveling', 'acid resistant', 'laboratory floor']
    }
  },
  
  {
    id: 'hf600-qh',
    name: 'HARDFLOOR QH',
    icon: '💎',
    category: 'Flooring Systems',
    subcategory: 'Dry Shake Hardeners',
    featured: false,
    
    shortDesc: 'Quartz-based dry shake floor hardener for industrial concrete',
    application: 'Warehouse floors, manufacturing areas, loading docks',
    coverage: '3-5 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Your concrete floor is dusty and crumbling under forklift traffic. Shake this on during finishing and you get a hard, dust-free surface for 1/5th the cost of epoxy.',
    
    tds: '/assets/tds/hardfloor-qh.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR QH - Quartz Floor Hardener | Hardex India',
      description: 'Dry shake quartz hardener for industrial concrete floors. Dust-proof, abrasion-resistant, economical solution.',
      keywords: ['floor hardener', 'dry shake', 'quartz hardener', 'dust proof floor']
    }
  },
  
  {
    id: 'hf610-mh',
    name: 'HARDFLOOR MH',
    icon: '🔩',
    category: 'Flooring Systems',
    subcategory: 'Metallic Hardeners',
    featured: false,
    
    shortDesc: 'Metallic aggregate floor hardener for extreme-duty applications',
    application: 'Heavy industrial floors, impact zones, extreme abrasion areas',
    coverage: '4-6 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'The toughest non-epoxy option. For floors that take serious abuse—steel mills, foundries, heavy machinery. Harder than the concrete itself.',
    
    tds: '/assets/tds/hardfloor-mh.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR MH - Metallic Floor Hardener | Hardex India',
      description: 'Metallic dry shake hardener for extreme-duty industrial floors. Maximum abrasion and impact resistance.',
      keywords: ['metallic hardener', 'heavy duty floor', 'industrial topping', 'abrasion resistant']
    }
  },
  
  {
    id: 'nmx20',
    name: 'NMX20',
    icon: '🎨',
    category: 'Flooring Systems',
    subcategory: 'Non-Metallic Hardeners',
    featured: true,
    
    shortDesc: 'Non-metallic colored floor hardener for industrial and commercial use',
    application: 'Warehouses, showrooms, retail spaces, color-coded factory zones',
    coverage: '3-5 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Grey version stops the dust. Colored version stops the dust AND makes oil stains, tire marks, scuffs look intentional. Your warehouse looks professional for ₹80/m² instead of ₹500/m² for epoxy.',
    
    tds: '/assets/tds/nmx20.pdf',
    msds: null,
    
    seo: {
      title: 'NMX20 - Colored Non-Metallic Floor Hardener | Hardex India',
      description: 'Non-metallic colored floor hardener for industrial floors. Dust-proof, decorative, economical. Available in multiple colors.',
      keywords: ['colored hardener', 'non-metallic', 'colored concrete', 'industrial floor color']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // HARDPOXY — Epoxy Systems (10 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'he100-eb300',
    name: 'HARDPOXY EB300',
    icon: '🔗',
    category: 'Epoxy Systems',
    subcategory: 'Bonding Agents',
    featured: false,
    
    shortDesc: 'Epoxy bonding agent for bonding new concrete to old surfaces',
    application: 'Concrete repair, new-to-old concrete bonding, overlays',
    coverage: '0.30-0.40 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Trying to patch old concrete? New concrete won\'t stick without this. Apply it and you get a chemical weld between old and new.',
    
    tds: '/assets/tds/hardpoxy-eb300.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY EB300 - Epoxy Bonding Agent | Hardex India',
      description: 'High-strength epoxy bonding agent for concrete-to-concrete bonding. Permanent adhesion for repairs and overlays.',
      keywords: ['epoxy bonding', 'concrete bonding', 'repair bonding', 'adhesion agent']
    }
  },
  
  {
    id: 'he200-eg100',
    name: 'HARDPOXY EG100',
    icon: '⚙️',
    category: 'Epoxy Systems',
    subcategory: 'Epoxy Grouts',
    featured: false,
    
    shortDesc: 'Epoxy grout for machinery foundation and equipment mounting',
    application: 'Machinery foundations, equipment grouting, precision installations',
    coverage: 'Based on void volume', // TODO: Add actual coverage
    
    realTalk: 'Your expensive machinery needs perfect leveling and zero vibration transfer. This grout sets hard and stays put—no shrinkage, no movement.',
    
    tds: '/assets/tds/hardpoxy-eg100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY EG100 - Epoxy Machinery Grout | Hardex India',
      description: 'Non-shrink epoxy grout for machinery foundations. High compressive strength, vibration resistant.',
      keywords: ['epoxy grout', 'machinery foundation', 'equipment grouting', 'non-shrink grout']
    }
  },
  
  {
    id: 'he210-eg200',
    name: 'HARDPOXY EG200',
    icon: '🏭',
    category: 'Epoxy Systems',
    subcategory: 'Heavy Duty Grouts',
    featured: false,
    
    shortDesc: 'Heavy-duty epoxy grout for extreme load applications',
    application: 'Heavy equipment, turbine foundations, crane rails, high-load zones',
    coverage: 'Based on void volume', // TODO: Add actual coverage
    
    realTalk: 'Regular grout crushes under heavy machinery. This takes the load without cracking. For when equipment weighs in tons and failure isn\'t an option.',
    
    tds: '/assets/tds/hardpoxy-eg200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY EG200 - Heavy Duty Epoxy Grout | Hardex India',
      description: 'High-performance epoxy grout for extreme loads. Ideal for heavy machinery and structural applications.',
      keywords: ['heavy duty grout', 'high load grout', 'structural grout', 'turbine foundation']
    }
  },
  
  {
    id: 'he300-inj200',
    name: 'HARDPOXY INJ200',
    icon: '💉',
    category: 'Epoxy Systems',
    subcategory: 'Injection Resins',
    featured: false,
    
    shortDesc: 'Low-viscosity epoxy injection resin for structural crack repair',
    application: 'Structural crack injection, concrete restoration, load transfer',
    coverage: 'Based on crack volume', // TODO: Add actual coverage
    
    realTalk: 'Structural cracks need structural fixes. This flows deep into hairline cracks and bonds them back together—restores the strength.',
    
    tds: '/assets/tds/hardpoxy-inj200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY INJ200 - Epoxy Crack Injection Resin | Hardex India',
      description: 'Low-viscosity epoxy for structural crack injection. Restores concrete integrity and prevents water ingress.',
      keywords: ['crack injection', 'epoxy injection', 'structural repair', 'concrete restoration']
    }
  },
  
  {
    id: 'he400-tc500',
    name: 'HARDPOXY TC500',
    icon: '🛡️',
    category: 'Epoxy Systems',
    subcategory: 'Protective Coatings',
    featured: false,
    
    shortDesc: 'Epoxy protective coating for concrete and steel surfaces',
    application: 'Chemical tanks, marine structures, industrial equipment, concrete protection',
    coverage: '0.25-0.35 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your concrete or steel is exposed to chemicals, moisture, or harsh environments. This seals it off from everything trying to destroy it.',
    
    tds: '/assets/tds/hardpoxy-tc500.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY TC500 - Epoxy Protective Coating | Hardex India',
      description: 'High-performance epoxy coating for concrete and steel protection. Chemical and corrosion resistant.',
      keywords: ['epoxy coating', 'protective coating', 'chemical resistant', 'anti-corrosion']
    }
  },
  
  {
    id: 'he410-sc400',
    name: 'HARDPOXY SC400',
    icon: '🏗️',
    category: 'Epoxy Systems',
    subcategory: 'Epoxy Screeds',
    featured: false,
    
    shortDesc: 'Epoxy mortar screed for heavy-duty industrial floor repairs',
    application: 'Floor patching, pothole repair, high-traffic repair zones',
    coverage: '2.0-3.0 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'Your floor has potholes from forklifts and heavy loads. Cement patches crack again in weeks. This bonds permanently and takes the abuse.',
    
    tds: '/assets/tds/hardpoxy-sc400.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY SC400 - Epoxy Floor Screed | Hardex India',
      description: 'Heavy-duty epoxy screed for industrial floor repairs. High bond strength, chemical resistant, durable.',
      keywords: ['epoxy screed', 'floor repair', 'pothole repair', 'industrial repair']
    }
  },
  
  {
    id: 'he500-adh',
    name: 'HARDPOXY ADH',
    icon: '🔧',
    category: 'Epoxy Systems',
    subcategory: 'Structural Adhesives',
    featured: false,
    
    shortDesc: 'High-strength epoxy adhesive for structural bonding applications',
    application: 'Steel-to-concrete bonding, structural joints, composite bonding',
    coverage: 'Based on joint area', // TODO: Add actual coverage
    
    realTalk: 'Bolts aren\'t always an option. This creates a permanent chemical bond stronger than the materials themselves. Structural engineering in a tube.',
    
    tds: '/assets/tds/hardpoxy-adh.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY ADH - Structural Epoxy Adhesive | Hardex India',
      description: 'High-performance structural epoxy adhesive. Bonds steel, concrete, and composites with exceptional strength.',
      keywords: ['epoxy adhesive', 'structural bonding', 'steel bonding', 'high strength adhesive']
    }
  },
  
  {
    id: 'he510-crackfill',
    name: 'HARDPOXY CRACKFILL',
    icon: '🩹',
    category: 'Epoxy Systems',
    subcategory: 'Crack Fillers',
    featured: false,
    
    shortDesc: 'Epoxy paste filler for surface crack repair and sealing',
    application: 'Non-structural crack filling, surface sealing, cosmetic repairs',
    coverage: 'Based on crack width and depth', // TODO: Add actual coverage
    
    realTalk: 'Surface cracks that aren\'t structural but look bad and collect dirt. Fill them with this and they disappear—permanently sealed.',
    
    tds: '/assets/tds/hardpoxy-crackfill.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY CRACKFILL - Epoxy Crack Filler | Hardex India',
      description: 'Epoxy paste for surface crack filling and repair. Smooth finish, permanent seal, easy application.',
      keywords: ['crack filler', 'epoxy paste', 'surface repair', 'crack sealing']
    }
  },
  
  {
    id: 'he520-dampblock',
    name: 'HARDPOXY DAMPBLOCK',
    icon: '💧',
    category: 'Epoxy Systems',
    subcategory: 'Moisture Barriers',
    featured: false,
    
    shortDesc: 'Epoxy moisture barrier coating for damp substrates',
    application: 'Damp floors, moisture barrier under flooring, basement dampness',
    coverage: '0.30-0.50 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Your floor is damp and you need to install flooring NOW. This seals the moisture in and creates a dry surface to work on.',
    
    tds: '/assets/tds/hardpoxy-dampblock.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY DAMPBLOCK - Epoxy Moisture Barrier | Hardex India',
      description: 'Epoxy moisture barrier for damp substrates. Blocks moisture migration under floor coatings and finishes.',
      keywords: ['moisture barrier', 'damp floor', 'epoxy damp proof', 'moisture block']
    }
  },
  
  {
    id: 'he600-anchor',
    name: 'HARDPOXY ANCHOR',
    icon: '⚓',
    category: 'Epoxy Systems',
    subcategory: 'Anchor Grouts',
    featured: false,
    
    shortDesc: 'Epoxy anchor grout for rebar doweling and bolt fixing',
    application: 'Rebar anchoring, bolt fixing, post-installation connections',
    coverage: 'Based on hole volume', // TODO: Add actual coverage
    
    realTalk: 'You need to anchor rebar or bolts into existing concrete. Drill, fill with this, insert bar. Sets in hours with pull-out strength that exceeds the concrete.',
    
    tds: '/assets/tds/hardpoxy-anchor.pdf',
    msds: null,
    
    seo: {
      title: 'HARDPOXY ANCHOR - Epoxy Anchor Grout | Hardex India',
      description: 'High-strength epoxy anchor grout for rebar and bolt fixing. Fast-setting, high pull-out resistance.',
      keywords: ['epoxy anchor', 'rebar anchoring', 'chemical anchor', 'bolt fixing']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // HARDCRETE — Concrete Admixtures (12 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'hc100-sp100',
    name: 'HARDCRETE SP100',
    icon: '⚙️',
    category: 'Concrete Admixtures',
    subcategory: 'Superplasticizers',
    featured: false,
    
    shortDesc: 'Superplasticizing admixture for improved concrete workability',
    application: 'Ready-mix concrete, precast, high-performance concrete',
    coverage: 'Dosage: 0.5-1.5% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Your concrete is too stiff to pour properly. Add this and it flows like honey without adding extra water—strength stays intact.',
    
    tds: '/assets/tds/hardcrete-sp100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE SP100 - Concrete Superplasticizer | Hardex India',
      description: 'High-range water reducing admixture for concrete. Improves workability and strength without excess water.',
      keywords: ['superplasticizer', 'water reducer', 'concrete admixture', 'workability']
    }
  },
  
  {
    id: 'hc110-sp200',
    name: 'HARDCRETE SP200',
    icon: '💪',
    category: 'Concrete Admixtures',
    subcategory: 'High Performance',
    featured: false,
    
    shortDesc: 'High-range water reducer for high-strength concrete applications',
    application: 'High-rise buildings, infrastructure, M60+ grade concrete',
    coverage: 'Dosage: 0.8-2.0% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'You need M60 or M70 concrete. Regular superplasticizer won\'t cut it. This gets you the strength without segregation or bleeding.',
    
    tds: '/assets/tds/hardcrete-sp200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE SP200 - High Strength Concrete Admixture | Hardex India',
      description: 'High-range water reducing admixture for high-strength concrete. Achieves M60+ grades with superior finish.',
      keywords: ['high strength concrete', 'water reducer', 'M60 concrete', 'HRWR']
    }
  },
  
  {
    id: 'hc120-sp300',
    name: 'HARDCRETE SP300',
    icon: '🏗️',
    category: 'Concrete Admixtures',
    subcategory: 'PCE Technology',
    featured: false,
    
    shortDesc: 'PCE-based superplasticizer for ready-mix concrete applications',
    application: 'RMC plants, self-compacting concrete, extended slump retention',
    coverage: 'Dosage: 0.5-1.2% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Your RMC truck is stuck in traffic and the concrete is setting. PCE technology keeps it workable for hours—no rejected loads.',
    
    tds: '/assets/tds/hardcrete-sp300.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE SP300 - PCE Superplasticizer for RMC | Hardex India',
      description: 'Polycarboxylate ether superplasticizer for ready-mix concrete. Extended workability, superior finish, slump retention.',
      keywords: ['PCE superplasticizer', 'RMC admixture', 'slump retention', 'self-compacting']
    }
  },
  
  {
    id: 'hc200-r100',
    name: 'HARDCRETE R100',
    icon: '🌡️',
    category: 'Concrete Admixtures',
    subcategory: 'Set Retarders',
    featured: false,
    
    shortDesc: 'Retarding admixture for hot weather concreting',
    application: 'Hot weather pours, long-distance transport, mass concrete',
    coverage: 'Dosage: 0.2-0.5% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Pouring concrete in summer heat? It\'s setting before you finish. This delays the set so you have time to place and finish properly.',
    
    tds: '/assets/tds/hardcrete-r100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE R100 - Concrete Set Retarder | Hardex India',
      description: 'Retarding admixture for hot weather concreting. Extends setting time, prevents cold joints, improves finish.',
      keywords: ['set retarder', 'hot weather concrete', 'retarding admixture', 'concrete retarder']
    }
  },
  
  {
    id: 'hc210-a100',
    name: 'HARDCRETE A100',
    icon: '⚡',
    category: 'Concrete Admixtures',
    subcategory: 'Accelerators',
    featured: false,
    
    shortDesc: 'Chloride-free accelerating admixture for early strength gain',
    application: 'Winter concreting, fast-track projects, early formwork removal',
    coverage: 'Dosage: 0.5-2.0% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'You need to strip formwork tomorrow, not next week. This accelerates the set and gets you early strength without damaging the rebar.',
    
    tds: '/assets/tds/hardcrete-a100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE A100 - Concrete Accelerator | Hardex India',
      description: 'Chloride-free accelerating admixture for concrete. Early strength gain, fast-track construction, winter concreting.',
      keywords: ['concrete accelerator', 'early strength', 'fast setting', 'chloride free']
    }
  },
  
  {
    id: 'hc300-wp100',
    name: 'HARDCRETE WP100',
    icon: '💧',
    category: 'Concrete Admixtures',
    subcategory: 'Waterproofers',
    featured: false,
    
    shortDesc: 'Waterproofing admixture for concrete and mortar',
    application: 'Waterproof concrete, basement walls, water tanks, foundations',
    coverage: 'Dosage: 1-2% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Make the concrete waterproof from the inside during batching. Cheaper than external waterproofing and lasts the life of the structure.',
    
    tds: '/assets/tds/hardcrete-wp100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE WP100 - Integral Waterproofing Admixture | Hardex India',
      description: 'Integral waterproofing admixture for concrete. Creates water-resistant structures from within.',
      keywords: ['waterproof concrete', 'integral waterproofing', 'concrete admixture', 'moisture barrier']
    }
  },
  
  {
    id: 'hc400-air100',
    name: 'HARDCRETE AIR100',
    icon: '❄️',
    category: 'Concrete Admixtures',
    subcategory: 'Air Entraining',
    featured: false,
    
    shortDesc: 'Air-entraining admixture for freeze-thaw resistance',
    application: 'Cold climate construction, roads, bridges, exposed structures',
    coverage: 'Dosage: 0.05-0.2% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'In freeze-thaw cycles, water expands and cracks concrete. Microscopic air bubbles give it room to expand—prevents cracking.',
    
    tds: '/assets/tds/hardcrete-air100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE AIR100 - Air Entraining Admixture | Hardex India',
      description: 'Air-entraining admixture for freeze-thaw protection. Improves durability in cold climates and harsh conditions.',
      keywords: ['air entraining', 'freeze thaw', 'concrete durability', 'cold weather']
    }
  },
  
  {
    id: 'hc500-sc100',
    name: 'HARDCRETE SC100',
    icon: '🚇',
    category: 'Concrete Admixtures',
    subcategory: 'Shotcrete',
    featured: false,
    
    shortDesc: 'Accelerator for shotcrete and tunnel lining applications',
    application: 'Shotcrete, tunnel construction, underground mining, slope stabilization',
    coverage: 'Dosage: 2-6% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Spraying concrete on tunnel walls or vertical surfaces. This makes it stick instantly without slumping—sets in minutes.',
    
    tds: '/assets/tds/hardcrete-sc100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE SC100 - Shotcrete Accelerator | Hardex India',
      description: 'Shotcrete accelerator for tunnel construction. Fast setting, low rebound, high early strength.',
      keywords: ['shotcrete accelerator', 'tunnel concrete', 'mining shotcrete', 'gunite']
    }
  },
  
  {
    id: 'hc600-plast',
    name: 'HARDCRETE PLAST',
    icon: '🔄',
    category: 'Concrete Admixtures',
    subcategory: 'Plasticizers',
    featured: false,
    
    shortDesc: 'Plasticizing admixture for general concrete workability improvement',
    application: 'General construction, plastering, block work, site-mixed concrete',
    coverage: 'Dosage: 0.2-0.5% by weight of cement', // TODO: Add actual dosage
    
    realTalk: 'Budget-friendly workability improver. Not a superplasticizer, but makes concrete easier to place without spending big money.',
    
    tds: '/assets/tds/hardcrete-plast.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE PLAST - Concrete Plasticizer | Hardex India',
      description: 'General-purpose plasticizer for concrete. Improves workability, reduces water demand, economical solution.',
      keywords: ['plasticizer', 'concrete workability', 'water reducer', 'general concrete']
    }
  },
  
  {
    id: 'hc700-curing',
    name: 'HARDCRETE CURING',
    icon: '🌊',
    category: 'Concrete Admixtures',
    subcategory: 'Curing Compounds',
    featured: false,
    
    shortDesc: 'Curing compound for concrete surface protection and moisture retention',
    application: 'Freshly poured concrete, roads, floors, pavements',
    coverage: '0.15-0.20 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Spray this on fresh concrete and it locks in moisture—concrete cures properly instead of drying too fast and cracking.',
    
    tds: '/assets/tds/hardcrete-curing.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE CURING - Concrete Curing Compound | Hardex India',
      description: 'Membrane-forming curing compound for concrete. Retains moisture, prevents cracking, improves strength gain.',
      keywords: ['curing compound', 'concrete curing', 'moisture retention', 'membrane curing']
    }
  },
  
  {
    id: 'hc710-bond',
    name: 'HARDCRETE BOND',
    icon: '🔗',
    category: 'Concrete Admixtures',
    subcategory: 'Bonding Agents',
    featured: false,
    
    shortDesc: 'SBR bonding agent for mortar and plaster adhesion',
    application: 'Plaster bonding, tile adhesion, repair mortar bonding',
    coverage: 'Mix 1:3 with water, apply at 0.2-0.3 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Your plaster keeps falling off. Mix this into your mortar and it bonds permanently—no more peeling or hollow sounds.',
    
    tds: '/assets/tds/hardcrete-bond.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE BOND - SBR Bonding Agent | Hardex India',
      description: 'Styrene-butadiene rubber bonding agent for mortar and plaster. Improves adhesion and water resistance.',
      keywords: ['SBR bonding', 'mortar bonding', 'plaster adhesion', 'bonding agent']
    }
  },
  
  {
    id: 'hc720-release',
    name: 'HARDCRETE RELEASE',
    icon: '🛢️',
    category: 'Concrete Admixtures',
    subcategory: 'Form Release',
    featured: false,
    
    shortDesc: 'Shuttering oil for clean formwork release and surface finish',
    application: 'Formwork coating, mold release, precast applications',
    coverage: '0.05-0.10 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Spray this on your formwork before pouring. Concrete releases cleanly without sticking—saves time, saves wood, better finish.',
    
    tds: '/assets/tds/hardcrete-release.pdf',
    msds: null,
    
    seo: {
      title: 'HARDCRETE RELEASE - Concrete Form Release Agent | Hardex India',
      description: 'Shuttering oil for formwork release. Clean concrete finish, easy stripping, extends formwork life.',
      keywords: ['form release', 'shuttering oil', 'mold release', 'formwork oil']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // FASTFIX — Repair Systems (14 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'ff100-rm40',
    name: 'FASTFIX RM40',
    icon: '🔨',
    category: 'Repair Systems',
    subcategory: 'Repair Mortars',
    featured: false,
    
    shortDesc: 'Polymer-modified structural repair mortar for concrete restoration',
    application: 'Spalling repair, column repair, beam restoration, structural patches',
    coverage: '1.8-2.0 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'Your concrete is falling apart—spalling, exposed rebar, chunks missing. This rebuilds it with strength that matches or exceeds the original.',
    
    tds: '/assets/tds/fastfix-rm40.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX RM40 - Structural Repair Mortar | Hardex India',
      description: 'Polymer-modified repair mortar for structural concrete. High bond strength, non-shrink, durable.',
      keywords: ['repair mortar', 'concrete repair', 'spalling repair', 'structural restoration']
    }
  },
  
  {
    id: 'ff110-rmf40',
    name: 'FASTFIX RMF40',
    icon: '🧵',
    category: 'Repair Systems',
    subcategory: 'Fiber Mortars',
    featured: false,
    
    shortDesc: 'Fiber-reinforced repair mortar for crack-resistant applications',
    application: 'Large area repairs, overlay systems, crack-prone zones',
    coverage: '1.8-2.0 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'Regular repair mortar cracks again within months. Fibers hold it together—stops micro-cracks from spreading. More durable, lasts longer.',
    
    tds: '/assets/tds/fastfix-rmf40.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX RMF40 - Fiber Reinforced Repair Mortar | Hardex India',
      description: 'Fiber-reinforced repair mortar for crack resistance. Enhanced durability and toughness.',
      keywords: ['fiber mortar', 'crack resistant', 'reinforced repair', 'polymer mortar']
    }
  },
  
  {
    id: 'ff200-gp2',
    name: 'FASTFIX GP2',
    icon: '⚙️',
    category: 'Repair Systems',
    subcategory: 'Non-Shrink Grouts',
    featured: false,
    
    shortDesc: 'Non-shrink cementitious grout for machine foundation grouting',
    application: 'Machinery grouting, base plates, equipment foundations, anchor bolts',
    coverage: 'Based on void volume', // TODO: Add actual coverage
    
    realTalk: 'Machine vibrates because the grout shrank and created gaps. This expands slightly to fill every void—machinery stays locked in place.',
    
    tds: '/assets/tds/fastfix-gp2.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX GP2 - Non-Shrink Machinery Grout | Hardex India',
      description: 'High-strength non-shrink grout for machinery foundations. Zero shrinkage, high compressive strength.',
      keywords: ['non-shrink grout', 'machinery grout', 'equipment foundation', 'base plate grouting']
    }
  },
  
  {
    id: 'ff210-microcon',
    name: 'FASTFIX MICROCON',
    icon: '🔬',
    category: 'Repair Systems',
    subcategory: 'Micro Concrete',
    featured: false,
    
    shortDesc: 'Micro concrete for structural repair and reinstatement',
    application: 'Structural repairs, precast repairs, precision grouting',
    coverage: '2.0-2.2 kg/m² per mm thickness', // TODO: Add actual coverage
    
    realTalk: 'When you need concrete strength but mortar-like workability. Flows into tight spaces and sets with full structural properties.',
    
    tds: '/assets/tds/fastfix-microcon.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX MICROCON - Structural Micro Concrete | Hardex India',
      description: 'Flowable micro concrete for structural repairs. High strength, pumpable, self-consolidating.',
      keywords: ['micro concrete', 'flowable concrete', 'structural repair', 'precision grouting']
    }
  },
  
  {
    id: 'ff220-anchorflow',
    name: 'FASTFIX ANCHORFLOW',
    icon: '⚓',
    category: 'Repair Systems',
    subcategory: 'Anchor Grouts',
    featured: false,
    
    shortDesc: 'Free-flow non-shrink grout for anchor bolt fixing and pockets',
    application: 'Anchor bolt fixing, holding down bolts, column base grouting',
    coverage: 'Based on void volume', // TODO: Add actual coverage
    
    realTalk: 'Pour this around anchor bolts and it flows underneath the base plate on its own—no voids, no shrinkage, locked solid.',
    
    tds: '/assets/tds/fastfix-anchorflow.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX ANCHORFLOW - Anchor Bolt Grout | Hardex India',
      description: 'Free-flowing non-shrink grout for anchor bolts. Self-leveling, high strength, zero shrinkage.',
      keywords: ['anchor grout', 'bolt fixing', 'free flow grout', 'holding down bolts']
    }
  },
  
  {
    id: 'ff300-rr100',
    name: 'FASTFIX RR100',
    icon: '🧼',
    category: 'Repair Systems',
    subcategory: 'Surface Treatment',
    featured: false,
    
    shortDesc: 'Rust remover and surface cleaner for steel reinforcement',
    application: 'Rebar cleaning before repair, rust removal, surface preparation',
    coverage: '0.10-0.15 kg/m² of steel surface', // TODO: Add actual coverage
    
    realTalk: 'Can\'t apply protective coating on rusty rebar. This dissolves the rust chemically—clean steel surface ready for treatment.',
    
    tds: '/assets/tds/fastfix-rr100.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX RR100 - Rebar Rust Remover | Hardex India',
      description: 'Chemical rust remover for steel reinforcement. Cleans and prepares surface for protective coatings.',
      keywords: ['rust remover', 'rebar cleaning', 'steel treatment', 'surface preparation']
    }
  },
  
  {
    id: 'ff310-cp200',
    name: 'FASTFIX CP200',
    icon: '🛡️',
    category: 'Repair Systems',
    subcategory: 'Corrosion Protection',
    featured: false,
    
    shortDesc: 'Anti-corrosion coating for steel reinforcement protection',
    application: 'Rebar protection, anti-corrosion treatment before repair',
    coverage: '0.20-0.30 kg/m² of steel surface', // TODO: Add actual coverage
    
    realTalk: 'Exposed rebar will rust again after repair. Coat it with this first—creates a protective barrier that stops corrosion for years.',
    
    tds: '/assets/tds/fastfix-cp200.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX CP200 - Rebar Corrosion Protection | Hardex India',
      description: 'Anti-corrosion coating for steel reinforcement. Prevents rust and extends structural life.',
      keywords: ['corrosion protection', 'rebar coating', 'anti-rust', 'steel protection']
    }
  },
  
  {
    id: 'ff400-wp100',
    name: 'FASTFIX WP100',
    icon: '🚨',
    category: 'Repair Systems',
    subcategory: 'Leak Plugging',
    featured: false,
    
    shortDesc: 'Rapid-setting hydraulic cement for active leak stopping',
    application: 'Emergency leak repair, pipe penetrations, active water flow',
    coverage: 'Based on leak size', // TODO: Add actual coverage
    
    realTalk: 'Water is gushing through a hole RIGHT NOW. Mix this, press it in, hold for 60 seconds. It sets even underwater—leak stopped.',
    
    tds: '/assets/tds/fastfix-wp100.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX WP100 - Rapid Leak Plugging Mortar | Hardex India',
      description: 'Fast-setting hydraulic cement for emergency leak stopping. Sets underwater in seconds.',
      keywords: ['leak plugging', 'rapid set', 'emergency repair', 'hydraulic cement']
    }
  },
  
  {
    id: 'ff500-ca500',
    name: 'FASTFIX CA500',
    icon: '🔩',
    category: 'Repair Systems',
    subcategory: 'Chemical Anchors',
    featured: false,
    
    shortDesc: 'Epoxy-based chemical anchor for rebar and bolt fixing',
    application: 'Post-installed rebar, dowel fixing, structural connections',
    coverage: 'Based on hole volume', // TODO: Add actual coverage
    
    realTalk: 'Drill hole, inject this, insert rebar, wait 4 hours. Pull-out strength exceeds the concrete itself. Permanent connection.',
    
    tds: '/assets/tds/fastfix-ca500.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX CA500 - Chemical Anchor System | Hardex India',
      description: 'Epoxy chemical anchor for post-installed fixings. High pull-out strength, vibration resistant.',
      keywords: ['chemical anchor', 'rebar fixing', 'epoxy anchor', 'post-installed anchor']
    }
  },
  
  {
    id: 'ff510-ca700',
    name: 'FASTFIX CA700',
    icon: '💪',
    category: 'Repair Systems',
    subcategory: 'Heavy Duty Anchors',
    featured: false,
    
    shortDesc: 'Heavy-duty chemical anchor for structural load applications',
    application: 'Seismic retrofitting, heavy steel connections, critical anchors',
    coverage: 'Based on hole volume', // TODO: Add actual coverage
    
    realTalk: 'When CA500 isn\'t enough. For earthquake zones, heavy structural loads, or where anchor failure means catastrophe.',
    
    tds: '/assets/tds/fastfix-ca700.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX CA700 - Heavy Duty Chemical Anchor | Hardex India',
      description: 'High-performance chemical anchor for structural applications. Seismic resistant, maximum pull-out strength.',
      keywords: ['heavy duty anchor', 'seismic anchor', 'structural fixing', 'high load anchor']
    }
  },
  
  {
    id: 'ff600-latex',
    name: 'FASTFIX LATEX',
    icon: '🧴',
    category: 'Repair Systems',
    subcategory: 'Bonding Latex',
    featured: false,
    
    shortDesc: 'Acrylic bonding latex for repair mortar adhesion',
    application: 'Repair bonding, mortar modification, plaster bonding',
    coverage: 'Mix 1:1 with water as bonding coat', // TODO: Add actual coverage
    
    realTalk: 'Your repair keeps falling off because old and new concrete won\'t bond. Paint this on before repair—creates a chemical bridge.',
    
    tds: '/assets/tds/fastfix-latex.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX LATEX - Bonding Latex for Repairs | Hardex India',
      description: 'Acrylic bonding latex for repair mortars. Improves adhesion and water resistance.',
      keywords: ['bonding latex', 'repair bonding', 'mortar modifier', 'acrylic latex']
    }
  },
  
  {
    id: 'ff610-crackfill',
    name: 'FASTFIX CRACKFILL',
    icon: '🩹',
    category: 'Repair Systems',
    subcategory: 'Crack Repair',
    featured: false,
    
    shortDesc: 'Cementitious crack filler for surface crack repair',
    application: 'Hairline cracks, surface cracks, non-structural crack filling',
    coverage: 'Based on crack width and depth', // TODO: Add actual coverage
    
    realTalk: 'Small cracks in walls or floors that don\'t need structural repair but collect dirt and look bad. Fill them with this, smooth it out, done.',
    
    tds: '/assets/tds/fastfix-crackfill.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX CRACKFILL - Cement Crack Filler | Hardex India',
      description: 'Ready-to-use crack filler for surface repairs. Easy application, smooth finish.',
      keywords: ['crack filler', 'surface repair', 'hairline cracks', 'cosmetic repair']
    }
  },
  
  {
    id: 'ff700-epoxy-injection',
    name: 'FASTFIX EPOXY INJECTION',
    icon: '💉',
    category: 'Repair Systems',
    subcategory: 'Injection Resins',
    featured: false,
    
    shortDesc: 'Low-viscosity epoxy for structural crack injection repair',
    application: 'Structural cracks, load-bearing repairs, concrete restoration',
    coverage: 'Based on crack volume', // TODO: Add actual coverage
    
    realTalk: 'Structural crack means structural fix. This flows into the tiniest cracks and bonds them back together—restores the original strength.',
    
    tds: '/assets/tds/fastfix-epoxy-injection.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX EPOXY INJECTION - Structural Crack Repair | Hardex India',
      description: 'Low-viscosity epoxy for crack injection. Structural repair, high penetration, permanent bond.',
      keywords: ['epoxy injection', 'structural repair', 'crack injection', 'concrete restoration']
    }
  },
  
  {
    id: 'ff710-structure-grout',
    name: 'FASTFIX STRUCTURE GROUT',
    icon: '🏗️',
    category: 'Repair Systems',
    subcategory: 'High Strength Grouts',
    featured: false,
    
    shortDesc: 'High-strength cementitious grout for heavy foundation work',
    application: 'Heavy equipment foundations, precast connections, structural grouting',
    coverage: 'Based on void volume', // TODO: Add actual coverage
    
    realTalk: 'When machinery weighs hundreds of tons and movement isn\'t acceptable. This provides compressive strength exceeding 70 MPa—doesn\'t budge.',
    
    tds: '/assets/tds/fastfix-structure-grout.pdf',
    msds: null,
    
    seo: {
      title: 'FASTFIX STRUCTURE GROUT - High Strength Foundation Grout | Hardex India',
      description: 'Ultra-high strength grout for heavy foundations. 70+ MPa compressive strength, non-shrink.',
      keywords: ['high strength grout', 'foundation grout', 'structural grout', 'heavy duty grouting']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // HARDSEAL — Surface Protection (10 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'hs100-wb100',
    name: 'HARDSEAL WB100',
    icon: '🌊',
    category: 'Surface Protection',
    subcategory: 'Water-Based Sealers',
    featured: false,
    
    shortDesc: 'Water-based concrete sealer for surface protection',
    application: 'Concrete floors, driveways, parking areas, general protection',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your concrete absorbs water, oil, and stains. One coat of this seals the surface—liquids bead up instead of soaking in.',
    
    tds: '/assets/tds/hardseal-wb100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL WB100 - Water-Based Concrete Sealer | Hardex India',
      description: 'Eco-friendly water-based sealer for concrete protection. Prevents staining, easy application, low VOC.',
      keywords: ['concrete sealer', 'water based', 'surface protection', 'low VOC']
    }
  },
  
  {
    id: 'hs110-sb200',
    name: 'HARDSEAL SB200',
    icon: '💎',
    category: 'Surface Protection',
    subcategory: 'Solvent Sealers',
    featured: false,
    
    shortDesc: 'Solvent-based sealer for stone and decorative surfaces',
    application: 'Natural stone, granite, marble, decorative concrete',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'You paid premium for that stone flooring. This enhances the color and protects against stains—keeps it looking expensive.',
    
    tds: '/assets/tds/hardseal-sb200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL SB200 - Solvent Stone Sealer | Hardex India',
      description: 'Premium solvent-based sealer for natural stone. Color enhancement, stain protection, wet-look finish.',
      keywords: ['stone sealer', 'marble sealer', 'granite protection', 'color enhancer']
    }
  },
  
  {
    id: 'hs200-pu300',
    name: 'HARDSEAL PU300',
    icon: '🛡️',
    category: 'Surface Protection',
    subcategory: 'PU Coatings',
    featured: false,
    
    shortDesc: 'Polyurethane protective coating for industrial surfaces',
    application: 'Factory floors, chemical exposure areas, heavy traffic zones',
    coverage: '0.15-0.25 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your floor takes chemical spills and heavy traffic daily. This creates a tough, flexible shield that handles abuse without peeling.',
    
    tds: '/assets/tds/hardseal-pu300.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL PU300 - Polyurethane Protective Coating | Hardex India',
      description: 'Industrial PU coating for chemical and abrasion resistance. Flexible, durable, high-performance protection.',
      keywords: ['PU coating', 'protective coating', 'chemical resistant', 'floor sealer']
    }
  },
  
  {
    id: 'hs300-ac200',
    name: 'HARDSEAL AC200',
    icon: '🏢',
    category: 'Surface Protection',
    subcategory: 'Anti-Carbonation',
    featured: false,
    
    shortDesc: 'Anti-carbonation coating for concrete structure protection',
    application: 'Building facades, bridges, marine structures, RCC protection',
    coverage: '0.20-0.30 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Carbonation corrodes rebar from the inside out. This coating blocks CO2 from entering concrete—stops the corrosion before it starts.',
    
    tds: '/assets/tds/hardseal-ac200.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL AC200 - Anti-Carbonation Coating | Hardex India',
      description: 'Protective coating to prevent concrete carbonation. Extends structural life, prevents rebar corrosion.',
      keywords: ['anti-carbonation', 'concrete protection', 'carbonation prevention', 'structure coating']
    }
  },
  
  {
    id: 'hs400-stone',
    name: 'HARDSEAL STONE',
    icon: '🪨',
    category: 'Surface Protection',
    subcategory: 'Stone Sealers',
    featured: false,
    
    shortDesc: 'Penetrating sealer for natural stone surfaces',
    application: 'Sandstone, limestone, granite, marble, natural stone cladding',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Stone absorbs moisture and stains deep inside. This penetrates and seals from within—protection without changing the appearance.',
    
    tds: '/assets/tds/hardseal-stone.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL STONE - Natural Stone Sealer | Hardex India',
      description: 'Penetrating sealer for natural stone. Invisible protection, breathable, stain resistant.',
      keywords: ['stone sealer', 'penetrating sealer', 'natural stone', 'invisible protection']
    }
  },
  
  {
    id: 'hs410-tile',
    name: 'HARDSEAL TILE',
    icon: '🟦',
    category: 'Surface Protection',
    subcategory: 'Tile Sealers',
    featured: false,
    
    shortDesc: 'Grout and tile sealer for ceramic and vitrified tiles',
    application: 'Bathroom tiles, kitchen tiles, grout lines, tiled surfaces',
    coverage: '0.08-0.12 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your white grout turned brown in 6 months. Seal it with this and stains wipe off—grout stays clean like day one.',
    
    tds: '/assets/tds/hardseal-tile.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL TILE - Grout and Tile Sealer | Hardex India',
      description: 'Protective sealer for tiles and grout lines. Prevents staining, easy cleaning, long-lasting protection.',
      keywords: ['tile sealer', 'grout sealer', 'bathroom sealer', 'ceramic protection']
    }
  },
  
  {
    id: 'hs420-concrete',
    name: 'HARDSEAL CONCRETE',
    icon: '🏗️',
    category: 'Surface Protection',
    subcategory: 'Concrete Sealers',
    featured: false,
    
    shortDesc: 'General-purpose concrete surface sealer and dust-proofer',
    application: 'Concrete floors, driveways, industrial areas, general sealing',
    coverage: '0.12-0.18 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Concrete dust everywhere, stains won\'t come out, surface is porous. This seals it, stops the dust, makes cleaning easy.',
    
    tds: '/assets/tds/hardseal-concrete.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL CONCRETE - General Concrete Sealer | Hardex India',
      description: 'Multi-purpose concrete sealer for floors and surfaces. Dust-proof, stain resistant, easy maintenance.',
      keywords: ['concrete sealer', 'dust proof', 'surface sealer', 'floor protection']
    }
  },
  
  {
    id: 'hs500-silane',
    name: 'HARDSEAL SILANE',
    icon: '💧',
    category: 'Surface Protection',
    subcategory: 'Water Repellents',
    featured: false,
    
    shortDesc: 'Silane-based penetrating water repellent for concrete',
    application: 'Facades, parking decks, bridges, exposed concrete structures',
    coverage: '0.15-0.25 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Rain soaks into your concrete and causes problems. This makes water bead off like a freshly waxed car—concrete stays dry.',
    
    tds: '/assets/tds/hardseal-silane.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL SILANE - Water Repellent for Concrete | Hardex India',
      description: 'Silane penetrating water repellent. Deep protection, breathable, prevents moisture damage.',
      keywords: ['water repellent', 'silane', 'concrete waterproofing', 'facade protection']
    }
  },
  
  {
    id: 'hs510-siloxane',
    name: 'HARDSEAL SILOXANE',
    icon: '🧱',
    category: 'Surface Protection',
    subcategory: 'Masonry Sealers',
    featured: false,
    
    shortDesc: 'Siloxane-based sealer for masonry and brick surfaces',
    application: 'Brick walls, block work, stucco, masonry facades',
    coverage: '0.15-0.25 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Your brick wall absorbs rain and develops efflorescence (white powder). This stops water entry while letting the wall breathe.',
    
    tds: '/assets/tds/hardseal-siloxane.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL SILOXANE - Masonry Water Repellent | Hardex India',
      description: 'Siloxane penetrating sealer for brick and masonry. Prevents efflorescence, breathable, long-lasting.',
      keywords: ['masonry sealer', 'brick sealer', 'siloxane', 'efflorescence prevention']
    }
  },
  
  {
    id: 'hs600-dustproof',
    name: 'HARDSEAL DUSTPROOF',
    icon: '✨',
    category: 'Surface Protection',
    subcategory: 'Dust-Proofers',
    featured: false,
    
    shortDesc: 'Dust-proofing treatment for warehouse and industrial concrete floors',
    application: 'Warehouses, storage facilities, manufacturing floors, logistics centers',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your warehouse floor creates dust clouds every time a forklift moves. One treatment stops the dusting permanently—cleaner air, cleaner products.',
    
    tds: '/assets/tds/hardseal-dustproof.pdf',
    msds: null,
    
    seo: {
      title: 'HARDSEAL DUSTPROOF - Warehouse Floor Dust Treatment | Hardex India',
      description: 'Penetrating dust-proof treatment for concrete floors. Stops dusting, improves cleanliness, low maintenance.',
      keywords: ['dust proof', 'warehouse floor', 'concrete hardener', 'dust treatment']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // PAVEGUARD — Decorative Concrete (7 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'paveguard-wb',
    name: 'PAVEGUARD WB',
    icon: '✨',
    category: 'Decorative Concrete',
    subcategory: 'Paver Sealers',
    featured: true,
    
    shortDesc: 'Water-based clear sealer for pavers and decorative concrete',
    application: 'Pavers, decorative concrete, driveways, pathways, courtyards',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'You just spent ₹2 lakh on those beautiful pavers. Don\'t let stains, moss, and weather ruin them in 6 months. One coat keeps them showroom-new for years.',
    
    tds: '/assets/tds/paveguard-wb.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD WB - Water-Based Paver Sealer | Hardex India',
      description: 'Eco-friendly clear sealer for pavers and decorative concrete. UV resistant, stain protection, low VOC.',
      keywords: ['paver sealer', 'decorative concrete', 'water based sealer', 'clear coat']
    }
  },
  
  {
    id: 'pg110-sb',
    name: 'PAVEGUARD SB',
    icon: '💎',
    category: 'Decorative Concrete',
    subcategory: 'Solvent Sealers',
    featured: false,
    
    shortDesc: 'Solvent-based high-gloss sealer for decorative pavers',
    application: 'Premium pavers, decorative surfaces, wet-look finish',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Want that "wet look" permanent shine on your pavers? This gives you showroom gloss that makes colors pop. Premium finish.',
    
    tds: '/assets/tds/paveguard-sb.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD SB - High Gloss Paver Sealer | Hardex India',
      description: 'Solvent-based paver sealer with wet-look finish. High gloss, color enhancement, UV resistant.',
      keywords: ['wet look sealer', 'gloss paver sealer', 'color enhancer', 'premium finish']
    }
  },
  
  {
    id: 'paveguard-color',
    name: 'PAVEGUARD COLOR',
    icon: '🎨',
    category: 'Decorative Concrete',
    subcategory: 'Color Enhancers',
    featured: true,
    
    shortDesc: 'Color-enhancing sealer for decorative pavers and concrete',
    application: 'Colored pavers, stamped concrete, decorative surfaces',
    coverage: '0.10-0.15 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your colored pavers faded to dull grey. This brings the color back and seals it in—looks like they were just installed.',
    
    tds: '/assets/tds/paveguard-color.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD COLOR - Color Enhancing Paver Sealer | Hardex India',
      description: 'Premium color-enhancing sealer for decorative pavers. Revives faded colors, UV protection, stain resistant.',
      keywords: ['color enhancer', 'paver color', 'faded pavers', 'color restoration']
    }
  },
  
  {
    id: 'pg300-stamp',
    name: 'PAVEGUARD STAMP',
    icon: '🖼️',
    category: 'Decorative Concrete',
    subcategory: 'Stamped Concrete',
    featured: false,
    
    shortDesc: 'Specialized sealer for stamped and patterned concrete',
    application: 'Stamped concrete, pattern imprinted concrete, decorative finishes',
    coverage: '0.12-0.18 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Your stamped concrete pattern cost extra. This protects the surface texture and keeps colors vibrant—investment protected.',
    
    tds: '/assets/tds/paveguard-stamp.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD STAMP - Stamped Concrete Sealer | Hardex India',
      description: 'Protective sealer for stamped and patterned concrete. Preserves texture, enhances color, UV resistant.',
      keywords: ['stamped concrete', 'pattern concrete', 'decorative sealer', 'texture protection']
    }
  },
  
  {
    id: 'pg400-hardener',
    name: 'PAVEGUARD HARDENER',
    icon: '💪',
    category: 'Decorative Concrete',
    subcategory: 'Surface Hardeners',
    featured: false,
    
    shortDesc: 'Surface hardener for decorative concrete applications',
    application: 'Decorative floors, stamped concrete, colored concrete',
    coverage: '3-5 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Decorative concrete still needs to be hard. This makes the surface durable while maintaining the decorative finish—beauty plus strength.',
    
    tds: '/assets/tds/paveguard-hardener.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD HARDENER - Decorative Concrete Hardener | Hardex India',
      description: 'Dry shake hardener for decorative concrete. Increases durability while preserving aesthetic finish.',
      keywords: ['decorative hardener', 'surface hardener', 'colored hardener', 'concrete strengthening']
    }
  },
  
  {
    id: 'pg410-release',
    name: 'PAVEGUARD RELEASE',
    icon: '🎭',
    category: 'Decorative Concrete',
    subcategory: 'Release Agents',
    featured: false,
    
    shortDesc: 'Release agent for stamping and pattern imprinting',
    application: 'Stamped concrete release, pattern imprinting, texture stamps',
    coverage: '0.10-0.15 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Prevents stamps from sticking to wet concrete. Adds color tones for realistic stone/brick appearance. Essential for stamping.',
    
    tds: '/assets/tds/paveguard-release.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD RELEASE - Concrete Stamp Release Agent | Hardex India',
      description: 'Release agent for stamped concrete. Prevents sticking, adds antiquing color, professional results.',
      keywords: ['stamp release', 'pattern release', 'antiquing powder', 'stamping agent']
    }
  },
  
  {
    id: 'pg420-dye',
    name: 'PAVEGUARD DYE',
    icon: '🌈',
    category: 'Decorative Concrete',
    subcategory: 'Concrete Dyes',
    featured: false,
    
    shortDesc: 'Penetrating concrete dye for decorative coloring',
    application: 'Polished concrete, decorative floors, color accents, artistic finishes',
    coverage: '0.05-0.10 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Creates translucent color effects in concrete—not opaque like paint. For polished floors or artistic installations that need depth.',
    
    tds: '/assets/tds/paveguard-dye.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD DYE - Decorative Concrete Dye | Hardex India',
      description: 'Penetrating concrete dye for artistic finishes. Translucent colors, UV stable, permanent.',
      keywords: ['concrete dye', 'decorative coloring', 'polished concrete', 'acid stain alternative']
    }
  },
  
  // ═══════════════════════════════════════════════════════════════════
  // SPORTEYFLOR — Sports Flooring (6 products)
  // ═══════════════════════════════════════════════════════════════════
  
  {
    id: 'sf100-primer',
    name: 'SPORTEYFLOR PRIMER',
    icon: '🎾',
    category: 'Sports Flooring',
    subcategory: 'Acrylic Systems',
    featured: false,
    
    shortDesc: 'Acrylic primer for sports court flooring systems',
    application: 'Tennis courts, basketball courts, sports surface base',
    coverage: '0.15-0.20 kg/m²', // TODO: Add actual coverage
    
    realTalk: 'Sports flooring is a system—skip the primer and your expensive topcoat fails in one season. Foundation matters.',
    
    tds: '/assets/tds/sporteyflor-primer.pdf',
    msds: null,
    
    seo: {
      title: 'SPORTEYFLOR PRIMER - Sports Court Primer | Hardex India',
      description: 'Acrylic primer for synthetic sports surfaces. Ensures adhesion and system durability.',
      keywords: ['sports primer', 'court primer', 'tennis court', 'acrylic primer']
    }
  },
  
  {
    id: 'sf200-basecoat',
    name: 'SPORTEYFLOR BASECOAT',
    icon: '🏀',
    category: 'Sports Flooring',
    subcategory: 'Base Coats',
    featured: false,
    
    shortDesc: 'Acrylic base coat for multi-sport court surfaces',
    application: 'Tennis, basketball, badminton, volleyball courts',
    coverage: '0.40-0.60 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'This layer provides the texture and performance. Ball bounce, player traction—it all depends on proper base coat application.',
    
    tds: '/assets/tds/sporteyflor-basecoat.pdf',
    msds: null,
    
    seo: {
      title: 'SPORTEYFLOR BASECOAT - Sports Court Base Layer | Hardex India',
      description: 'Acrylic base coat for sports surfaces. Creates proper texture and ball response characteristics.',
      keywords: ['sports basecoat', 'court surface', 'acrylic sports', 'multi-sport flooring']
    }
  },
  
  {
    id: 'sf300-cushion',
    name: 'SPORTEYFLOR CUSHION',
    icon: '🤸',
    category: 'Sports Flooring',
    subcategory: 'Cushion Layers',
    featured: false,
    
    shortDesc: 'Shock-absorbing cushion layer for sports courts',
    application: 'Professional courts, training facilities, high-impact sport areas',
    coverage: '0.50-0.80 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'Reduces joint stress on players. The difference between a court that feels like concrete and one athletes actually want to play on.',
    
    tds: '/assets/tds/sporteyflor-cushion.pdf',
    msds: null,
    
    seo: {
      title: 'SPORTEYFLOR CUSHION - Shock Absorbing Court Layer | Hardex India',
      description: 'Cushioned acrylic layer for sports courts. Reduces player fatigue and injury risk with shock absorption.',
      keywords: ['cushion court', 'shock absorption', 'sports cushion', 'player protection']
    }
  },
  
  {
    id: 'sf400-topcoat',
    name: 'SPORTEYFLOR TOPCOAT',
    icon: '⚡',
    category: 'Sports Flooring',
    subcategory: 'Topcoats',
    featured: false,
    
    shortDesc: 'Acrylic finish coat for sports court surfaces',
    application: 'Final playing surface for all court sports',
    coverage: '0.30-0.45 kg/m² per coat', // TODO: Add actual coverage
    
    realTalk: 'The layer players see and play on. UV resistant, non-slip, proper ball bounce. This is what determines court quality.',
    
    tds: '/assets/tds/sporteyflor-topcoat.pdf',
    msds: null,
    
    seo: {
      title: 'SPORTEYFLOR TOPCOAT - Sports Court Finish | Hardex India',
      description: 'Professional acrylic topcoat for sports surfaces. UV resistant, consistent ball bounce, anti-slip.',
      keywords: ['sports topcoat', 'court finish', 'playing surface', 'acrylic sports coating']
    }
  },
  
  {
    id: 'sf500-line',
    name: 'SPORTEYFLOR LINE',
    icon: '📏',
    category: 'Sports Flooring',
    subcategory: 'Line Marking',
    featured: false,
    
    shortDesc: 'Line marking paint for sports court demarcation',
    application: 'Court line marking, sport boundary lines, playing area demarcation',
    coverage: 'Per linear meter based on line width', // TODO: Add actual coverage
    
    realTalk: 'Crisp white lines that don\'t fade, chip, or blur. Permanent markings that withstand UV and foot traffic for years.',
    
    tds: '/assets/tds/sporteyflor-line.pdf',
    msds: null,
    
    seo: {
      title: 'SPORTEYFLOR LINE - Sports Court Line Marking Paint | Hardex India',
      description: 'Durable line marking paint for sports courts. UV resistant, high opacity, long-lasting visibility.',
      keywords: ['line marking', 'court lines', 'sports paint', 'boundary marking']
    }
  },
  
  {
    id: 'sf600-track',
    name: 'SPORTEYFLOR TRACK',
    icon: '🏃',
    category: 'Sports Flooring',
    subcategory: 'Running Tracks',
    featured: false,
    
    shortDesc: 'Polyurethane running track surface system',
    application: 'Athletic tracks, jogging paths, running circuits',
    coverage: '2.0-3.0 kg/m² for full system', // TODO: Add actual coverage
    
    realTalk: 'Professional-grade track surface. Proper energy return, weather resistant, consistent performance. What Olympic athletes train on.',
    
    tds: '/assets/tds/sporteyflor-track.pdf',
    msds: null,
    
    seo: {
      title: 'SPORTEYFLOR TRACK - Athletic Running Track System | Hardex India',
      description: 'Professional polyurethane running track surface. IAAF compliant, all-weather, optimal performance.',
      keywords: ['running track', 'athletic track', 'polyurethane track', 'sports surface']
    }
  }
  
];

// ═══════════════════════════════════════════════════════════════════
// NOTE: ALLSPACE and GOLDTOUCH products excluded as requested
// Total products in this file: 90 products
// Missing: ALLSPACE (5 products) + GOLDTOUCH (5 products) = 10 products
// Add them later when product details are clarified
// ═══════════════════════════════════════════════════════════════════

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS };
}