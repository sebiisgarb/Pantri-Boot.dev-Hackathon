// src/components/Navbar/Navbar.tsx
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";

const links = ["Pantry", "Recipes"];

const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { when: "afterChildren", staggerChildren: 0.1 },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="/">
          <Logo />
        </a>

        {/* Desktop links */}
        <div
          className="hidden sm:flex gap-10 text-lg tracking-wide"
          style={{ fontFamily: '"Bitcount Prop Double", sans-serif' }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-purple-500/70 hover:bg-purple-400/80 transition hover:text-purple-900 text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger button (mobile) */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="sm:hidden text-black p-2"
        >
          {open ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile drop-menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobileMenu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="sm:hidden overflow-hidden px-6 pb-4"
          >
            <motion.ul
              className="flex flex-col gap-4 text-lg tracking-wide"
              style={{ fontFamily: '"Bitcount Prop Double", sans-serif' }}
            >
              {links.map((item) => (
                <motion.li key={item} variants={linkVariants}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block w-full px-4 py-2 rounded-full bg-purple-500/70 hover:bg-purple-400/80 transition hover:text-purple-900 text-center text-white"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
