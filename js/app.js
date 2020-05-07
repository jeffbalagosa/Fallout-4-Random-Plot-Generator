const majorFactions = [
  'The Minutemen',
  'The Institute',
  'The Railroad',
  'The Brotherhood of Steel',
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomMajorFaction = getRandomInt(majorFactions.length);

console.log(`Loyalty: ${majorFactions[randomMajorFaction]}`);
