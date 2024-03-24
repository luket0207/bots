// src/Components/Fighter.js

import React, { useContext } from 'react';
import './Fighter.scss';
import { FighterStatsContext } from '../../App'; // Assuming App.js is your top-level component

const Fighter = () => {
  const { fighterStats } = useContext(FighterStatsContext);

  return (
    <div className='fighter'>
      <h2>Fighter Stats</h2>
      <div className='fighter-grid'>
        <p>Name: {fighterStats.Name}</p>
        <p>Special Charge Rate: {fighterStats.SpecialChargeRate}</p>
        <p>Gold: {fighterStats.Gold}</p>
        <p>Orbs: {fighterStats.Orbs}</p>
        <p>Health: {fighterStats.Health}</p>
        <p>Max Health: {fighterStats.MaxHealth}</p>
        <p>Base Attack: {fighterStats.BaseAttack}</p>
        <p>Base Shield: {fighterStats.BaseShield}</p>
        <p>Attack Charge: {fighterStats.AttackCharge}</p>
        <p>Shield Charge: {fighterStats.ShieldCharge}</p>
        <p>Special: {fighterStats.Special}</p>
        <p>Water Skill: {fighterStats.WaterSkill}</p>
        <p>Rock Skill: {fighterStats.RockSkill}</p>
        <p>Electricity Skill: {fighterStats.ElectricitySkill}</p>
        <p>Fire Skill: {fighterStats.FireSkill}</p>
        <p>Power Ups: {fighterStats.PowerUps.join(', ')}</p>
        <p>Attack Bot: {fighterStats.AttackBot.join(', ')}</p>
        <p>Shield Bot: {fighterStats.ShieldBot.join(', ')}</p>
        <p>Special Bot: {fighterStats.SpecialBot.join(', ')}</p>
      </div>
    </div>
  );
};

export default Fighter;
