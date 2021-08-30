import React from "react";
import { useHistory } from "react-router-dom";

const AppBarWithBack = () => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <header className="bg-red-300 p-3">
      <button className="material-icons md-24 text-white" onClick={goBack}>
        arrow_back
      </button>
    </header>
  );
};

export default AppBarWithBack;
