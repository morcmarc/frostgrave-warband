export const ILLUSIONIST = 'Illusionist';
export const ELEMENTALIST = 'Elementalist';
export const NECROMANCER = 'Necromancer';
export const SIGILIST = 'Sigilist';

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
  },
  [ELEMENTALIST]: {
    name: 'Elementalist',
    aligned: [ELEMENTALIST],
    neutral: [],
    opposing: [],
  },
  [NECROMANCER]: {
    name: 'Nercomancer',
    aligned: [ELEMENTALIST],
    neutral: [],
    opposing: [],
  },
};