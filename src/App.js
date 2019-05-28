import React, { useState, useEffect } from 'react'
import Controls from './containers/Controls/Controls'
import Artboard from './containers/Artboard/Artboard';

const App = props => {
  const [ dotColour, setDotColour ] = useState( 'black' )
  const [sessionClicks, setSessionClicks ] = useState(0)
  const [clicks, setClicks ] = useState([])

  useEffect( () => {
    const localClicks = JSON.parse(localStorage.getItem('clicks'))
    if (localClicks) {
      setClicks(localClicks)
    }
  }, [])

  return (
    <div className="App">
      <Controls
        dotColour={ dotColour }
        setColour={ setDotColour }
        clicks={ clicks }
        setClicks={ setClicks }
        sessionClicks={ sessionClicks }
        setSessionClicks={ setSessionClicks }
      />
      <Artboard
        dotColour={ dotColour }
        clicks={ clicks }
        setClicks={ setClicks }
        sessionClicks={ sessionClicks }
        setSessionClicks={ setSessionClicks }
      />
    </div>
  )
}

export default App



