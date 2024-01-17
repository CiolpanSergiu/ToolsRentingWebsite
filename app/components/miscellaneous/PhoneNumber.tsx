import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const PhoneNumber = () => {
  return (
    <Link href="#" className="hidden md:flex items-center text-white">
      <BsFillTelephoneFill className="mr-2 text-xl" />
      <span className="text-md">0123 456 789</span>
    </Link>
  );
};

export default PhoneNumber;
