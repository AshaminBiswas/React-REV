import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name : ", name);
    console.log("email: ", email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>React Form Handling</h1>
      <label htmlFor="name">Name : </label>
      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email : </label>
      <input
        type="email"
        id="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
