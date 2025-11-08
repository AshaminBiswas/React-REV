import React from 'react'
import Hello from './components/Hello'
function App() {

  const hobbies = ["Coding", "Cricket", "BGMI"]

  return (
    <div>
      <Hello name="Ashamin"  age={25} city="Jangipur" hobbies={hobbies}/>
    </div>
  )
}

export default App
