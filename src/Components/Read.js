import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
// import UpdateIcon from "@mui/icons-material/Update";

import "./App.css";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  function getData() {
    axios
      .get("https://65e7f94f53d564627a8f9288.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://65e7f94f53d564627a8f9288.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email, passsword, file) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", passsword);
    localStorage.setItem("file", file);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2 className="font">Data</h2>
        <Link to="/">
          <Button variant="contained" href="#contained-buttons">
            Create
          </Button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr className="head">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col">Files</th>
            
            <th scope="col"></th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>

            
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td></td>
                  <td>{eachData.file}</td>
                  
                  <td></td>
                  <td>
                    <Link to="/update">
                      <Button
                        variant="contained"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.passsword,
                            eachData.file
                          )
                        }
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default Read;
