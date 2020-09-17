import PropTypes from 'prop-types';
import CharacterShape from './CharacterShape';
import { wizardTypes } from '../data/WizardTypes';
import { EXPERIENCE, LEVEL } from '../data/Misc';

export default PropTypes.shape({
  ...CharacterShape,
  wizardType: PropTypes.oneOf(wizardTypes),
  [LEVEL]: PropTypes.number.isRequired,
  [EXPERIENCE]: PropTypes.number.isRequired,
});