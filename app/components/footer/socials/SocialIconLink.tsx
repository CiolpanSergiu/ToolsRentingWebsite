import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  hoverColor: string;
}

const SocialIconLink = ({ children, href, hoverColor }: Props) => {
  return (
    <Link
      href={href}
      className={`text-3xl my-2 rounded-full ${hoverColor} transition-all duration-150 ease-linear`}
    >
      {children}
    </Link>
  );
};

export default SocialIconLink;
