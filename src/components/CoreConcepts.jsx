import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section
      title="Core Concepts"
      className="p-8 rounded-md bg-[#140524] shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      wrapperType="section"
    >
      <ul className="p-0 m-0 flex gap-8 flex-wrap justify-center">
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
