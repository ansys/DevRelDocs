---
category: utility
plugin: core
license: None
---

# utility:python generator

**Version: 0.0.0**

## Description

Generates .py file with specifications for loaded plugin(s).

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dll_source_path](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [output_path](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [load_symbol](#input_2) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [library_key](#input_3) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### dll_source_path (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1"></a>
### output_path (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_2"></a>
### load_symbol (Pin 2)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_3"></a>
### library_key (Pin 3)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|



## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: python_generator

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("python_generator"); // operator instantiation
op.connect(0, my_dll_source_path);
op.connect(1, my_output_path);
op.connect(2, my_load_symbol);
op.connect(3, my_library_key);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.dll_source_path.connect(my_dll_source_path)
op.inputs.output_path.connect(my_output_path)
op.inputs.load_symbol.connect(my_load_symbol)
op.inputs.library_key.connect(my_library_key)
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.dll_source_path.Connect(my_dll_source_path)
op.inputs.output_path.Connect(my_output_path)
op.inputs.load_symbol.Connect(my_load_symbol)
op.inputs.library_key.Connect(my_library_key)
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.