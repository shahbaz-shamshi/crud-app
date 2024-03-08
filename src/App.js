// import './App.css';

import Create from "./Create";
import Read from "./Read";
// import Update from './Update';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />

            {/* <Route exact path="/read" element={<Update/>}> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
