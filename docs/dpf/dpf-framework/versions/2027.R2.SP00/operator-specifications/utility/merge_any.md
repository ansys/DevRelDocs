---
category: utility
plugin: core
license: None
---

# utility:merge any objects

**Version: 0.0.0**

## Description

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [any](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`any`](../../core-concepts/dpf-types.md#any) |


<a id="input_0"></a>
### any (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)

Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [any](#output_0) |[`any`](../../core-concepts/dpf-types.md#any) |


<a id="output_0"></a>
### any (Pin 0)

- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [read_inputs_in_parallel](../../core-concepts/operator-configurations.md#read_inputs_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_any

 **Full name**: utility.merge_any

 **Internal name**: merge::any

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::any"); // operator instantiation
op.connect(0, my_any);
ansys::dpf::Any my_any = op.getOutput<ansys::dpf::Any>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_any() # operator instantiation
op.inputs.any1.connect(my_any1)
op.inputs.any2.connect(my_any2)
my_any = op.outputs.any()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_any() # operator instantiation
op.inputs.any.Connect(my_any)
my_any = op.outputs.any.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.