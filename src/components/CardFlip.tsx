import React from 'react';
import { motion, MotionStyle } from 'framer-motion';

interface FramerFlipProps {
  id: number;
  handleFlip: (id: number) => void;
  question: string;
  answer: string;
  isFlipped: boolean;
}

export const CardFlip: React.FC<FramerFlipProps> = ({
  id,
  isFlipped,
  question,
  answer,
}) => {
  console.log('CardFlip isFlipped:', isFlipped); // Should log true/false

  const zIndex = 50 - id;

  const cardStyle: MotionStyle = {
    width: '200px',
    height: '300px',
    transformStyle: 'preserve-3d', // Needed for 3D transformations
    transition: 'transform 0.8s',
    transformOrigin: 'center', // Explicitly setting the origin for transformation
    rotate: '-6deg',
    padding: '15px',
    textAlign: 'center',
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
    top: 0,
    left: 0,
  };

  return (
    <motion.div
      style={{
        perspective: '1000px', // Adds visual depth for 3D animation
        position: 'absolute',
        transformOrigin: 'center bottom', // Possible styling bug
        zIndex,
      }}
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
