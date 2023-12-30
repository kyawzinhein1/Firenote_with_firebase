import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { TiPointOfInterest } from "react-icons/ti";

const Note = ({ note, getNotes }) => {
  // destructure note object
  const { note: text, id } = note;

  // delete note
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://firenote-fffd1-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mx-auto">
      <section className="d-flex align-items-center justify-content-between bg-primary rounded m-2 py-2 text-white">
        <span className="px-4">
          <TiPointOfInterest className="fs-5 text-white" /> {note.note}
        </span>
        <button className="btn" onClick={deleteNote}>
          <AiTwotoneDelete className="text-white" />
        </button>
      </section>
    </div>
  );
};

export default Note;
