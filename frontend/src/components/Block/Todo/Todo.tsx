import React, { useState } from "react";

type Props = {
  inputId: string;
  text: string;
  checked: boolean
};

export const Todo: React.FC<Props> = ({inputId, text, checked}) => {
  const [checkState, setCheckState] = useState(checked)
  return (
    <div className="flex items-center mb-4 mt-3">
        <input onChange={() => setCheckState(!checkState)} checked={checkState} id={inputId} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor={inputId} className="ml-2 text-sm	text-gray-300 whitespace-pre-wrap">{text}</label>
    </div>
  );
};
