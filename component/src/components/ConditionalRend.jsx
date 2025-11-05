import React from 'react'
import "../App.css"
function ConditionalRend() {

    const isLoggedIn = true

  return (
    <div>
      <p className={isLoggedIn?"visible": "unvisible"}>{isLoggedIn?"You are login":"please login"}</p>
    </div>
  )
}

export default ConditionalRend
