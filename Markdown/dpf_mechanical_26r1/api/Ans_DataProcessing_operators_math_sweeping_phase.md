---
uid: Ans.DataProcessing.operators.math.sweeping_phase
title: sweeping_phase
---

# sweeping_phase Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Shifts the phase of a real and an imaginary field (in 0 and 1) of a given angle (in 3) of a unit (in 4). The resulting field is computed as field_out = real_field`*`cos(angle) - imaginary_field`*`sin(angle).   ///available inputs: real_field (Field, FieldsContainer), imaginary_field (Field, FieldsContainer), angle (double), unit_name (string) (optional), abs_value (bool), imaginary_part_null (bool)
            available outputs: field (Field)

sweeping_phase()
sweeping_phase(real_field: object, imaginary_field: object, angle: object, unit_name: object, abs_value: object, imaginary_part_null: object, config: OperatorConfig)
sweeping_phase(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
sweeping_phase()
```

#### Constructor

```python
sweeping_phase(real_field, imaginary_field, angle, unit_name, abs_value, imaginary_part_null, config)
```

**Parameters:**

- `real_field` (*object*)
- `imaginary_field` (*object*)
- `angle` (*object*)
- `unit_name` (*object*)
- `abs_value` (*object*)
- `imaginary_part_null` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
sweeping_phase(config)
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
