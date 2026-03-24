// seeds/scripts/seedPlayers.js
const { db } = require('../../config/');
const players = require('../data/players');

async function seedPlayers() {
  console.log('Starting player seeding...');

  try {
    const batch = db.batch();
    const usersCollection = db.collection('users');

    for (const userData of users) {
      const docRef = usersCollection.doc(); // Auto-generated ID
      batch.set(docRef, {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await batch.commit();
    console.log(`Successfully seeded ${players.length} players`);
  } catch (error) {
    console.error('Error seeding players:', error);
    throw error;
  }
}

module.exports = seedPlayers;