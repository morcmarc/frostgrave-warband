import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import { generateWizardName } from './data/Names';
import { addSoldier, createApprentice, setApprentice, setSoldier, setWizard } from './state/Warband';

const encodeWarband = (warband) => {
  const encoded = btoa(JSON.stringify(warband));
  window.location.hash = encoded;
};

const decodeWarband = (encoded, setWarband) => {
  const decoded = atob(encoded);
  try {
    setWarband(JSON.parse(decoded));
  } catch (e) {
    console.error(e);
  }
}

const DEFAULT_WIZARD = {
  name: generateWizardName(),
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
};

function App() {

  const [firstLoad, setFirstLoad] = useState(true);

  const [warband, _setWarband] = useState({
    wizard: { ...DEFAULT_WIZARD },
    apprentice: createApprentice(DEFAULT_WIZARD, generateWizardName()),
    soldiers: []
  });

  const warbandCost = warband.soldiers.reduce((sum, soldier) => sum + soldier.cost, 0);

  const setWarband = (value) => {
    encodeWarband(value);
    _setWarband(value);
  };

  if (firstLoad) {
    decodeWarband(window.location.hash?.replace('#', ''), setWarband);
    setFirstLoad(false);
  }

  return (
    <div className="container">
      <h1 className="title">Wizard Sheet</h1>
      <Wizard
        wizard={warband.wizard}
        setWizard={(w) => { setWizard(warband, setWarband, w); }} />
      <Wizard
        wizard={warband.apprentice}
        setWizard={(w) => { setApprentice(warband, setWarband, w); }} />

      <button onClick={() => { addSoldier(warband, setWarband); }}>Add Soldier</button>
      <p><b>Warband Cost</b>: {warbandCost}gc</p>
      
      {warband.soldiers.map(soldier =>
        <Soldier
          key={soldier.uid}
          soldier={soldier}
          setSoldier={(s) => { setSoldier(warband, setWarband, s); }} />)}
    </div>
  );
}

export default App;
