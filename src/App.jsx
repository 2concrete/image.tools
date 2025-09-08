import { useState } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ToolsList from "./components/ToolsList";

const App = () => {
  const [currentEffect, setCurrentEffect] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="flex h-screen font-[Source_code_pro]">
      <ToolsList
        setCurrentEffect={setCurrentEffect}
        currentEffect={currentEffect}
        image={image}
        setImage={setImage}
      />
      <div className="flex justify-center items-center w-full">
        {image ? (
          <ImageDisplay image={image} currentEffect={currentEffect} />
        ) : (
          <p>please upload media</p>
        )}
      </div>
    </div>
  );
};

export default App;
