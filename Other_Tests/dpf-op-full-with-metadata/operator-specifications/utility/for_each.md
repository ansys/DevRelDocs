---
category: utility
plugin: core
license: None
---

# utility:for each

## Description

Allows to write a loop over a chunk of operators.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  iterable | | Either the result of the make_iterable_info operator, or the operator that must be incremented. |
| <strong>Pin 1</strong>|  iterable_values | |  |
| <strong>Pin 2</strong>|  pin_index |[`int32`](../../getting-started/using-data-containers.md#int32) |  |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  forward | |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | empty | |  |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | output | |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **evaluate_inputs_before_run** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status. |
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: for_each
- Full name: utility.for_each
- Internal name: for_each
- License: None
  