import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "🏠 Home", path: "/", ocid: "nav.home.link" },
  { label: "🍎 Healthy Food", path: "/food", ocid: "nav.food.link" },
  { label: "🏃 Exercise", path: "/exercise", ocid: "nav.exercise.link" },
  { label: "💆 Mental Well-Being", path: "/mental", ocid: "nav.mental.link" },
  { label: "📅 Daily Routine", path: "/routine", ocid: "nav.routine.link" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header
      data-ocid="nav.panel"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.logo.link"
            className="flex items-center gap-2 no-underline"
          >
            <span className="text-2xl">🌟</span>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Healthy Living
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-ocid={link.ocid}
                  className={[
                    "px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 no-underline",
                    isActive
                      ? "bg-green-100 text-green-700 shadow-sm"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-600",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 pt-2 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      data-ocid={link.ocid}
                      onClick={() => setIsOpen(false)}
                      className={[
                        "px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 no-underline",
                        isActive
                          ? "bg-green-100 text-green-700"
                          : "text-gray-600 hover:bg-green-50 hover:text-green-600",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
