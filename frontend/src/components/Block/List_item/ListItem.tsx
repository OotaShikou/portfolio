import React from "react";

type Props = {
  text: string;
  type: "bulleted_list_item" | "numbered_list_item";
};

export const ListItem: React.FC<Props> = ({ text, type }) => {
  return (
    <li className="mt-2 ml-2 whitespace-pre-wrap	text-sm text-gray-300">
      {text}
    </li>
  );
};
