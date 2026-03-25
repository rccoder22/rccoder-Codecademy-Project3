import React, { useEffect, useState } from 'react';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const res = await fetch('/api/players');
      const data = await res.json();
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/players/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data.error || 'Delete failed');
        return;
      }

      setPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.id !== id)
      );
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Baseball Stats</h1>

      {players.length === 0 ? (
        <p>No players found.</p>
      ) : (
        players.map((player) => (
          <div key={player.id} style={{ marginBottom: '12px' }}>
            <p>
              <strong>Player:</strong> {player.players}
            </p>
            <p>
              <strong>Stats:</strong> {player.stats}
            </p>
            <button onClick={() => handleDelete(player.id)}>
              Delete
            </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default App;

