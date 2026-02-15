import Button from "./components/ui/Button";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Modal from "./components/ui/Modal";
import { useModalContext } from "./context/ModalContext";
import './App.css'
const App = () => {
  const { openModal, closeModal, isOpen } = useModalContext();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-10">
      <div className=" md:max-w-3xl mx-auto space-y-10">

        <header className="flex flex-col items-center gap-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="productivity">Productivity </span>Task Manager
          </h1>

          <Button onClick={() => openModal("add-task")}>
            + Add Task
          </Button>
        </header>

        <TaskList />

        <Modal open={isOpen} closeModal={closeModal}>
          <TaskForm />
        </Modal>

      </div>
    </div>
  );
};

export default App;