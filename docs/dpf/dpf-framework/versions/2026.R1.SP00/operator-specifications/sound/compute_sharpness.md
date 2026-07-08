---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute sharpness

**Version: 0.0.0**

## Description

Compute the sharpness of a signal, according to Zwicker and Fastl's formula (E. Zwicker and H. Fastl, 'Psychoacoustics: Facts and Models', Springer-Verlag, 1999)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute sharpness. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions.<br>Supported values:<br><br>* Free<br>* Diffuse<br><br>Default: Free |

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

 **Internal name**: compute_sharpness

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.