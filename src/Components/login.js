import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function newEmailData(event) {
    setEmail(event.target.value);
  }

  function newPasswordData(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    console.log("submited");
try{
    // const header = { "Access-Control-Allow-Origin": "*" };
    // axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
    //   email: email,
    //   password: password,
    //   header,
    // });

    axios.post('/login', {
      email: email,
      password: password
  })

  console.log(email);

   



    const response = await axios.get(
   "https://65e7f94f53d564627a8f9288.mockapi.io/crud"
    );


    const users = response.data;
    const usersPassword = response.data[users.length].password;
    console.log(usersPassword);
    
    const usersEmail = response.data[users.length].email;
    console.log(usersEmail);
    
   

    e.target.reset();

  }

  catch (error) {
    console.error("Error:", error);
  }
  };



  





  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h2>Login</h2>
      </div>

      <div className="control-row">
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
          <input
            id="password"
            type="password"
            name="password"
            required=""
            onChange={newPasswordData}
          />
        </div>
      </div>

      <p className="form-actions button-design">
        <button type="submit" className="button">
          Login
        </button>
        <Link to="/Create">
          <button type="submit" className="button">
            Sign up
          </button>
        </Link>
      </p>
    </form>
  );
}

export default Login;
