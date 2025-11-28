---
uid: Ans.DataProcessing.operators.min_max.min_max_inc
title: min_max_inc
---

# min_max_inc Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.   ///available inputs: field (Field), domain_id (Int32) (optional)
            available outputs: field_min (Field), field_max (Field), domain_ids_min (Scoping), domain_ids_max (Scoping)

min_max_inc()
min_max_inc(field: object, domain_id: object, config: OperatorConfig)
min_max_inc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_max_inc()
```

#### Constructor

```python
min_max_inc(field, domain_id, config)
```

**Parameters:**

- `field` (*object*)
- `domain_id` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_inc(config)
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
