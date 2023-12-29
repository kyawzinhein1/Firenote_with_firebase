import React from "react";

const Note = ({ note }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mx-auto">
      <section className="bg-primary rounded m-2 py-2 text-white">
        <span className="px-4">+ {note}</span>
      </section>
    </div>
  );
};

export default Note;
