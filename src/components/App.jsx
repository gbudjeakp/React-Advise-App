import React, { useState } from 'react'
import axios from 'axios'

function App () {
  const [advise, setAdvise] = useState(null)

  const url = 'https://api.adviceslip.com/advice'

  function fetchAdvise () {
    axios.get(url)
      .then(response => {
        setAdvise(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (advise) {
    return (
      <div className='box'>
        <h1 className='heading'>{advise.slip.advice}</h1>
        <button className='button' onClick={fetchAdvise}>Get more Advise</button>
      </div>
    )
  } else {
    return (
      <div className='box'>
        <h1>Click to get Advise</h1>
        <button className='button' onClick={fetchAdvise}>Get Advise</button>
      </div>
    )
  }
}

//
// }
export default App
