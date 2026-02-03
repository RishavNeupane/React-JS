import "../App.css";
import { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState("");
  const [userPass, setUserPass] = useState("");
  const handleSubimt = (e) => {
    e.preventDefault();
    console.log("Login submitted", userInput, userPass);
    setUserInput("");
    setUserPass("");
  };

  return (
    <>
      <div className ="box">
        <h2 className="Title">Login Form</h2>
        <form onSubmit={handleSubimt}>
          
          <div className="emailbox">
            <label>
              Email or Phone <br />
              <input className="inputbox" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            </label>
          </div>

          <br />

          <div className="passbox">
            <label>
              Password <br />
              <input className="inputbox" type="password" value={userPass} onChange={(e)=> setUserPass(e.target.value)}/>
            </label>
          </div>

          <a id="Forgot" href="#">Forgot Password?</a> <br />
          <button>LOGIN</button><br />

          <div className="Signup">
            <div>Not a Member? </div>
            <a href="#">Signup Now</a>
          </div>

        </form>
      </div>

      

    </>
  );
};
export default Form;