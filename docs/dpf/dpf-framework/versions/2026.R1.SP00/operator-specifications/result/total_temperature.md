---
category: result
plugin: core
license: None
namespaces:
  cff: [cas, flprj]
---

# result:total temperature

**Version: 0.0.0**

## Description

Read Total Temperature by calling the readers defined by the datasources.

## Supported file types

This operator supports the following keys ([file formats](/docs/dpf/dpf-framework/versions/2026.R1.SP00/index)) for each listed namespace (plugin/solver):

- cff: cas, flprj 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  |[`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  |[`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>25</strong> | [region_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1000</strong> | [qualifiers](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |  |[`label_space`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

result file path container, used if no streams are set

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

prevents from reading the mesh in the result files

<a id="input_25"></a>
### region_scoping (Pin 25)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

region id (integer) or vector of region ids (vector) or region scoping (scoping) of the model (region corresponds to zone for Fluid results or part for LSDyna results).

<a id="input_1000"></a>
### qualifiers (Pin 1000)

- **Required:** No
- **Expected type(s):** [`label_space`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

(for Fluid results only) LabelSpace with combination of zone, phases or species ids


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/total_temperature) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: total_temperature

 **Full name**: result.total_temperature

 **Internal name**: TEMP_TOT

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("TEMP_TOT"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(7, my_mesh);
op.connect(25, my_region_scoping);
op.connect(1000, my_qualifiers);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.total_temperature() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.mesh.connect(my_mesh)
op.inputs.region_scoping.connect(my_region_scoping)
op.inputs.qualifiers1.connect(my_qualifiers1)
op.inputs.qualifiers2.connect(my_qualifiers2)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.total_temperature() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.mesh.Connect(my_mesh)
op.inputs.region_scoping.Connect(my_region_scoping)
op.inputs.qualifiers.Connect(my_qualifiers)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.