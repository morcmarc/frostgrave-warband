import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';
import CharacterFeatures from '../data/CharacterFeatures';
import WizardShape from '../shapes/WizardShape';
import SoldierShape from '../shapes/SoldierShape';
import { ARMOUR, FEATURES, FIGHT, HEALTH, LEVEL, MOVE, SHOOT, WILL, EXPERIENCE, ATTRIBUTES } from '../data/Misc';

const formatFeatures = features => features.map(feature => CharacterFeatures[feature].name).join(', ');

const formatStat = stat => stat >= 0 ? `+${stat}` : stat === 0 ? stat : `${stat}`;

const hasReachedMaximum = (attribute, value) => value >= ATTRIBUTES[attribute].max;

export const Stats = ({ character, isLevellingUp, levelUp, onExperienceChange }) => {
  const {
    [MOVE]: move,
    [FIGHT]: fight,
    [SHOOT]: shoot,
    [ARMOUR]: armour,
    [WILL]: will,
    [HEALTH]: health,
    [LEVEL]: level,
    [EXPERIENCE]: experience,
    [FEATURES]: features,
    isApprentice } = character;
  return (<div className="stats">
    <span className="highlight centered statName--move">Move</span>
    <span className="highlight centered statName--fight">Fight</span>
    <span className="highlight centered statName--shoot">Shoot</span>
    <span className="highlight centered statName--armour">Armour</span>
    <span className="highlight centered statName--will">Will</span>
    <span className="highlight centered statName--health">Health</span>

    {level && !isApprentice && <span className="highlight centered">Level</span>}
    {typeof experience === 'number' && !isApprentice && <span className="highlight centered">Experience</span>}
    {isApprentice && <span className="span-2"></span>}
    {features && <span className="span-2 highlight">Features</span>}
    <span className="centered">
      {move}
    </span>
    <span className="centered">
      {formatStat(fight)}
      {isLevellingUp && <button
        hidden={hasReachedMaximum(FIGHT, fight)}
        onClick={() => levelUp(FIGHT)}
        className="improve">&#8679;</button>}
    </span>
    <span className="centered">
      {formatStat(shoot)}
      {isLevellingUp && <button
        hidden={hasReachedMaximum(SHOOT, shoot)}
        onClick={() => levelUp(SHOOT)}
        className="improve">&#8679;</button>}
    </span>
    <span className="centered">
      {armour}
    </span>
    <span className="centered">
      {formatStat(will)}
      {isLevellingUp && <button
        hidden={hasReachedMaximum(WILL, will)}
        onClick={() => levelUp(WILL)}
        className="improve">&#8679;</button>}
    </span>
    <span className="centered">
      {health}
      {isLevellingUp && <button
        hidden={hasReachedMaximum(HEALTH, health)}
        onClick={() => levelUp(HEALTH)}
        className="improve">&#8679;</button>}
    </span>
    {level && !isApprentice && <span className="centered">{level}</span>}
    {typeof experience === 'number' && !isApprentice &&
      <span className="centered">
        <input
          onChange={(event) => onExperienceChange(event.target.value)}
          type="text"
          value={experience} />
      </span>}
    {isApprentice && <span className="span-2"></span>}
    {features && <span className="span-2">{formatFeatures(features)}</span>}
  </div>);
};

Stats.propTypes = {
  character: PropTypes.oneOfType([WizardShape, SoldierShape]).isRequired,
  isLevellingUp: PropTypes.bool,
  levelUp: PropTypes.func,
  onExperienceChange: PropTypes.func,
};

export default Stats;