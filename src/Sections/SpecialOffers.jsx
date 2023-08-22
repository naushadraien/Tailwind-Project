import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container dark:text-slate-200">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="offer Image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-slate-300">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-slate-300">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className=" flex flex-wrap gap-4 mt-11">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
