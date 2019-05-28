import React from 'react'
import PanelRow from '../../UI/PanelRow/PanelRow'
import DotColour from '../../components/DotColour/DotColour'

const colours = ['black', 'red', 'green']

const Controls = props => {

  const dotColours = colours.map( colour => (
    <DotColour 
      key={colour}
      colour={ colour } 
      setColour={ props.setColour } 
      selected={ colour === props.dotColour }
    />
  ))

  const undoHandler = () => {
    const newClicks = props.clicks.slice(0, -1)
    props.setClicks(newClicks)
    props.setSessionClicks(props.sessionClicks - 1)
  }

  const saveHandler = () => {
    localStorage.setItem('clicks', JSON.stringify(props.clicks))
  }

  
  return (
    <div className="Controls">
      <PanelRow title="Colours">
        { dotColours }
      </PanelRow>
      <PanelRow title="Buttons">
        <button onClick={ undoHandler }>Undo</button>
        <button onClick={ saveHandler }>Save</button>
      </PanelRow>
      <PanelRow title="Clicks">
        <p>Total Clicks: { props.clicks.length}</p>
        <p>Clicks This Sesstion: { props.sessionClicks }</p>
      </PanelRow>
    </div>
  )
}

export default Controls