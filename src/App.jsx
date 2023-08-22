import { useEffect, useState } from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Sections";
import Navbar from "./components/Navbar";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoDesktopOutline,
} from "react-icons/io5";

const App = () => {
  const [themeSwitch, setThemeSwitch] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system" //check for local storage theme
  );
  const element = document.documentElement;
  const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)"); //check for system theme
  // console.log("darkThemeQuery:", darkThemeQuery);
  const icons = [
    {
      icon: <IoSunnyOutline />,
      text: "light",
    },
    {
      icon: <IoMoonOutline />,
      text: "dark",
    },
    {
      icon: <IoDesktopOutline />,
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkThemeQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch(); //on load check for theme and set it accordingly

  useEffect(() => {
    // console.log("Theme switch effect triggered with:", themeSwitch);
    switch (themeSwitch) {
      case "dark":
        element.classList.add("dark");
        //with local storage to persist theme
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        //with local storage to persist theme
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch(); //on load check for theme and set it accordingly
        break;
    }
  }, [themeSwitch]);

  darkThemeQuery.addEventListener("change", onWindowMatch); //on OS theme change check for theme and set it accordingly

  return (
    <>
      <main className="relative dark:text-slate-gray dark:bg-black  ">
        <section className="absolute top-5 right-0 dark:right-1 dark:bg-slate-200 bg-slate-300 rounded-full flex flex-1 z-40 flex-col">
          {icons.map((items) => (
            <button
              className={`w-8 h-8 leading-9 text-xl flex justify-center items-center cursor-pointer m-1 ${
                themeSwitch === items.text && "text-blue-400"
              }`}
              key={items.text}
              onClick={() => {
                // console.log("Switching theme to:", items.text);
                setThemeSwitch(items.text);
              }}
            >
              {items.icon}
            </button>
          ))}
        </section>
        <Navbar />
        <section className="xl:padding-l wide:padding-r padding-b max-lg:pt-20">
          <Hero />
        </section>
        <section className="padding dark:border dark:rounded-lg dark:border-slate-500">
          {" "}
          <PopularProducts />
        </section>
        <section className="padding dark:bg-black dark:border dark:rounded-lg dark:border-slate-500">
          <SuperQuality />
        </section>
        <section className="padding-x py-10 dark:bg-black dark:border dark:rounded-lg dark:border-slate-500 ">
          <Services />
        </section>
        <section className="padding dark:bg-black dark:border dark:rounded-lg dark:border-slate-500">
          {" "}
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue padding dark:bg-black dark:border dark:rounded-lg dark:border-slate-500">
          {" "}
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full dark:border dark:rounded-lg dark:border-slate-500">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
