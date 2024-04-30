import { useState, useEffect } from 'react';

export const TopScroll = () => {
  const [topPos, setTopPos] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setTopPos(scrollTop !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return topPos;
};