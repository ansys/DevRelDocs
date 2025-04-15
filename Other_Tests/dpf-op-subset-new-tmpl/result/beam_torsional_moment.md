# result:beam torsional moment (LSDyna)

## Description

Read Beam Torsional Moment (LSDyna) by calling the readers defined by the datasources.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`int32`](../getting-started/using-data-containers.md#int32), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>), [`double`](../getting-started/using-data-containers.md#double), [`field`](../getting-started/using-data-containers.md#field), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | No | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. |
| **Pin 1** | mesh_scoping |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container), [`scoping`](../getting-started/using-data-containers.md#scoping) | No | elements scoping required in output. |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | result file container allowed to be kept open to cache data |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | result file path container, used if no streams are set |
| **Pin 50** | unit_system |[`int32`](../getting-started/using-data-containers.md#int32), [`string`](../getting-started/using-data-containers.md#string), [`class dataProcessing::unit::CUnitSystem`](../getting-started/using-data-containers.md#class dataProcessing::unit::CUnitSystem) | No | Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | beam_torsional_moment | result.beam_torsional_moment | B_MT | None |
