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
const preferredWeapons = [
  'Unarmed',
  'Mele',
  'Automatic Rifles',
  'Automatic Pistols',
  'Non-Automatic Pistols',
  'Non-Automatic Rifles',
  'Explosives',
  'Heavy Guns',
];
const settlements = [
  'Sanctuary Hills',
  'Red Rocket Truck Stop',
  'Abernathy Farm',
  'Sunshine Tidings Co-op',
  'Starlight Drive In',
  'Tenpines Bluff',
  'Graygarden',
  'Oberland Station',
  'Hangman’s Alley',
  'Egret Tours Marina',
];
const combatStyles = ['Stealthy Assassin', 'Boisterous Murderer!'];
function listPicker(array) {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
}
let loyalty = listPicker(majorFactions);
let mainSidekick = listPicker(companions);
const combatStyle = listPicker(combatStyles);
const protagonist = listPicker(sex);
const preferredWeapon = listPicker(preferredWeapons);
const mainSettlement = listPicker(settlements);

// check if loyalty is compatible with mainsideKick
console.log('before compatibility check');
console.log(mainSidekick);
console.log(loyalty);
for (let i = 0; i < majorFactions.length; i += 1) {
  if (
    (loyalty === 'The Institute' && mainSidekick === 'Deacon') ||
    (loyalty === 'The Institute' && mainSidekick === 'Paladin Danse') ||
    (loyalty === 'The Railroad' && mainSidekick === 'X6-88') ||
    (loyalty === 'The Railroad' && mainSidekick === 'Paladin Danse') ||
    (loyalty === 'The Brotherhood of Steel' && mainSidekick === 'X6-88') ||
    (loyalty === 'The Brotherhood of Steel' && mainSidekick === 'Deacon') ||
    (loyalty === 'The Minutemen' && mainSidekick === 'X6-88')
  ) {
    mainSidekick = listPicker(companions);
  }
}
console.log('after compatibility check');
console.log(mainSidekick);
console.log(loyalty);

for (let i = 0; i < sex.length; i += 1) {
  if (protagonist === 'Female') {
    $('.character-img').html(
      `<img class="card-img-top" src="img/female-character.png" alt="Fallout 4 Character"/>`
    );
  } else {
    $('.character-img').html(
      `<img class="card-img-top" src="img/male-character.png" alt="Fallout 4 Character"/>`
    );
  }
}

$('.random-plot').html(
  `<dt>Protagonist: </dt>
  <dd>${protagonist}</dd>
  <dt>Loyalty: </dt>
  <dd>${loyalty}</dd>
  <dt>Base of Opperations: </dt>
  <dd>${mainSettlement}</dd>
  <dt>Main Sidekick: </dt>
  <dd>${mainSidekick}</dd>
  <dt>Preferred Weapon Type: </dt>
  <dd>${preferredWeapon}</dd>
  <dt>Combat Style: </dt>
  <dd>${combatStyle}</dd>`
);
