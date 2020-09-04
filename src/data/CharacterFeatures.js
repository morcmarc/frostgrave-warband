import { POTION_OF_HEALING } from "./Items";

export const ANIMAL = 'Animal';
export const NO_CARRY = 'Cannot carry treasure or items';
export const HAND_WEAPON = 'Hand weapon';
export const DAGGER = 'Dagger';
export const STAFF = 'Staff';
export const LEATHER_ARMOUR = 'Leather armour';
export const CROSSBOW = 'Crossbow';
export const TWO_HANDED_WEAPON = 'Two-handed weapon';
export const SHIELD = 'Shield';
export const MAIL_ARMOUR = 'Mail armour';
export const START_WITH_HEALING_POTION = 'Starts each game carrying a healing potion';
export const BOW = 'Bow';
export const UNARMED = 'Unarmed';

export const features = [ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, STAFF, LEATHER_ARMOUR, CROSSBOW, TWO_HANDED_WEAPON, SHIELD, MAIL_ARMOUR, START_WITH_HEALING_POTION, BOW, UNARMED];

export default {
  [ANIMAL]: {
    name: 'Animal'
  },
  [NO_CARRY]: {
    name: 'Cannot carry treasure or items'
  },
  [HAND_WEAPON]: {
    name: 'Hand Weapon'
  },
  [DAGGER]: {
    name: 'Dagger',
    damage: -1
  },
  [STAFF]: {
    name: "Staff",
    damage: -1,
    notes: '-1 damage modifier to enemy\'s attacks in hand-to-hand combat'
  },
  [LEATHER_ARMOUR]: {
    name: 'Leather armour',
    armour: 1,
  },
  [CROSSBOW]: {
    name: 'Crossbow',
    damage: 2,
    notes: 'Load and fire as separate actions, may reload in place of mandatory movement, 24" maximum range'
  },
  [TWO_HANDED_WEAPON]: {
    name: 'Two-handed weapon',
    damage: 2,
  },
  [SHIELD]: {
    name: 'Shield',
    armour: 1,
  },
  [MAIL_ARMOUR]: {
    name: 'Mail armour',
    armour: 2
  },
  [START_WITH_HEALING_POTION]: {
    name: 'Starts each game carrying a healing potion',
    item: POTION_OF_HEALING,
  },
  [BOW]: {
    name: 'Bow',
    notes: ':oad and fire as a single action, 24" maximum range'
  },
  [UNARMED]: {
    name: 'Unarmed',
    notes: '-2 to effective Fight stat'
  }
}