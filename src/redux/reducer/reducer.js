/* eslint-disable no-case-declarations */
import {
  ADD_TASK,
  CHANGE_STATUS,
  DELETE_TASK,
  FETCH_DATA_FROM_LOCAL,
} from "../actionsTypes";

const initial_state = {
  todos: [],
};

//Reducer reponsible to update the state 
function reducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_TASK:
      let stateAfterAdd = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      setToLocal(stateAfterAdd);
      return stateAfterAdd;
    case DELETE_TASK:
      let stateAfterDelete = {
        ...state,
        todos: deleteOneTask(state.todos, action.payload),
      };
      setToLocal(stateAfterDelete);
      return stateAfterDelete;
    case CHANGE_STATUS:
      let stateAfterStatusChanged = {
        ...state,
        todos: changeStatus(state.todos, action.payload),
      };
      setToLocal(stateAfterStatusChanged);
      return stateAfterStatusChanged;
    case FETCH_DATA_FROM_LOCAL:
      return JSON.parse(localStorage.getItem("whole_state")) || { todos: [] };
    default:
      return state;
  }
}

const deleteOneTask = (data, id) => {
  return data.filter((task) => task.id != id);
};

const changeStatus = (data, id) => {
  return data.map((task) => {
    if (task.id == id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return { ...task };
  });
};

const setToLocal = (data) => {
  localStorage.setItem("whole_state", JSON.stringify(data));
};

export default reducer;
