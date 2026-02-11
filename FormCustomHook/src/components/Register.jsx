import { useField } from "../hooks/useField";

const Register = () => {
  const email = useField("email");
  const password = useField("password");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.value.length < 5) {
      alert("Password too short!");
      return;
    }
    console.log("Registering with:", email.value);
  };

  const handleReset = () => {
    email.reset();
    password.reset();
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form onSubmit={handleRegister}>
        <div>
          Email: <input {...{ ...email, reset: undefined }} />
        </div>
        <div>
          Password: <input {...{ ...password, reset: undefined }} />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit">
            Register
          </button>
          <button type="button" className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;