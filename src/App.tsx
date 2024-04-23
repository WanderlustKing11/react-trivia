import { useState } from 'react';
import { Deck } from './components/Deck';
import Button from './components/Button';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { cardData } from './data/cardData';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  // Set the initial active card ID to the 'Start Game' card's ID
  const [activeCardId, setActiveCardId] = useState<number | null>(
    cardData[0].id
  );
  const [slideDirection, setSlideDirection] = useState<'in' | 'out' | 'none'>(
    'none'
  );

  const handleFlip = (cardId: number) => {
    // Toggle flip state based on whether the same card is clicked again
    setIsFlipped((prev) => !prev);
    setActiveCardId((prevId) => (prevId === cardId ? null : cardId)); // `prevId` indicates the avlue of `activeCardId` before any updates or changes in state
    // setActiveCardId(cardId);
  };

  const startGame = () => {
    console.log('Starting game with card 0');
    setIsFlipped(true);
    // setSlideDirection('none');
  };

  // Move to next card in Deck
  const handleNext = () => {
    if (!isFlipped) return; // Only allow navigation if the card is flipped
    const currentIndex = cardData.findIndex((card) => card.id === activeCardId);
    const nextIndex = currentIndex + 1;
    if (nextIndex < cardData.length) {
      // check if there are more cards, then go to next card on click
      const previousCardId = activeCardId;
      setActiveCardId(cardData[nextIndex].id);
      setIsFlipped(false);
      setSlideDirection('out');
    } else {
      console.log('Reached End of Game!');
    }
  };

  // Bring back Previous card in Deck
  const handlePrevious = () => {
    const currentIndex = cardData.findIndex((card) => card.id === activeCardId);
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      // Check for previous card, then go to it on click
      setActiveCardId(cardData[previousIndex].id);
      setIsFlipped(false);
      setSlideDirection('in');
    } else {
      console.log('Start of Game');
    }
  };

  const currentIndex = cardData.findIndex((card) => card.id === activeCardId);

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex justify-end'>
        {/* RESTART BUTTON */}
        <button className='bg-black rounded-full p-4'>Restart</button>
      </div>

      {/* <div className='flex justify-center'></div> */}

      {/* PAGE TITLE */}
      <h1 className='text-4xl font-bold my-11 flex justify-center'>
        HellDivers 2 Trivia
      </h1>
      <p className='max-w-96 mx-auto'>
        Say hello to DEMOCRACY, and help spread FREEDOM across the galaxy by
        answering these trivia questions:
      </p>

      {/* DECK CONTAINER */}
      <div className='flex justify-center p-8'>
        <div className='flex w-auto h-auto grid grid-cols-3 gap-11 content-center justify-self-center'>
          {/* PREV/LEFT NAV BUTTON */}
          <Button
            className={`flex grid justify-center content-center ${
              currentIndex === 0 && 'opacity-50 cursor-not-allowed'
            }`}
            onClick={handlePrevious}
          >
            <BsArrowLeftSquare className='w-10 h-10' />
          </Button>

          {/* DECK */}
          <div className='w-48 h-72 text-white bg-[#171717] flex grid justify-center content-center rounded-lg rotate-6'>
            <Deck
              handleFlip={handleFlip}
              activeCardId={activeCardId}
              isFlipped={isFlipped}
              slideDirection={slideDirection}
            />
          </div>

          {/* NEXT/RIGHT NAV BUTTON */}
          <Button
            className={`flex grid justify-center content-center ${
              !isFlipped && 'opacity-50 cursor-not-allowed'
            }`}
            onClick={handleNext}
          >
            <BsArrowRightSquare className='w-10 h-10' />
          </Button>
        </div>
      </div>
      <div className='flex w-auto h-auto grid grid-cols-3 gap-11 content-center justify-self-center'>
        <div className='grid'></div>

        {/* REVEAL BUTTON */}
        <Button
          className='flex grid justify-center border-solid border-2 rounded-lg'
          onClick={() => {
            console.log('Clicked Reveal button!', activeCardId);
            if (isFlipped) {
              setIsFlipped(false); // If already flipped, unflip
            } else {
              startGame(); // Otherwise, start the game by flipping the 'Start Game' card
            }
          }}
        >
          Reveal
        </Button>
        <div className='grid'></div>
      </div>

      {/* SCORE */}
      <div className='w-1/6 h-1/6 border-solid border-2'>
        <div className='flex justify-center py-8 text-lg font-bold'>
          Score: 0 / 0
        </div>
      </div>
    </div>
  );
}

export default App;
