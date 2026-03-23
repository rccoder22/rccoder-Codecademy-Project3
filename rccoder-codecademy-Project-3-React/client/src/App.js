import React, { use, useEffect, useState } from 'react'  // Fetch data from the backend and display it on the frontend

const App = () => {

const [backendDate, setBackendDate] = useState([{}])

useEffect(() => {
  fetch('/api')
  .then(res => res.json())
  .then(data => setBackendDate(data))
}, [])

  return (
    <div>

      {(typeof backendDate.BaseballStats.db === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendDate.BaseballStats_db.map((user, i) => (
          <p key={i}>{ user.players }, { user.stats }</p>
        ))
      )}

    </div>
  )
}

export default App
