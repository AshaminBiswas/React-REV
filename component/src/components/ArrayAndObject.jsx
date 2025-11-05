import React from 'react'

function ArrayAndObject() {

    let fruits = ["mango", "banana", "orange", "grapes"]


  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((item, index)=>{
            return <li key={index}>{item.toUpperCase()}</li>
        })}
      </ul>
    </div>
  )
}

export default ArrayAndObject
