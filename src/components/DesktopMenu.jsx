import { useState, useContext } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeContext } from '@/components/ThemeProvider';
import Link from 'next/link';
import { useDelayedNavigation } from '@/hooks/useDelayedNavigation';


export default function DesktopMenu({ menu }) {
  const [isHover, setHover] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { navigate } = useDelayedNavigation(500); // match animation duration

  const hasSubMenu = menu?.subMenu?.length;

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.li className="group/link list-none text-2xl">
        <span className="text-2xl custom-flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
          {menu.name}
          {hasSubMenu && (
            <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
          )}
        </span>
      </motion.li>

      {hasSubMenu && (
        <motion.div
        className={`absolute left-0 mt-2 z-50 p-4 rounded-xl shadow-xl w-max min-w-[20rem] ${
          isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
        }`}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div
              key={i}
              onClick={() => navigate(submenu.link || "#")}
              className="relative cursor-pointer"
            >
                <div className="relative cursor-pointer">
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4">{menu.subMenuHeading[i]}</p>
                  )}
                  <div className="custom-flex-center gap-x-4 group/menubox">
                    <div className="w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="text-2xl font-semibold">{submenu.name}</h6>
                      <p className="text-sm">{submenu.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
