import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { FaGraduationCap, FaLaptopCode, FaFolderOpen, FaUser } from "react-icons/fa";

const navItems = [
  { name: "Home", target: "home", icon: <AiFillHome />, widths: { phone: 78, tablet: 90, desktop: 108 } },
  { name: "About", target: "about", icon: <FaUser />, widths: { phone: 78, tablet: 90, desktop: 108 } },
  { name: "Education", target: "education", icon: <FaGraduationCap />, widths: { phone: 105, tablet: 115, desktop: 140 } },
  { name: "Skills", target: "skills", icon: <FaLaptopCode />, widths: { phone: 78, tablet: 90, desktop: 108 } },
  { name: "Projects", target: "projects", icon: <FaFolderOpen />, widths: { phone: 95, tablet: 108, desktop: 125 } },
  { name: "Contact", target: "contact", icon: <AiFillMail />, widths: { phone: 90, tablet: 102, desktop: 120 } },
];

const closedWidths={phone:43,tablet:48,desktop:54 };
const scrollOffsets = {
  phone: { about: 80, skills: -60 },
  tablet: { about: 100, skills: -80 },
  desktop: { about: 120, skills: -100 },
};

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("Home");
  const [screenSize, setScreenSize] = useState("desktop");
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("phone");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    let waiting = false;
    const updateActiveSection = () => {
      const screenMiddle = window.innerHeight / 2;
      let closestItem = null;
      let closestDistance = Infinity;

      navItems.forEach((item) => {
        const section = document.getElementById(item.target);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        let distance = 0;

        if (rect.bottom < screenMiddle) {
          distance = screenMiddle - rect.bottom;
        } else if (rect.top > screenMiddle) {
          distance = rect.top - screenMiddle;
        }

        if (distance <= closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      if (closestItem) {
        setActiveItem(closestItem.name);
      }

      waiting = false;
    };

    const handleScroll = () => {
      if (!waiting) {
        window.requestAnimationFrame(updateActiveSection);
        waiting = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigation = (item) => {
    setActiveItem(item.name);

    const section = document.getElementById(item.target);
    if (!section) return;

    const offset = scrollOffsets[screenSize][item.target] ?? 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-0 z-[9999] flex w-full justify-center px-1 sm:bottom-[max(1rem,env(safe-area-inset-bottom))] sm:px-2 lg:bottom-[max(1.25rem,env(safe-area-inset-bottom))] lg:px-4">
      <div className="flex w-fit max-w-[calc(100vw-8px)] items-center justify-center gap-0.5 rounded-full border-2  border-cyan-400  bg-white  px-1.5 py-1.5 shadow-lg shadow-cyan-100/40 sm:max-w-[calc(100vw-16px)] sm:gap-2 sm:px-2 sm:py-2 lg:gap-4 lg:px-4 lg:py-2">
        {navItems.map((item) => {
          const isHovered = hoveredItem === item.name;
          const isActive = activeItem === item.name;
          const expanded = isHovered || isActive;

          return (
            <button
              key={item.name}
              type="button"
              className="outline-none"
              onClick={() => handleNavigation(item)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                initial={false}
                animate={{ width: expanded ? item.widths[screenSize] : closedWidths[screenSize] }}
                transition={{ type: "spring", stiffness: 180, damping: 25, mass: 0.8 }}
                className={
                  "flex h-9 items-center justify-center overflow-hidden whitespace-nowrap rounded-full px-1.5 cursor-pointer sm:h-10 sm:px-2 lg:h-12 lg:px-3 " +
                  (isActive ? "bg-cyan-400 text-white" : "bg-white text-black hover:bg-cyan-50")
                }
                style={{
                  boxShadow: isHovered
                    ? "0 0 18px rgba(34,211,238,0.45), 0 0 35px rgba(34,211,238,0.18)"
                    : isActive
                    ? "0 5px 16px rgba(34,211,238,0.28)"
                    : "none",
                  transition: "background-color 0.3s ease, box-shadow 0.4s ease",
                }}
              >
                <motion.span
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="flex shrink-0 items-center justify-center text-[16px] sm:text-[18px] lg:text-[21px]"
                >
                  {item.icon}
                </motion.span>               
                <motion.span
                  initial={false}
                  animate={{
                    opacity: expanded ? 1 : 0,
                    x: expanded ? 0 : -10,
                    width: expanded ? "auto" : 0,
                    marginLeft: expanded ? 6 : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.25 },
                    x: { type: "spring", stiffness: 220, damping: 24 },
                    marginLeft: { duration: 0.3 },
                  }}
                  className="overflow-hidden text-[10px] font-semibold leading-none text-black sm:text-xs lg:text-sm"
                >
                  {item.name}
                </motion.span>
              </motion.div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
