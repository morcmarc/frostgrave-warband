import { ANIMAL, NO_CARRY, HAND_WEAPON } from "./CharacterFeatures";

export const WAR_HOUND = Symbol('War Hound');
export const THUG = Symbol('Thug');

export default {
  [WAR_HOUND]: {
    name: 'War Hound',
    move: 8,
    fight: 1,
    shoot: 0,
    armour: 10,
    will: 2,
    health: 8,
    cost: 10,
    features: [ANIMAL, NO_CARRY]
  },
  [THUG]: {
    name: 'Thug',
    move: 6,
    fight: 2,
    shoot: 0,
    armour: 10,
    will: -1,
    health: 10,
    cost: 0,
    features: [HAND_WEAPON]
  }
};
