// import './App.css';

import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from './Components/Update';
import Login from './Components/Login';
 

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/Create" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/" element={<Login />} />


            <Route exact path="/update" element={<Update/>}>
           </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
