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
  'Fisticuffs',
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
  'Sommerville Place',
  'Outpost Zimonja',
  'Covenant',
  'Taffington Boathouse',
  'Greentop Nursery',
  'The Slog',
  'Finch Farm',
  'Country Crossing',
  'Coastal Cottage',
  'Kingsport Lighthouse',
  'Croup Manor',
  'Nordhagen Beach',
  'Jamiaca Plain',
  'Murkwater Construction Site',
  'Warwick Homestead',
  'Spectacle Island',
  'The Castle',
  'Bunker Hill',
  'Boston Airport',
  'The Mechanist’s Lair (Automatron DLC)',
  'Longfellow’s Cabin (Far Harbour DLC)',
  'National Park Visitor’s Centre (Far Harbour DLC)',
  'Dalton Farm (Far Harbour DLC)',
  'Echo Lake Lumber (Far Harbour DLC)',
  'Vault 88 (Vault-Tec Workshop DLC)',
  'Nuka-World Red Rocket (Nuka-World DLC)',
];
const combatStyles = ['Stealthy Assassin', 'Boisterous Murderer!'];

function getRandomSpecial(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate random S.P.E.C.I.A.L. numbers
function specialArrayBuilder() {
  const array = [];
  for (let i = 0; i < 7; i++) {
    array.push(getRandomSpecial(1, 28));
  }
  return array;
}

let special = [];

do {
  special = specialArrayBuilder();
} while (
  special.reduce(function (a, b) {
    return a + b;
  }, 0) !== 28
);

console.log(special);
console.log(
  `Total Special = ${special.reduce(function (a, b) {
    return a + b;
  }, 0)}`
);

function listPicker(array) {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
}
const loyalty = listPicker(majorFactions);
let mainSidekick = listPicker(companions);
const combatStyle = listPicker(combatStyles);
const protagonist = listPicker(sex);
const preferredWeapon = listPicker(preferredWeapons);
const mainSettlement = listPicker(settlements);

// check if loyalty is compatible with mainsideKick
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

$('.character-attributes').html(
  `<div>
    <dl>
      <dt>Protagonist </dt>
      <dd>${protagonist}</dd>
      <dt>Loyalty </dt>
      <dd>${loyalty}</dd>
      <dt>Base of Opperations </dt>
      <dd>${mainSettlement}</dd>
      <dt>Main Sidekick </dt>
      <dd>${mainSidekick}</dd>
      <dt>Preferred Weapon Type </dt>
      <dd>${preferredWeapon}</dd>
      <dt>Combat Style </dt>
      <dd>${combatStyle}</dd>
    </dl>
  </div>`
);

$('.character-attributes').append(
  `<div>
    <dl>
      <dt>S.P.E.C.I.A.L.</dt>
      <dd>Strength: ${special[0]}</dd>
      <dd>Perception: ${special[1]}</dd>
      <dd>Endurance: ${special[2]}</dd>
      <dd>Charisma: ${special[3]}</dd>
      <dd>Intelligence: ${special[4]}</dd>
      <dd>Agility: ${special[5]}</dd>
      <dd>Luck: ${special[6]}</dd>
    </dl>
  </div>`
);
