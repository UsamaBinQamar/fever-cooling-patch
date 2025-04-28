"use client";

import Link from "next/link";
import { FC } from "react";
import ThemeToggle from "./ThemeToggle";

const Header: FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white dark:bg-deep-blue shadow-md sticky top-0 z-50 border-b border-light-blue dark:border-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-deep-blue dark:text-light-blue font-serif">
              MediCare Solutions
            </h1>
          </div>
          <nav className="flex items-center space-x-8">
            <Link
              href="#about"
              onClick={scrollToAbout}
              className="text-medium-gray dark:text-light-blue hover:text-bright-blue dark:hover:text-medium-blue transition-colors font-medium"
            >
              About Us
            </Link>
            <span className="text-bright-blue dark:text-medium-blue font-semibold">
              +1 (555) 123-4567
            </span>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
