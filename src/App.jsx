import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-[90%] max-w-[50rem] mx-auto">
        <section className="p-8 rounded-md bg-[#140524] shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          <h2 className="text-center font-RobotoCondensed mb-6 text-[#a18aba]">
            Core Concepts
          </h2>
          <CoreConcepts />
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;
