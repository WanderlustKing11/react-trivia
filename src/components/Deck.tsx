import CardFlip from './CardFlip';
import { cardData } from '../data/cardData';

interface DeckProps {
  isFlipped: boolean;
  handleFlip: () => void;
}

export const Deck: React.FC<DeckProps> = (isFlipped, handleFlip) => {
  return (
    <div className='deck-container'>
      {cardData.map((card) => (
        <CardFlip
          // className='text-sm font-bold'
          key={card.id}
          question={card.question}
          answer={card.answer}
          isFlipped={isFlipped}
          handleFlip={handleFlip}
        />
      ))}
    </div>
  );
};
