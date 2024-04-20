# React + TypeScript + Vite

This was built upon the Vite template, which makes this app run smooth and fast!

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Spreading managed democracy across the galaxy

If you're a fan of the game Helldivers 2, test your knowledge and see if you're a true patriot of freedom and liberty, or if you're exhibiting sympathetic tendencies inclined to the Terminids and Automatons.

**_ Warning: Traitors will be reported to the Ministry of Re-education _**

### Current Implementations

- This is a Single Page Application
- Uses libraries such as:
  - Tailwind CSS
  - Framer-Motion
  - (See dependencies in the [package.json file](https://github.com/WanderlustKing11/react-trivia/blob/main/package.json))
- No current sliders, just 'Next' and 'Prev' buttons that trigger animation to move forward or back on a selected trivia card.
- One custom button allows the user to reveal the card's answer.
- If you like, you can keep track of your score whenever your ideologies align with Super-Earth's with another custom Button Component that keeps track of the score count out of how many trivia questions you have answered. This means you are responsible for managing your own score, for now. But Super-Earth's Ministry of Truth will be updating a better tracking system in the future.
- One final Button Component to Restart the game.

#### Future Implementations

- Title Page --> Gives better instruction and UX for players to enter the game
- Styling
- Images
- Responsiveness, more Mobile friendly
- Score tracking system
- Possible multiple choice answers
- Breadcrumbs to keep track of the player's progress

##### Lessons Learned

This was a very educational project for me. I tried my best to keep it simple, and fundamentally work efficiently without too many gimics. I also wanted the project to integrate well with 3rd party libraries without becoming too convoluted. Here are some of the lessons I learned along the way, as well as some of the pain points:

- TypeScript for the save. There were numerous times that I realized I would have been searching high and low for bugs, but TypeScript saved me so much time finding exactly what I had forgotten or misspelled.
- useState and all its glory. A very usefull hook that really is a great way to manage state and adds so much functionality. I had to figure out a few times how to reapply it to my buttons, especially when I needed to keep track of more than one state. That maybe took up the mmost amount of my time in this entire project.
- Learning to pass props down multiple nested components made me go cross-eyed a little bit. I'm sure other people have an easier time with it than I did, but this was something I needed to sit down and sketch out on paper sometimes. That, and its being intertwined with TS was sometimes a bit of a headache, but I think I definitely got a better grasp on the use of passing props in React, as well as the use of interfaces.
