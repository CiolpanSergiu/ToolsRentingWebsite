import React from "react";

interface Props {
  text: string;
}

const FooterColHeader = ({ text }: Props) => {
  return (
    <span className="text-2xl text-white mb-4 block underline decoration-primary">
      {text}
    </span>
  );
};

export default FooterColHeader;
