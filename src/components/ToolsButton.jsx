const ToolsButton = ({ name, setCurrentEffect, currentEffect }) => {
  console.log(
    `button: ${name}, current: ${currentEffect}, match? ${
      name === currentEffect
    }`
  );
  return (
    <button
      className={`border-1 border-b-0 p-2 hover:bg-neutral-50  transition-all cursor-pointer ${
        currentEffect === name && "font-bold"
      }`}
      onClick={() => setCurrentEffect(name)}
    >
      {name}
    </button>
  );
};

export default ToolsButton;
