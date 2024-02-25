"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src={logo}
    />
  );
};
export default Logo;
