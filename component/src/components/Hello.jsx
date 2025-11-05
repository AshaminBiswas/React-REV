import React from "react";
// import style from "../components/Hello.module.css"
function Hello() {

  // function with parameter
  const name = "Ashamin";
  function getName(name) {
    return name;
  }

  function handelClick(){
    alert("button was clicked")
  }

  function handleChange(e){
    // this print every character in console in next line, but this is bad practice, 
    //To avoid this behavior
    console.clear() // but this is not the right approach
      console.log("value :", e.target.value);
      
  }

  function handleMouseOver(){
    console.log("mouse is over the paragraph");
    
  }

  function handleDoubleClick(){
    console.log("paragraph double click");
    
  }

  return (
    <>
      <h1>Hello {getName(name)}</h1>
      <h2>Bye {getName(name)}</h2>
      <br />
      {/* // we can write multiple event in on a single element */}
      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet.</p>
      <br />
      <button onClick={handelClick}>Click Me</button>
      <button onClick={()=>alert("Hii Buddy")}>Say Hii</button>

      <br />
      <input type="text" onChange={handleChange}  placeholder="type"/>
    </>
  );
}

export default Hello;
