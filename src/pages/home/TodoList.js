import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TodoList = () => {
  const { todo, setToCompleted, deleteTodo } = useContext(GlobalContext);

  return (
    <div className="lg:w-2/4 mx-auto my-10">
      {todo.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {todo.map((t, i) => (
            <div className="shadow m-4 p-4 rounded-lg">
              <div className="text-right">
                <button
                  className="material-icons md-24"
                  onClick={() => setToCompleted(t.id)}
                >
                  {t.isCompleted
                    ? "check_circle_outline"
                    : "radio_button_unchecked"}
                </button>
              </div>
              <Link
                to={`/todo/${t.id}`}
                key={i}
                style={{ backgroundColor: `${t.backgroundColor}` }}
              >
                <h1>{t.name}</h1>
                <p className="text-xs">{moment(t.createdAt).fromNow()}</p>
              </Link>
              <div className="text-right">
                <button
                  className="bg-red-200 text-white rounded-lg px-2 py-1 mt-4"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteTodo(t.id);
                        Swal.fire(
                          "Deleted!",
                          "Your file has been deleted.",
                          "success"
                        );
                      }
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>no todo</h1>
        </div>
      )}
    </div>
  );
};

export default TodoList;
