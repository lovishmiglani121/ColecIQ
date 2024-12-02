import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell, faClipboardList, faInfoCircle, faUserCircle, faTachometerAlt } from "@fortawesome/free-solid-svg-icons"; 
import { useSelector } from "react-redux"; // Import useSelector

const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  
  // State for unread mail and notifications
  const [unreadMailCount, setUnreadMailCount] = useState(1); // Example: 1 unread mail
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(3); // Example: 3 unread notifications

  const user = useSelector((state) => state.app.user); // Get user from Redux store

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img src={logo} width={190} height={60} className="" alt="CalecIQ" />
        </a>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"></div>
        </nav>

        {/* Icons on the right (shown only if user is logged in) */}
        {user && (
          <div className="flex items-center space-x-6 text-white">
            <div className="relative">
              <a href="#mail" aria-label="Mail">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
              {unreadMailCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {unreadMailCount}
                </span>
              )}
            </div>
            
            <div className="relative">
              <a href="#notifications" aria-label="Notifications">
                <FontAwesomeIcon icon={faBell} size="lg" />
              </a>
              {unreadNotificationCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {unreadNotificationCount}
                </span>
              )}
            </div>

            {/* Dashboard Icon */}
            <a href="/mainpage/dashboard" aria-label="Dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
            </a>

            {/* User icon and name */}
            <div className="flex items-center space-x-2">
              {/* Larger and more distinct user icon */}
              <div className="relative w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-full">
                <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-white" />
              </div>
              <span className="text-lg font-medium">{user.fullName}</span> {/* Displaying the user's name from Redux */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
