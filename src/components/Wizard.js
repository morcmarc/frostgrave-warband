import React from 'react';
import PropTypes from 'prop-types';

import WizardShape from '../shapes/WizardShape';
import Stats from './Stats';
import CharacterHeader from './CharacterHeader';

import './Wizard.css';

const Wizard = ({ wizard, setWizard }) => (
  <div className="wizard" >
    <CharacterHeader
      name={wizard.name}
      wizardType={wizard.wizardType}
      isApprentice={wizard.isApprentice}
      onNameChange={(name) => setWizard({ ...wizard, name })}
      onTypeChange={(wizardType) => setWizard({ ...wizard, wizardType })} />
    <Stats character={wizard} />
  </div>);

Wizard.propTypes = {
  wizard: WizardShape.isRequired,
  setWizard: PropTypes.func.isRequired,
};

export default Wizard;