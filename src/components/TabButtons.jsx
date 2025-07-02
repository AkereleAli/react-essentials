import TabButton from "./TabButton";

const TabButtons = ({ selectedTopic, handleSelect }) => {
  return (
    <menu className="my-4 p-0 flex gap-2 list-none">
      <TabButton
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
      </TabButton>
    </menu>
  );
};

export default TabButtons;
