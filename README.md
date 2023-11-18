# Phaser JS Game Configurator

## About

This library makes it easy to have an object preconfigured with general options.
It applies a very simple principle by scaling the game on width or height depending on whether it is a game designed for landscape or potrait.
Resolutions are designed to be 16/9 and scaled accordingly.

____

<p align="center">
  <img width="512" height="473" src="logo.png">
</p>

____

Currently the resolutions are:

* RETRO: 640x360 (abilita automaticamente anche il pixel art)
* CLASSIC: 836x470
* MODERN: 1031x580

______

## Disclaimer

this library I use for my personal projects, it is published in the hope that it will be useful to someone but without any claim, not even that it will work for you.

---

## Usage

    const config = configurator(Types.MODERN, Orientations.HORIZONTAL);
    config.scene = [... your scene array here ...];
    const ref = new Game(config);

---