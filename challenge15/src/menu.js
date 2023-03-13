import React from 'react'

const MenuHead = ({setUrl}) => {
  return (
    <div className='menu'>
      <button type='button' onClick={(e)=> setUrl('/users')}>users</button>
      <button type='button' onClick={(e)=> setUrl('/posts')}>post</button>
      <button type='button' onClick={(e)=> setUrl('/comments')}>comments</button>
    </div>
  )
}

export default MenuHead
