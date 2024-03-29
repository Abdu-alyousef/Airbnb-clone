"use client";
import Image from "next/image";
import React from "react";
import placeholderImage from "@/public/placeholder.jpg"


interface AvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({src}) => {

  return (
    <Image
   
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || placeholderImage}
    />
  );
};
export default Avatar;
