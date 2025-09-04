const ToolsButton = ({ name, setEffect, effect }) => {
  return (
    <button
      className={`border-1 border-b-0 p-2 hover:bg-neutral-50  transition-all cursor-pointer ${
        name === effect && "bg-neutral-50"
      }`}
      onClick={() => setEffect(name)}
    >
      {name}
    </button>
  );
};

export default ToolsButton;
