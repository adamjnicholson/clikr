import React from 'react'

const PanelRow = props => {
return (
   <div className="PanelRow">
      <label>{ props.title }</label>
      { props.children }
    </div>
  )
}


export default PanelRow