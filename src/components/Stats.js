import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';
import CharacterFeatures from '../data/CharacterFeatures';
import WizardShape from '../shapes/WizardShape';
import SoldierShape from '../shapes/SoldierShape';

const formatFeatures = features => features.map(feature => CharacterFeatures[feature].name).join(', ');

export const Stats = ({ character }) => {
  const { move, fight, shoot, armour, will, health, level, experience, features } = character;
  return (<div className="stats">
    <span>Move</span>
    <span>Fight</span>
    <span>Shoot</span>
    <span>Armour</span>
    <span>Will</span>
    <span>Health</span>
    {level && <span>Level</span>}
    {experience && <span>Experience</span>}
    {features && <span className="span-2">Features</span>}

    <span>{move}</span>
    <span>{fight}</span>
    <span>{shoot}</span>
    <span>{armour}</span>
    <span>{will}</span>
    <span>{health}</span>
    {level && <span>{level}</span>}
    {experience && <span>{experience}</span>}
    {features && <span className="span-2">{formatFeatures(features)}</span>}
  </div>);
};

Stats.propTypes = {
  character: PropTypes.oneOfType([WizardShape, SoldierShape]).isRequired,
};

export default Stats;