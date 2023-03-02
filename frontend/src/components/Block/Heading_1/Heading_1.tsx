import React from "react";

type Props = {
  text: string;
};

export const Heading_1: React.FC<Props> = ({text}) => {
  return (
    <h1 className="text-gray-300 text-2xl lg:text-3xl font-normal mb-4 md:mb-6 mt-3 bg-indigo-600 md:p-4  px-3 py-2">{text}</h1>
  );
};
