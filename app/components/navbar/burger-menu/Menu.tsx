import React from "react";
import Bar from "./Bar";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div
      className={`w-14 h-10 rounded cursor-pointer md:hidden ${styles.menu} absolute right-3 top-4`}
    >
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
};

export default Menu;
