import React, { useState } from "react";

type Props = {
  inputId: string;
  text: string;
  checked: boolean;
};

export const Todo: React.FC<Props> = ({ inputId, text, checked }) => {
  const [checkState, setCheckState] = useState(checked);
  return (
    <div className="mb-4 mt-3 flex items-center">
      <input
        onChange={() => setCheckState(!checkState)}
        checked={checkState}
        id={inputId}
        type="checkbox"
        value=""
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      <label
        htmlFor={inputId}
        className="ml-2 whitespace-pre-wrap	text-sm text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};
