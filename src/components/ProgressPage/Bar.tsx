import React from 'react';
import { colors } from '../../styles/colors';

interface BarProps {
  animationDuration: any;
  progress: any;
}

const Bar: React.FC<BarProps> = ({ animationDuration, progress }) => {
  return (
    <div
      style={{
        background: colors.allThentic.green[200],
        width: '100%',
        height: '4px',
        left: 0,
        top: 0,
        position: 'fixed',
        zIndex: 9000000,
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};

export { Bar };
