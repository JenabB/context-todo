import React from "react";
import AppBar from "../components/AppBar";
import FloatingAddButton from "./home/FloatingAddButton";
import TodoList from "./home/TodoList";

const Home = () => {
  return (
    <div>
      <AppBar />
      <TodoList />
      <FloatingAddButton />
    </div>
  );
};

export default Home;
