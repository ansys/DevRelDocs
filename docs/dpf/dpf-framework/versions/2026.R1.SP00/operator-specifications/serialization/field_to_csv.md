---
category: serialization
plugin: csv
license: any_dpf_supported_increments
---

# serialization:field to csv

**Version: 0.0.0**

## Description

Exports a field or a fields container into a csv file. Currently only homogenous Fields Definition of Fields Container are supported.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field_or_fields_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/serialization/field_to_csv) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [file_path](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/serialization/field_to_csv) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [storage_type](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/serialization/field_to_csv) |  |[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### field_or_fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

field_or_fields_container

<a id="input_1"></a>
### file_path (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_2"></a>
### storage_type (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|



## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: csv

 **Scripting name**: None

 **Full name**: None

 **Internal name**: field_to_csv

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("field_to_csv"); // operator instantiation
op.connect(0, my_field_or_fields_container);
op.connect(1, my_file_path);
op.connect(2, my_storage_type);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.field_or_fields_container.connect(my_field_or_fields_container)
op.inputs.file_path.connect(my_file_path)
op.inputs.storage_type.connect(my_storage_type)
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.field_or_fields_container.Connect(my_field_or_fields_container)
op.inputs.file_path.Connect(my_file_path)
op.inputs.storage_type.Connect(my_storage_type)
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.