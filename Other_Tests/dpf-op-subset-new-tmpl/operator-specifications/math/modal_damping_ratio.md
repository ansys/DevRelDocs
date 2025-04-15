# math:modal damping ratio

## Description

Computes damping ratio for each mode shape as X_i = const + ratio_i + m_coefficient / (2*omega_i) + k_coefficient * omega_i/2.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | natural_freq |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes | input vector expects natural frequencies. |
| **Pin 1** | const_ratio |[`double`](../../getting-started/using-data-containers.md#double) | No | constant modal damping ratio |
| **Pin 2** | ratio_by_modes |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | No | modal damping ratio for each mode shape |
| **Pin 3** | m_coefficient |[`double`](../../getting-started/using-data-containers.md#double) | Yes | global mass matrix multiplier |
| **Pin 4** | k_coefficient |[`double`](../../getting-started/using-data-containers.md#double) | Yes | global stiffness matrix multiplier |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes | field of modal damping ratio. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | modal_damping_ratio | math.modal_damping_ratio | modal_damping_ratio | any_dpf_supported_increments |
