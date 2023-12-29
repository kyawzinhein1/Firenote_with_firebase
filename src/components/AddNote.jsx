import React, { useState } from "react";

const AddNote = () => {
  // define state
  const [note, setNote] = useState("");

  // add new note
  const addNote = async (e) => {
    e.preventDefault();
    
    try {
      await fetch(
        "https://firenote-fffd1-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
    } catch (err) {
      alert("Something went wrong. Try again...");
    }
  };

  return (
    <section>
      <div className="d-flex justify-content-center">
        <form className="bg-primary w-80 py-3 rounded px-4" onSubmit={addNote}>
          <input
            className="rounded p-2 border border-primary "
            type="text"
            placeholder="enter a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button className="btn btn-danger p-2 ms-2">Add Note</button>
        </form>
      </div>
    </section>
  );
};

export default AddNote;
