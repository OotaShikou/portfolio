import React from "react";

type Props = {
  text: string;
};

export const Heading_2: React.FC<Props> = ({text}) => {
  return (
    <h2 className="text-gray-300 text-xl lg:text-2xl font-normal mb-4 md:mb-6 mt-3 border-l-8 p-2 md:p-3 border-indigo-600">{text}</h2>
  );
};
