import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "../App.css";
import DatFetch from "./DatFetch";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
//   const [options, setOption] = useState("");

  const [load, setloader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true); //on submit set load to true
    db.collection("forms")
      .add({
        name: name,
        email: email,
        message: message
      
      })
      .then(() => {
        alert("subkmitted successfully");
        setloader(false);
      })
      .catch((error) => {
        alert("error in submitting");
      });

    setName("");
    setEmail("");
    setMessage("");
  
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Please fill the following form </h1>
      <label>Name</label>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Email</label>
      <input
        placeholder="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label>Message</label>
      <textarea
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      {/* <select
        onChange={(e) => {
          const gender = e.target.value;
          setOption(gender);
        }}
        value={options}
      >
        <option value="m">Male</option>  <option value="fe">Female</option>
        {options}
      </select> */}
      <button
        type="submit"
        style={{ background: load ? "#gray" : "rgb(2, 2, 110);" }}
        required
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
