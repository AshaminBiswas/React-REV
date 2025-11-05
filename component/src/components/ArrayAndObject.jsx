import React from 'react'

function ArrayAndObject() {

    let fruits = ["mango", "banana", "orange", "grapes"]

    const user = {
        name:"Ashamin Biswas",
        age:23,
        roll:"fullstack developer"
    }

    function fullName(user){
        return user.name
    }

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((item, index)=>{
            return <li key={index}>{item.toUpperCase()}</li>
        })}
      </ul>
      <br />

      <h1>User Details</h1>
      <p>full name: {fullName(user)}</p>
      <p>age: {user.age}</p>
      <p>roll: {user.roll}</p>
    </div>
  )
}

export default ArrayAndObject
