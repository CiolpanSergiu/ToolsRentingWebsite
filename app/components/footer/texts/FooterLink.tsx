import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  text: string;
  // The children here means an icon
  children?: React.ReactNode;
}

const FooterLink = ({ href, text, children }: Props) => {
  return (
    <li className="py-1 whiteToPrimary text-sm text-ellipsis overflow-hidden">
      <Link href={href} className="flex items-center">
        {/* The children here means an icon */}
        {children}
        {text}
      </Link>
    </li>
  );
};

export default FooterLink;
