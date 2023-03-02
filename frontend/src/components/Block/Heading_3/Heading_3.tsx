import React from "react";

type Props = {
  text: string;
};

export const Heading_3: React.FC<Props> = ({ text }) => {
  return (
    <h3 className="mb-4 mt-3 py-1 text-lg font-normal text-gray-300 md:mb-6 md:py-2 lg:text-xl">
      {text}
    </h3>
  );
};
