import React from "react";
import { Link } from "react-router-dom";

const FloatingAddButton = () => {
  return (
    <Link
      to="/create"
      className="fixed bottom-10 right-10 bg-red-300 p-6 rounded-full"
      style={{ height: "70px", width: "70px" }}
    >
      <button className="material-icons md-24 text-white">add</button>
    </Link>
  );
};

export default FloatingAddButton;
