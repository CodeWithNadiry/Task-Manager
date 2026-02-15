export function taskReducer(state, action) {
  switch (action.type) {

    case "ADD_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };

    case "EDIT_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "START_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isRunning: true }
            : task
        ),
      };

    case "STOP_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isRunning: false }
            : task
        ),
      };

    case "UPDATE_TIME":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, time: task.time + 1 }
            : task
        ),
      };

    default:
      return state;
  }
}