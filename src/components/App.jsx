import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [advise, setAdvise] = useState(null)

  const url = 'https://api.adviceslip.com/advice'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response)
        setAdvise(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [url])

  function fetchAdvise () {
    setAdvise()
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
        <h1>Fetching Advise ...</h1>
      </div>
    )
  }
}

//
// }
export default App
