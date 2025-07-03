import React, { useState } from "react";
import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import Section from "./Section";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
  };

  let tabContent = (
    <p className="text-center text-[#a18aba] p-4">Please select a topic.</p>
  );
  if (selectedTopic) {
    tabContent = (
      <div className="p-4 sm:p-6 md:p-8 rounded-md bg-[#2f1d43] shadow-md">
        <h3 className="m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          {EXAMPLES[selectedTopic].topic}
        </h3>
        <p className="mt-2 mb-4 text-sm sm:text-base md:text-lg text-[#a18aba]">
          {EXAMPLES[selectedTopic].description}
        </p>
        <pre className="p-3 sm:p-4 md:p-5 bg-[#1f0b34] rounded-md overflow-x-auto">
          <code className="block text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] text-[#d8bfed]">
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <Section
      title="Examples"
      className="my-12"
      titleClassName="sm:text-3xl md:text-4xl lg:text-5xl"
    >
      <TabButtons selectedTopic={selectedTopic} handleSelect={handleSelect} />
      {tabContent}
    </Section>
  );
};

export default Examples;
