import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSlide = () => {
  return (
    <div className="text-white bg-zinc-900 m-0 p-2 gap-3 flex rounde">
      <Marquee>
        "The best time to plant a tree was 20 years ago. The second best time is
        now." - Chinese Proverb
      </Marquee>
    </div>
  );
};

export default MarqueeSlide;
