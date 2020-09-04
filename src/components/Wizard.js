import React from 'react';

import WizardShape from '../shapes/WizardShape';
import Stats from './Stats';
import CharacterHeader from './CharacterHeader';

import './Wizard.css';

const Wizard = ({ wizard }) => {
  return (
    <div className="wizard">
      <CharacterHeader name={wizard.name} wizardType={wizard.wizardType} />
      <Stats character={wizard} />
    </div>);
};

Wizard.propTypes = {
  wizard: WizardShape.isRequired
};

export default Wizard;