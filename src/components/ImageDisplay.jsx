import ImageEffect from "react-image-effects";

const ImageDisplay = ({ image, currentEffect }) => {
  return (
    <div className="shadow-2xl">
      <ImageEffect
        url={image}
        effect={currentEffect}
        width="500px"
        height="500px"
      />
    </div>
  );
};

export default ImageDisplay;
