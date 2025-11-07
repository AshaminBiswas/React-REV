import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState("")

  return (
    <div>
      <input type="text" value={name} placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
      <p>Hello, {name || "Guest"}</p>
    </div>
  )
}

export default Form
