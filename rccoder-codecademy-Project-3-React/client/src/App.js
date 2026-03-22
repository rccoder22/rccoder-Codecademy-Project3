import React, { use, useEffect, useState } from 'react'

const App = () => {

const [backendDate, setBackendDate] = useState([{}])

useEffect(() => {
  fetch('/api')
  .then(res => res.json())
  .then(data => setBackendDate(data))
}, [])

  return (
    <div>

    </div>
  )
}

export default App
