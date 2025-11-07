import { useState } from "react"

function Toggle() {

  const [isVisible, SetVisible] = useState(false)

  return (
    <div>
      <h1></h1>
      <button onClick={()=>SetVisible(!isVisible)}>{isVisible? "Hide Message" : "Show Message"}</button>
    {isVisible && <p>This is Visible</p>}

    </div>
  )
}

export default Toggle
