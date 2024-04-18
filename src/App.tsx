import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

function App() {
  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex justify-end'>
        <button className='bg-black rounded-full p-4'>Restart</button>
      </div>
      {/* <div className='flex justify-center'></div> */}
      <h1 className='text-4xl font-bold my-20 flex justify-center'>
        HellDivers 2 Trivia
      </h1>
      <p className='flex justify-center'>
        Say hello to DEMOCRACY, and help spread FREEDOM across the galaxy by
        answering these trivia questions:
      </p>
      <div className='flex justify-center p-8'>
        <div className='flex w-auto h-auto grid grid-cols-3 gap-11 content-center justify-self-center'>
          <button className='flex grid justify-center content-center'>
            <BsArrowLeftSquare className='w-10 h-10' />
          </button>
          <div className='w-52 h-80 text-white bg-black flex grid justify-center content-center'>
            Card
          </div>
          <button className='flex grid justify-center content-center'>
            <BsArrowRightSquare className='w-10 h-10' />
          </button>
        </div>
      </div>
      <div className='flex w-auto h-auto grid grid-cols-3 gap-11 content-center justify-self-center'>
        <div className='grid'></div>
        <button className='flex grid justify-center border-solid border-2 rounded-lg'>
          Reveal
        </button>
        <div className='grid'></div>
      </div>
      <div className='w-1/6 h-1/6 border-solid border-2'>
        <div className='flex justify-center py-8 text-lg font-bold'>
          Score: 0/20
        </div>
      </div>
    </div>
  );
}

export default App;
