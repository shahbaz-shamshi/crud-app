import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs"; 




function Create() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageForEmail, setErrorMessageForEmail] = useState("");
  const [errorMessageForName, setErrorMessageForName] = useState("");

  function newNameData(event) {
    let new_name = event.target.value;

    if (new_name.length < 4) {
      setErrorMessageForName("Name should contain a minimum of 4 characters!");
    } else {
      setErrorMessageForName("Perfect name!");
      setName(new_name);
    }
  }

  function newEmailData(event) {
    let new_email = event.target.value;
    // Email validation logic
    setEmail(new_email);
  }

  function newPasswordData(event) {
    let new_pass = event.target.value;
    // Password validation logic
    setPassword(new_pass);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hash the password before sending it
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt of 10 rounds

    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
      name: name,
      email: email,
      password: hashedPassword, // Send the hashed password to the server
      header,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h2>Sign up</h2>

        

<Link to="/">
        <button type="submit" className="button">
          Log in
        </button>

</Link>
      </div>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Name</label>
          <input
            id="Name"
            type="text"
            name="name"
            required=""
            onChange={newNameData}
          />

          <div style={{ color: "red" }}> {errorMessageForName} </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required=""
            onChange={newEmailData}
          />

          <div style={{ color: "red" }}> {errorMessageForEmail} </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required=""
            onChange={newPasswordData}
          />
          <div style={{ color: "red" }}> {errorMessage} </div>
        </div>
      </div>

      <p className="form-actions ">

      <Link to="/read">
          <button className="button"> Data</button>
        </Link> 
        <button type="reset" className="button button-flat">
          {" "}
          Reset
        </button>

        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}

export default Create;
