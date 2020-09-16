export const CHRONOMANCER = 'Chronomancer';
export const ELEMENTALIST = 'Elementalist';
export const ENCHANTER = 'Enchanter';
export const ILLUSIONIST = 'Illusionist';
export const NECROMANCER = 'Necromancer';
export const SIGILIST = 'Sigilist';
export const SOOTHSAYER = 'Soothsayer';
export const SUMMONER = 'Summoner';
export const THAUMATURGE = 'Thaumaturge';
export const WITCH = 'Witch';

export const wizardTypes = [CHRONOMANCER, ELEMENTALIST, ENCHANTER, ILLUSIONIST, NECROMANCER, SIGILIST, SOOTHSAYER, SUMMONER, THAUMATURGE, WITCH];

export const ALIGNED_MODIFIER = 2;
export const NEUTRAL_MODIFIER = 4;
export const OPPOSED_MODIFIER = 6;

export default {
  [CHRONOMANCER]: {
    name: 'Chronomancer',
    aligned: [NECROMANCER, SOOTHSAYER, ELEMENTALIST],
    neutral: [THAUMATURGE, SUMMONER, ILLUSIONIST, WITCH, SIGILIST],
    opposed: [ENCHANTER],
  },
  [ELEMENTALIST]: {
    name: 'Elementalist',
    aligned: [SUMMONER, ENCHANTER, CHRONOMANCER],
    neutral: [THAUMATURGE, SOOTHSAYER, SIGILIST, WITCH, NECROMANCER],
    opposed: [ILLUSIONIST],
  },
  [ENCHANTER]: {
    name: 'Enchanter',
    aligned: [WITCH, SIGILIST, ELEMENTALIST],
    neutral: [NECROMANCER, ILLUSIONIST, SUMMONER, SOOTHSAYER, THAUMATURGE],
    opposed: [CHRONOMANCER],
  },
  [ILLUSIONIST]: {
    name: 'Illusionist',
    aligned: [SOOTHSAYER, SIGILIST, THAUMATURGE],
    neutral: [NECROMANCER, WITCH, CHRONOMANCER, SUMMONER, ENCHANTER],
    opposed: [ELEMENTALIST],
  },
  [NECROMANCER]: {
    name: 'Necromancer',
    aligned: [WITCH, CHRONOMANCER, SUMMONER],
    neutral: [ELEMENTALIST, SIGILIST, ILLUSIONIST, ENCHANTER, SOOTHSAYER],
    opposed: [THAUMATURGE],
  },
  [SIGILIST]: {
    name: 'Sigilist',
    aligned: [THAUMATURGE, ILLUSIONIST, ENCHANTER],
    neutral: [NECROMANCER, ELEMENTALIST, WITCH, CHRONOMANCER, SOOTHSAYER],
    opposed: [SUMMONER],
  },
  [SOOTHSAYER]: {
    name: 'Soothsayer',
    aligned: [THAUMATURGE, CHRONOMANCER, ILLUSIONIST],
    neutral: [ENCHANTER, SUMMONER, NECROMANCER, ELEMENTALIST, SIGILIST],
    opposed: [WITCH],
  },
  [SUMMONER]: {
    name: 'Summoner',
    aligned: [NECROMANCER, WITCH, ELEMENTALIST],
    neutral: [SOOTHSAYER, ENCHANTER, ILLUSIONIST, CHRONOMANCER, THAUMATURGE],
    opposed: [SIGILIST],
  },
  [THAUMATURGE]: {
    name: 'Thaumaturge',
    aligned: [SOOTHSAYER, SIGILIST, ILLUSIONIST],
    neutral: [ELEMENTALIST, WITCH, CHRONOMANCER, SUMMONER, ENCHANTER],
    opposed: [NECROMANCER],
  },
  [WITCH]: {
    name: 'Witch',
    aligned: [ENCHANTER, NECROMANCER, SUMMONER],
    neutral: [THAUMATURGE, ILLUSIONIST, ELEMENTALIST, SIGILIST, CHRONOMANCER],
    opposed: [SOOTHSAYER],
  }
};