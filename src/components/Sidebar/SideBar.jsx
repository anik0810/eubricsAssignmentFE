import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowRight, FaBars, FaBook, FaCode, FaHeart, FaHome, FaLock, FaMoneyBill, FaPowerOff, FaUser } from "react-icons/fa";
import { MdMessage, MdSports } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Navbar from "../Navbar/Navbar";
const routes = [
  {
    path: "/health",
    name: "Health",
    icon: <FaHeart />,
  },
  {
    path: "/study",
    name: "Study",
    icon: <FaBook />,
  },
  {
    path: "/coding",
    name: "Programming",
    icon: <FaCode />,
  },
  {
    path: "/sports",
    name: "Sports",
    icon: <MdSports />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <FaPowerOff />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const logOut = () => {
    console.log('logout');
    localStorage.clear();
    navigate(['/'])
  }

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              if (index != 4) {
                return (
                  <NavLink
                    to={'/home' + route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              }
              else{
                return (
                  <NavLink
                    key={index}
                    className="link"
                    onClick={()=>{logOut()}}
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              }
            })}
          </section>
        </motion.div>

        <main className="w-100">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SideBar;
