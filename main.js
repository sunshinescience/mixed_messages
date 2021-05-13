
// Object holding character information
const character = {
  protagonist: ['a detective', 'a knight', 'a ninja', 'a pirate', 'a prince', 'a superhero'],
  // characterSpace: ['an astronaut', 'an alien'],
  friend1: ['friendly monster', 'dinosaur', 'mermaid', 'fairy'],
  friend2: ['an elf'],
  villain: ['ogre', 'ghost', 'warlock', 'wolf', 'scary monster', 'giant', 'vampire'],
  // gender: ['boy', 'girl'],
  // boyName: ['Hendrik', 'Henry', 'John', 'Jack', 'James', 'Theo', 'David', 'Dan', 'Tom'],
}

// Array for examples of the start to the story, i.e., opening phrases
const openingSentence1 = ['A long time ago', 'Once upon a time', 'Far, far away', 'Just the other day', 'It was a dark and stormy night', 
'Long, long ago', 'In a faraway land', 'In a distant land'];
const openingSentence2 = ['There was once a', 'Once there was a', 'There was a'];

// Story locations
const location = {
  locationSpace: ['space station'],
  home: ['magical kingdom', 'big castle', 'small village', 'quaint house', 'lovely cottage'],
  landform: ['black beach', 'purple beach', 'sand dunes', 'cliffs', 'huge rock', 'forest', 'crater', 'swamp', 'sandy coast', 'rocky shore', 'mountain', 'large field', 'valley', 'waterfall', 'volcano', 'canyon', 'desert', 'bay'],
  waterBig: ['blue river', 'green river', 'lake', 'sea'],
  waterSmall: ['hot steam', 'magical mist', 'blue waterfall', 'muddy puddle', 'bright pond', 'beautiful pool', 'blue fog'],
  moreLocations: ['abandoned Water Park', ],
  unknown: ['cave, abandoned mine'],
}

// See/hear something
const sawHeard = ['saw lightning', 'heard thunder', 'saw magical lights in the sky', 'heard a loud roar', 'heard a big explosion', ];

// Action verb
const startledActions = ['jumped', 'woke up', 'ran', 'tripped', 'hopped', 'fell down', 'looked aroud'];
const wonderingActions = ['sat down to think'];

// Story location name
// const locationName = [];

// Person to seek knowledge from
const personWisdom = ['fortune teller', 'witch', 'wizard', 'King', 'Queen', 'sorcerer', 'oracle'];

// Common public places
// const publicPlaces = ['school', 'barn', 'farm', 'bakery', 'orange grove', 'shop', 'church', 'hospital', 'park', 'library', 'bank', 'zoo', 'airport'];

// Transportation
const transport = ['hot air balloon and fly', 'boat and sail', 'dragon and fly', 'horse and ride', 'boat and row', 'unicorn and ride', 'flying horse and fly'];
// const transportSpace = ['rocket', 'spaceship'];

// Missing item
// const missingItem = ['cookies', 'cake', 'pie', 'cheese', 'sock', 'book', 'hat', 'cat'];

// first part: put a character in a setting
// set out on their journey wishing to make their dream come true

// Function that returns a random item from an input array
function randomItem(array) {
  return array[Math.floor(Math.random()*array.length)];
}

// Variables to put into the story
const starter = randomItem(openingSentence1); // starting part of the story
const starter2 = randomItem(openingSentence2); // starting part of the story

const homePlace = randomItem(location.home); // Place the character lives
const locationFeat = randomItem(location.landform); // A geologic feature

const char = randomItem(character.protagonist); // The main character in the story
const badGuy = randomItem(character.villain); // The villain in the story
const friend = randomItem(character.friend1); // A friend in the story

const sounds = randomItem(sawHeard); // Something seen or heard
const actionVerb = randomItem(startledActions); // Action resulting from getting startled

const personAsk = randomItem(personWisdom); // Character to seek advice from
const ride = randomItem(transport); // Transportation

const water1 = randomItem(location.waterSmall); // Small body of water
const water2 = randomItem(location.waterBig); // Large body of water

const stories = [];

// Story template 1
const storyTemplate1 = `${starter} in a  ${homePlace}, ${char} ${actionVerb} when he ${sounds}. 
He went to ask the ${personAsk} what this means. The ${personAsk} said find a ${friend} to bring with you 
on your journey. Get on a ${ride} to an island near a ${locationFeat}. There you will find a cave. 
Go inside and look into the ${water1} to find your answer. But, look out for the ${badGuy}, 
he's very bad, said the ${personAsk} while waving goodbye!`;
// console.log(storyTemplate1);

// Story template 2
const storyTemplate2 = `${starter2} ${homePlace} near a ${water2}. And ${char} lived there. 
When he ${sounds}, he went to get a ${friend}. The ${friend} said let's go ask the ${personAsk} 
what to do. The ${personAsk} told them to go to the abandoned mine in a ${locationFeat} near a ${water2}. 
In that mine, look into the ${water1} and you will find what you need to do next. But be careful, the path 
to get to the mine is said to have a ${badGuy}!`;
// console.log(storyTemplate2);


stories.push(storyTemplate1);
stories.push(storyTemplate2);

console.log(randomItem(stories)); // Printing to the console only one random story from the array of stories

