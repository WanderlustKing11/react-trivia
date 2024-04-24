# React + TypeScript + Vite

This was built upon the Vite template, which makes this app run smooth and fast!

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Spreading managed democracy across the galaxy

If you're a fan of the game Helldivers II, test your knowledge and see if you're a true patriot of freedom and liberty, or if you're exhibiting sympathetic tendencies towards the Terminids and Automatons.

**_ Warning: Traitors will be reported to the Ministry of Re-education _**

### Requirements to run

- Install Node. I'm using version 20.10.0.
- Clone this repo: `git clone https://github.com/WanderlustKing11/react-trivia`
- Initialize npm: `npm init`
- Run the program: `npm run dev`
- In your browser use this URL: http://localhost:5173/

### Current Implementations

- This is a Single Page Application for Desktop
- Uses libraries such as:
  - Tailwind CSS
  - Framer-Motion
  - (See dependencies in the [package.json file](https://github.com/WanderlustKing11/react-trivia/blob/main/package.json))
- useState to keep track of which card is the current active card, which lets us iterate to prev or next cards.
- another useState to manage if the card is flipped or not.
- another useState to keep count of player progress and score.
- One button component is used to make 'reveal', 'prev', 'next', 'restart', and 'score' buttons.
- Framer-Motion is used to flip the cards and slide the cards on and off screen.
- On restart, the cards are shuffled, but the player is taken back to the initial 'Start Game' state.

### Future Implementations

Here are a few things I'm missing:

- Title Page --> Gives better instruction and UX for players to enter the game
- Styling
- Images
- Responsiveness, more Mobile friendly
- Accessibility
- Effective score tracking system
- Possible multiple choice answers
- Breadcrumbs to keep track of the player's progress
- Better transitions for hover state for buttons, and other UX features

### Lessons Learned

This was a very educational project for me. I tried my best to keep it simple, but I also wanted to implement certain functionalities, mainly having a shuffled deck of cards to iterate through. I also wanted the project to integrate well with 3rd party libraries without becoming too convoluted. Here are some of the lessons I learned along the way, as well as some of the pain points:

- TypeScript for the save. There were numerous times that I realized I would have been searching high and low for bugs, but TypeScript saved me so much time finding forgotten props or typos.
- useState and all its glory. A very usefull hook that really is a great way to manage state and adds so much functionality. I had to figure out a few times how to reapply it to my buttons, especially when I needed to keep track of more than one state. That maybe took up the mmost amount of my time in this entire project.
- Learning to pass props down multiple nested components made me go cross-eyed a little bit. I'm sure other people have an easier time with it than I did, but this was something I needed to sit down and sketch out on paper to figure out. That, and its being intertwined with TS was sometimes a bit of a headache, but I think I definitely got a better grasp on the use of passing props in React, as well as the use of interfaces.
- Having the cards leave the stack in correct sequential order (from the top of the stack) while managing the current card to flip presented a greater challenge than anticipated, and I'm embarassed how long it took to fix. On the other hand, shuffling the cards in a random order and having a fresh restart to trigger another refresh, as well as managing score and only allowing buttons to be accessible for clicking under certain conditions were a lot easier than I had anticipated. The lesson here, it is very diffcult to predict how much time it takes to complete something, or even which tasks will be harder than others. I'm sure this is a skill, like many others, that will grow over time.

I hope you enjoy this app. As of now I will be working on other projects, but I will always welcome any criticism and feedback in the spirit of learning and becoming a better developer. Cheers!
