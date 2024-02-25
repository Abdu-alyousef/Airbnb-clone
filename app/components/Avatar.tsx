"use client";
import avatar from "@/public/placeholder.jpg";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={avatar}
    />
  );
};
export default Avatar;
