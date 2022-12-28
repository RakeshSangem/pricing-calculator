const Header = () => {
  return (
    <div className="relative text-center  sm:pb-10 py-12">
      <div className="absolute w-full h-full bg-circles bg-center -top-2 bg-no-repeat opacity-80 dark:opacity-20" />
      <h2 className="font-extrabold text-2xl text-dark-desaturated-blue py-4 dark:text-white/90">
        Simple, traffic-based pricing
      </h2>
      <p className="p-2 text-base dark:text-white/">
        Sign-up for our 30-day trail. No credit card required
      </p>
    </div>
  );
};

export default Header;
