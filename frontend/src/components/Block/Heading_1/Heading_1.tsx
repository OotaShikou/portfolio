import React from "react";

type Props = {
  text: string;
};

export const Heading_1: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="mb-4 mt-3 bg-indigo-600 px-3 py-2 text-2xl font-normal text-gray-300 md:mb-6  md:p-4 lg:text-3xl">
      {text}
    </h1>
  );
};
