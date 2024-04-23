import CardFlip from './CardFlip';
import { cardData, CardDataProps } from '../data/cardData';

interface DeckProps {
  handleFlip: (id: number) => void;
  // handleNext: () => void;
  // activeCardId: number | null;
  activeIndex: number;
  isFlipped: boolean;
  cardData: CardDataProps[];
  // slideDirection: 'in' | 'out' | 'none';
}

export const Deck: React.FC<DeckProps> = ({
  handleFlip,
  // activeCardId,
  activeIndex,
  isFlipped,
  cardData,
  // slideDirection,
}) => {
  return (
    <div className='deck-container'>
      {cardData.map((card: CardDataProps, index: number) => (
        <CardFlip
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          isFlipped={index === activeIndex && isFlipped}
          handleFlip={() => handleFlip(card.id)}
          movedUp={index < activeIndex}
          // slideDirection={slideDirection}
          zIndex={cardData.length - index}
          // activeCardId={activeCardId}
        />
      ))}
    </div>
  );
};
