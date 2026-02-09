---
category: utility
plugin: core
license: None
---

# utility:data sources get attribute

**Version: 0.0.0**

## Description

A DataSources in pin 0 and a property name (string) in pin 1 are expected in input. An index refering to the property can also be provided.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [property_name](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [property_index](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [property_key](#input_3) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong>|  [property_result_key](#input_4) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### data_sources (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Accepted inputs are: 'file_path' (returns string), 'result_file_name' (returns string), 'domain_file_path' (returns string), 'domain_result_file_name' (returns string), 'num_keys' (returns int), num_result_key (returns int), num_file_path (returns int), 'num_result_file_path' (returns int), 'key_by_index' (returns string), 'result_key_by_index' (returns string), 'path_by_index' (returns string), 'path_key_by_index' (returns string).

<a id="input_2"></a>
### property_index (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Index for the property. Must be set for 'domain_file_path', 'domain_result_file_name' 'key_by_index', 'result_key_by_index', 'path_by_index' and 'path_key_by_index' properties.

<a id="input_3"></a>
### property_key (Pin 3)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Key to look for. Must be set for 'file_path' and 'domain_file_path' properties.

<a id="input_4"></a>
### property_result_key (Pin 4)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Result key to look for. Can be used for 'file_path', 'result_file_name', 'domain_file_path' and 'domain_result_file_name'.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](#output_0) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types)

Property value.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: ds_get_attribute

 **Full name**: utility.ds_get_attribute

 **Internal name**: datasources::get_attribute

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("datasources::get_attribute"); // operator instantiation
op.connect(0, my_data_sources);
op.connect(1, my_property_name);
op.connect(2, my_property_index);
op.connect(3, my_property_key);
op.connect(4, my_property_result_key);
std::string my_property = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.ds_get_attribute() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
op.inputs.property_name.connect(my_property_name)
op.inputs.property_index.connect(my_property_index)
op.inputs.property_key.connect(my_property_key)
op.inputs.property_result_key.connect(my_property_result_key)
my_property_as_string = op.outputs.property_as_string()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.ds_get_attribute() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property_index.Connect(my_property_index)
op.inputs.property_key.Connect(my_property_key)
op.inputs.property_result_key.Connect(my_property_result_key)
my_property = op.outputs.property.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.