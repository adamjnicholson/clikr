import React, { useEffect, useCallback } from 'react'
import DotClick from '../../components/DotClick/DotClick'

const Artboard = props => {
  const {clicks, setClicks, dotColour, sessionClicks, setSessionClicks} = props

  const artboardClicked = useCallback( e => {
    if (e.target.classList.contains('App')) {
      const click = {
        id: new Date().getTime(),
        colour: dotColour,
        xPos: e.clientX,
        yPos: e.clientY
      }

      setClicks(clicks.concat(click))
      setSessionClicks(sessionClicks + 1)
    }
  }, [clicks, setClicks, dotColour, sessionClicks, setSessionClicks])

  useEffect( () => {
    document.body.addEventListener( 'click', artboardClicked)

    return () => document.body.removeEventListener( 'click', artboardClicked)
  }, [artboardClicked])

  const dotClicks = props.clicks.map( click => (
    <DotClick 
      key={ click.id}
      { ...click }
    />
  ))


  return (
    <div className="Artboard">
      { dotClicks }
    </div>
  )
}

export default Artboard