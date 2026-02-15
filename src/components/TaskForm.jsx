/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { useModalContext } from "../context/ModalContext";
import Button from "./ui/Button";

const TaskForm = () => {
  const { addTask, editTask } = useTaskContext();
  const { modal, closeModal } = useModalContext();
  const [originalTitle, setOriginalTitle] = useState("");
  const editingTask = modal.type === "edit-task" ? modal.data : null;

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setOriginalTitle(editingTask.title);
    } else {
      setTitle("");
      setOriginalTitle("");
    }
  }, [editingTask]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim().length < 5) return;

    if (editingTask) {
      editTask(editingTask.id, title);
    } else {
      addTask({
        id: Date.now(),
        title,
        time: 0,
        isRunning: false,
      });
    }

    closeModal();
  };

  const isButtonDisabled =
    title.length < 5 || (editingTask && title === originalTitle);

  return (
    <form onSubmit={submitHandler} className="space-y-5">
      <h2 className="text-xl font-semibold text-white">
        {editingTask ? "Edit Task" : "Add Task"}
      </h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg bg-slate-700 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white"
        placeholder="Task title..."
      />

      <div className="flex justify-end gap-3">
        <Button variant="warning" type="button" onClick={closeModal}>
          Cancel
        </Button>

        <Button type="submit" disabled={isButtonDisabled}>
          {editingTask ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
