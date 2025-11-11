---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - generate sound from broadband noise (1 parameter) source

**Version: 0.0.0**

## Description

Generate a sound from a broadband noise model (1 parameter), according to a given evolution vs time of the control parameter.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_bbn |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Broadband noise model (1 parameter), as a fields container. Each field contains the level vs frequency of the noise at a given value of the control parameter. Level vs frequency may be specified as a Power Spectral Density (PSD) in Pa^2/Hz, or as Octave bands level in Pa^2, or as 1/3 Octave bands level in Pa^2. The unit must be indicated in the field's unit. The type of data (PSD, Octave, 1/3 octave) must be indicated in the field's FieldDefinition attribute, as a quantity_type. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  control |[`field`](../../core-concepts/dpf-types.md#field) | Control parameter value vs time, as a field. |
| <strong>Pin 2</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency of the generated sound, in Hz. Default: 44100 Hz. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| generated_sound |[`field`](../../core-concepts/dpf-types.md#field) | Generated sound, as a field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_generate_sound_bbn

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.