import { AUTO, Scale } from 'phaser';

const enumValue = (name) => Object.freeze({toString: () => name});

const Orientations = Object.freeze(
{
    HORIZONTAL: enumValue('Orientations.HORIZONTAL'),
    VERTICAL: enumValue('Orientations.VERTICAL')
});

const Types = Object.freeze(
{
    RETRO: enumValue('Types.RETRO'),
    CLASSIC: enumValue('Types.CLASSIC'),
    MODERN: enumValue('Types.MODERN')
});

const _data = {};

_data[Types.RETRO] = {};
_data[Types.CLASSIC] = {};
_data[Types.MODERN] = {};

_data[Types.RETRO][Orientations.HORIZONTAL] = {w: 640, h:360};
_data[Types.RETRO][Orientations.VERTICAL] = {w: 360, h:640};

_data[Types.CLASSIC][Orientations.HORIZONTAL] = {w: 836, h:470};
_data[Types.CLASSIC][Orientations.VERTICAL] = {w: 470, h:836};

_data[Types.MODERN][Orientations.HORIZONTAL] = {w: 1031, h:580};
_data[Types.MODERN][Orientations.VERTICAL] = {w: 580, h:1031};


const _base_config =
{
    type: AUTO,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 0 },
        }
    },
    backgroundColor: 0x6666ff
};

const configurator = (type, orientation) =>
{
    const _tmp = Object.assign({}, _base_config);
    _tmp.width = _data[type][orientation].w;
    _tmp.height = _data[type][orientation].h;
    if(orientation === Orientations.HORIZONTAL)
    {
        _tmp.scale =
        {
            mode: Scale.WIDTH_CONTROLS_HEIGHT,
            autoCenter: Scale.CENTER_BOTH
        };
    }
    else
    {
        _tmp.scale =
        {
            mode: Scale.HEIGHT_CONTROLS_WIDTH,
            autoCenter: Scale.CENTER_BOTH
        };
    }
    if(type === Types.RETRO)
    {
        _tmp.pixelArt = true;
    }
    return _tmp;
};

module.exports = 
{
    configurator,
    Orientations,
    Types
};

// usage:
// const config3 = configurator(Types.MODERN, Orientations.HORIZONTAL);
// config3.scene = [... your scene array here ...];
