import React from "react";
import logo from "../assets/main_logo_eng.png";

function Top1(props) {
  return (
    <div className="flex items-center h-28 pl-5 pr-5 bg-white">
      <div className="p-5">
        <img src={logo} alt="Logo" className="h-auto max-w-41 max-h-28" />
      </div>
      <div className="p-5 ml-auto text-right">
        소프트웨어학과&nbsp; | &nbsp;재학중&nbsp; | &nbsp;조승용&nbsp; |
      </div>
    </div>
  );
}

export default Top1;