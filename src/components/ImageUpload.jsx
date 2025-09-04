import { useRef } from "react";

const ImageUpload = ({ setImage, image }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
      <button
        onClick={handleClick}
        className="border-1 shadow-lg border-b-0 w-full p-3 cursor-pointer hover:bg-neutral-50 transition-all"
      >
        upload media
      </button>
    </div>
  );
};

export default ImageUpload;
