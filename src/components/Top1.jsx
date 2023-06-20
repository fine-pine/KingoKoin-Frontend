import React from "react";
import logo from "../assets/main_logo_eng.png";
import { FaSignOutAlt } from "react-icons/fa";

function Top1(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "110px",
        paddingLeft: "60px",
        paddingRight: "20px",
        backgroundColor: "white",
      }}
    >
      <div style={{ marginLeft: "10px" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "auto",
            maxWidth: "165px ",
            maxHeight: "110px ",
          }}
        />
      </div>
      <div style={{ marginLeft: "auto", marginRight: "10px" }}>
        소프트웨어학과&nbsp; | &nbsp;재학중&nbsp; | &nbsp;조승용&nbsp; |
      </div>
    </div>
  );
}

export default Top1;
