import React from 'react';
import PropTypes from 'prop-types';

import './CharacterHeader.css';
import WizardTypes, { wizardTypes } from '../data/WizardTypes';
import Soldiers, { soldierTypes } from '../data/Soldiers';

const getTitle = (wizardType, soldierType, isApprentice) => {
  if (isApprentice) {
    return 'Apprentice';
  }
  if (wizardType) {
    return 'Wizard';
  }
  if (soldierType) {
    return 'Solider';
  }
};

const getType = (wizardType) => wizardType ? 'School' : 'Type';

export const CharacterHeader = ({ name, wizardType, soldierType, isApprentice }) => {
  return <div className="characterHeader">
    <span className="blue highlight">{getTitle(wizardType, soldierType, isApprentice)}</span>
    <span>{name}</span>
    <span className="blue highlight">{getType(wizardType)}</span>
    <span>{wizardType ? WizardTypes[wizardType].name : Soldiers[soldierType].name}</span>
  </div>
};

CharacterHeader.propTypes = {
  name: PropTypes.string,
  wizardType: PropTypes.oneOf(wizardTypes),
  isApprentice: PropTypes.bool,
  soldierType: PropTypes.oneOf(soldierTypes),
};

export default CharacterHeader;