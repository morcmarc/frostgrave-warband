import PropTypes from 'prop-types';

import CharacterShape from "./CharacterShape";
import { features } from '../data/CharacterFeatures';
import { FEATURES } from '../data/Misc';

export default PropTypes.shape({
  ...CharacterShape,
  isSpecialist: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
  [FEATURES]: PropTypes.arrayOf(PropTypes.oneOf(features))
})