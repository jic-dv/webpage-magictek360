const LandingPage = () => {
  return (
    <div className="relative h-screen flex flex-col lg:flex-row">
      {/* Left Side with Background Image for Larger Screens */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center justify-center items-center p-6"
        style={{ backgroundImage: "url('/images/bg-globes.svg')" }}
      >
        <div className="text-center w-4/6 z-10 mr-0 lg:mr-12">
          <h1
            style={{ fontFamily: "Lovelo Black" }}
            className="text-4xl lg:text-7xl font-bold text-[#27208C] uppercase drop-shadow-xl"
          >
            Pronto La Magia Inmersiva Te Envolverá
          </h1>
        </div>
      </div>

      {/* Right Side (background image for mobile and large screens) */}
      <div
        className="relative flex-1 bg-cover bg-center lg:w-1/2"
        style={{ backgroundImage: "url('/images/bg-landing-page.png')" }}
      >
        {/* Overlay for small screens */}
        <div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>

        <img
          src="/images/bg-landing-page.png"
          alt="Immersive Magic"
          className="w-full h-full object-cover lg:hidden"
        />
      </div>

      {/* Circular Logo and Slogan for Mobile and Large Screens */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {/* Circular Logo */}
        <div className="w-44 h-44 lg:w-72 lg:h-72 bg-white rounded-full shadow-lg flex justify-center items-center border-4 border-white">
          <img
            src="/images/logo-magictek360.png"
            alt="Magic Tek 360 Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Slogan Text */}
        <h1 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg lg:hidden mt-10 w-4/6">
          Pronto La Magia Inmersiva Te Envolverá
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
