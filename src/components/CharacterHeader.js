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
    return 'Soldier';
  }
};

const getType = (wizardType) => wizardType ? 'School' : 'Type';

const formatSoldierType = soldierType => `${Soldiers[soldierType].name}${Soldiers[soldierType].isSpecialist ? '*' : ''} (${Soldiers[soldierType].cost}gc)`;

const WizardTypeSelector = ({ wizardType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={wizardType}>
    {wizardTypes.map(wt => <option key={wt} value={wt}>{WizardTypes[wt].name}</option>)}
  </select>);

const SoldierTypeSelector = ({ soldierType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={soldierType}>
    {soldierTypes.map(st => <option key={st} value={st}>{formatSoldierType(st)}</option>)}
  </select>);

export const CharacterHeader = ({ name, wizardType, soldierType, isApprentice, onNameChange, onTypeChange }) => {
  return <div className="characterHeader">
    <span className="blue highlight">{getTitle(wizardType, soldierType, isApprentice)}</span>
    <span className={isApprentice ? 'span-full' : ''}><input onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} /></span>
    {!isApprentice && <span className="blue highlight">{getType(wizardType)}</span>}
    {wizardType && !isApprentice && <span><WizardTypeSelector wizardType={wizardType} onTypeChange={onTypeChange} /></span>}
    {!wizardType && <span><SoldierTypeSelector soldierType={soldierType} onTypeChange={onTypeChange}/></span>}
  </div>
};

CharacterHeader.propTypes = {
  name: PropTypes.string,
  wizardType: PropTypes.oneOf(wizardTypes),
  isApprentice: PropTypes.bool,
  soldierType: PropTypes.oneOf(soldierTypes),
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default CharacterHeader;