import React from "react";
import Bar from "./Bar";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div
      className={`w-10 cursor-pointer md:hidden ${styles.menu} absolute right-5 top-6`}
    >
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
};

export default Menu;
