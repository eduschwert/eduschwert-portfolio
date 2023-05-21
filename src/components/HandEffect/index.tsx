import { useEffect, useRef } from 'react';
import { keyframes } from '@stitches/react';

export const scaleUp = keyframes({
  '0%': { transform: 'rotate(320deg)' },
  '50%': { transform: 'rotate(260deg)' },
  '100%': { transform: 'rotate(320deg)' },
});

export const HandEffect = () => {
  const hand: any = useRef(null);
  return (
    <span
      ref={hand}
      style={{ display: 'inline-flex', transform: 'rotate(320deg)' }}
    >
      ✋
    </span>
  );
};
