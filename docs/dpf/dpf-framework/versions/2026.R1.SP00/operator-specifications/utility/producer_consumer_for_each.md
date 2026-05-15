---
category: utility
plugin: core
license: None
---

# utility:producer consumer for each

**Version: 0.0.0**

## Description

Allows to write a loop over operators by connecting data to iterate and by requesting the incrementally output merged.The chain of Operators are split into a first part: the producers and a second part: the consumers. These 2 parts will run asynchronously on 2 threads.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [producer_consumer_iterableq](#input_0) | |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [forward](#input_3) | |


<a id="input_0"></a>
### producer_consumer_iterableq (Pin 0)

- **Required:** Yes
- **Expected type(s):** 

The result of the make_producer_consumer_for_each_iterator operator.

<a id="input_3"></a>
### forward (Pin 3)

- **Required:** Yes
- **Expected type(s):** 

output of the last operators of the workflow


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [empty](#output_0) | |
|  **3**| [output](#output_3) | |


<a id="output_0"></a>
### empty (Pin 0)

- **Expected type(s):** 



<a id="output_3"></a>
### output (Pin 3)

- **Expected type(s):** 




## Configurations


### evaluate_inputs_before_run

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status.

### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: producer_consumer_for_each

 **Full name**: utility.producer_consumer_for_each

 **Internal name**: producer_consumer_for_each

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("producer_consumer_for_each"); // operator instantiation
op.connect(0, my_producer_consumer_iterableq);
op.connect(3, my_forward);
 my_empty = op.getOutput<>(0);
 my_output = op.getOutput<>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.producer_consumer_for_each() # operator instantiation
op.inputs.producer_consumer_iterableq.connect(my_producer_consumer_iterableq)
op.inputs.forward1.connect(my_forward1)
op.inputs.forward2.connect(my_forward2)
my_empty = op.outputs.empty()
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.producer_consumer_for_each() # operator instantiation
op.inputs.producer_consumer_iterableq.Connect(my_producer_consumer_iterableq)
op.inputs.forward.Connect(my_forward)
my_empty = op.outputs.empty.GetData()
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.