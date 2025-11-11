---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute sharpness (one-third-octave input)

**Version: 0.0.0**

## Description

Compute sharpness according to Zwicker and Fastl's formula (E. Zwicker and H. Fastl, 'Psychoacoustics: Facts and Models', Springer-Verlag, 1999), using one-third-octave-band levels as input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_levels |[`field`](../../core-concepts/dpf-types.md#field) | Input one-third-octave-band levels in dB SPL on which to compute sharpness. Exactly 28 band levels must be provided.<br><br>Considered one-third-octave bands have the following central frequencies:<br><br>| Band | Frequency |<br>|------|-----------|<br>|   1  |  25 Hz    |<br>|   2  |  31.5 Hz  |<br>|   3  |  40 Hz    |<br>|   4  |  50 Hz    |<br>|   5  |  63 Hz    |<br>|   6  |  80 Hz    |<br>|   7  |  100 Hz   |<br>|   8  |  125 Hz   |<br>|   9  |  160 Hz   |<br>|  10  |  200 Hz   |<br>|  11  |  250 Hz   |<br>|  12  |  315 Hz   |<br>|  13  |  400 Hz   |<br>|  14  |  500 Hz   |<br>|  15  |  630 Hz   |<br>|  16  |  800 Hz   |<br>|  17  |  1000 Hz  |<br>|  18  |  1250 Hz  |<br>|  19  |  1600 Hz  |<br>|  20  |  2000 Hz  |<br>|  21  |  2500 Hz  |<br>|  22  |  3150 Hz  |<br>|  23  |  4000 Hz  |<br>|  24  |  5000 Hz  |<br>|  25  |  6300 Hz  |<br>|  26  |  8000 Hz  |<br>|  27  |  10000 Hz |<br>|  28  |  12500 Hz | |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions.<br><br>Supported values:<br><br>* Free<br>* Diffuse<br><br>Default: Free |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_sharpness |[`double`](../../core-concepts/dpf-types.md#standard-types) | Sharpness in acum. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_sharpness_frequency_input

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.