import reactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["fundamental", "core", "essential", "basic"];
const getRandomIndex = (max) => Math.floor(Math.random() * max);

const Header = () => {
  const description =
    reactDescriptions[getRandomIndex(reactDescriptions.length)];
  return (
    <header className="text-center my-12 px-4 sm:px-6 md:px-8">
      <img
        className="h-20 w-40 object-cover mx-auto sm:h-24 sm:w-48"
        src={reactImg}
        alt="Stylized atom"
      />
      <h1 className="font-RobotoCondensed text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] m-0 bg-clip-text text-transparent drop-shadow-lg [background-image:linear-gradient(40deg,#ea00ff,#ea00ff,#03d5ff,#03d5ff)]">
        React Essentials
      </h1>
      <p className="font-RobotoCondensed m-0 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8964b0]">
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
