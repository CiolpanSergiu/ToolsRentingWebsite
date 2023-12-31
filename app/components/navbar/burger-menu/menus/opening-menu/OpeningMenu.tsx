import React from "react";
import Bar from "../../bars/Bar";
import styles from "./OpeningMenu.module.scss";
import MenuText from "../../text/MenuText";
import MenuContainer from "../../menu-container/MenuContainer";

interface Props {
  handleClick: () => void;
}

const OpeningMenu = ({ handleClick }: Props) => {
  const customStyle: string = styles.openingMenu;

  return (
    <MenuContainer
      top="top-7 md:top-0"
      right="right-8 md:right-0"
      handleClick={handleClick}
      customStyle={customStyle}
    >
      <MenuText text="menu" />
      <Bar bgColor="bg-white" />
      <Bar bgColor="bg-white" />
      <Bar bgColor="bg-white" />
    </MenuContainer>
  );
};

export default OpeningMenu;
