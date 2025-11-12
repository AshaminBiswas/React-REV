import React, { useState } from "react";

function AdvanceForm() {
  const [data, setData] = useState({
    gender: "",
    country: "india",
    agree: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    setData((prevent)=>({
        ...prevent,
        [name]: type === "checkbox"?  checked : value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form handling With checkbox, radio, and select</h1>

      <label htmlFor="check">
        accept terms and conditions
        <input
          type="checkbox"
          name="agree"
          id="check"
          onChange={handleChange}
          checked={data.agree}
        />
      </label>
      <br />
      <label htmlFor="male">
        Male :
        <input
          type="radio"
          name="gender"
          id="male"
          checked={data.gender === "Male"}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="female">
        Female :
        <input
          type="radio"
          name="gender"
          id="female"
          checked={data.gender === "Female"}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="con">
        Country :
        <select
          name="country"
          id="con"
          onChange={handleChange}
          value={data.country}
        >
          <option value="ind">India</option>
          <option value="usa">America</option>
        </select>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AdvanceForm;
