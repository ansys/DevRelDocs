# math:modal participation

## Description

Compute the modal participation factor for a given vector field V, defined as  sum_i ( V .dot. mode_shape_i * ponderation ).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | v_real |[`field`](../../getting-started/using-data-containers.md#field) | Yes | real part of field V |
| **Pin 1** | v_imag |[`field`](../../getting-started/using-data-containers.md#field) | Yes | imag part of field V |
| **Pin 2** | mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 3** | ponderation |[`field`](../../getting-started/using-data-containers.md#field) | No |  |
| **Pin 4** | force_label_space |[`label_space`](../../getting-started/using-data-containers.md#label-space) | No | If set, will force a label space for output result. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | output |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | modal_participation | math.modal_participation | harmonic::modal_participation | any_dpf_supported_increments |
