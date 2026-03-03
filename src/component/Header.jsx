import React from "react";
import { NavBar } from "./NavBar";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="siteTopBar p-4 text-center bg-blue-500 text-white font-bold">
        Don’t Miss Out an Exiting Deals
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 d-flex p-4 ">
          <div className=" col-span-3 siteBranding">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-span-9 navBar w-full">
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};
