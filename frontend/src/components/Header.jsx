import React from "react";

const Header = ({judul, text}) => {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {judul}
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              {text}
            </p>
          </div>

        </div>
      </div>
      
    </header>
  );
};

export default Header;
