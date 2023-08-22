import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="padding-x py-14 absolute z-10 w-full dark:bg-black max-lg:dark:py-14">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img
              src={headerLogo}
              alt="Logo"
              width={130}
              height={29}
              className="max-sm:w-28 max-sm:-ml-3"
            />
          </a>
          <ul className="flex-1 flex justify-center items-center max-lg:hidden ">
            {navLinks.map((items) => (
              <li key={items.label} className="mx-4">
                <a
                  href={items.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red dark:text-slate-200 dark:hover:text-coral-red"
                >
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer dark:bg-slate-200 dark:px-1 dark:py-1 dark:rounded-lg max-sm:dark:mx-7 max-sm:mx-5"
            onClick={handleToggle}
          >
            {isOpen ? (
              <div className="font-montserrat text-lg text-black font-bold">
                X
              </div>
            ) : (
              <img
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                className=" "
              />
            )}
          </div>
        </nav>
      </header>
      {isOpen && ( //this is for mobile view
        <ul className="flex flex-1 flex-col justify-center items-center lg:hidden flex-wrap absolute w-full mx-16 my-6 max-sm:mx-7">
          {navLinks.map((items) => (
            <li key={items.label} className="mx-4 z-10">
              <a
                href={items.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red dark:text-slate-200 dark:hover:text-coral-red"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
