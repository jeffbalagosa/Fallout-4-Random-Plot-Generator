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
  'Ada (Automatron DLC)',
  'Automatron (Automatron DLC)',
  'Old Longfellow (Far Harbour DLC)',
  'Fizztop Grille (Nuka-World DLC)',
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
let loyalty;
let mainSidekick;
let combatStyle;
let protagonist;
let preferredWeapon;
let mainSettlement;
let special = [];

function getRandomSpecial(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate random S.P.E.C.I.A.L. numbers
function specialArrayBuilder() {
  const array = [];
  for (let i = 0; i < 7; i += 1) {
    array.push(getRandomSpecial(1, 28));
  }
  return array;
}

function listPicker(array) {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
}

// build valid special array
function specialBuilder() {
  do {
    special = specialArrayBuilder();
  } while (
    special.reduce(function (a, b) {
      return a + b;
    }, 0) !== 28
  );
}

// check if loyalty is compatible with mainsideKick
function companionChecker() {
  for (let i = 0; i < majorFactions.length; i += 1) {
    if (
      (loyalty === 'The Institue' &&
        (mainSidekick === 'Deacon' || mainSidekick === 'PaladinDance')) ||
      (loyalty === 'The Railroad' &&
        (mainSidekick === 'X6-88' || mainSidekick === 'Paladin Danse')) ||
      (loyalty === 'The Brotherhood of Steel' &&
        (mainSidekick === 'X6-88' || mainSidekick === 'Deacon')) ||
      (loyalty === 'The Minutemen' && mainSidekick === 'X6-88')
    ) {
      mainSidekick = listPicker(companions);
    }
  }
}

function imgSetter() {
  for (let i = 0; i < sex.length; i += 1) {
    if (protagonist === 'Female') {
      $('.character-img img').attr('src', 'img/female-character.png');
    } else {
      $('.character-img img').attr('src', 'img/male-character.png');
    }
  }
}

function diceRoller() {
  loyalty = listPicker(majorFactions);
  mainSidekick = listPicker(companions);
  combatStyle = listPicker(combatStyles);
  protagonist = listPicker(sex);
  preferredWeapon = listPicker(preferredWeapons);
  mainSettlement = listPicker(settlements);

  specialBuilder();

  companionChecker();

  imgSetter();
}

diceRoller();

$('.character-attributes').html(
  `<div>
    <dl>
      <dt>Protagonist</dt>
      <dd>${protagonist}</dd>
      <dt>Loyalty</dt>
      <dd>${loyalty}</dd>
      <dt>Base of Opperations</dt>
      <dd>${mainSettlement}</dd>
      <dt>Main Sidekick</dt>
      <dd>${mainSidekick}</dd>
      <dt>Preferred Weapon Type</dt>
      <dd>${preferredWeapon}</dd>
      <dt>Combat Style</dt>
      <dd>${combatStyle}</dd>
    </dl>
  </div>`
);

$('.character-attributes').append(
  `<div class="w-50 text-right">
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
