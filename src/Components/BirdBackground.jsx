import { useEffect, useRef, useState } from 'react';
import { useColorScheme } from '@mui/material/styles';
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.birds.min';
import React from 'react';

function BirdBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { mode } = useColorScheme();  // Use color scheme (light/dark mode)

  useEffect(() => {
    // Destroy previous effect when component unmounts or mode changes
    if (vantaEffect) {
      console.log('Vanta destroy');
      vantaEffect.destroy();
    }

    if (vantaRef.current) {
      const newEffect = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 0.0,
        color1: 0x20b66f,
        color2: 0x25ff08,
        birdSize: 1.5,
        quantity: 4,
        speedLimit: 4.0,
      });

      setVantaEffect(newEffect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();  // Cleanup effect on component unmount
    };
  }, [mode]);  // Re-run effect if the mode changes

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  );
}

export default BirdBackground;
