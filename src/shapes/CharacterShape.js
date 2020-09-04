import PropTypes from 'prop-types';

export default {
  name: PropTypes.string,
  move: PropTypes.number.isRequired,
  fight: PropTypes.number.isRequired,
  shoot: PropTypes.number.isRequired,
  armour: PropTypes.number.isRequired,
  will: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired,
  itemLimit: PropTypes.number.isRequired,
  items: PropTypes.array
};
