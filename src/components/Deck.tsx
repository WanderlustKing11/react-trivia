import CardFlip from './CardFlip';
import { cardData } from '../data/cardData';

interface DeckProps {
  handleFlip: (id: number) => void;
  activeCardId: number | null;
  isFlipped: boolean;
}

export const Deck: React.FC<DeckProps> = ({
  handleFlip,
  activeCardId,
  isFlipped,
}) => {
  return (
    <div className='deck-container'>
      {cardData.map((card) => (
        <CardFlip
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          isFlipped={card.id === activeCardId && isFlipped}
          handleFlip={() => handleFlip(card.id)}
        />
      ))}
    </div>
  );
};
