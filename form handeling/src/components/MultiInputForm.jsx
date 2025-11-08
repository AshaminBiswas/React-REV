import React, { useState } from 'react'

function MultiInputForm() {

    const [formData, setFormData] =useState({name:"", email:"", age:""})
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        console.log(formData);
    }

    const handelChange = (e)=>{
         const {name, value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

  return (
    <form onSubmit={handleSubmit}>
      <h1>React Form Handling</h1>
      <label htmlFor="name">Name : </label>
      <input
        name='name'
        id="name"
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handelChange}
      />

      <label htmlFor="email">Email : </label>
      <input
        name='email'
        type="email"
        id="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handelChange}
      />

      <label htmlFor="age"></label>
      <input name='age' type="number" id='age' placeholder='Enter Age' value={formData.age}
        onChange={handelChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MultiInputForm
