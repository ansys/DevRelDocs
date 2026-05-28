---
category: mesh
plugin: core
license: None
namespaces:
  mapdl: [rst, rstp]
---

# mesh:beam properties

**Version: 0.0.0**

## Description

Reads the beam's properties from the result files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](/docs/dpf/dpf-framework/versions/2027.R1.SP01/index)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>3</strong> | [streams](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |  |[`streams_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Result file path container, used if no streams are set.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_out](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **1**| [field_type_section_id](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **2**| [field_area](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **3**| [field_moment_inertia](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **4**| [field_geometry](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **5**| [field_young_modulus](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **6**| [field_poisson_ratio](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **7**| [field_shear_modulus](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **8**| [field_beam_length](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **9**| [field_torsion_constant](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **10**| [field_warping_constant](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **11**| [field_offset_type](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **12**| [field_offset_y](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **13**| [field_offset_z](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/beam_properties) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh_out (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This mesh updates a new map containing a field of the beam's properties if there is at least one beam in mesh.

<a id="output_1"></a>
### field_type_section_id (Pin 1)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the section ID of beams. 1:REC; 3:CSOLID, 4:CTUBE, 5:CHAN, 6:Z, 7:L, 8:I, 9:T, 11:HATS, 12:HREC.

<a id="output_2"></a>
### field_area (Pin 2)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the area of beams.

<a id="output_3"></a>
### field_moment_inertia (Pin 3)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the inertia moment of beams. Iyy, Iyz, Izz.

<a id="output_4"></a>
### field_geometry (Pin 4)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the geometry of beams. REC:b,h. CSOLID:Ri. CTUBE:Ri, Re. CHAN:w1,w2,w3,t1,t2,t3. Z:w1,w2,w3,t1,t2,t3. L:w1,w2,t1,t2. I:w1,w2,w3,t1,t2,t3. T:w1,w2,t1,t2. HATS: w1,w2,w3,w4,t1,t2,t3,t4. HREC:w1,w2,t1,t2,t3,t4.

<a id="output_5"></a>
### field_young_modulus (Pin 5)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the Young's modulus of beams.

<a id="output_6"></a>
### field_poisson_ratio (Pin 6)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the Poisson's ratio of beams.

<a id="output_7"></a>
### field_shear_modulus (Pin 7)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the Shear Modulus of beams.

<a id="output_8"></a>
### field_beam_length (Pin 8)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the length of beams.

<a id="output_9"></a>
### field_torsion_constant (Pin 9)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the Torsion Constant of beams.

<a id="output_10"></a>
### field_warping_constant (Pin 10)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains the Warping Constant of beams.

<a id="output_11"></a>
### field_offset_type (Pin 11)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains offset type of beams.

<a id="output_12"></a>
### field_offset_y (Pin 12)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains offset y of beams.

<a id="output_13"></a>
### field_offset_z (Pin 13)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

This field contains offset z of beams.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: beam_properties

 **Full name**: mesh.beam_properties

 **Internal name**: beam_properties

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("beam_properties"); // operator instantiation
op.connect(3, my_streams);
op.connect(4, my_data_sources);
ansys::dpf::MeshedRegion my_mesh_out = op.getOutput<ansys::dpf::MeshedRegion>(0);
ansys::dpf::Field my_field_type_section_id = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_area = op.getOutput<ansys::dpf::Field>(2);
ansys::dpf::Field my_field_moment_inertia = op.getOutput<ansys::dpf::Field>(3);
ansys::dpf::Field my_field_geometry = op.getOutput<ansys::dpf::Field>(4);
ansys::dpf::Field my_field_young_modulus = op.getOutput<ansys::dpf::Field>(5);
ansys::dpf::Field my_field_poisson_ratio = op.getOutput<ansys::dpf::Field>(6);
ansys::dpf::Field my_field_shear_modulus = op.getOutput<ansys::dpf::Field>(7);
ansys::dpf::Field my_field_beam_length = op.getOutput<ansys::dpf::Field>(8);
ansys::dpf::Field my_field_torsion_constant = op.getOutput<ansys::dpf::Field>(9);
ansys::dpf::Field my_field_warping_constant = op.getOutput<ansys::dpf::Field>(10);
ansys::dpf::Field my_field_offset_type = op.getOutput<ansys::dpf::Field>(11);
ansys::dpf::Field my_field_offset_y = op.getOutput<ansys::dpf::Field>(12);
ansys::dpf::Field my_field_offset_z = op.getOutput<ansys::dpf::Field>(13);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.beam_properties() # operator instantiation
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
my_mesh_out = op.outputs.mesh_out()
my_field_type_section_id = op.outputs.field_type_section_id()
my_field_area = op.outputs.field_area()
my_field_moment_inertia = op.outputs.field_moment_inertia()
my_field_geometry = op.outputs.field_geometry()
my_field_young_modulus = op.outputs.field_young_modulus()
my_field_poisson_ratio = op.outputs.field_poisson_ratio()
my_field_shear_modulus = op.outputs.field_shear_modulus()
my_field_beam_length = op.outputs.field_beam_length()
my_field_torsion_constant = op.outputs.field_torsion_constant()
my_field_warping_constant = op.outputs.field_warping_constant()
my_field_offset_type = op.outputs.field_offset_type()
my_field_offset_y = op.outputs.field_offset_y()
my_field_offset_z = op.outputs.field_offset_z()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.beam_properties() # operator instantiation
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
my_mesh_out = op.outputs.mesh_out.GetData()
my_field_type_section_id = op.outputs.field_type_section_id.GetData()
my_field_area = op.outputs.field_area.GetData()
my_field_moment_inertia = op.outputs.field_moment_inertia.GetData()
my_field_geometry = op.outputs.field_geometry.GetData()
my_field_young_modulus = op.outputs.field_young_modulus.GetData()
my_field_poisson_ratio = op.outputs.field_poisson_ratio.GetData()
my_field_shear_modulus = op.outputs.field_shear_modulus.GetData()
my_field_beam_length = op.outputs.field_beam_length.GetData()
my_field_torsion_constant = op.outputs.field_torsion_constant.GetData()
my_field_warping_constant = op.outputs.field_warping_constant.GetData()
my_field_offset_type = op.outputs.field_offset_type.GetData()
my_field_offset_y = op.outputs.field_offset_y.GetData()
my_field_offset_z = op.outputs.field_offset_z.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.