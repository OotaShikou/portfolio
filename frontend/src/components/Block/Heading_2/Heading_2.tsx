import React from "react";

type Props = {
  text: string;
};

export const Heading_2: React.FC<Props> = ({ text }) => {
  return (
    <h2 className="mb-4 mt-3 border-l-8 border-indigo-600 p-2 text-xl font-normal text-gray-300 md:mb-6 md:p-3 lg:text-2xl">
      {text}
    </h2>
  );
};
