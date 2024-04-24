import { useEffect, useState } from 'react';
import { Deck } from './components/Deck';
import Button from './components/Button';
import {
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsHandThumbsUp,
} from 'react-icons/bs';
import { cardData as originalCardData } from './data/cardData';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const [cardData, setCardData] = useState([...originalCardData]);
  const [gameOver, setGameOver] = useState(false);

  // Help track the current active index
  useEffect(() => {
    console.log('Active Index Updated:', activeIndex);
    // setCanIncreaseScore(true);
  }, [activeIndex]); // will run every time the activeIndex changes

  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    const shuffled = originalCardData.slice(1).sort(() => Math.random() - 0.5); //  Shuffle all but the first card
    setCardData([originalCardData[0], ...shuffled]); // Keep first card at the top
    setActiveIndex(0); // Reset the active index
    setIsFlipped(false);
    setScoreCount(0);
    setGameOver(false);
  };

  const handleFlip = () => {
    // Toggle flip state based on whether the same card is clicked again
    setIsFlipped((prev) => !prev);
    setScoreUpdated(false); //  Allow score increase when flipped
  };

  // Move to next card in Deck
  const handleNext = () => {
    if (!isFlipped || activeIndex >= cardData.length - 1) return; // Only allow navigation if the card is flipped and not on last card

    setActiveIndex(activeIndex + 1);
    setIsFlipped(false);
  };

  // Bring back Previous card in Deck
  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setIsFlipped(false);
    }
  };

  const increaseScore = () => {
    if (scoreCount < activeIndex && !scoreUpdated) {
      setScoreCount(scoreCount + 1);
      setScoreUpdated(true);
    }
  };

  useEffect(() => {
    if (activeIndex === cardData.length - 1 && isFlipped) {
      gameOverMessage;
      setGameOver(true);
    }
  }, [activeIndex, isFlipped]);

  const gameOverMessage =
    '*Alert: This assessment has concluded. We have recorded suspicious activities and you have consequently been flagged for further review. You are hereby directed to await instructions from the Ministry of Re-Education. Compliance is mandatory. Please stand by.';

  const nextGame = '... click Restart';

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex justify-end'>
        {/* RESTART BUTTON */}
        <button
          className='bg-black rounded-full p-4 transition text-[#c9c9c9] hover:text-[#66d98a] hover:-translate-y-1 ease-in duration-200'
          onClick={restartGame}
        >
          Restart
        </button>
      </div>

      {/* <div className='flex justify-center'></div> */}

      {/* PAGE TITLE */}
      <h1 className='text-5xl font-bold my-11 flex justify-center'>
        HELLDIVERS <span className='mx-2'>II</span> Trivia
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
              activeIndex === 0 && 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              handlePrevious();
              console.log('Clicked PREV');
            }}
          >
            <BsArrowLeftSquare className='w-10 h-10 fill-[#c9c9c9] hover:fill-white' />
          </Button>

          {/* DECK */}
          <div className='w-48 h-72 text-white bg-[#171717] flex grid justify-center content-center rounded-lg rotate-6'>
            <Deck
              handleFlip={handleFlip}
              isFlipped={isFlipped}
              activeIndex={activeIndex}
              cardData={cardData}
              // activeCardId={activeCardId}
            />
          </div>

          {/* NEXT/RIGHT NAV BUTTON */}
          <Button
            className={`flex grid justify-center content-center ${
              // !isFlipped && 'opacity-50 cursor-not-allowed'
              !isFlipped || activeIndex === cardData.length - 1
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            onClick={() => {
              handleNext();
              console.log('Clicked NEXT');
            }}
          >
            <BsArrowRightSquare className='w-10 h-10 fill-[#c9c9c9] hover:fill-white' />
          </Button>
        </div>
      </div>
      <div className='flex w-auto h-auto grid grid-cols-5 gap-11 content-center justify-center'>
        <div className='grid'></div>
        <div className='grid'></div>
        {/* REVEAL BUTTON */}
        <Button
          className='flex grid justify-center border-solid border-2 rounded-lg transition hover:bg-[#283348] active:translate-y-1 ease-out duration-300'
          onClick={() => {
            console.log('Clicked REVEAL button');
            handleFlip();
          }}
        >
          Reveal
        </Button>
        <div className='grid'></div>
        <div className='grid'></div>
      </div>

      {/* SCORE */}
      <div className='w-1/6 h-1/6 max-w-40 border-solid border-2 rounded-md'>
        <div className='flex justify-center py-8 text-lg font-bold'>
          Score: {scoreCount} / {activeIndex}
        </div>
        <Button className='ml-[38%]' onClick={increaseScore}>
          <BsHandThumbsUp className='w-7 h-7 transition fill-[#7b7b7b] hover:fill-[#e5812b] hover:-translate-y-1 ease-in duration-200' />
        </Button>
      </div>
      <div>
        {gameOver && (
          <h3 className='max-w-4xl pl-80 pr-20 text-red-400 absolute bottom-28'>
            {gameOverMessage}
          </h3>
        )}
        {gameOver && <h3 className='pl-80 text-green-300'>{nextGame}</h3>}
      </div>
    </div>
  );
}

export default App;
