---
category: result
plugin: mapdl
license: None
---

# result:record reader

**Version: 0.0.0**

## Description

Extracts a record from a file.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp, rth 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>3</strong> | [streams](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>60</strong> | [record_name](#input_60) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |


<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)



<a id="input_60"></a>
### record_name (Pin 60)

- **Required:** Yes
- **Expected type(s):** 

Name of the record that must be extracted from the file. 

For example to read the nodal solution of the 4th set, input should be **RST::DSI::SET4::NSL**

The MAPDL records tree can be found in the following links:

- [Ansys Help - Retrieving Data from the Results File](https://ansyshelp.ansys.com/public/account/secured?returnurl=//////Views/Secured/corp/v252/en/ans_prog/datafromRST.html)

- [Ansys Help - Description of the Results File](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v252/en/ans_prog/Hlp_P_INT1_2.html)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`property_field`](../../core-concepts/dpf-types.md#property-field), [`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field), [`field`](../../core-concepts/dpf-types.md#field)

Output is of type property_field for integer records and of type field for double records.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: record_reader

 **Full name**: result.record_reader

 **Internal name**: record_reader

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("record_reader"); // operator instantiation
op.connect(3, my_streams);
op.connect(4, my_data_sources);
op.connect(60, my_record_name);
ansys::dpf::PropertyField my_field = op.getOutput<ansys::dpf::PropertyField>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.record_reader() # operator instantiation
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.record_name.connect(my_record_name)
my_field_as_property_field = op.outputs.field_as_property_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.record_reader() # operator instantiation
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.record_name.Connect(my_record_name)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.