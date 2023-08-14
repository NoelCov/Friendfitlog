"use client";

import { useState } from "react";

const Navbar = () => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const handleOnClick = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  return (
    <nav className="flex justify-between p-6 w-full ">
      <p className="z-30">Friendfitlog</p>
      <div
        id="hamburger-menu"
        onClick={handleOnClick}
        className="flex flex-col gap-[5px] w-[30px] lg:hidden z-30"
      >
        <span className="h-[2px] bg-text-darkMode rounded-md"></span>
        <span className="h-[2px] bg-text-darkMode rounded-md"></span>
        <span className="h-[2px] bg-text-darkMode rounded-md"></span>
      </div>

      <div
        className={`${
          displaySideMenu ? "flex" : "hidden"
        } h-screen w-full top-0 right-0 flex fixed bg-background-dark-darkMode z-20 lg:right-0 lg:flex-row transition-display opacity-25 ease-[(0,0,.2,1)]`}
      ></div>

      <div
        className={`${
          displaySideMenu ? "right-0" : "-right-full"
        } bg-background-darkMode w-3/4 fixed h-screen top-0 transition-right duration-200 ease-linear flex flex-col items-center justify-center gap-20 z-20`}
      >
        <span>Home</span>
        <span>Food logger</span>
        <span>Weight logger</span>
      </div>
    </nav>
  );
};

export default Navbar;
