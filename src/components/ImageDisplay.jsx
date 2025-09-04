import ImageEffect from "react-image-effects";

const ImageDisplay = ({ image, effect }) => {
  return (
    <ImageEffect url={image} effect={effect} width="500px" height="500px" />
  );
};

export default ImageDisplay;
