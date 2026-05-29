---
category: mesh
plugin: core
license: None
namespaces:
  cff: [cas, flprj]
  cgns: [cgns]
  hdf5: [h5dpf]
  mapdl: [cms, dsub, mode, rdsp, rfrq, rst, rstp, rth]
  vtk: [vtk]
---

# mesh:mesh provider

**Version: 0.0.0**

## Description

Reads a mesh from result files.

The operator attempts to read mesh data from the provided data sources.
When the `permissive` configuration is enabled, the operator silently skips result files that cannot be opened or have unsupported namespaces.
If `permissive` is disabled (default), errors are thrown for invalid files.

## Supported file types

This operator supports the following keys ([file formats](/docs/dpf/dpf-framework/index)) for each listed namespace (plugin/solver):

- cff: cas, flprj 
- cgns: cgns 
- hdf5: h5dpf 
- mapdl: cms, dsub, mode, rdsp, rfrq, rst, rstp, rth 
- vtk: vtk 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |  |[`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>14</strong> | [read_cyclic](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |  |`enum dataProcessing::ECyclicReading`, [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>25</strong> | [region_scoping](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>200</strong> | [laziness](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |  |[`abstract_data_tree`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Optional time/frequency set ID of the mesh, supported for adaptative meshes.

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Data sources describing one or more result files.

**Error conditions when `permissive` config is disabled:**
- Throws `std::runtime_error` with message "StreamProvider: empty namespace for result key '&lt;key&gt;'" if a result file has no namespace.
- Throws `std::runtime_error` with message "StreamProvider: operator &lt;namespace&gt;::stream_provider not found." if the namespace is not supported.
- If all result files are invalid, throws an error even in permissive mode.

<a id="input_14"></a>
### read_cyclic (Pin 14)

- **Required:** No
- **Expected type(s):** `enum dataProcessing::ECyclicReading`, [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If 1, cyclic symmetry is ignored. If 2, cyclic expansion is done (default is 1).

<a id="input_25"></a>
### region_scoping (Pin 25)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

region id (integer) or vector of region ids with one entity (vector) or region scoping with one id (scoping) (region corresponds to zone for Fluid results or part for LSDyna results).

<a id="input_200"></a>
### laziness (Pin 200)

- **Required:** No
- **Expected type(s):** [`abstract_data_tree`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

configurate whether lazy evaluation can be performed and to what extent. Supported attributes are: 
- "num_named_selections"->num named selection to read (-1 is all, int32, default si -1), careful: the other named selections will not be available, use mesh_property_provider Operator to read them.
- all mesh property fields "mat", "named_selection", "apdl_element_type", "section"-> if set to 1 these properties will not be read and a workflow will be bounded to the properties to be evaluated on demand, with 0 they are read (default is 0).
- "all_available_properties" option set to 0 will return all possible properties


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh](/docs/dpf/dpf-framework/operator-specifications/mesh/mesh_provider) |[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [permissive](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.

### [run_in_parallel](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_provider

 **Full name**: mesh.mesh_provider

 **Internal name**: mesh_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_provider"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(14, my_read_cyclic);
op.connect(25, my_region_scoping);
op.connect(200, my_laziness);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_provider() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.read_cyclic.connect(my_read_cyclic)
op.inputs.region_scoping.connect(my_region_scoping)
op.inputs.laziness.connect(my_laziness)
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_provider() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.read_cyclic.Connect(my_read_cyclic)
op.inputs.region_scoping.Connect(my_region_scoping)
op.inputs.laziness.Connect(my_laziness)
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.