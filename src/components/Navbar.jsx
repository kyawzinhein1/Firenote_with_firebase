import React from "react";

const Navbar = ({ getNotes }) => {
  return (
    <section className="d-flex align-items-center justify-content-between px-5">
      <h1 className="my-3 text-primary fw-bold">Note</h1>
      <button className="btn btn-primary" onClick={getNotes}>
        Refresh
      </button>
    </section>
  );
};

export default Navbar;
