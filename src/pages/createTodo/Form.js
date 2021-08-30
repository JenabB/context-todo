import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [date, setDate] = useState("2021-08-31");
  const { createTodo } = useContext(GlobalContext);

  let history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      createdAt: new Date(),
      name: name,
      deadline: date,
      isCompleted: false,
      backgroundColor: color,
    };

    createTodo(newTodo);
    history.push("/");
  };

  console.log(date);

  return (
    <div className="lg:w-2/4 mx-auto my-10">
      <form onSubmit={handleSubmit} className="text-center">
        <div>
          <h1>Todo Name</h1>
          <input
            type="text"
            className="bg-gray-200 my-4 rounded-lg px-2 py-1 w-2/4"
            placeholder="todo name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="my-4">
          <h1>Deadline</h1>
          <input
            type="date"
            className="my-2"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div>
          <h1>Pick Color</h1>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-10 bg-red-300 text-white px-3 py-1 rounded-xl"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
