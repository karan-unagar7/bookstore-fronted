import { NavLink, Link } from "react-router-dom";
import { isLogging } from "../shared/utilis";
import { useState } from "react";
import Profile from "./Profile";

function Navbar() {
  const isAuthenticated = isLogging()
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleProfileIconClick = () => {
    setShowProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h1>Book Store</h1>
          </Link>
          <div className="flex items-center lg:order-2">
            {isAuthenticated ? (
              <>
                <div className="mr-4 hover:cursor-pointer " onClick={handleProfileIconClick}>
                  <span className="text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-7 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </div>
                <Link
                  to="/logout"
                  className="text-white bg-green-600 hover:bg-green-700 rounded p-2"
                >
                  Log Out
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white bg-green-600 hover:bg-green-700 rounded p-2"
              >
                Log in
              </Link>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <NavLink
                      to="/addbook"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Add Book
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/showbook"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Show Book
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Profile
        isOpen={showProfileModal}
        onClose={handleCloseProfileModal}
      />
    </header>
  );
}

export default Navbar;
