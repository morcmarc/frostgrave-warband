export const ANIMAL = Symbol('Animal');
export const NO_CARRY = Symbol('Cannot carry treasure or items');
export const HAND_WEAPON = Symbol('Hand weapon');
export const DAGGER = Symbol('Dagger');
export const STAFF = Symbol('Staff');

export const features = [ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, STAFF];

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
  }
}