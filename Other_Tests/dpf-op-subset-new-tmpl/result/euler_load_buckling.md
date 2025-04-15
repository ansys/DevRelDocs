# result:euler load buckling

## Description

Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L) 

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 5** | field_beam_end_condition |[`data_sources`](../getting-started/using-data-containers.md#data-sources), [`field`](../getting-started/using-data-containers.md#field) | Yes | This pin contains file csv or field of beam's end condition added by the user. If there's no file added, it would take value of all beam's end condition as 1. |
| **Pin 6** | field_beam_moment_inertia |[`field`](../getting-started/using-data-containers.md#field) | Yes | Field of beam's moment inertia |
| **Pin 7** | field_beam_young_modulus |[`field`](../getting-started/using-data-containers.md#field) | Yes | Field of beam's young modulus |
| **Pin 8** | field_beam_length |[`field`](../getting-started/using-data-containers.md#field) | Yes | Field of beam's length |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_euler_critical_load |[`field`](../getting-started/using-data-containers.md#field) | Yes | This field contains Euler's Critical Load about the principle axis of the cross section having the least moment of inertia. |
| **Pin 1** | field_euler_critical_load_yy |[`field`](../getting-started/using-data-containers.md#field) | Yes | This field contains Euler's Critical Load on axis y. |
| **Pin 2** | field_euler_critical_load_zz |[`field`](../getting-started/using-data-containers.md#field) | Yes | This field contains Euler's Critical Load on axis z. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | euler_load_buckling | result.euler_load_buckling | euler_load_buckling | any_dpf_supported_increments |
