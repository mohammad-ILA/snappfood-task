import { useState } from "react";
import { ImageProps } from "./index.types";
import NextImage from "next/image";
const Image: React.FC<ImageProps> = (props) => {
  const [src, setSrc] = useState(props.src);
  return (
    <NextImage
      {...props}
      src={src}
      onError={() => setSrc("/images/default.png")}
    />
  );
};

export default Image;
