// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };

    case "DELETE_TODO":
      const deleteTodo = state.todo.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todo: deleteTodo,
      };

    case "SET_TO_COMPLETED":
      const updatedTodo = state.todo.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

      return {
        ...state,
        todo: updatedTodo,
      };
    default:
      return state;
  }
};
