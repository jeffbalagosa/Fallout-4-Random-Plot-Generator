function getRandomSpecial(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listPicker(array) {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
}

// generate random S.P.E.C.I.A.L. numbers
function specialArrayBuilder() {
  const array = [];
  for (let i = 0; i < 7; i += 1) {
    array.push(getRandomSpecial(1, 28));
  }
  return array;
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
  if (
    (loyalty === 'The Institue' &&
      (mainSidekick === 'Deacon' || mainSidekick === 'Paladin Danse')) ||
    (loyalty === 'The Railroad' &&
      (mainSidekick === 'X6-88' || mainSidekick === 'Paladin Danse')) ||
    (loyalty === 'The Brotherhood of Steel' &&
      (mainSidekick === 'X6-88' || mainSidekick === 'Deacon')) ||
    (loyalty === 'The Minutemen' && mainSidekick === 'X6-88')
  ) {
    mainSidekick = listPicker(companions);
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

function postBuild() {
  $('.character-attributes').html(
    `<div>
      <dl>
        <dt>Protagonist</dt>
        <dd>${protagonist}</dd>
        <dt>Main Sidekick</dt>
        <dd>${mainSidekick}</dd>
        <dt>Faction Loyalty</dt>
        <dd>${loyalty}</dd>
        <dt>Base of Opperations</dt>
        <dd>${mainSettlement}</dd>
        <dt>Preferred Weapon Type</dt>
        <dd>${preferredWeapon}</dd>
        <dt>Combat Style</dt>
        <dd>${combatStyle}</dd>
      </dl>
    </div>
    <div class="w-50 text-right">
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
  postBuild();
}

diceRoller();

$('.re-roll').on('click', function () {
  diceRoller();
});
