---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute loudness ISO 532-2

**Version: 0.0.0**

## Description

Compute binaural and monaural loudness according to the ISO532-2 standard.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Input signal in Pa on which to compute loudness. If signal is a FieldsContainer, it must contain exactly two Fields. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions.<br><br>Supported values:<br><br>* Free<br>* Diffuse<br><br>Default: Free |
| <strong>Pin 2</strong>|  recording_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Recording system used to measure the input signal.<br><br>Supported values:<br><br>* **Mic**: Single microphone<br>* **Head**: Head and torso simulator<br><br>Default: Mic |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_binaural_loudness_sone |[`double`](../../core-concepts/dpf-types.md#standard-types) | Binaural loudness in sone. |
|  **Pin 1**| output_binaural_loudness_phon |[`double`](../../core-concepts/dpf-types.md#standard-types) | Binaural loudness level in phon. |
|  **Pin 2**| output_monaural_loudness_sone |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Monaural loudness (left and right) in sone. |
|  **Pin 3**| output_monaural_loudness_phon |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Monaural loudness (left and right) level in phon. |
|  **Pin 4**| output_binaural_specific_loudness |[`field`](../../core-concepts/dpf-types.md#field) | Binaural specific loudness in sone/Cam. |
|  **Pin 5**| output_monaural_specific_loudness |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Monaural specific loudness (left and right) in sone/Cam. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_loudness_iso532_2

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.