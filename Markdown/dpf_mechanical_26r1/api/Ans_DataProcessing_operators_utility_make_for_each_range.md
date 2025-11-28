---
uid: Ans.DataProcessing.operators.utility.make_for_each_range
title: make_for_each_range
---

# make_for_each_range Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Generate a range that can be consumed by the for_each operator   ///available inputs: try_generate_iterable (bool) (optional), iterable (object) (optional), operator_to_iterate (Operator), pin_index (Int32), valueA (object), valueB (object), valueC1 (object), valueC2 (object)
            available outputs: output (object)

make_for_each_range()
make_for_each_range(try_generate_iterable: object, iterable: object, operator_to_iterate: object, pin_index: object, valueA: object, valueB: object, valueC1: object, valueC2: object, config: OperatorConfig)
make_for_each_range(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
make_for_each_range()
```

#### Constructor

```python
make_for_each_range(try_generate_iterable, iterable, operator_to_iterate, pin_index, valueA, valueB, valueC1, valueC2, config)
```

**Parameters:**

- `try_generate_iterable` (*object*)
- `iterable` (*object*)
- `operator_to_iterate` (*object*)
- `pin_index` (*object*)
- `valueA` (*object*)
- `valueB` (*object*)
- `valueC1` (*object*)
- `valueC2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_for_each_range(config)
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
