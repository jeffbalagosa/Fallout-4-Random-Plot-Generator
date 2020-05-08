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
const mainSidekick = listPicker(companions);
let loyalty = listPicker(majorFactions);
const combatStyle = listPicker(combatStyles);
const protagonist = listPicker(sex);

function listPicker(array) {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
}

// check if loyalty is compatible with mainsideKick

for (let i = 0; i < majorFactions.length; i += 1) {
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

for (let i = 0; i < sex.length; i += 1) {
  if (protagonist === 'Female') {
    $('.character-img').html(
      `<img class="card-img-top shadow" src="img/female-character.png" alt="Fallout 4 Character"/>`
    );
  } else {
    $('.character-img').html(
      `<img class="card-img-top shadow" src="img/male-character.png" alt="Fallout 4 Character"/>`
    );
  }
}

$('.random-plot').html(
  `<dt>Protagonist: </dt><dd>${protagonist}</dd><dt>Loyalty: </dt><dd>${loyalty}</dd><dt>Main Sidekick: </dt><dd>${mainSidekick}</dd><dt>Combat Style: </dt><dd>${combatStyle}</dd>`
);
