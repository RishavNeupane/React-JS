import { useState } from "react";
import { useField } from "../hooks/useField";

const Login = () => {
  const email = useField("email");
  const password = useField("password");

  // 1. Add state for validation messages
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 2. Form Validation Logic
    if (!email.value || !password.value) {
      setError("Both fields are required!");
      return;
    }

    if (password.value.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Clear error if validation passes
    setError("");
    console.log("Login attempt successful for:", email.value);
    alert("Logged in!");
  };
    return (
    <div className="form-container">
      <h2>Login</h2>

      {/* 3. Display Error Message */}
      {error && <div className="error-banner">{error}</div>}

      <form onSubmit={handleLogin}>
        <div>
          Email
          <input
            value={email.value}
            type={email.type}
            onChange={email.onChange}
            className={error && !email.value ? "input-error" : ""}
          />
        </div>
        <div>
          Password
          <input
            value={password.value}
            type={password.type}
            onChange={password.onChange}
            className={error && password.value.length < 6 ? "input-error" : ""}
          />
        </div>
        <button type="submit">Login</button>
      </form>
       <p className="text-slate-300 text-sm">
              Don't have an account?
              {/* <Link
                to="/register"
                className="text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text font-semibold hover:from-cyan-300 hover:to-violet-300 transition-all duration-300 underline-offset-2 hover:underline"
              > */}
                Sign Up
              {/* </Link> */}
            </p>
    </div>
  );
};

export default Login;