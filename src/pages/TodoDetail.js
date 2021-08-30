import React from "react";
import AppBarWithBack from "../components/AppBarWithBack";

const TodoDetail = () => {
  return (
    <div>
      <AppBarWithBack />
      <div className="lg:w-2/4 mx-auto my-10">
        <h1>Ini Todo</h1>
      </div>
    </div>
  );
};

export default TodoDetail;
