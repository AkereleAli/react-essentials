import reactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["fundamental", "core", "essential", "basic"];
const getRandomIndex = (max) => Math.floor(Math.random() * max);

const Header = () => {
  const description =
    reactDescriptions[getRandomIndex(reactDescriptions.length)];
  return (
    <header className="text-center my-12">
      <img
        className="h-20 w-40 object-cover mx-auto"
        src={reactImg}
        alt="Stylized atom"
      />
      <h1 className="font-RobotoCondensed text-[5rem] m-0 bg-clip-text text-transparent drop-shadow-lg [background-image:linear-gradient(40deg,#ea00ff,#ea00ff,#03d5ff,#03d5ff)]">
        React Essentials
      </h1>
      <p className="font-RobotoCondensed m-0 text-xl text-[#8964b0]">
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
