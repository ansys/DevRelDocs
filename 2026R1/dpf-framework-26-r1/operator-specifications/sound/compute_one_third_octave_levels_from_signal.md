---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute 1/3-octave levels from signal

**Version: 0.0.0**

## Description

Compute one-third-octave-band levels from a time-domain signal input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal for the levels' computation. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| levels |[`field`](../../core-concepts/dpf-types.md#field) | One-third-octave-band levels. The returned level unit is the square of the input signal's unit (for example, if the signal is in Pa, the levels will be returned in Pa^2).The field support contains the one-third-octave-band center frequencies. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_one_third_octave_levels_from_signal

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.