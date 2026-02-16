/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { taskReducer } from "./taskReducer";

export const TaskContext = createContext({
  tasks: [],
  addTask: (task) => {},
  editTask: (id, title) => {},
  deleteTask: (id) => {},
  startTask: (id) => {},
  stopTask: (id) => {},
  updateTime: (id) => {},
});

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

function TaskContextProvider({ children }) {
  const [state, dispatchTaskAction] = useReducer(taskReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  // ✅ Clean action wrappers

  function addTask(task) {
    dispatchTaskAction({ type: "ADD_TASK", payload: task });
  }

  function editTask(id, title) {
    dispatchTaskAction({
      type: "EDIT_TASK",
      payload: { id, title },
    });
  }

  function deleteTask(id) {
    dispatchTaskAction({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function startTask(id) {
    const runningCount = state.tasks.filter((task) => task.isRunning).length;

    if (runningCount >= 2) {
      alert("Only 2 tasks can run at the same time");
      return;
    }

    dispatchTaskAction({
      type: "START_TASK",
      payload: id,
    });
  }

  function stopTask(id) {
    dispatchTaskAction({
      type: "STOP_TASK",
      payload: id,
    });
  }

  function updateTime(id) {
    dispatchTaskAction({
      type: "UPDATE_TIME",
      payload: id,
    });
  }

  const ctxValue = {
    tasks: state.tasks,
    addTask,
    editTask,
    deleteTask,
    startTask,
    stopTask,
    updateTime,
  };

  return (
    <TaskContext.Provider value={ctxValue}>{children}</TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);
export default TaskContextProvider;
