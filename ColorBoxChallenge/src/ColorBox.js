import React from 'react'

export const ColorBox = ({color}) => {
  return (
    <div class="color-box" style={(color) ? {backgroundColor: color} : null}>
            <p class="color-text"> {(color) ? color : 'Empty value'}</p>
    </div>
  )
}

