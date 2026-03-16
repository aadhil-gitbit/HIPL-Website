// ═══════════════════════════════════════════════════════════════════
// PRODUCTS DATABASE - SINGLE SOURCE OF TRUTH
// ═══════════════════════════════════════════════════════════════════
// EDIT THIS FILE TO ADD/MODIFY PRODUCTS
// Changes here automatically update: Homepage, Products Page, Navigation, SEO
// TOKEN COST TO REGENERATE: ~200 tokens

const PRODUCTS = [
  {
    id: 'hardproof-coolcoat',
    name: 'HARDPROOF COOLCOAT',
    icon: '🛡️',
    category: 'Waterproofing',
    subcategory: 'Heat Reflective',
    featured: true, // Shows on homepage hero section
    
    // Tooltip & Product Page Content
    shortDesc: 'Elastomeric waterproofing coating with 350% elongation',
    application: 'Suitable for roofs, terraces, and exterior walls',
    coverage: '1.5-2 kg/m²',
    
    // Downloads (Change to Google Drive links when ready)
    tds: '/assets/tds/hardproof-coolcoat.pdf', // or 'https://drive.google.com/file/d/1ABC.../view'
    msds: null, // Set to URL when available
    
    // SEO (Auto-generates meta tags)
    seo: {
      title: 'HARDPROOF COOLCOAT - Heat Reflective Waterproofing | Hardex India',
      description: 'Premium elastomeric waterproofing coating with 350% elongation. Ideal for roofs, terraces, and exterior walls. Heat reflective technology.',
      keywords: ['waterproofing coating', 'heat reflective', 'coolcoat', 'elastomeric waterproofing', 'roof coating']
    }
  },
  
  {
    id: 'hardfloor-sl1000',
    name: 'HARDFLOOR SL1000',
    icon: '🔷',
    category: 'Flooring Systems',
    subcategory: 'Self-Leveling Epoxy',
    featured: true,
    
    shortDesc: 'Self-leveling epoxy flooring system for industrial applications',
    application: 'Warehouses, manufacturing facilities, clean rooms',
    coverage: '1.2-1.5 kg/m² per mm thickness',
    
    tds: '/assets/tds/hardfloor-sl1000.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR SL1000 - Self-Leveling Epoxy Flooring | Hardex India',
      description: 'Industrial-grade self-leveling epoxy flooring system. Perfect for warehouses, manufacturing facilities, and clean rooms.',
      keywords: ['epoxy flooring', 'self-leveling epoxy', 'industrial flooring', 'warehouse flooring']
    }
  },
  
  {
    id: 'hardfloor-mtp100',
    name: 'HARDFLOOR MTP100',
    icon: '💦',
    category: 'Primers',
    subcategory: 'Moisture Tolerant',
    featured: true,
    
    shortDesc: 'Moisture tolerant epoxy primer for damp substrates',
    application: 'New concrete, repair work, high-humidity areas',
    coverage: '0.15-0.20 kg/m²',
    
    tds: '/assets/tds/hardfloor-mtp100.pdf',
    msds: null,
    
    seo: {
      title: 'HARDFLOOR MTP100 - Moisture Tolerant Epoxy Primer | Hardex India',
      description: 'Advanced moisture tolerant epoxy primer for damp substrates. Ideal for new concrete and high-humidity applications.',
      keywords: ['epoxy primer', 'moisture tolerant primer', 'damp concrete primer', 'substrate primer']
    }
  },
  
  {
    id: 'paveguard-wb',
    name: 'PAVEGUARD WB',
    icon: '✨',
    category: 'Sealers',
    subcategory: 'Decorative Concrete',
    featured: true,
    
    shortDesc: 'Water-based decorative concrete sealer and coating',
    application: 'Driveways, pathways, decorative concrete surfaces',
    coverage: '0.10-0.15 kg/m² per coat',
    
    tds: '/assets/tds/paveguard-wb.pdf',
    msds: null,
    
    seo: {
      title: 'PAVEGUARD WB - Decorative Concrete Sealer | Hardex India',
      description: 'Premium water-based concrete sealer for decorative surfaces. Enhances appearance and protects driveways and pathways.',
      keywords: ['concrete sealer', 'decorative concrete', 'driveway sealer', 'water-based sealer']
    }
  }
  
  // ═══════════════════════════════════════════════════════════════════
  // TO ADD A NEW PRODUCT: Copy template below, paste above this line
  // ═══════════════════════════════════════════════════════════════════
  /*
  {
    id: 'product-slug',           // Lowercase, hyphens only
    name: 'PRODUCT NAME',         // Uppercase display name
    icon: '🎯',                   // Emoji icon
    category: 'Main Category',    // e.g., Waterproofing, Flooring, Primers
    subcategory: 'Specific Type', // e.g., Heat Reflective, Self-Leveling
    featured: false,              // true = shows on homepage
    
    shortDesc: 'One-line technical description',
    application: 'Where/how it is used',
    coverage: 'X kg/m² or X m²/kg',
    
    tds: '/assets/tds/product-name.pdf',  // Local path or Drive link
    msds: null,                           // null if not available yet
    
    seo: {
      title: 'PRODUCT NAME - Category | Hardex India',
      description: 'Detailed description with key benefits and applications for SEO.',
      keywords: ['keyword1', 'keyword2', 'keyword3']
    }
  },
  */
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS };
}
