import React, { useState } from 'react'

function User() {
 

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(18)

  return (
    <div>
        <h2>Name is {name}</h2>
        <h3>Age is {age}</h3>
      <button onClick={()=>setName("Ashamin")}>Change Name</button>
      <button onClick={()=>setAge(age+1)}>Change Age</button>
    </div>
  )
}

export default User
