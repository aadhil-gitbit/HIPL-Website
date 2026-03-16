// ═══════════════════════════════════════════════════════════════════
// SITE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
// EDIT THIS FILE TO UPDATE: Company info, colors, stats, contact details
// TOKEN COST TO REGENERATE: ~100 tokens

const SITE_CONFIG = {
  
  // ═══ COMPANY INFORMATION ═══
  company: {
    name: 'Hardex India Private Limited',
    shortName: 'Hardex India',
    tagline: 'GREEN CHEMISTRY',
    founded: '1980',
    
    description: '150+ construction chemical formulations engineered for India\'s toughest conditions. Waterproofing to industrial coatings — manufactured in-house, documented to spec.',
    
    // Hero Section Stats
    stats: [
      { number: '150+', label: 'Formulations' },
      { number: 'Pan-India', label: 'Distribution' }
      // Note: Removed "₹5Cr Production Capacity" as requested
    ],
    
    // About Section Metrics
    metrics: [
      { value: 'Since 1980', label: 'Manufacturing Excellence' },
      { value: '150+', label: 'Product Formulations' },
      { value: 'Pan-India', label: 'Distribution Network' },
      { value: 'ISO Certified', label: 'Rigorous QC Checks' }
    ]
  },
  
  // ═══ CONTACT INFORMATION ═══
  contact: {
    email: 'info@hardexindia.com',
    phone: '+91-XXXX-XXXXXX', // Update with actual number
    address: 'Kochi, Kerala, India', // Update with full address
    
    // Social Media (Add links when available)
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  
  // ═══ BRAND COLORS ═══
  // Used throughout the site - change here to update everywhere
  colors: {
    primary: '#00BCD4',      // Cyan/Teal (Hardex brand color)
    primaryDark: '#0097A7',  // Darker teal
    accent: '#00E5FF',       // Bright cyan
    dark: '#1A1A1A',         // Almost black
    light: '#F5F5F5',        // Off-white
    white: '#FFFFFF',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336'
  },
  
  // ═══ NAVIGATION MENU ═══
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Products', href: 'products.html' },
    { label: 'Contact', href: '#contact', cta: true }
  ],

  // ═══ SHARED NAVIGATION CONFIG ═══
  // Used by components/shared-nav.js for desktop dropdowns, mobile accordions, and search
  navigationConfig: {
    homeLink: 'index.html',
    primaryLinks: [
      { label: 'About', href: 'about.html' },
      { label: 'Downloads', href: 'downloads.html' },
      { label: 'Dealers', href: 'dealers.html' }
    ],
    productsCategories: [
      { label: 'All Products', href: 'products.html' },
      { label: 'Waterproofing', href: 'products.html?category=Waterproofing' },
      { label: 'Flooring Systems', href: 'products.html?category=Flooring%20Systems' },
      { label: 'Primers', href: 'products.html?category=Primers' },
      { label: 'Sealers', href: 'products.html?category=Sealers' }
    ],
    solutionsLinks: [
      { label: 'All Solutions', href: 'solutions.html' },
      { label: 'Roofing & Terraces', href: 'solutions.html#roofing' },
      { label: 'Industrial Floors', href: 'solutions.html#industrial-floors' },
      { label: 'Basement Waterproofing', href: 'solutions.html#basements' },
      { label: 'Facade Protection', href: 'solutions.html#facades' },
      { label: 'Concrete Repair', href: 'solutions.html#concrete-repair' }
    ],
    cta: { label: 'Contact', href: 'contact.html' }
  },
  
  // ═══ SOLUTION CATEGORIES ═══
  // These appear in the solutions section on homepage
  solutions: [
    {
      title: 'Waterproofing Systems',
      description: 'Complete waterproofing solutions for roofs, terraces, basements, and facades.',
      icon: 'waterproofing', // SVG icons defined in components
      bgImage: '' // Leave empty or add image URL: '/assets/images/waterproofing-bg.jpg'
    },
    {
      title: 'Industrial Flooring',
      description: 'Heavy-duty epoxy and polyurethane flooring systems for warehouses and manufacturing.',
      icon: 'flooring',
      bgImage: ''
    },
    {
      title: 'Repair & Rehabilitation',
      description: 'Structural repair compounds, grouts, and rehabilitation systems for concrete.',
      icon: 'repair',
      bgImage: ''
    },
    {
      title: 'Protective Coatings',
      description: 'Anti-corrosive and protective coatings for industrial and marine environments.',
      icon: 'coating',
      bgImage: ''
    }
  ],
  
  // ═══ FEATURE FLAGS ═══
  // Turn features on/off
  features: {
    showChat: false,           // Live chat widget
    showNewsletter: true,      // Newsletter signup
    showTestimonials: false,   // Customer testimonials section
    enableAnalytics: false     // Google Analytics (add tracking ID below)
  },
  
  // ═══ SEO DEFAULTS ═══
  seo: {
    siteName: 'Hardex India',
    defaultTitle: 'Hardex India | Construction Chemicals & Industrial Coatings',
    defaultDescription: 'Leading manufacturer of construction chemicals and industrial coatings in India. 150+ formulations including waterproofing, epoxy flooring, and protective coatings.',
    keywords: ['construction chemicals', 'industrial coatings', 'waterproofing', 'epoxy flooring', 'India', 'manufacturer'],
    author: 'Hardex India Private Limited',
    language: 'en-IN',
    ogImage: '/assets/images/og-image.jpg' // Social media preview image
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_CONFIG };
}
