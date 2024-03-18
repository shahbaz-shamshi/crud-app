import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function newNameData(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function newEmailData(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  function newPasswordData(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submited");


    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
      name: name,
      email: email,
      password: password,
      header,
    });


e.target.reset();



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
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"  required=""
            onChange={newPasswordData}/>
        </div>
      </div>

      <p className="form-actions button-design">
      <button type="reset" className="button button-flat"> Reset</button>
       
        <button type ="submit" className="button">Login</button>

        
            

      </p>
    </form>
  );
}

export default Create;



