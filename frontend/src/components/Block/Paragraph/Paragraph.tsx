import React from "react";

type Props = {
  text: string
};

export const Paragraph: React.FC<Props> = ({text}) => {
  return (
    <p className="leading-loose	text-gray-300 mt-3 mb-6 md:mb-8 whitespace-pre-wrap">{text}</p>
  );
};
