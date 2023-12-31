import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-32 lg:dark:pt-40">
        <p className="text-xl font-montserrat text-coral-red ">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold dark:text-slate-200">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 dark:bg-black max-lg:dark:text-4xl">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 text-[75px]">GoldStar</span> <span className="text-[70px]">Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-slate-200">
          Discover stylish GoldStar arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 dark:text-slate-200">
          {statistics.map((items) => (
            <div key={items.value}>
              <p className="text-4xl font-palanquin font-bold">{items.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-300">
                {items.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover ">
        <img
          src={bigShoeImage}
          alt="shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((items) => (
            <div key={items.bigShoe}>
              <ShoeCard
                imgUrl={items}
                changeBigShoeImg={(items) => setBigShoeImage(items)}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
