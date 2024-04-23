import React from 'react';
import { motion, MotionStyle, Variants } from 'framer-motion';

interface FramerFlipProps {
  handleFlip: (id: number) => void;
  id: number;
  question: string;
  answer: string;
  isFlipped: boolean;
  // slideDirection: 'in' | 'out' | 'none';
  movedUp: boolean;
  zIndex: number;
  // activeCardId: number | null;
}

// Slides card on/off screen, to/from deck
const slideVariants: Variants = {
  // in: (direction: 'left' | 'right') => ({
  //   x: direction === 'left' ? [-400, 0] : [400, 0], // Starting point
  // }),
  // out: (direction: 'left' | 'right') => ({
  //   x: direction === 'left' ? [0, -400] : [0, 400], // Ending point
  // }),
  // none: {
  //   x: 0,
  // },
  in: { x: 0, y: 0 }, // starting point
  out: { x: -900, y: -100 }, // end point off deck
};

export const CardFlip: React.FC<FramerFlipProps> = ({
  id,
  question,
  answer,
  isFlipped,
  // handleFlip,
  movedUp,
  zIndex,
  // slideDirection,
  // activeCardId,
}) => {
  console.log(`Card ${id}, CardFlip ${isFlipped}, movedUp: ${movedUp}`); // Should log true/false

  // const isActive = id === activeCardId; // Check if this card is the active card

  const motionProps = movedUp ? { variant: 'out' } : { variant: 'in' };

  const cardStyle: MotionStyle = {
    width: '200px',
    height: '300px',
    transformStyle: 'preserve-3d', // Needed for 3D transformations
    transition: 'transform 0.8s',
    transformOrigin: 'center', // Explicitly setting the origin for transformation
    rotate: '-6deg',
    padding: '15px',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    backfaceVisibility: 'hidden' as 'hidden' | 'visible',
  };

  const frontStyle: MotionStyle = {
    ...cardStyle,
    backgroundColor: 'black',
  };

  const backStyle: MotionStyle = {
    ...cardStyle,
    backgroundColor: 'red',
    rotateY: 180,
    position: 'absolute', // Absolute position to align with the front face
    top: 0,
    left: 0,
  };

  return (
    <motion.div
      style={{
        perspective: '1000px', // Adds visual depth for 3D animation
        position: 'absolute',
        transformOrigin: 'center bottom', // Possible styling bug
        zIndex, // Allows cards to stack
      }}
      variants={slideVariants}
      initial='in'
      animate={motionProps.variant} // Only animate if active
      custom={'left'}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={frontStyle}
      >
        {question}
      </motion.div>
      <motion.div
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.8 }}
        style={backStyle}
      >
        {answer}
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
