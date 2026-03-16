const { PRODUCTS } = require('../config/products-data.js');
const { SOLUTIONS } = require('../config/solutions-data.js');

const productIds = new Set(PRODUCTS.map(p => p.id));
const missing = [];
for (const sol of SOLUTIONS) {
  for (const id of sol.recommendedProducts || []) {
    if (!productIds.has(id)) missing.push({ solution: sol.id, productId: id });
  }
}

if (missing.length) {
  console.error('Missing product IDs referenced by solutions:');
  for (const m of missing) console.error(`- ${m.solution}: ${m.productId}`);
  process.exit(1);
}

console.log(`OK: ${SOLUTIONS.length} solutions, ${PRODUCTS.length} products, no broken recommendedProducts references.`);
