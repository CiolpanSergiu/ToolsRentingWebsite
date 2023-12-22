import React from "react";

interface Props {
  text: string;
}

const NavbarSectionTitle = ({ text }: Props) => {
  return (
    <h1 className="text-2xl font-medium capitalize pl-10 md:pl-6 mt-4 mb-2 underline decoration-primary">
      {text}
    </h1>
  );
};

export default NavbarSectionTitle;
