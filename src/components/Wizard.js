import React from 'react';
import PropTypes from 'prop-types';

import WizardShape from '../shapes/WizardShape';
import Stats from './Stats';
import CharacterHeader from './CharacterHeader';

import './Wizard.css';
import { EXPERIENCE } from '../data/Misc';

const Wizard = ({ wizard, setWizard, isLevellingUp, levelUp, onExperienceChange }) => (
  <div className="wizard" >
    <CharacterHeader
      name={wizard.name}
      wizardType={wizard.wizardType}
      isApprentice={wizard.isApprentice}
      onNameChange={(name) => setWizard({ ...wizard, name })}
      onTypeChange={(wizardType) => setWizard({ ...wizard, wizardType })} />
    <Stats 
      character={wizard} 
      isLevellingUp={isLevellingUp}
      levelUp={levelUp}
      onExperienceChange={(xp) => setWizard({ ...wizard, [EXPERIENCE]: parseInt(xp) })} />
  </div>);

Wizard.propTypes = {
  wizard: WizardShape.isRequired,
  setWizard: PropTypes.func.isRequired,
  isLevellingUp: PropTypes.bool,
  levelUp: PropTypes.func,
};

export default Wizard;