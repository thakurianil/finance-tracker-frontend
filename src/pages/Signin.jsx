import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router";

import { getUser, setJWTtoken } from "../helpers/userAxios";
import { toast } from "react-toastify";

function Signin() {

  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);

    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    navigate("/signup");
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = await getUser(formData);

    console.log(data.JWToken);
    toast[data.status](data.message);

    localStorage.setItem("accessJWT", data.JWToken);

    if (data?.status === "success") {
      navigate("/transaction");
    }

    status === "success" && setFormData(initialState);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-90 bg-light ">
      <div className="card w-75">
        <div className="row g-0">
          <div className="col-md-6 bg-dark text-light p-4">
            <h2 className="h4 mb-4">Sign in now!</h2>
            <hr></hr>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Please Enter Email"
                  name="email"
                  value={FormData.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Please Enter Password"
                  name="password"
                  value={FormData.password}
                  onChange={handleOnChange}
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Sign In
              </button>
            </form>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-light bg-secondary p-4">
            <img
              alt="Stack of coins icon"
              className="mb-4"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/Rg1oPVKwV6JoIlb3gSIKm5NbiVaSMbOakue5GH8KU2WLH42JA.jpg"
              width="100"
            />
            <p className="text-center mb-4">Watch your Money Grow!</p>
            <h2 className="h4 mb-4">Have an Emergency Fund</h2>
            <p className="italic">
              "Prepare for the unknown by studying how others in the past have
              coped with the unforeseeable and the unpredictable." - George S.
              Clason
            </p>
            <button
              className="btn btn-outline-light mt-4"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
