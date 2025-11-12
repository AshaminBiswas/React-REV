import React, { useRef } from 'react'

function Uncontrolled() {

    const nameRef = useRef()
    const emailRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        console.log("Name : ", nameRef.current.value);
        console.log("Email : ", emailRef.current.value);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Uncontrolled Form</h1>
        <label htmlFor="name">
            name
        </label>
        <input ref={nameRef} type="text" id="name" placeholder='name' />

        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" name="email" id="email" placeholder='email' />
        <button type="submit">submit</button>
    </form>
  )
}

export default Uncontrolled
