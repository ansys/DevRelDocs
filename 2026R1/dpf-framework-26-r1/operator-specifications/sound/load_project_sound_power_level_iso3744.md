---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:load sound power level ISO 3744 project

**Version: 0.0.0**

## Description

Load a sound power level project file (*.spw), created with Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  project_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the sound power level project file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| surface_shape |[`string`](../../core-concepts/dpf-types.md#standard-types) | Shape of the measurement surface ('Hemisphere', 'Half-hemisphere')'. |
|  **Pin 1**| surface_radius |[`double`](../../core-concepts/dpf-types.md#standard-types) | Radius in meters of the hemisphere or half-hemisphere measurement surface. |
|  **Pin 2**| K1 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Background noise correction in dB (section 8.2.3 of ISO 3744). |
|  **Pin 3**| K2 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Environmental correction K2 in dB (Annex A of ISO 3744). |
|  **Pin 4**| C1 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Meteorological reference quantity correction C1 in dB (Annex G of ISO 3744). |
|  **Pin 5**| C2 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Meteorological radiation impedance correction C2 in dB (Annex G of ISO 3744). |
|  **Pin 6**| microphone_signals |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Signals recorded at various microphone positions on the measurement surface: each signal is stored as a field of microphone_signals. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: load_project_sound_power_level_iso3744

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.