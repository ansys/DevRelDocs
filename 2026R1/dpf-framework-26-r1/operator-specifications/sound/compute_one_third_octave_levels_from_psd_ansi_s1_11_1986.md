---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute 1/3-octave levels from PSD (ANSI S1.11-1986)

**Version: 0.0.0**

## Description

Compute one-third-octave-band levels from a power spectral density (PSD) input, taking into account ANSI S1.11-1986 / IEC 61260:1995. The ANSI S1.11-1986 standard describes a digital filterbank to use when computing fractional-octave-band levels from a time-domain signal. This operator applies the frequency responses of these filters to the input PSD in order to simulate the application of this filterbank. Twenty-nine bands are considered whose center frequencies range between 25 Hz and 16000 Hz

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  psd |[`field`](../../core-concepts/dpf-types.md#field) | Input power spectral density (PSD) for the levels' computation, in <unit>^2/Hz. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| levels |[`field`](../../core-concepts/dpf-types.md#field) | One-third-octave-band levels. The returned level unit is derived from the input PSD's unit (for example, if the PSD is in Pa^2/Hz, the levels will be returned in Pa^2).The field support contains the one-third-octave-band center frequencies. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_one_third_octave_levels_from_psd_ansi_s1_11_1986

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.