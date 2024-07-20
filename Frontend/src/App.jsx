import React from 'react'

import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <>
  <Navbar/>
   <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
   </Routes>
    </>
  );
}

export default App