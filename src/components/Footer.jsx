import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-6 text-center text-sm md:text-base">
        <h1>Built with using React, Axios & Tailwind CSS. | OMDb API data.</h1>
        <h1 className="font-bold text-md mt-2">Develop By RubatShaikh ❤️</h1>
        <div className="mt-2 text-gray-200 text-xs">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
