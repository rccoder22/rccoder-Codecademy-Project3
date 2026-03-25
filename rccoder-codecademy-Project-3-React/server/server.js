const express = require('express');
const pool = require('./db');

const app = express();

app.use(express.json());

// Get all players
app.get('/api/players', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, players, stats FROM BaseballStats ORDER BY id ASC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching players:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete one player by id
app.delete('/api/players/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM BaseballStats WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Player not found' });
    }

    res.json({
      message: 'Player deleted successfully',
      deletedPlayer: result.rows[0],
    });
  } catch (err) {
    console.error('Error deleting player:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});