import ImageEffect from "react-image-effects";

const ImageDisplay = ({ image, currentEffect }) => {
  return (
    <ImageEffect
      url={image}
      effect={currentEffect}
      width="500px"
      height="500px"
    />
  );
};

export default ImageDisplay;
