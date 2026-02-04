---
category: utility
plugin: core
license: None
---

# utility:merge supports

**Version: 0.0.0**

## Description

Assembles a set of supports into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -200</strong>|  should_merge_named_selections |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  supports |`vector<shared_ptr<abstract_field_support>>`, `abstract_field_support` | A vector of supports to merge or supports from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_support |`abstract_field_support` |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_supports

 **Full name**: utility.merge_supports

 **Internal name**: merge::abstract_support

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::abstract_support"); // operator instantiation
op.connect(-200, my_should_merge_named_selections);
op.connect(0, my_supports);
ansys::dpf::AbstractFieldSupport my_merged_support = op.getOutput<ansys::dpf::AbstractFieldSupport>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_supports() # operator instantiation
op.inputs.should_merge_named_selections.connect(my_should_merge_named_selections)
op.inputs.supports1.connect(my_supports1)
op.inputs.supports2.connect(my_supports2)
my_merged_support = op.outputs.merged_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_supports() # operator instantiation
op.inputs.should_merge_named_selections.Connect(my_should_merge_named_selections)
op.inputs.supports.Connect(my_supports)
my_merged_support = op.outputs.merged_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.