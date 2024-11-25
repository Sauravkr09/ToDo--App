import { MdDelete } from "react-icons/md";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { actionToChangeStatus, actionToDeleteTask } from "../redux/actionCreator/actionsCreators";
import { useState } from "react";
import DeleteTaskModal from "./DeleteTaskModal.jsx";
import "./TaskList.css";

const TaskLists = () => {
    const [openDeleteMod, setOpenDeleteMod] = useState(false);
    const [deleteTaskId, setDeleteTaskId] = useState(null);

    const dispatch = useDispatch();
    const { todos } = useSelector((store) => store.reducer);

    // Handling delete modal and dispatching the action creator for delete task
    const SureToDelete = () => {
        dispatch(actionToDeleteTask(deleteTaskId));
        setOpenDeleteMod(false);
        setDeleteTaskId(null);
    };

    // Dispatching the action creator for updating the status of task/toggling
    const handleStatus = (id) => {
        dispatch(actionToChangeStatus(id));
    };

    return (
        <div className="task-lists container mt-4">
            <h3 className="text-center mb-4">Your Task List</h3>
            <ul className="taskList-box list-unstyled">
                {todos.length === 0 && (
                    <div className="text-center text-muted">No tasks yet! Add some to get started.</div>
                )}
                {todos.map((task) => (
                    <li
                        key={task.id}
                        className={`task-item p-3 mb-3 d-flex justify-content-between align-items-center rounded shadow-sm ${
                            task.isCompleted ? "completed-task" : "pending-task"
                        }`}
                    >
                        <div className="todo-text">
                            <h5 className="mb-1">{task.todo}</h5>
                            <small className="text-muted">{task.date}</small>
                        </div>
                        <div className="todo-actions d-flex align-items-center gap-3">
                            <MdDelete
                                className="delete-icon"
                                title="Delete Task"
                                onClick={() => {
                                    setDeleteTaskId(task.id);
                                    setOpenDeleteMod(true);
                                }}
                            />
                            {task.isCompleted ? (
                                <FaToggleOn
                                    className="toggle-icon complete"
                                    title="Mark as Incomplete"
                                    onClick={() => handleStatus(task.id)}
                                />
                            ) : (
                                <FaToggleOff
                                    className="toggle-icon incomplete"
                                    title="Mark as Complete"
                                    onClick={() => handleStatus(task.id)}
                                />
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            {openDeleteMod && (
                <DeleteTaskModal
                    SureToDelete={SureToDelete}
                    openDeleteMod={openDeleteMod}
                    setDeleteTaskId={setDeleteTaskId}
                    setOpenDeleteMod={setOpenDeleteMod}
                />
            )}
        </div>
    );
};

export default TaskLists;
