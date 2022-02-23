import { useState } from "react";
import axios from "axios";
import "./custom/css/custom.css";
import "./App.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    zip: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", {
        body: JSON.stringify(formData),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="card shadow p-8 mb-9 bg-body rounded">
        <div className="card-body">
          <div className="col-md-12 row">
            <div className="col-md-6 left-bg text-white coloumn new">
              <div>
                <h1 className="mt-4">Welcome Back!</h1>
              </div>
              <div className="justify-content-center msg-custom">
                <span>
                  To keep connected with us please login with your personal info
                </span>
              </div>
              <div>
                <a href="/">
                  <button className="round-btn">SIGN IN</button>
                </a>
              </div>
            </div>
            <div className="col-md-6 right-bg">
              <h1>Create account</h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <p>Fill all the details for registration</p>
                <div className="input-group">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      pattern="[a-zA-Z][a-zA-Z ][a-zA-Z ]{3,}"
                      title="Please Enter a valid name"
                      required
                      placeholder="Name"
                      input="true"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{10}"
                      title="Please Enter a valid number"
                      required
                      placeholder="Phone number"
                      className="form-control"
                      input="true"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      id="autocomplete"
                      onFocus="geolocate()"
                      type="text"
                      name="address"
                      required
                      placeholder="Address"
                      input="true"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="number"
                      name="zip"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      required
                      placeholder="Zip code"
                      className="form-control"
                      input="true"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      name="email"
                      pattern="[^ @]*@[^ @]*"
                      size="30"
                      title="Please provide only a Best Startup Ever corporate e-mail address"
                      required
                      placeholder="Email"
                      input="true"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      name="password"
                      minLength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      required
                      placeholder="Password"
                      input="true"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <a href="/">
                  <button
                    className="btn btn-sm btn-danger round-btn mt-2"
                    type="submit"
                  >
                    SIGN UP
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
