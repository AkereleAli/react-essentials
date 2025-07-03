import { TABS } from "../data";
import TabButton from "./TabButton";

const TabButtons = ({ selectedTopic, handleSelect }) => {
  return (
    <menu className="my-4 p-0 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 list-none px-2 sm:px-4 md:px-6">
      {/* <TabButton
        isSelected={selectedTopic === "components"}
        onSelect={() => handleSelect("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onSelect={() => handleSelect("jsx")}
      >
        Jsx
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onSelect={() => handleSelect("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onSelect={() => handleSelect("state")}
      >
        State
      </TabButton> */}
      {TABS.map((topic) => (
        <TabButton
          key={topic}
          isSelected={selectedTopic === topic}
          onSelect={() => handleSelect(topic)}
        >
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </TabButton>
      ))}
    </menu>
  );
};

export default TabButtons;
