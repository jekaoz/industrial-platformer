import Phaser from 'phaser';

import BootScene from './scenes/BootScene';
import L1Scene from './scenes/L1Scene';
import L2Scene from './scenes/L2Scene';
import L3Scene from './scenes/L3Scene';
import L4Scene from './scenes/L4Scene';
import L5Scene from './scenes/L5Scene';

import {getGameConfig} from './utils';
import {staticConfig} from './constants/common';

import './index.scss';

const config = getGameConfig(staticConfig, [
    BootScene,
    L1Scene,
    L2Scene,
    L3Scene,
    L4Scene,
    L5Scene,
]);

new Phaser.Game(config);
