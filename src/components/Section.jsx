import React from "react";

const Section = ({
  title,
  children,
  titleClassName = "",
  wrapperType = "section",
  ...props
}) => {
  const Wrapper = wrapperType;
  return (
    <Wrapper {...props}>
      <h2
        className={`text-center font-RobotoCondensed mb-6 text-[#a18aba] text-2xl ${titleClassName}`}
      >
        {title}
      </h2>
      {children}
    </Wrapper>
  );
};

export default Section;
