import PropTypes from 'prop-types';
import { ARMOUR, FIGHT, HEALTH, MOVE, SHOOT, WILL } from '../data/Misc';

export default {
  name: PropTypes.string,
  [MOVE]: PropTypes.number.isRequired,
  [FIGHT]: PropTypes.number.isRequired,
  [SHOOT]: PropTypes.number.isRequired,
  [ARMOUR]: PropTypes.number.isRequired,
  [WILL]: PropTypes.number.isRequired,
  [HEALTH]: PropTypes.number.isRequired,
  itemLimit: PropTypes.number.isRequired,
  items: PropTypes.array
};
