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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/utility/set_property) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [property_name](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/utility/set_property) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [property](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/utility/set_property) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`abstract_data_tree`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Property to set. Accepted inputs are specific strings namely: 'unit', 'name', 'time_freq_support', 'scoping', 'header'.

<a id="input_2"></a>
### property (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`abstract_data_tree`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Property Value to set. Accepted inputs on this pin are: CTimeFreqSupport, CScoping, DataTree, int, double, string.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/utility/set_property) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: set_property

 **Full name**: utility.set_property

 **Internal name**: field::set_property

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.