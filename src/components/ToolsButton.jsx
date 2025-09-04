const ToolsButton = ({ name, setCurrentEffect, currentEffect }) => {
  const handleClick = () => {
    if (currentEffect === name) {
      setCurrentEffect("");
    } else {
      setCurrentEffect(name);
    }
  };
  return (
    <button
      className={`border-1 border-b-0 p-2 hover:bg-neutral-50  transition-all cursor-pointer ${
        currentEffect === name && "font-bold"
      }`}
      onClick={() => handleClick()}
    >
      {name}
    </button>
  );
};

export default ToolsButton;
