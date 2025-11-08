import React from 'react'

function Button({label, handelClick}) {
  return (
    <div>
      <button onClick={handelClick}>{label}</button>
    </div>
  )
}

export default Button
