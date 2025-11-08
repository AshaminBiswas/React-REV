import React from 'react'
import Hello from './components/Hello'
import Button from './components/Button'
function App() {

  const hobbies = ["Coding", "Cricket", "BGMI"]

  function message(){
    alert("Hello From Message Box")
  }

  return (
    <div>
      {/* <Hello name="Ashamin"  age={25} city="Jangipur" hobbies={hobbies}/> */}
      <Button  label={"Click Me"} handelClick={message}/>
    </div>
  )
}

export default App
