import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import { Button } from "@mui/material";

import "./App.css";

function Create() {
  var [name, setName] = useState("");

  var [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(false);

  var [password, setPassword] = useState("");
  var [file, setFile] = useState("");


  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
      name: name,
      email: email,
      password: password,
      file: file,

      header,
    });
  };

  function newNameData(event) {
    setName(event.target.value);
  }

  function newEmailData(event) {

     const value=event.target.value;

     setEmail(value);
    setIsValid(validateEmail(value));



     





  


  }

  function newPasswordData(event) {
    setPassword(event.target.value);
  }

  function newFileData(event) {
    setFile(event.target.value);
  }



  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              onChange={newNameData}
              required
            />
            <br />
            <br />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email id:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={newEmailData}
              
              required
            />

{isValid ? (
        <p style={{ color: 'green' }}>Valid email address</p>
      ) : (
        <p style={{ color: 'red' }}>Invalid email address</p>
      )}
            <br />
            <br />
          </div>


          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={newPasswordData}
              required
            />
            <br />
            <br />
          </div>


          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              file upload:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={newFileData}
              required
            />
            <br />
            <br />
          </div>


          <div className="buttonClass">
            <Link to="/">
              <button disabled={!isValid} onClick={handleSubmit} className="btn btn-secondary">
                Submit
              </button>
            </Link>

            <Link to="/read">
              <button className="btn btn-primary">Data</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Createclone;