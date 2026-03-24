import React, { useEffect, useState } from 'react'  // Fetch data from the backend and display it on the frontend

const App = () => {

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch('/api')
  .then(res => res.json())
  .then(data => setBackendData(data))
}, [])

  return (
    <div>

      {(typeof backendData.BaseballStats.db === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.BaseballStats_db.map((user, i) => (
          <p key={i}>{ user.players }, { user.stats }</p>
        ))
      )}

    </div>
  )
}

export default App

