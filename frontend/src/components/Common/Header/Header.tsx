import React from "react";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className="body-font border-b border-b-gray-700 bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap items-center justify-end p-3 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:text-white" href="/">
            HOME
          </a>
          <a className="mr-5 hover:text-white" href="./blog">
            BLOG
          </a>
          {/* <a className="hover:text-white">PORTFOLIO</a> */}
        </nav>
      </div>
    </header>
  );
};
