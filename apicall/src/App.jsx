import "./App.css";
// import { useState } from "react";
import { useState, useEffect } from "react";
// import noteService from "./services/note";
import noteService from "./services/note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userPass, setUserPass] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const fetchedNote = await noteService.getAll();
        setNotes(fetchedNote);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };
    fetchNote();
  }, []);

  const handleSubimt = async(e) => {
    e.preventDefault();
    console.log(userInput);

    const newObject = {
      content: userInput,
      important: Math.random() > 0.5,
    };

    const neNote = await noteService.create(newObject);
    setNotes(notes.concat(neNote));
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
      {/* <div>
        <h1>My notes</h1>
        {notes.map((note) => (
          <p key={note.id}>{note.content}</p>
        ))}
      </div> */}
    </>
  );
};
export default App;