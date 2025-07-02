import React from "react";

const CoreConcept = ({ image, title, description }) => {
  return (
    <li className="text-center w-40">
      <img className="h-16 w-24 object-cover mx-auto" src={image} alt={title} />
      <h3 className="my-2">{title}</h3>
      <p className="text-[0.9rem]">{description}</p>
    </li>
  );
};

export default CoreConcept;
