import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';
import CharacterFeatures from '../data/CharacterFeatures';
import WizardShape from '../shapes/WizardShape';
import SoldierShape from '../shapes/SoldierShape';

const formatFeatures = features => features.map(feature => CharacterFeatures[feature].name).join(', ');

const formatStat = stat => stat > 0 ? `+${stat}` : stat === 0 ? stat : `-${stat}`;

export const Stats = ({ character }) => {
  const { move, fight, shoot, armour, will, health, level, experience, features, isApprentice } = character;
  return (<div className="stats">
    <span className="highlight">Move</span>
    <span className="highlight">Fight</span>
    <span className="highlight">Shoot</span>
    <span className="highlight">Armour</span>
    <span className="highlight">Will</span>
    <span className="highlight">Health</span>
    
    {level && !isApprentice && <span className="highlight">Level</span>}
    {typeof experience === 'number' && !isApprentice && <span className="highlight">Experience</span>}
    
    {isApprentice && <span className="span-2"></span>}

    {features && <span className="span-2 highlight">Features</span>}

    <span>{move}</span>
    <span>{formatStat(fight)}</span>
    <span>{formatStat(shoot)}</span>
    <span>{armour}</span>
    <span>{formatStat(will)}</span>
    <span>{health}</span>
    
    {level && !isApprentice && <span>{level}</span>}
    {typeof experience === 'number' && !isApprentice && <span>{experience}</span>}
    
    {isApprentice && <span className="span-2"></span>}

    {features && <span className="span-2">{formatFeatures(features)}</span>}
  </div>);
};

Stats.propTypes = {
  character: PropTypes.oneOfType([WizardShape, SoldierShape]).isRequired,
};

export default Stats;