import React, { useState } from 'react';
import { easae, easeInOutQuint, easeOutElastic } from 'easae';

const Comp = () => {
  const [additionalStyle, setAdditionalStyle] = useState({});

  const animate = async () => {
    await easae({
      easing: easeOutElastic,
      tick: (t) => {
        setAdditionalStyle({
          transform: `scale(${t})`,
        });
      },
      duration: 1500,
    });

    await easae({
      easing: easeInOutQuint,
      tick: (t) => {
        setAdditionalStyle({
          transform: `rotate(${t * 180}deg)`,
        });
      },
      duration: 1000,
    });
  };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '400px',
          height: '400px',
          marginBottom: '50px',
          background: 'red',
          ...additionalStyle,
        }}
      ></div>

      <button onClick={() => animate()}>animate</button>
    </section>
  );
};

export default Comp;
