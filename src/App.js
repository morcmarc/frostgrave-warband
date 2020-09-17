import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import { generateWizardName } from './data/Names';
import { addSoldier, createApprentice, levelUp, setApprentice, setSoldier, setWizard, undo, useWarband, VERSIONS } from './state/Warband';
import { ARMOUR, FIGHT, HEALTH, LEVEL, MOVE, SHOOT, WILL, EXPERIENCE } from './data/Misc';

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
  [LEVEL]: 1,
  [EXPERIENCE]: 0,
  wizardType: SIGILIST,
  [MOVE]: 6,
  [FIGHT]: 2,
  [SHOOT]: 0,
  [ARMOUR]: 10,
  [HEALTH]: 14,
  [WILL]: 4,
  itemLimit: 5,
};

function App() {

  const [firstLoad, setFirstLoad] = useState(true);

  const [warband, _setWarband] = useState({
    wizard: { ...DEFAULT_WIZARD },
    apprentice: createApprentice(DEFAULT_WIZARD, generateWizardName()),
    soldiers: []
  });

  const [isLevellingUp, setIsLevellingUp] = useState(false);

  const warbandCost = warband.soldiers.reduce((sum, soldier) => sum + soldier.cost, 0);

  const setWarband = (value) => {
    encodeWarband(value);
    _setWarband(value);
  };

  if (firstLoad) {
    decodeWarband(window.location.hash?.replace('#', ''), _setWarband);
    setFirstLoad(false);
  }

  return (
    <div className="container">
      <h1 className="title">Wizard Sheet</h1>

      <button onClick={() => { setIsLevellingUp(true); }} disabled={isLevellingUp || warband.wizard[EXPERIENCE] < 100}>Level up</button>
      <button onClick={() => { setIsLevellingUp(false); }} hidden={!isLevellingUp}>Cancel</button>
      <button onClick={() => { addSoldier(warband, setWarband); }} hidden={isLevellingUp}>Add Soldier</button>
      <p><b>Warband Cost</b>: {warbandCost}gc</p>

      <Wizard
        wizard={warband.wizard}
        setWizard={(w) => { setWizard(warband, setWarband, w); }}
        isLevellingUp={isLevellingUp}
        levelUp={(attribute) => {
          levelUp(warband, setWarband, attribute);
          setIsLevellingUp(false);
        }} />
      <Wizard
        wizard={warband.apprentice}
        setWizard={(w) => { setApprentice(warband, setWarband, w); }} />

      {warband.soldiers.map(soldier =>
        <Soldier
          key={soldier.uid}
          soldier={soldier}
          setSoldier={(s) => { setSoldier(warband, setWarband, s); }} />)}
    </div>
  );
}

export default App;
