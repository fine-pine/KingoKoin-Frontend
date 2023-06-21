import React from "react";
import logo from "../assets/main_logo_eng.png";
import { FaSignOutAlt } from "react-icons/fa";
import styles from "./Top1.module.css";

function Top1(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.text}>
        소프트웨어학과&nbsp; | &nbsp;재학중&nbsp; | &nbsp;조승용&nbsp; |
      </div>
    </div>
  );
}

export default Top1;
