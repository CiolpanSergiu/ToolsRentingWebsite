import React from "react";

interface Props {
  titleText: string;
}

const SectionTitle = ({ titleText }: Props) => {
  return (
    <h2 className="text-5xl text-center underline decoration-primary mt-8 mb-16">
      {titleText}
    </h2>
  );
};

export default SectionTitle;
