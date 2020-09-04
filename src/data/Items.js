import { POTION } from "./ItemTypes";

export const POTION_OF_HEALING = 'Potion of Healing';

export default {
  [POTION_OF_HEALING]: {
    name: 'Potion of Healing',
    itemType: POTION,
    description: 'Restores up to 5 lost Health',
    purchase: 50,
    sell: 25,
  }
}