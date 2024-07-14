import React from "react";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="flex h-screen flex-1 flex-col justify-between border-e bg-gray-50">
        <div className="px-4 py-6">
      
          <ul className="mt-14 space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                    return isActive
                      ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 text-gray-700"
                      : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700";
                  }}
              >
                <SummarizeIcon className="mr-3" />
                Arsip
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/kategori"
                className={({ isActive }) => {
                    return isActive
                      ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 text-gray-700"
                      : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700";
                  }}
              >
                <MenuBookIcon className="mr-3" />
                Kategori
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-300 text-gray-700"
                    : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700";
                }}
              >
                <InfoIcon className="mr-3" />
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
