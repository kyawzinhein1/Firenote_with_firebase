import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const App = () => {
  // define state
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // get note when start
  useEffect(() => {
    getNotes();
  }, []);

  // get note
  const getNotes = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://firenote-fffd1-default-rtdb.firebaseio.com/notes.json"
      );

      if (!response.ok) {
        throw new Error("Cannot connect to the firebase!!!");
      }

      const notes = await response.json();
      const modifiedNote = [];

      for (const key in notes) {
        modifiedNote.push({
          id: key,
          note: notes[key],
        });
      }
      setNote(modifiedNote);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar getNotes={getNotes} totalNote={note.length} />
      {error && !loading && (
        <p className="text-danger text-center my-5 fw-bold fs-4">{error}</p>
      )}
      {loading && !error && (
        <p className="text-danger text-center my-5 fw-bold fs-4">
          Getting nodes...
        </p>
      )}
      {!loading && !error && (
        <>
          <AddNote getNotes={getNotes} />
          {note
            .slice()
            .reverse()
            .map((note, index) => (
              <Note key={index} note={note} getNotes={getNotes} />
            ))}
        </>
      )}
      {note.length === 0 && <Intro/>}
    </div>
  );
};

export default App;
