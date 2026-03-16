// ═══════════════════════════════════════════════════════════════════
// DEALERS / DISTRIBUTORS DATABASE
// ═══════════════════════════════════════════════════════════════════

const DEALERS = [
  {
    id: 'dealer-kochi',
    name: 'Hardex India HQ',
    type: 'headquarters',
    region: 'Kerala',
    city: 'Kochi',
    address: 'Kochi, Kerala, India',
    phone: '+91-XXXX-XXXXXX',
    email: 'info@hardexindia.com',
    products: ['all']
  },
  // ─── Add dealers below ───
  // {
  //   id: 'dealer-slug',
  //   name: 'Dealer Company Name',
  //   type: 'distributor', // 'distributor' | 'dealer' | 'applicator'
  //   region: 'State Name',
  //   city: 'City',
  //   address: 'Full address',
  //   phone: '+91-XXXX-XXXXXX',
  //   email: 'dealer@example.com',
  //   products: ['all'] // or ['waterproofing', 'flooring']
  // }
];

const REGIONS = [
  'Kerala',
  'Tamil Nadu',
  'Karnataka',
  'Andhra Pradesh',
  'Telangana',
  'Maharashtra',
  'Gujarat',
  'Delhi NCR',
  'Rajasthan',
  'West Bengal',
  'Odisha',
  'Madhya Pradesh',
  'Uttar Pradesh',
  'Punjab',
  'Haryana'
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEALERS, REGIONS };
}
