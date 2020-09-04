import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';

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
    will: 4
  });

  return (
    <div className="App">
      <Wizard wizard={wizard}/>
    </div>
  );
}

export default App;
