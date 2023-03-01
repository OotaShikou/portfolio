import React from "react";

type Props = {
  name: string;
  description: string;
  imgPath: string;
};

export const SkillItem: React.FC<Props> = ({ name, description, imgPath }) => {
  return (
    <div className="bg-gray-900 p-4 md:w-1/2 xl:w-1/3">
      <div className="border-opacity-75 rounded-lg border border-gray-700 p-6 md:h-60">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
          <img src={imgPath} />
        </div>
        <h2 className="title-font mb-2 text-lg font-medium text-white">
          {name}
        </h2>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
