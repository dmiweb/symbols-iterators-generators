import Team from './Team';
import Character from './Character';
import TeamGenerator from './TeamGenerator';
import canIterate from './canIterate';


const char1 = new Character('Лучник', 'Bowman');
const char2 = new Character('Маг', 'Swordsman');


const team = new Team(char1, char2);
const personages = team[Symbol.iterator]();
personages.next().value;
personages.next().value;
personages.next();

const teamGenerator = new TeamGenerator(char1, char2);
const character = teamGenerator[Symbol.iterator]();
character.next().value;
character.next().value;
character.next();

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true