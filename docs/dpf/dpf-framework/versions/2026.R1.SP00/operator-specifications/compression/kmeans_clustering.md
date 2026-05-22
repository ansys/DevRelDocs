---
category: compression
plugin: core
license: any_dpf_supported_increments
---

# compression:kMeans clustering

**Version: 0.0.0**

## Description

Apply kMeans clustering to group data depending on the data's non-linearity.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [clusters_number](#input_0) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [formula](#input_1) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [fields_container](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [component_number](#input_3) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### clusters_number (Pin 0)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

number of the clusters (dafault is 3)

<a id="input_1"></a>
### formula (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

formula ('dist'/'dotprod'), default is 'dist'

<a id="input_2"></a>
### fields_container (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

an iunput fields container containing the data which will be used for the clustering

<a id="input_3"></a>
### component_number (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

component number as an int (default is 0), ex '0' for X-displacement, '1' for Y-displacement,...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping_clusters](#output_0) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="output_0"></a>
### scoping_clusters (Pin 0)

- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Scopings container with the space scoping (entities' ids) corresponding to each of k-clusters


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: compression

 **Plugin**: core

 **Scripting name**: kmeans_clustering

 **Full name**: compression.kmeans_clustering

 **Internal name**: kmeans_operator

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("kmeans_operator"); // operator instantiation
op.connect(0, my_clusters_number);
op.connect(1, my_formula);
op.connect(2, my_fields_container);
op.connect(3, my_component_number);
ansys::dpf::ScopingsContainer my_scoping_clusters = op.getOutput<ansys::dpf::ScopingsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.kmeans_clustering() # operator instantiation
op.inputs.clusters_number.connect(my_clusters_number)
op.inputs.formula.connect(my_formula)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.component_number.connect(my_component_number)
my_scoping_clusters = op.outputs.scoping_clusters()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.kmeans_clustering() # operator instantiation
op.inputs.clusters_number.Connect(my_clusters_number)
op.inputs.formula.Connect(my_formula)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.component_number.Connect(my_component_number)
my_scoping_clusters = op.outputs.scoping_clusters.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.