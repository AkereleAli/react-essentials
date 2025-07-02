import React, { useState } from "react";
import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="p-4 rounded-md bg-[#2f1d43] shadow-md">
        <h3 className="m-0">{EXAMPLES[selectedTopic].topic}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code className="text-[1rem]">{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section className="my-12 mx-auto">
      <h2 className="text-left">Examples</h2>
      <TabButtons selectedTopic={selectedTopic} handleSelect={handleSelect} />
      {tabContent}
    </section>
  );
};

export default Examples;
