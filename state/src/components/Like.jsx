import React, { useState } from 'react'
function Like() {

    const [like, setLike] = useState(false)

  return (
    <div>
      <p>{like? "Liked ❤️": "Disliked 🤍"}</p>
      <button onClick={()=>setLike(!like)}>{like? "Like" : "DisLike"}</button>
    </div>
  )
}

export default Like
