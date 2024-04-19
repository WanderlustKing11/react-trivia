import React from 'react';
// import { cardData } from './data/cardData';
import { motion, MotionStyle } from 'framer-motion';

interface FramerFlipProps {
  handleFlip: () => void;
  isFlipped: boolean;
}

export const CardFlip: React.FC<FramerFlipProps> = ({ isFlipped }) => {
  const cardStyle: MotionStyle = {
    width: '200px',
    height: '300px',
    position: 'relative', // Ensures proper stacking
    transformStyle: 'preserve-3d', // Needed for 3D transformations
    transition: 'transform 0.8s',
    transformOrigin: 'center', // Explicitly setting the origin for transformation
    rotate: '-6deg',
  };

  const frontStyle: MotionStyle = {
    ...cardStyle,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    backfaceVisibility: 'hidden' as 'hidden' | 'visible',
  };

  const backStyle: MotionStyle = {
    ...cardStyle,
    backgroundColor: 'red',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    backfaceVisibility: 'hidden' as 'hidden' | 'visible',
    rotateY: 180,
    position: 'absolute', // Absolute position to align with the front face
    top: 0, // Align top
    left: 0, // Align left
  };

  return (
    <motion.div
      style={{
        perspective: '1000px',
        width: '200px',
        height: '300px',
        position: 'relative',
        cursor: 'pointer',
        transformOrigin: 'center bottom', // Possible styling bug
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={frontStyle}
      >
        Front of Card
      </motion.div>
      <motion.div
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.8 }}
        style={backStyle}
      >
        Back of Card
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
