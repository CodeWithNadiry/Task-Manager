const Input = ({...props }) => {
  return (
    <input
      className="w-full rounded-lg bg-slate-700 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-white"
      {...props}
    />
  );
};

export default Input;
