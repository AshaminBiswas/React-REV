import React from 'react'

function ConditionalRend() {

    const isLoggedIn = false

  return (
    <div>
      <p>{isLoggedIn?"You are login":"please login"}</p>
    </div>
  )
}

export default ConditionalRend
