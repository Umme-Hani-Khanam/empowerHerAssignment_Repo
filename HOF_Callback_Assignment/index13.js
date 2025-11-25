function processCategories(categories) {

  // Count the categories
  let counts = {};
  categories.forEach(cat => {
    if (counts[cat]) {
      counts[cat]++;     // increase count
    } else {
      counts[cat] = 1;   // create first count
    }
  });

  // Sort categories by their count
  let sorted = Object.keys(counts).sort((a, b) => {
    return counts[b] - counts[a];
  });

  return { counts, sorted };
}
