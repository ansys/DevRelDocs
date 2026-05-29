---
category: result
plugin: mapdl
license: None
---

# result:cms dst table provider

**Version: 0.0.0**

## Description

Read CST table from a subfile.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/result/cms_dst_table_provider) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Data_sources (must contain at least one subfile).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [dst_table](/docs/dpf/dpf-framework/operator-specifications/result/cms_dst_table_provider) |[`property_field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### dst_table (Pin 0)

- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

returns integer values of the dst table


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cms_dst_table_provider

 **Full name**: result.cms_dst_table_provider

 **Internal name**: cms_dst_table_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cms_dst_table_provider"); // operator instantiation
op.connect(4, my_data_sources);
ansys::dpf::PropertyField my_dst_table = op.getOutput<ansys::dpf::PropertyField>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cms_dst_table_provider() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
my_dst_table = op.outputs.dst_table()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cms_dst_table_provider() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
my_dst_table = op.outputs.dst_table.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.