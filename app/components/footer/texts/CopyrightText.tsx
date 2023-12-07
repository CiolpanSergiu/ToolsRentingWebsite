import React from "react";

const CopyrightText = () => {
  const today = new Date();

  return <div>Copyright&copy; {today.getFullYear()}</div>;
};

export default CopyrightText;
