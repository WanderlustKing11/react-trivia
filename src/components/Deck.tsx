import CardFlip from './CardFlip';
import { CardDataProps } from '../data/cardData';

interface DeckProps {
  handleFlip: (id: number) => void;
  activeIndex: number;
  isFlipped: boolean;
  cardData: CardDataProps[];
}

export const Deck: React.FC<DeckProps> = ({
  handleFlip,
  activeIndex,
  isFlipped,
  cardData,
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
          zIndex={cardData.length - index}
        />
      ))}
    </div>
  );
};
