import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./App.css";

import { userSchema } from "../validations/UserValidation";

import { Button, TextField } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';






function Create() {
  var [name, setName] = useState("");

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post("https://65e7f94f53d564627a8f9288.mockapi.io/crud", {
      name: name,
      email: email,
      password: password,
      file:file,
      header,
    });

    let formData = {
      name: name,
      email: email,
      password: password,
      file:file,
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  function newNameData(event) {
    setName(event.target.value);
  }

  function newEmailData(event) {
    setEmail(event.target.value);
  }

  function newPasswordData(event) {
    setPassword(event.target.value);
  }
  function newFileData(event) {
    setFile(event.target.value);
  }




  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
function InputFileUpload() {
    return (
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    );
  }

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="row g-3 needs-validation"
          novalidate=""
        >
          <div className="mb-3" >
            <label className="form-label" for="validationCustom01" >
              Name:
            </label>

            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required=""
              onChange={newNameData}
            />
            <br />
          </div>

         
          <div className="valid-feedback">Looks good!</div>

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

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={newPasswordData}
              required
            />
            </div>


        
<div className="fileClass">
<Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />

  
  }

  onChange={newFileData}
              required
>
  Upload file
  <VisuallyHiddenInput type="file" />
</Button>


</div>




          <div className="buttonClass">
            <Link to="/">
              <Button
                variant="contained"
                href="#contained-buttons"
                onClick={handleSubmit}
                size="medium"
              >
                Submit
              </Button>
            </Link>

            <Link to="/read">
              <Button>Data</Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
