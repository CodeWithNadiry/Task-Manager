import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    type: null,
    data: null,
  });

  const openModal = (type, data = null) => {
    setModal({ type, data });
  };

  const closeModal = () => {
    setModal({ type: null, data: null });
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        isOpen: modal.type !== null,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => useContext(ModalContext);
export default ModalProvider