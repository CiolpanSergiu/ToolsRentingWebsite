import React from "react";

interface Props {
  children: React.ReactNode;
}

const LinksContainer = ({ children }: Props) => {
  return <ul className="flex flex-col">{children}</ul>;
};

export default LinksContainer;
