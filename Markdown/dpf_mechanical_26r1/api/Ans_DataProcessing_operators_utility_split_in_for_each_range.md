---
uid: Ans.DataProcessing.operators.utility.split_in_for_each_range
title: split_in_for_each_range
---

# split_in_for_each_range Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Split a scoping into several pieces so you can iterate it with a for_each loop.   ///available inputs: iterable (object) (optional), operator_to_iterate (Operator), pin_index (Int32), scoping (Scoping), chunk_size (Int32)
            available outputs: output (object)

split_in_for_each_range()
split_in_for_each_range(iterable: object, operator_to_iterate: object, pin_index: object, scoping: object, chunk_size: object, config: OperatorConfig)
split_in_for_each_range(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
split_in_for_each_range()
```

#### Constructor

```python
split_in_for_each_range(iterable, operator_to_iterate, pin_index, scoping, chunk_size, config)
```

**Parameters:**

- `iterable` (*object*)
- `operator_to_iterate` (*object*)
- `pin_index` (*object*)
- `scoping` (*object*)
- `chunk_size` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
split_in_for_each_range(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
