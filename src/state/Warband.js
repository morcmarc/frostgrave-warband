import { v4 as uuidv4 } from 'uuid';
import { EXPERIENCE, FIGHT, HEALTH, LEVEL, SHOOT, WILL } from '../data/Misc';

import { generateSoldierName } from "../data/Names";
import Soldiers, { THIEF } from "../data/Soldiers";

export const createApprentice = (wizard, name) => ({
  ...wizard,
  name,
  [FIGHT]: wizard[FIGHT] - 2,
  [SHOOT]: wizard[SHOOT] - 2 > 0 ? wizard[SHOOT] - 2 : 0,
  [WILL]: wizard[WILL] - 2,
  [HEALTH]: wizard[HEALTH] - 2,
  isApprentice: true,
});

export const addSoldier = (warband, setWarband) => {
  if (warband.soldiers.length === 8) {
    return;
  }
  const newSoldier = {
    ...Soldiers[THIEF],
    uid: uuidv4(),
    name: generateSoldierName(),
  };
  warband.soldiers.push(newSoldier);
  setWarband({ ...warband });
};

export const findSoldierIdx = (warband, uid) => warband.soldiers.findIndex(s => s.uid === uid);

export const setSoldier = (warband, setWarband, newSoldier) => {
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

  setWarband({ ...warband });
};

export const setWizard = (warband, setWarband, newWizard) => {
  warband.wizard = newWizard;
  warband.apprentice = createApprentice(newWizard, warband.apprentice.name);
  setWarband({ ...warband });
};

export const setApprentice = (warband, setWarband, apprentice) => {
  warband.apprentice = apprentice;
  setWarband({ ...warband });
}

export const levelUp = (warband, setWarband, attribute) => {
  warband.wizard[attribute] += 1;
  warband.wizard[LEVEL] += 1;
  warband.wizard[EXPERIENCE] -= 100;
  warband.apprentice = createApprentice(warband.wizard, warband.apprentice.name);
  setWarband({ ...warband });
};