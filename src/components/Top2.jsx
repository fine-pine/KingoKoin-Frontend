import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./Top2.module.css";

function Top2() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>180포인트 | 상위 N% &nbsp; &nbsp;</p>
    </div>
  );
}

export default Top2;
