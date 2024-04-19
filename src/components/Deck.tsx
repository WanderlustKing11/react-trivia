import CardFlip from './CardFlip';
import { cardData } from '../data/cardData';

export const Deck = () => {
  return (
    <div>
      {cardData.map((card) => (
        <CardFlip
          className='text-sm'
          key={card.id}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
};
