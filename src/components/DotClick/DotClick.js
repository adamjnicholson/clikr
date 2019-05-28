import React from 'react'

const DotClick = props => {
  const style = {
    top: props.yPos,
    left: props.xPos
  }

  const DotClickClasses = ['DotClick', props.colour + '-bg'].join(' ')

  return <div className={ DotClickClasses } style={style}></div>
}

export default DotClick