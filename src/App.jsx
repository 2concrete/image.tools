import { useState, useEffect } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ToolsList from "./components/ToolsList";

const App = () => {
  const [currentEffect, setCurrentEffect] = useState("");
  const [image, setImage] = useState(() => {
    const saved = localStorage.getItem("image");
    return saved ? JSON.parse(saved) : "";
  });

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(image));
  }, [image]);

  return (
    <div className="flex h-screen font-[Source_code_pro]">
      <ToolsList
        setCurrentEffect={setCurrentEffect}
        curentEffect={currentEffect}
        image={image}
        setImage={setImage}
      />
      <div className="flex justify-center items-center w-full">
        {image && <ImageDisplay image={image} currentEffect={currentEffect} />}
      </div>
    </div>
  );
};

export default App;
