

const Database =()=>{

    const [notes, setNotes] = useState([]);

    return(
      <div>
        <h1>My notes</h1>
        {notes.map((note) => (
          <p key={note.id}>{note.content}</p>
        ))}
      </div>
    );
    
}
export default Database
