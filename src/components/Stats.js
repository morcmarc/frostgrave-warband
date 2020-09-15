import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';
import CharacterFeatures from '../data/CharacterFeatures';
import WizardShape from '../shapes/WizardShape';
import SoldierShape from '../shapes/SoldierShape';

const formatFeatures = features => features.map(feature => CharacterFeatures[feature].name).join(', ');

const formatStat = stat => stat >= 0 ? `+${stat}` : stat === 0 ? stat : `${stat}`;

export const Stats = ({ character }) => {
  const { move, fight, shoot, armour, will, health, level, experience, features, isApprentice } = character;
  return (<div className="stats">
    <span className="highlight centered">Move</span>
    <span className="highlight centered">Fight</span>
    <span className="highlight centered">Shoot</span>
    <span className="highlight centered">Armour</span>
    <span className="highlight centered">Will</span>
    <span className="highlight centered">Health</span>
    
    {level && !isApprentice && <span className="highlight centered">Level</span>}
    {typeof experience === 'number' && !isApprentice && <span className="highlight centered">Experience</span>}
    
    {isApprentice && <span className="span-2"></span>}

    {features && <span className="span-2 highlight">Features</span>}

    <span className="centered">{move}</span>
    <span className="centered">{formatStat(fight)}</span>
    <span className="centered">{formatStat(shoot)}</span>
    <span className="centered">{armour}</span>
    <span className="centered">{formatStat(will)}</span>
    <span className="centered">{health}</span>
    
    {level && !isApprentice && <span className="centered">{level}</span>}
    {typeof experience === 'number' && !isApprentice && <span className="centered">{experience}</span>}
    
    {isApprentice && <span className="span-2"></span>}

    {features && <span className="span-2">{formatFeatures(features)}</span>}
  </div>);
};

Stats.propTypes = {
  character: PropTypes.oneOfType([WizardShape, SoldierShape]).isRequired,
};

export default Stats;