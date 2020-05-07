const sex = ['Male', 'Female'];
const majorFactions = [
  'The Minutemen',
  'The Institute',
  'The Railroad',
  'The Brotherhood of Steel',
];
const companions = [
  'Cait',
  'Codsworth',
  'Curie',
  'Deacon',
  'Dogmeat',
  'John Hancock',
  'Nick Valentine',
  'Paladin Danse',
  'Piper',
  'Preston Garvey',
  'Robert Joseph MacCready',
  'Strong',
  'X6-88',
];

const combatStyles = ['Stealthy Assassin', 'Guns Blazing!'];

function listPicker(array) {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
}

console.log(`Protagonist: ${listPicker(sex)}`);
const mainSidekick = listPicker(companions);

// check if loyalty is compatible with mainsideKick
let loyalty = listPicker(majorFactions);
for (let i = 0; i < majorFactions.length; i++) {
  if (
    (loyalty === 'The Institute' && mainSidekick === 'Deacon') ||
    mainSidekick === 'Paladin Danse'
  ) {
    loyalty = listPicker(majorFactions);
  } else if (
    (loyalty === 'The Railroad' && mainSidekick === 'X6-88') ||
    mainSidekick === 'Paladin Danse'
  ) {
    loyalty = listPicker(majorFactions);
  } else if (
    (loyalty === 'The Brotherhood of Steel' && mainSidekick === 'X6-88') ||
    mainSidekick === 'Deacon'
  ) {
    loyalty = listPicker(majorFactions);
  }
}

console.log(`Loyalty: ${loyalty}`);
console.log(`Main Sidekick: ${mainSidekick}`);

const combatStyle = listPicker(combatStyles);
console.log(`Combat Style: ${combatStyle}`);
