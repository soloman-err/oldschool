import React from 'react';
import { FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa';

const StickySidebar = () => {
  return (
    <div className="absolute top-2/4 left-0 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        <a
          href="https://twitter.com"
          target="_blank"
          className="bg-sky-500 text-white w-10 h-10 flex items-center justify-center"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-sky-500 text-white w-10 h-10 flex items-center justify-center"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          className="bg-sky-500 text-white w-10 h-10 flex items-center justify-center"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  );
};

export default StickySidebar;
