import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Avatar from "../Avatar";

const Nav = () => {
  return (
    <nav className="w-full text-white py-4 bg-[#fff3] flex items-center justify-between px-10">
      <span>Logo</span>
      <div className="flex items-center gap-2">

        <ul className="flex gap-4">
          {/* <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/about'}>About</Link>
            </li>
            <li>
            <Link to={'/contact'}>Contact</Link>
          </li> */}
        </ul>
          <Search /> 
          <Avatar name={"bfds djkfh"} />
      </div>
    </nav>
  );
};

export default Nav;
