import { FaTh, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/page1",
      name: "smallbutton",
      icon: <FaTh />,
    },
    {
      path: "/dashboard",
      name: "대시보드",
      icon: <FaTh />,
    },
    {
      path: "/page3",
      name: "smallbutton",
      icon: <FaTh />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: "250px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{
              textAlign: "right",
              marginLeft: "55px",
              marginBottom: "20px",
            }}
            className="logo"
          >
            <span style={{ whiteSpace: "nowrap" }}>킹고코인</span>
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
