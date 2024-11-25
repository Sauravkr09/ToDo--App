import {
  ADD_TASK,
  DELETE_TASK,
  CHANGE_STATUS,
  FETCH_DATA_FROM_LOCAL,
} from "../actionsTypes";

// action creator for add task.
export const actionToAddTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

// action creator for delete task
export const actionToDeleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

// action creator for change Status
export const actionToChangeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id,
  };
};
// action creator for fetching data from local
export const actionToFetchDataFromLocal = () => {
  return {
    type: FETCH_DATA_FROM_LOCAL,
  };
};
