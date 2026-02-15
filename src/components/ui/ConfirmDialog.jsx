const ConfirmDialog = ({deleteTask, task, setShowConfirm}) => {
  return (
    <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 animate-fadeIn">
      <p className="text-sm text-red-300 mb-3">
        Are you sure you want to delete this task?
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => deleteTask(task.id)}
          className="flex-1 rounded-lg bg-red-600 py-1.5 text-sm font-semibold hover:bg-red-700 transition"
        >
          Yes, Delete
        </button>

        <button
          onClick={() => setShowConfirm(false)}
          className="flex-1 rounded-lg bg-gray-600 py-1.5 text-sm font-semibold hover:bg-gray-700 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
