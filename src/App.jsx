import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Navbar from "./components/Navbar";

const App = () => {
  // define state
  const [note, setNote] = useState([]);

  // get note when start
  useEffect(() => {
    getNotes();
  }, []);

  // get note
  const getNotes = async () => {
    const response = await fetch(
      "https://firenote-fffd1-default-rtdb.firebaseio.com/notes.json"
    );
    const notes = await response.json();
    const modifiedNote = [];

    for (const key in notes) {
      modifiedNote.push(notes[key]);
    }
    setNote(modifiedNote);
  };
  return (
    <div>
      <Navbar getNotes={getNotes} />
      <AddNote />
      {note.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
};

export default App;
