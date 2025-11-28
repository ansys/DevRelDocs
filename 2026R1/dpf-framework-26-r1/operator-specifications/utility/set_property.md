---
category: utility
plugin: core
license: None
---

# utility:field set property

**Version: 0.0.0**

## Description

Sets a property to an input field/field container. A Fieldin pin 0, a property name (string) in pin 1 and a valid property value in pin 2 are expected as inputs

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Property to set. Accepted inputs are specific strings namely: 'unit', 'name', 'time_freq_support', 'scoping', 'header'. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property |[`string`](../../core-concepts/dpf-types.md#standard-types), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types) | Property Value to set. Accepted inputs on this pin are: CTimeFreqSupport, CScoping, DataTree, int, double, string. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: set_property

 **Full name**: utility.set_property

 **Internal name**: field::set_property

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("field::set_property"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_property_name);
op.connect(2, my_property);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.set_property() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.property_name.connect(my_property_name)
op.inputs.property.connect(my_property)
my_field_as_field = op.outputs.field_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.set_property() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property.Connect(my_property)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.