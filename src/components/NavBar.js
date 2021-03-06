import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
const [searchDrawer, setSearchDrawer] = useState(false)

  return (
    <header className="bg-red-600 w-full top-0 sticky z-10">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold  tracking-wider"
          >
            Godswill
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center p-3 my-2 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center p-3 my-2 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center p-3 my-2 rounded text-red-200 hover:text-green-800"
          >
            About Me
          </NavLink>
        </nav>
        <div className="flex p-3 my-2 items-center gap-3 ">
          <i className="fas fa-search text-lg text-white cursor-pointer pr-2" onClick={() => setSearchDrawer(!searchDrawer)}></i>
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
           {/* <div id="google_translate_element"></div> */}
          <div id="google_translate_element"></div>
        </div>
      </div>

      <div className={searchDrawer ? "drawer active bg-blue-600 py-5 w-full" : "drawer bg-blue-600 py-5 w-full"}>
           <h3>Search here....</h3>
      </div>
    </header>
  );
};

export default NavBar;
