import React from "react";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card w-75">
        <div className="row g-0">
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
          </div>
          <div className="col-md-6 bg-dark text-light p-4">
            <h2 className="h4 mb-4">Sign up now!</h2>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  defaultValue="John Smith"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  defaultValue="jane@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  className="form-control"
                  id="password"
                  type="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                <input
                  className="form-control"
                  id="confirm-password"
                  type="password"
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
