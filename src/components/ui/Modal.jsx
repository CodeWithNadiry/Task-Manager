import { createPortal } from "react-dom";

const Modal = ({ open, children }) => {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm  px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 border border-white/10 p-6 shadow-2xl animate-scaleIn">
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;