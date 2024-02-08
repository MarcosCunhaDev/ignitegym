import { Image, IImageProps } from "native-base";
import React from "react";

interface ImgProps extends IImageProps {
  size: number;
}

function UserPhoto({ size, ...rest }: ImgProps) {
  return (
    <Image
      alt="User Photo"
      w={size}
      height={size}
      rounded={"full"}
      borderWidth={1}
      borderColor={"gray.100"}
    />
  );
}

export default UserPhoto;
