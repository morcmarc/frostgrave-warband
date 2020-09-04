import React from 'react';
import WizardShape from '../shapes/WizardShape';
import WizardTypes from '../data/WizardTypes';

const Wizard = ({ wizard }) => {
  return <div>{WizardTypes[wizard.wizardType].name}</div>;
};

Wizard.propTypes = {
  wizard: WizardShape.isRequired
};

export default Wizard;