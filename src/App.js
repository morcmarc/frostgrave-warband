import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import Soldiers, { WAR_HOUND, BARBARIAN } from './data/Soldiers';

const createApprentice = (wizard, name) => ({
  ...wizard,
  name,
  fight: wizard.fight - 2,
  will: wizard.will - 2,
  health: wizard.health - 2,
  isApprentice: true,
});

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

  const [apprentice, setApprentice] = useState(createApprentice(wizard, "Saruman"));

  const [warhound, setWarhound] = useState({
    ...Soldiers[WAR_HOUND],
    name: 'Bingo',
  });

  const [barbarian, setBarbarian] = useState({
    ...Soldiers[BARBARIAN],
    name: 'Conan',
  });

  const [warband, setWarband] = useState({
    wizard,
    apprentice,
    soldiers: [barbarian, warhound]
  });

  return (
    <div className="container">
      <h1 className="title">Wizard Sheet</h1>
      <Wizard wizard={wizard} setWizard={setWizard}/>
      <Wizard wizard={warband.apprentice} setWizard={setApprentice}/>
      {warband.soldiers.map(soldier => <Soldier soldier={soldier} setSoldier={(s) => {}} />)}
    </div>
  );
}

export default App;
