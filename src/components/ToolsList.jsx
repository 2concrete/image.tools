import ImageUpload from "./ImageUpload";
import ToolsButton from "./ToolsButton";

const ToolsList = ({ setCurrentEffect, currentEffect, image, setImage }) => {
  const effectList = [
    "airbrush",
    "chalkboard",
    "collage",
    "colored-chalkboard",
    "colored-pencil",
    "emboss",
    "flannel",
    "hallucination",
    "infrared",
    "low-ink-h",
    "low-ink-v",
    "mirror-h",
    "mirror-v",
    "mosaic",
    "night-vision",
    "none",
    "pencil",
    "photo-border",
    "selective-color",
    "warhol",
    "watercolor",
  ];

  return (
    <div className="flex flex-col overflow-auto">
      <ImageUpload setImage={setImage} image={image} />
      {effectList.map((effect) => (
        <ToolsButton
          image={image}
          currentEffect={currentEffect}
          key={effect}
          setCurrentEffect={setCurrentEffect}
          name={effect}
        />
      ))}
    </div>
  );
};

export default ToolsList;
