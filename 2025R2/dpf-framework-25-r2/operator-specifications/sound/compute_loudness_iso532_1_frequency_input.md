---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute loudness ISO 532-1 (one-third-octave input)

**Version: 0.0.0**

## Description

Compute loudness according to the ISO532-1 standard for stationary sounds, using one-third-octave-band levels as input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_levels |[`field`](../../core-concepts/dpf-types.md#field) | Input one-third-octave-band levels in dB SPL on which to compute loudness. Exactly 28 band levels must be provided. Considered one-third-octave bands have the following central frequencies: - Band 1: 25 Hz;- Band 2: 31.5 Hz;- Band 3: 40 Hz;- Band 4: 50 Hz;- Band 5: 63 Hz;- Band 6: 80 Hz;- Band 7: 100 Hz;- Band 8: 125 Hz;- Band 9: 160 Hz;- Band 10: 200 Hz;- Band 11: 250 Hz;- Band 12: 315 Hz;- Band 13: 400 Hz;- Band 14: 500 Hz;- Band 15: 630 Hz;- Band 16: 800 Hz;- Band 17: 1000 Hz;- Band 18: 1250 Hz;- Band 19: 1600 Hz;- Band 20: 2000 Hz;- Band 21: 2500 Hz;- Band 22: 3150 Hz;- Band 23: 4000 Hz;- Band 24: 5000 Hz;- Band 25: 6300 Hz;- Band 26: 8000 Hz;- Band 27: 10000 Hz;- Band 28: 12500 Hz. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions (supported values: 'Free', 'Diffuse'). Default: 'Free'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_loudness_sone |[`double`](../../core-concepts/dpf-types.md#standard-types) | Loudness in sone. |
|  **Pin 1**| output_loudness_phon |[`double`](../../core-concepts/dpf-types.md#standard-types) | Loudness level in phon. |
|  **Pin 2**| output_specific_loudness |[`field`](../../core-concepts/dpf-types.md#field) | Specific loudness in sone/Bark, that is, the loudness values over Bark band indexes. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_loudness_iso532_1_frequency_input

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.