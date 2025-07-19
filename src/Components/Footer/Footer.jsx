import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} KinMel. All rights reserved.
      </p>
      <p>
        Made by{' '}
        <a
          href="https://github.com/" // change this to your GitHub or portfolio
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smita Parajuli
        </a>
      </p>
    </footer>
  );
};

export default Footer;
