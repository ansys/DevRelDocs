---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:quantization (fields container)

**Version: 0.0.0**

## Description

Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.

The output of the quantization operation is :
$$q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor $$
The truncated value in the original scale has to be computed by doing $2\varepsilon q(x) $.

To truncate a number to $n$ decimal places, the threshold must be chosen as $10^{-n}$.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [input_fc](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/compression/quantization_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [threshold](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/compression/quantization_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### input_fc (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Fields container to quantized.

<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Precision threshold desired.
- Case double : the threshold is applied on all the fields of the input fields container.
- Case field with one, numComp or input size values : the threshold is used for each field of the input fields container.
- Case fields container : the corresponding threshold field is found by matching label.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [output_fc](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/compression/quantization_fc) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### output_fc (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Quantized fields container.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** 0



### [run_in_parallel](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: quantization_fc

 **Full name**: compression.quantization_fc

 **Internal name**: quantization_fc

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("quantization_fc"); // operator instantiation
op.connect(0, my_input_fc);
op.connect(1, my_threshold);
ansys::dpf::FieldsContainer my_output_fc = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.quantization_fc() # operator instantiation
op.inputs.input_fc.connect(my_input_fc)
op.inputs.threshold.connect(my_threshold)
my_output_fc = op.outputs.output_fc()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.quantization_fc() # operator instantiation
op.inputs.input_fc.Connect(my_input_fc)
op.inputs.threshold.Connect(my_threshold)
my_output_fc = op.outputs.output_fc.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.