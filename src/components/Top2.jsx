import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Top2() {
  return (
    <div className="bg-[#2b6653] h-14 flex items-center justify-end pr-5">
      <p className="text-right text-white m-0">
        180포인트 | 상위 N% &nbsp; &nbsp;
      </p>
    </div>
  );
}

export default Top2;
