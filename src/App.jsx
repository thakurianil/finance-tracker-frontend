import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./pages/Signin.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
