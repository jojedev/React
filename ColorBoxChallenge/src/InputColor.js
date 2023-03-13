import React from 'react'

const InputColor = ({color, setColor}) => {
  return (
    <input
          autoFocus
          id='changeColor'
          type='text'
          placeholder="Add color name"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
  )
}

export default InputColor