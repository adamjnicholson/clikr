import React from 'react'

const DotColour = props => {
  const DotClasses = [ 
    'DotColour',
    props.colour + '-bg',
    props.selected ? 'selected' : ''
   ].join(' ')

  return (
    <button 
      className={ DotClasses }
      onClick={ () => props.setColour(props.colour)}
    />
  )
} 

export default DotColour