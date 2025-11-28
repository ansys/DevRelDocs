---
uid: Ans.DataProcessing.operators.utility.for_each
title: for_each
---

# for_each Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Allows to write a loop over a chunk of operators.   ///available inputs: iterable (object), iterable_values (object) (optional), pin_index (Int32) (optional), forward1 (object), forward2 (object)
            available outputs: empty (object), output1 (object), output2 (object)

for_each()
for_each(iterable: object, iterable_values: object, pin_index: object, forward1: object, forward2: object, config: OperatorConfig)
for_each(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
for_each()
```

#### Constructor

```python
for_each(iterable, iterable_values, pin_index, forward1, forward2, config)
```

**Parameters:**

- `iterable` (*object*)
- `iterable_values` (*object*)
- `pin_index` (*object*)
- `forward1` (*object*)
- `forward2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
for_each(config)
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
