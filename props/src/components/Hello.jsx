import React from 'react'

function Hello({name="Guest", age="20", city="Mumbai"}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <h2>My age is {age}</h2>
      <h3>My City is {city}</h3>
    </div>
  )
}

export default Hello
