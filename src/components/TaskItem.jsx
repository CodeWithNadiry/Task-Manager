import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import Button from "./ui/Button";
import { formattedTime } from "../util/fomattedTime";
import ConfirmDialog from "./ui/ConfirmDialog";
import { useModalContext } from "../context/ModalContext";
import Modal from "./ui/Modal";
import TaskForm from "./TaskForm";

const TaskItem = ({ task }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { startTask, stopTask, deleteTask, updateTime } =
    useTaskContext();

    const {openModal} = useModalContext();
  useEffect(() => {
    let interval;

    if (task.isRunning) {
      interval = setInterval(() => {
        updateTime(task.id);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [task.isRunning, task.id, updateTime]);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
      
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {task.title}
          </h3>

          <p
            className={`mt-1 text-sm font-medium ${
              task.isRunning
                ? "text-emerald-400"
                : "text-indigo-400"
            }`}
          >
            {formattedTime(task.time)}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            task.isRunning
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-gray-500/15 text-gray-400"
          }`}
        >
          {task.isRunning ? "Running" : "Paused"}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button variant={!task.isRunning ? 'success': 'warning'} onClick={!task.isRunning ? () => startTask(task.id): () => stopTask(task.id)}>
          {!task.isRunning ? '▶ Start': '⏸ Stop'}
        </Button>

        <Button
          variant="danger"
          onClick={() => setShowConfirm(true)}
        >
          🗑 Delete
        </Button>
        <Button onClick={() => openModal('edit-task', task)}>
          Edit
        </Button>
      </div>

        <Modal>
          <TaskForm />
        </Modal>
      {showConfirm && (
        <ConfirmDialog deleteTask={deleteTask} task={task} setShowConfirm={setShowConfirm} />
      )}
    </div>
  );
};

export default TaskItem;