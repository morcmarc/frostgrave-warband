import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import Soldiers, { WAR_HOUND } from './data/Soldiers';

function App() {
  const [wizard, setWizard] = useState({
    name: 'Gandalf',
    level: 1,
    experience: 0,
    wizardType: SIGILIST,
    move: 6,
    fight: 2,
    shoot: 0,
    armour: 10,
    health: 14,
    will: 4,
    itemLimit: 5,
  });

  const [warhound, setWarhound] = useState({
    ...Soldiers[WAR_HOUND],
    name: 'Bingo',
  });

  return (
    <div className="container">
      <Wizard wizard={wizard}/>
      <Soldier soldier={warhound}/>
    </div>
  );
}

export default App;
