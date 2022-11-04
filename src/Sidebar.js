import React from "react";
import { social, links } from "./Data";
import { FaTimes } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <h4 className="logo">Logo</h4>
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};
