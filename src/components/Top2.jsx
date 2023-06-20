import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Top2() {
  return (
    <div
      style={{
        backgroundColor: "#2b6653",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "20px",
      }}
    >
      <p style={{ textAlign: "right", color: "white", margin: "0" }}>
        180포인트 | 상위 N% &nbsp; &nbsp;
      </p>
    </div>
  );
}

export default Top2;
