/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { actionToAddTask } from "../redux/actionCreator/actionsCreators";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const TaskInputs = () => {
    const [userTodo, setUserTodo] = useState({
        todo: "",
        isCompleted: false,
        id: Math.random(),
        date: new Date().toLocaleDateString(),
    });

    const dispatch = useDispatch();

    // Updating the local state for user's todo
    const handleChangeTodo = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        userTodo[name] = value;
        setUserTodo({ ...userTodo });
    };

    // Adding the user's task to allTasks and dispatching actionCreator for add task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!userTodo.todo) {
            toast.warning("Please add task first.");
            return;
        }
        dispatch(actionToAddTask(userTodo));
        setUserTodo({
            todo: "",
            isCompleted: false,
            id: Math.random(),
            date: new Date().toLocaleDateString(),
        });
        toast.success("Task added successfully");
    };

    return (
        <div
            className="Task-input-box d-flex flex-column align-items-center justify-content-center p-4"
            style={{
                maxWidth: "600px",
                margin: "0 auto",
                backgroundColor: "#2f2f2f", // Dark mode background
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
        >
            <form className="row g-2 w-100">
                <div className="col-12 col-sm-8">
                    <input
                        type="text"
                        value={userTodo.todo}
                        onChange={handleChangeTodo}
                        name="todo"
                        className="form-control"
                        placeholder="Add todo here"
                        style={{
                            padding: "10px",
                            fontSize: "1rem",
                            borderRadius: "5px",
                            border: "2px solid #00b37e", // Green border
                            backgroundColor: "#1e1e1e", // Dark background
                            color: "#fff", // White text
                        }}
                    />
                </div>
                <div className="col-12 col-sm-4">
                    <button
                        type="submit"
                        className="btn w-100"
                        onClick={handleAddTask}
                        style={{
                            backgroundColor: "#00b37e", // Green button
                            color: "white",
                            fontWeight: "bold",
                            padding: "12px 20px",
                            fontSize: "1rem",
                            borderRadius: "5px",
                            border: "none",
                            transition: "background-color 0.3s, transform 0.2s",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#008e68") // Darken on hover
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#00b37e") // Revert on mouse leave
                        }
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskInputs;
