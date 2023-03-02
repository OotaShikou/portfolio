import React from "react";

type Props = {
  text: string;
};

export const Paragraph: React.FC<Props> = ({ text }) => {
  return (
    <p className="mt-3	mb-6 whitespace-pre-wrap leading-loose text-gray-300 md:mb-8">
      {text}
    </p>
  );
};
