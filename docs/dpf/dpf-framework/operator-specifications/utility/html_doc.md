---
category: utility
plugin: documentation
license: None
---

# utility:html doc

**Version: 0.0.0**

## Description

Create dpf's html documentation. Only on Windows.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [output_path](/docs/dpf/dpf-framework/operator-specifications/utility/html_doc) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [exposure_level](/docs/dpf/dpf-framework/operator-specifications/utility/html_doc) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### output_path (Pin 0)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

default is &#123;working directory&#125;/dataProcessingDoc.html

<a id="input_1"></a>
### exposure_level (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|



## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: documentation

 **Scripting name**: None

 **Full name**: None

 **Internal name**: html_doc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("html_doc"); // operator instantiation
op.connect(0, my_output_path);
op.connect(1, my_exposure_level);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.output_path.connect(my_output_path)
op.inputs.exposure_level.connect(my_exposure_level)
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.output_path.Connect(my_output_path)
op.inputs.exposure_level.Connect(my_exposure_level)
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.