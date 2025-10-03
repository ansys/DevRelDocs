---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute sound power level ISO 3744

**Version: 0.0.0**

## Description

Compute the sound power level (SWL) according to the ISO 3744 standard.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  surface_shape |[`string`](../../core-concepts/dpf-types.md#standard-types) | Shape of the measurement surface.<br><br>Supported values are:<br><br>* Hemisphere<br>* Half-hemisphere |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  surface_radius |[`double`](../../core-concepts/dpf-types.md#standard-types) | Radius in meters of the hemisphere or half-hemisphere measurement surface. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  K1 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Background noise correction in dB (section 8.2.3 of ISO 3744). |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  K2 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Environmental correction K2 in dB (Annex A of ISO 3744). |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  C1 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Meteorological reference quantity correction C1 in dB (Annex G of ISO 3744). |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  C2 |[`double`](../../core-concepts/dpf-types.md#standard-types) | Meteorological radiation impedance correction C2 in dB (Annex G of ISO 3744). |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  microphone_signals |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Signals recorded at various microphone positions on the measurement surface: each signal is stored as a field of microphone_signals. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| Lw |[`double`](../../core-concepts/dpf-types.md#standard-types) | Unweighted sound power level (Lw) in dB. |
|  **Pin 1**| LwA |[`double`](../../core-concepts/dpf-types.md#standard-types) | A-weighted sound power level (Lw(A)) in dBA. |
|  **Pin 2**| octave_band |[`field`](../../core-concepts/dpf-types.md#field) | Octave-band sound power levels, in dB. |
|  **Pin 3**| third_octave_band |[`field`](../../core-concepts/dpf-types.md#field) | One-third-octave-band sound power levels, in dB. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_sound_power_level_iso3744

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.