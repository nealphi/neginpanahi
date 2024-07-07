import { Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';

const CoinFlip = () => {
  const headsRef = useRef(null);
  const tailsRef = useRef(null);
  const coinRef = useRef(null);
  const resultRef = useRef(null);

  const flipACoin = () => {
    headsRef.current.style.transform = 'rotateY(0deg)';
    tailsRef.current.style.transform = 'rotateY(0deg)';
    coinRef.current.style.transform = 'rotate(0deg)';
    coinRef.current.style.top = '120px';

    headsRef.current.style.transitionDuration = '0s';
    tailsRef.current.style.transitionDuration = '0s';
    coinRef.current.style.transitionDuration = '0s';
    resultRef.current.style.transitionDelay = '0s';
    resultRef.current.style.visibility = 'hidden';

    setTimeout(() => {
      headsRef.current.style.transitionDuration = '5s';
      tailsRef.current.style.transitionDuration = '5s';
      coinRef.current.style.transitionDuration = '5s';
      resultRef.current.style.transitionDelay = '5s';
      resultRef.current.style.visibility = 'visible';
      coinRef.current.style.top = '290px';
    }, 10);

    setTimeout(() => {
      const x = Math.random();
      if (x <= 0.5) {
        headsRef.current.style.transform = 'rotateY(1440deg)';
        tailsRef.current.style.transform = 'rotateY(1440deg)';
        coinRef.current.style.transform = 'rotate(1440deg)';
        resultRef.current.innerHTML = 'Heads';
      } else {
        headsRef.current.style.transform = 'rotateY(1620deg)';
        tailsRef.current.style.transform = 'rotateY(1620deg)';
        coinRef.current.style.transform = 'rotate(1620deg)';
        resultRef.current.innerHTML = 'Tails';
      }
    }, 10);
  };

  return (
    <Flex className='coinflip'>
      <button className="btn" type="button" onClick={flipACoin}>
        Flip a Coin
      </button>
        <div className="coin" ref={coinRef} style={{ transitionTimingFunction: 'ease-out' }}>
          <div ref={headsRef} className="flip top">
            <img className="coinImg" src="heads.png" alt="Heads" />
          </div>
          <div id="tails" ref={tailsRef} className="flip bottom">
            <img className="coinImg" src="tails.png" alt="Tails" />
          </div>
        </div>

      <div className="result" ref={resultRef}></div>
    </Flex>
  );
};

export default CoinFlip;
