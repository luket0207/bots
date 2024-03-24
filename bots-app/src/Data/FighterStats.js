import React, { useState } from 'react';

const defaultFighterStats = {
  Name: '',
  SpecialChargeRate: '',
  Gold: 0,
  Orbs: 0,
  Health: 100,
  MaxHealth: 100,
  BaseAttack: 10,
  BaseShield: 10,
  AttackCharge: 0,
  ShieldCharge: 0,
  Special: 0,
  WaterSkill: 0,
  RockSkill: 0,
  ElectricitySkill: 0,
  FireSkill: 0,
  PowerUps: [],
  AttackBot: [],
  ShieldBot: [],
  SpecialBot: []
};

export const FighterStats = () => {
  const [fighterStats, setFighterStats] = useState(defaultFighterStats);

  const updateFighterStats = (key, value) => {
    setFighterStats(prevStats => ({
      ...prevStats,
      [key]: value
    }));
  };

  return { fighterStats, updateFighterStats };
};

export default FighterStats;
