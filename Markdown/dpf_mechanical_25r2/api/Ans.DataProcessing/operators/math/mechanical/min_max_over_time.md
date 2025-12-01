---
uid: Ans.DataProcessing.operators.math.mechanical.min_max_over_time
---

# min_max_over_time Class

**Namespace:** [Ans.DataProcessing.operators.math.mechanical](Ans_DataProcessing_operators_math_mechanical.md)

Evaluates minimum/maximum over time/frequency.   ///available inputs: fields_container (FieldsContainer), int32 (Int32)
            available outputs: field_container_1 (FieldsContainer), field_container_2 (FieldsContainer)

min_max_over_time()
min_max_over_time(fields_container: object, int32: object, config: OperatorConfig)
min_max_over_time(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math.mechanical` |
| Assembly | `Ans_Dpf_Mechanical_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_max_over_time()
```

#### Constructor

```python
min_max_over_time(fields_container, int32, config)
```

**Parameters:**

- `fields_container` (*object*)
- `int32` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_over_time(config)
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
