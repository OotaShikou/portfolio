import React from "react";

type Props = {
  text: string;
};

export const Heading_3: React.FC<Props> = ({text}) => {
  return (
    <h3 className="text-gray-300 text-lg lg:text-xl font-normal mb-4 md:mb-6 mt-3 py-1 md:py-2">{text}</h3>
  );
};
