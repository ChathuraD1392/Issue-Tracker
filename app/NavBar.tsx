"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <div>
      <nav className="flex space-x-8 mb-5 border-b p-5 items-center border-green-400">
        <Link
          href="/"
          className={`${
            currentPath === "/" ? "text-green-400" : "text-green-600"
          } text-lg`}
        >
          {<AiFillBug />}
        </Link>
        <div className="flex space-x-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                currentPath === link.href ? "text-green-400" : "text-green-600"
              } transition-colors text-lg font-bold hover:text-green-400`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
