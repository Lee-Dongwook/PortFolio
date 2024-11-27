"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface HeaderMenuItem {
  key: string;
  label: string;
}

const HeaderMenuItems: HeaderMenuItem[] = [
  { key: "intro", label: "Home" },
  { key: "about", label: "About" },
  { key: "work", label: "Work Experience" },
  { key: "project", label: "Project" },
  { key: "contact", label: "Contact" },
];

const Header = () => {
  const router = useRouter();

  const handleClickMenu = (key: string) => {
    switch (key) {
      case "intro":
        router.replace("/");
        break;
      case "about":
        router.replace("/about");
        break;
      case "work":
        router.replace("/work");
      case "project":
        router.replace("/project");
        break;
      case "contact":
        router.replace("/contact");
        break;
      default:
        router.replace("/");
    }
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md w-full h-24 p-10">
      <div className="container mx-auto flex justify-around items-center px-4">
        <nav className="space-x-8">
          {HeaderMenuItems.map((item) => (
            <div key={item.key} className="relative inline-block">
              <button
                onClick={() => handleClickMenu(item.key)}
                className="hover:cursor-pointer"
              >
                {item.label}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
