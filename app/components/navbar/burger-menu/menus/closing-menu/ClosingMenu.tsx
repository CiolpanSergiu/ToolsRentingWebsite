import React from "react";
import styles from "./ClosingMenu.module.scss";
import Bar from "../../bars/Bar";
import MenuText from "../../text/MenuText";
import MenuContainer from "../../menu-container/MenuContainer";

interface Props {
  handleClick: () => void;
}

const ClosingMenu = ({ handleClick }: Props) => {
  const customStyle: string = styles.closingMenu;

  return (
    <MenuContainer
      top="top-6"
      right="right-8"
      handleClick={handleClick}
      customStyle={customStyle}
    >
      <MenuText text="nav" hovColor="group-hover:text-black" />
      <MenuText text="close" hovColor="group-hover:text-primary" />
      <Bar bgColor="bg-black" />
      <Bar bgColor="bg-black" />
      <Bar bgColor="bg-black" />
    </MenuContainer>
  );
};

export default ClosingMenu;
