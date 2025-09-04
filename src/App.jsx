import { useState, useEffect } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ToolsList from "./components/ToolsList";

const App = () => {
  const [effect, setEffect] = useState("");
  const [image, setImage] = useState(() => {
    const saved = localStorage.getItem("image");
    return saved ? JSON.parse(saved) : "";
  });

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(image));
  }, [image]);

  return (
    <div className="flex h-screen font-[Source_code_pro]">
      <ToolsList setEffect={setEffect} image={image} setImage={setImage} />
      <div className="flex justify-center items-center w-full">
        {image && <ImageDisplay image={image} effect={effect} />}
      </div>
    </div>
  );
};

export default App;
