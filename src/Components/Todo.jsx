import TaskInputs from "./TaskInputs"
import TaskLists from "./TaskLists"

const Todo = () => {
    return (
        <div className="todo-app">
            <TaskInputs />
            <TaskLists />
        </div>
    )
}

export default Todo