import axios from "axios";
import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(user);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log(res);

        dispatch({ type: "ADD_TOKEN", payload: res.data.accessToken });

        navigate("/admin");
      })
      .catch((err) => alert("XATO"));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={username} />
        <input type="password" placeholder="password" ref={password} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Login;
