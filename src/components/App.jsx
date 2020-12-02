import React, { useEffect, useState } from 'react'

function App () {
  const { advise, setAdvise } = useState({
    advise: ''
  })

  return (
    <div>
      <h1>Stuff</h1>
      <button>Get Advise</button>
    </div>
  )
}

//
// }
export default App
