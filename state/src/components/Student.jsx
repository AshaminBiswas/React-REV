import React, { useState } from 'react'

function Student() {


    const [student, setStudent] = useState({
        name:"Ashamin",
        grade:"A",
        city:"Jangipur"
    })

    const changeCity = ()=>{
        setStudent({...student, city:"Mumbai"})
    }

  return (
    <div>
      <h1>Name : {student.name}</h1>
      <p>Grade : {student.grade}</p>
      <p>City : {student.city}</p>

      <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default Student
