import { pickAFewRandomUniquely, randInt } from "../utils/random";

const modifiableChallenges = [
  'One hand tied behind your back',
  'Drinking mountain dew through your nose',
  'Tanking blizzard',
  'Sleep deprived',
  'With sound off',
  'With gshade shaders obnoxiously on',
  'Streaming while providing commentary to zero viewers',
  'Cosplaying as a NPC',
  'Using your feet for at least one control',
  'Your ring finger is tied down on your left hand',
  "You have a thick juicy bandaid on the joint of your left hand's finger",
  'Must mismatch elements when there is elemental weakness',
  'No gateship drink',
  'No tree buff',
  'Take matoi-buff',
  'When bubbles appear around sodam, destroy all bubbles immediately',
  'Spend a scrape doll at least once',
  "With a weapon camo you havn't ran with before",
  'Switch to another weapon series on phase change, must be different one you have not used yet in this run.',
  'Using 1 PA from an all class weapon',
  'Always attacking Sodam from behind',
  'Wearing a bread mask',
  'Have a real life cat sit on your table watching you play the game',
  'Finish exactly 1 second off from the timeout',
  'Might boost on all weapons and units',
  'At least 1 noble, 1 elegant, 1 graceful, and 1 grand augment spread on your units/weapons',
  'Maximum weapon pot level is 1',
  'Recover PP using ONLY normals',
  'Equipment rings banned, including attached to units',
  "PP battery or other PP recovery weapons banned",
  "PP battery or other PP recovery weapons banned and only S2+S3 Lucent Adversity must be affixed to main weapon (genon banned)",
  "No Sub-pallette",
  "2-button type weapon pallete",
  "Build-up PAs banned",
  "Custom techs/PAs banned, remove them for run",
  "Must endure a blizzard attack at least once",
  "No food buffs",
  "No timed abilities",
  "No timed abilities that nullify status effects",
  "No custom techs or custom PAs (Use only their normal variant)",
  "Critical strike ring banned (including added to units)"
];

export const generateAdditionalChallenges = () => {
  return pickAFewRandomUniquely(modifiableChallenges, randInt(2, 6));
}