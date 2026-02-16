import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <TaskContext.Consumer>
      {({ tasks }) => {
        if (!tasks || tasks.length === 0) {
          return (
            <p className="text-gray-400 text-center mt-8">
              No tasks yet.
            </p>
          );
        }

        return (
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        );
      }}
    </TaskContext.Consumer>
  );
};

export default TaskList;