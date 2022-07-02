'use strict';

// Array of objects containing data for the application
const data = [
  {
    fullName: 'Zoowee Blubberworth',
    age: 53,
    quote:
      'I want my children to have all the things I couldn’t afford. Then I want to move in with them.',
  },
  {
    fullName: 'Flufffy Gloomkins',
    age: 37,
    quote:
      'I used to sell furniture for a living. The trouble was, it was my own.',
  },
  {
    fullName: 'Humster Pottyworthy',
    age: 28,
    quote:
      'Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.',
  },
  {
    fullName: 'Eggpants Snothall',
    age: 44,
    quote:
      'Common sense is like deodorant. The people who need it most never use it.',
  },
  {
    fullName: 'Sniffpants Pimplehill',
    age: 18,
    quote: 'A day without sunshine is like, you know, night.',
  },
];

// Accepts an array and returns a random result
const randomize = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Displays message in proper format
const displayMessage = () => {
  const message = randomize(data);
  console.log(`${message.fullName}, ${message.age}, says: "${message.quote}"`);
};

displayMessage();
