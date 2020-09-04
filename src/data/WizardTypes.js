export const ILLUSIONIST = Symbol('Illusionist');
export const ELEMENTALIST = Symbol('Elementalist');
export const NECROMANCER = Symbol('Necromancer');
export const SIGILIST = Symbol('Sigilist');

export const wizardTypes = [ILLUSIONIST, ELEMENTALIST, NECROMANCER, SIGILIST];

export default {
  [ILLUSIONIST]: {
    name: 'Illusionist',
    aligned: [ELEMENTALIST],
    neutral: [],
    opposing: [],
  },
  [SIGILIST]: {
    name: 'Sigilist',
    aligned: [ELEMENTALIST],
    neutral: [],
    opposing: [],
  }
};