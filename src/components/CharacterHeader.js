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

const formatSoldierType = soldierType => `${Soldiers[soldierType].name}${Soldiers[soldierType].isSpecialist ? '*' : ''} (${Soldiers[soldierType].cost}gc)`;

const WizardTypeSelector = ({ wizardType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={wizardType}>
    {wizardTypes.map(wt => <option value={wt}>{WizardTypes[wt].name}</option>)}
  </select>);

const SoldierTypeSelector = ({ soldierType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={soldierType}>
    {soldierTypes.map(st => <option value={st}>{formatSoldierType(st)}</option>)}
  </select>);

export const CharacterHeader = ({ name, wizardType, soldierType, isApprentice, onNameChange, onTypeChange }) => {
  return <div className="characterHeader">
    <span className="blue highlight">{getTitle(wizardType, soldierType, isApprentice)}</span>
    <input onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} />
    <span className="blue highlight">{getType(wizardType)}</span>
    {wizardType && <WizardTypeSelector wizardType={wizardType} onTypeChange={onTypeChange} />}
    {!wizardType && <SoldierTypeSelector soldierType={soldierType} onTypeChange={onTypeChange}/>}
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