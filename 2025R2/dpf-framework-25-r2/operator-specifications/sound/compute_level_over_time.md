---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute level over time

**Version: 0.0.0**

## Description

Compute level over time of a signal, on a decibel (dB) scale, or a linear, root-mean-square (RMS) scale. In the case of a dB scale, the actual unit of the returned value will depend on the specified reference value, and frequency weighting (Z, A, B, or C).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal for the level computation. |
| <strong>Pin 1</strong>|  scale_unit |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Expected level scale unit, that is, whether level should be output on a decibel scale, or on a linear, root-mean-square (RMS) scale. Supported values are: - 0: dB; - 1: RMS. Default: 0 (dB). |
| <strong>Pin 2</strong>|  reference_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Reference value for dB calculation. For example, 2e-5 Pa is the reference value for dB SPL, dBA, dBB, and dBC. Reference value is ignored if input scale_unit is set to 1 (RMS). If frequency_weighting is set to either 1 (A), 2 (B), or 3 (C), reference_value should be 2e-5 Pa. Default: 1.0. |
| <strong>Pin 3</strong>|  frequency_weighting |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Frequency weighting for dB calculation. Frequency weighting is ignored if input scale_unit is set to 1 (RMS). Supported values are: - 0: Z-weigthing (no frequency weighting, use this setting in case dB SPL); - 1: A-weigthing; - 2: B-weigthing; - 3: C-weigthing. If frequency_weighting is set to either 1 (A), 2 (B), or 3 (C), reference_value should be 2e-5 Pa.Default: 0 (Z-weighting). |
| <strong>Pin 4</strong>|  time_weighting |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Time weighting for dB calculation, as described in the IEC-61672 standard. Supported values are: - 0: Slow; - 1: Fast; - 2: Impulse; - 3: Custom; Default: 1 (Fast). |
| <strong>Pin 5</strong>|  time_step |[`double`](../../core-concepts/dpf-types.md#standard-types) | Time step of the level over time calculation, in seconds. Time step is ignored if input time_weighting is not set to 3 (Custom). Default: 0.025 s. |
| <strong>Pin 6</strong>|  window_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | Window size in seconds, that is, the length of the slice of signal used to calculate the level at each time step. Window size is ignored if input time_weighting is not set to 3 (Custom). Default value: 1s. |
| <strong>Pin 7</strong>|  window_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Type of the window applied to the slice of signal used to calculate the level at each time step. Supported values are:'RECTANGULAR', 'HANN', 'HAMMING', 'BLACKMAN', 'BLACKMANHARRIS', 'BARTLETT'.Default: 'RECTANGULAR'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| maximum_level |[`double`](../../core-concepts/dpf-types.md#standard-types) | Maximum level attained by the level over time curve, in the unit specified according to inputs (dB, dB SPL, dBA, dBB, dBC or RMS). |
|  **Pin 1**| level_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Level over time, in a unit that depends on inputs scale_unit, reference_value, and frequency_weighting. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_level_over_time

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.