---
category: utility
plugin: core
license: None
---

# utility:merge scopings

**Version: 0.0.0**

## Description

Assembles a set of scopings into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), `vector<shared_ptr<scoping>>` | Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_scopings

 **Full name**: utility.merge_scopings

 **Internal name**: merge::scoping

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::scoping"); // operator instantiation
op.connect(0, my_scopings);
ansys::dpf::Scoping my_merged_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_scopings() # operator instantiation
op.inputs.scopings1.connect(my_scopings1)
op.inputs.scopings2.connect(my_scopings2)
my_merged_scoping = op.outputs.merged_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_scopings() # operator instantiation
op.inputs.scopings.Connect(my_scopings)
my_merged_scoping = op.outputs.merged_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.