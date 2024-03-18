import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageForEmail, setErrorMessageForEmail] = useState("");
  const [errorMessageForName, setErrorMessageForName] = useState("");


  function newNameData(event) {

let new_name=event.target.value;


   



    if (new_name.length < 4) {
      setErrorMessageForName("Name should contains minimum 4 char!");
    

    }
      else {
        setErrorMessageForName("Perfect name!");
        setName(new_name);
      }
    
    }

  function newEmailData(event) {
    let new_email = event.target.value;
    var lowerCase = /[a-z]/g;
    var numbers = /[0-9]/g;
    var special = /[@]/g;
    var word = /[.com]/g;

    if (!new_email.match(lowerCase)) {
      setErrorMessageForEmail("email should contains lowercase letters!");
    } else if (!new_email.match(numbers)) {
      setErrorMessageForEmail("email should contain number!");
    } else if (!new_email.match(special)) {
      setErrorMessageForEmail("email should contains @ also!");
    } else if (!new_email.match(word)) {
      setErrorMessageForEmail("email should contains .com!");
    } else if (new_email.length < 8) {
      setErrorMessageForEmail("email length should be more than 8.");
    } else {
      setErrorMessageForEmail("Perfect email!");
      setEmail(new_email);
    }
  }

  function newPasswordData(event) {
    let new_pass = event.target.value;

    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (new_pass.length < 8) {
      setErrorMessage("Password length should be more than 8.");
    } else {
      setErrorMessage("Password is strong!");
      setPassword(new_pass);
    }

    // if (!new_pass.match(valid)) {
    //    setErrorMessage("type correct password!");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
      name: name,
      email: email,
      password: password,
      header,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h2>Login</h2>

        <Link to="/read">
          <button className="button"> Data</button>
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
        <button type="reset" className="button button-flat">
          {" "}
          Reset
        </button>

        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}

export default Create;
