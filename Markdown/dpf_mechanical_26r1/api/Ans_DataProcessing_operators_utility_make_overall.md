---
uid: Ans.DataProcessing.operators.utility.make_overall
title: make_overall
---

# make_overall Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Extracts a value from a field and makes a new field containing only this value, with the associated scoping's location set as 'overall'.   ///available inputs: field (Field), id (Int32)
            available outputs: field (Field)

make_overall()
make_overall(field: object, id: object, config: OperatorConfig)
make_overall(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
make_overall()
```

#### Constructor

```python
make_overall(field, id, config)
```

**Parameters:**

- `field` (*object*)
- `id` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_overall(config)
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
