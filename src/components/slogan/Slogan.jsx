import React, { useEffect, useState } from 'react';
import './slogan.css';

const Slogan = () => {
  const words = ['ONE', 'WHERE', 'THING', 'WEATHER'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className="containerSlogan container">
      <div className='p-3'>
        <p className="bold sloganText">WE ARE TRUE</p>
        <p className="pBrand">
          Shoes have always been overbuilt, uncomfortable, and difficult to walk in. So over a decade ago, we decided to change that.
        </p>

        <p className='slo bold'>SHOES FOR</p>
        <div className="any-container bold">
          <span>ANY </span>
          <div className="list-span">
            <ul className="text-muted">
              <li key={words[currentWordIndex]}>{words[currentWordIndex]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
