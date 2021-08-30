import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  todo: localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todo));
  }, [state]);

  function createTodo(data) {
    dispatch({
      type: "CREATE_TODO",
      payload: data,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }

  function setToCompleted(id) {
    dispatch({
      type: "SET_TO_COMPLETED",
      payload: {
        id: id,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todo: state.todo,
        createTodo,
        deleteTodo,
        setToCompleted,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
