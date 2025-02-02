import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, TextInput, Button, Dropdown, Avatar } from "flowbite-react";

import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "../redux/theme/themeSlice";
const Header = () => {
  const path = useLocation().pathname;

  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar className="border-b-2 shadow-xl">
        <Link
          to="/"
          className="text-sm sm:text-xl font-semibold dark:text-white whitespace-nowrap self-center "
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Swornim's
          </span>
          Blog
        </Link>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />

        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline "
            color="gray"
            pill
            onClick={() => dispatch(toogleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard">
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
