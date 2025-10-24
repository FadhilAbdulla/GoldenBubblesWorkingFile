import React, { useState } from "react";
import ImageWithBasePath from "../core/img/imagewithbasebath";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../Router/all_routes";
import { useForm } from "react-hook-form";
import { PostRequest } from "../common/ApiFunctions";
import ApiEndpoints from "../common/ApiEndpoints";
import { message } from "antd";

const Signin = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const route = all_routes;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API call using email/username and password
  const submitCredentials = async (payload) => {
    setLoading(true);
    setApiError("");
    try {
      const res = await PostRequest(
        ApiEndpoints.login,
        JSON.stringify(payload)
      );
      if (res.success === true) {
        message.success("Login successful");
        navigate(route.dashboard);
      } else {
        setApiError(res.message || "Login failed");
      }
    } catch (err) {
      setApiError(err?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div
          className="login-wrapper bg-img"
          style={{
            backgroundImage: "url('/assets/img/admin-bg.jpg')",
          }}
        >
          <div className="login-content">
            <form onSubmit={handleSubmit(submitCredentials)}>
              <div className="login-userset">
                <div className="login-logo logo-normal">
                  <ImageWithBasePath src="assets/img/logo.png" alt="img" />
                </div>
                <Link to={route.dashboard} className="login-logo logo-white">
                  <ImageWithBasePath src="assets/img/logo-white.png" alt />
                </Link>
                <div className="login-userheading">
                  <h3>Sign In</h3>
                  <h4>
                    Access the Admin Dasboard using your email and passcode.
                  </h4>
                </div>

                <div className="form-login mb-3">
                  <label className="form-label">Email Address</label>
                  <div className="form-addons">
                    <input
                      type="text"
                      className="form-control"
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />
                    <ImageWithBasePath
                      src="assets/img/icons/mail.svg"
                      alt="img"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-danger small mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="form-login mb-3">
                  <label className="form-label">Password</label>
                  <div className="pass-group">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="pass-input form-control"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <span
                      className={`fas toggle-password ${
                        isPasswordVisible ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={togglePasswordVisibility}
                    ></span>
                  </div>
                  {errors.password && (
                    <p className="text-danger small mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {apiError && <div className="text-danger mb-3">{apiError}</div>}

                <div className="form-login">
                  <button
                    type="submit"
                    className="btn btn-login"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
