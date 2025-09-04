const ToolsButton = ({ name, setCurrentEffect }) => {
  return (
    <button
      className={`border-1 border-b-0 p-2 hover:bg-neutral-50  transition-all cursor-pointer`}
      onClick={() => setCurrentEffect(name)}
    >
      {name}
    </button>
  );
};

export default ToolsButton;
