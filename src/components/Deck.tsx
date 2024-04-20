import CardFlip from './CardFlip';
import { cardData } from '../data/cardData';
import { useState } from 'react';

interface DeckProps {
  handleFlip: (id: number) => void;
}

export const Deck: React.FC<DeckProps> = ({ handleFlip }) => {
  return (
    <div className='deck-container'>
      {cardData.map((card) => (
        <CardFlip
          key={card.id}
          question={card.question}
          answer={card.answer}
          // isFlipped={card.id === activeCardId}
          handleFlip={() => handleFlip(card.id)}
        />
      ))}
    </div>
  );
};
