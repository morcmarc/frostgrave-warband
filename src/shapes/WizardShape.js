import PropTypes from 'prop-types';
import CharacterShape from './CharacterShape';
import { wizardTypes } from '../data/WizardTypes';

export default PropTypes.shape({
  ...CharacterShape,
  wizardType: PropTypes.oneOf(wizardTypes),
  level: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
});