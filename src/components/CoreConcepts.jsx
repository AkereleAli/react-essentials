import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <ul className="p-0 m-0 flex gap-8 flex-wrap justify-center">
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept key={concept.title} {...concept} />
      ))}
    </ul>
  );
};

export default CoreConcepts;
