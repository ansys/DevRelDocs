---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute overall level

**Version: 0.0.0**

## Description

Compute the overall level of a signal, on a decibel scale or a linear, root-mean-square (RMS) scale. In the case of a dB scale, the actual unit of the returned value will depend on the specified reference value and frequency weighting (Z, A, B, or C).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal for the level computation. |
| <strong>Pin 1</strong>|  scale_unit |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Expected level scale unit, that is, whether level should be output on a decibel scale, or on a linear, root-mean-square (RMS) scale. Supported values are: - 0: dB; - 1: RMS. Default: 0 (dB). |
| <strong>Pin 2</strong>|  reference_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Reference value for dB calculation. For example, 2e-5 Pa is the reference value for dB SPL, dBA, dBB, and dBC. Reference value is ignored if input scale_unit is set to 1 (RMS). If frequency_weighting is set to either 1 (A), 2 (B), or 3 (C), reference_value should be 2e-5 Pa. Default: 1.0. |
| <strong>Pin 3</strong>|  frequency_weighting |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Frequency weighting for dB calculation. Frequency weighting is ignored if input scale_unit is set to 1 (RMS). Supported values are: - 0: Z-weigthing (no frequency weighting, use this setting in case dB SPL); - 1: A-weigthing; - 2: B-weigthing; - 3: C-weigthing; If frequency_weighting is set to either 1 (A), 2 (B), or 3 (C), reference_value should be 2e-5 Pa.Default: 0 (Z-weighting). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_level |[`double`](../../core-concepts/dpf-types.md#standard-types) | Overall level, in a unit that depends on inputs scale_unit, reference_value, and frequency_weighting. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_overall_level

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.