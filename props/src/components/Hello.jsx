import React from 'react'

function Hello({name="Guest", age="20", city="Mumbai", hobbies}) {

  return (
    <div>
      <h1>Hello, {name}</h1>
      <h2>My age is {age}</h2>
      <h3>My City is {city}</h3>
      <ul>
        {hobbies.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Hello
