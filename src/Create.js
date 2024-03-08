import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import { Button } from "@mui/material";

import "./App.css";

function Create() {
  var [name, setName] = useState("");

  var [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    console.log("clicked");

    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
      name: name,
      email: email,
      header,
    });
  };

  function newNameData(event) {
    setName(event.target.value);
  }

  function newEmailData(event) {
    setEmail(event.target.value);
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
            <br />
            <br />
          </div>
          <Link to="/read">
          <button 
           onClick={handleSubmit}
           className="btn btn-primary">Submit
            
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Create;
