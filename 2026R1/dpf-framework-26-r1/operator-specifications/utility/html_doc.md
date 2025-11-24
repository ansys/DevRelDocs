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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  output_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | default is {working directory}/dataProcessingDoc.html |
| <strong>Pin 1</strong>|  exposure_level |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: documentation

 **Scripting name**: None

 **Full name**: None

 **Internal name**: html_doc

 **License**: None

## Examples

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
<br>

## Changelog

- Version 0.0.0: Initial release.