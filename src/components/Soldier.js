import React from 'react';

import SoldierShape from '../shapes/SoldierShape';
import Stats from './Stats';
import CharacterHeader from './CharacterHeader';

import './Soldier.css';

const Soldier = ({ soldier, setSoldier }) => {
  return (
    <div className="solider">
      <CharacterHeader 
      name={soldier.name} 
      soldierType={soldier.soldierType} 
      onNameChange={(name) => setSoldier({ ...soldier, name })}
      onTypeChange={(soldierType) => setSoldier({ ...soldier, soldierType })}/>
      <Stats character={soldier} />
    </div>);
};

Soldier.propTypes = {
  soldier: SoldierShape.isRequired
};

export default Soldier;