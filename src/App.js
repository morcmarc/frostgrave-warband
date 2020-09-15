import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import Soldiers, { THIEF } from './data/Soldiers';
import { generateWizardName, generateSoldierName } from './data/Names';

const createApprentice = (wizard, name) => ({
  ...wizard,
  name,
  fight: wizard.fight - 2,
  will: wizard.will - 2,
  health: wizard.health - 2,
  isApprentice: true,
});

const addSoldier = (warband, setWarband) => {
  if (warband.soldiers.length === 8) {
    return;
  }
  const newSoldier = {
    ...Soldiers[THIEF],
    uid: uuidv4(),
    name: generateSoldierName(),
  };
  warband.soldiers.push(newSoldier);
  setWarband({
    ...warband,
  });
};

const findSoldierIdx = (warband, uid) => warband.soldiers.findIndex(s => s.uid === uid);

const setSoldier = (warband, setWarband, newSoldier) => {
  const soldierIdx = findSoldierIdx(warband, newSoldier.uid);

  if (warband.soldiers[soldierIdx].soldierType !== newSoldier.soldierType) {
    warband.soldiers[soldierIdx] = {
      ...Soldiers[newSoldier.soldierType],
      uid: newSoldier.uid,
      name: newSoldier.name,
    };
  } else {
    warband.soldiers[soldierIdx] = newSoldier;
  }

  setWarband({
    ...warband,
  });
};

const encodeWarband = (warband) => {
  const encoded = btoa(JSON.stringify(warband));
  window.location.hash = encoded;
};

const decodeWarband = (encoded, setWarband) => {
  const decoded = atob(encoded);
  try {
    setWarband(JSON.parse(decoded));
  } catch(e) {
    console.error(e);
  }
}

function App() {

  const [firstLoad, setFirstLoad] = useState(true);

  const [wizard, setWizard] = useState({
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
  });

  const [apprentice, setApprentice] = useState(createApprentice(wizard, generateWizardName()));

  const [warband, _setWarband] = useState({
    wizard,
    apprentice,
    soldiers: []
  });

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
      <Wizard wizard={wizard} setWizard={setWizard} />
      <Wizard wizard={warband.apprentice} setWizard={setApprentice} />
      <button onClick={() => { addSoldier(warband, setWarband); }}>Add Soldier</button>
      {warband.soldiers.map(soldier => <Soldier soldier={soldier} setSoldier={(s) => { setSoldier(warband, setWarband, s) }} />)}
    </div>
  );
}

export default App;
