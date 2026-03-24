// seeds/scripts/seedStats.js
const { db } = require('../../config/');
const stats = require('../data/stats');

async function seedStats() {
  console.log('Starting stat seeding...');

  try {
    const batch = db.batch();
    const statsCollection = db.collection('stats');

    for (const statData of stats) {
      const docRef = statsCollection.doc(); // Auto-generated ID
      batch.set(docRef, {
        ...statData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await batch.commit();
    console.log(`Successfully seeded ${stats.length} stats  `);
  } catch (error) {
    console.error('Error seeding stats:', error);
    throw error;
  }
}

module.exports = seedStats;