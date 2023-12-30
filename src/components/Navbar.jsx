import React from "react";

const Navbar = ({ getNotes, totalNote }) => {
  return (
    <section className="d-flex align-items-center justify-content-between px-4 mt-4 mb-3">
      <h1 className=" text-primary fw-bold">Note</h1>
      <p className="btn btn-primary">
        Total Note - <span>{totalNote}</span>
      </p>
    </section>
  );
};

export default Navbar;
