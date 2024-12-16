import { useState } from "react";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./pages/Signin.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import Transaction from "./pages/Transaction.jsx";
import DefaultLayout from "./layout/defaultLayout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Routes>

        <Route path="*" element={<DefaultLayout />}>
            <Route index element={<Signin />} />
            <Route path="login" element={<Signin />} />          
            <Route path="signup" element={<Signup />} />
            <Route path="transaction" element={<Transaction />} />
        </Route>
          
      </Routes>
    </>
  );
}

export default App;
