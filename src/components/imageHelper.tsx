import { ImageType } from "@/utils/types";
import Image from "next/image";

const ImageHelper = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`w-full object-cover aspect-square`}
      width={200}
    />
  );
};

export default ImageHelper;
