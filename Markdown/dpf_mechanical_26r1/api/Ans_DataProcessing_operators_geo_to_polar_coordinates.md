---
uid: Ans.DataProcessing.operators.geo.to_polar_coordinates
title: to_polar_coordinates
---

# to_polar_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Finds r, theta (rad), and z coordinates of a coordinates (nodal) field in a cartesian coordinates system where the input coordinate system defines the rotation axis and the origin.   ///available inputs: field (Field, FieldsContainer), coordinate_system (Field) (optional)
            available outputs: field (Field)

to_polar_coordinates()
to_polar_coordinates(field: object, coordinate_system: object, config: OperatorConfig)
to_polar_coordinates(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
to_polar_coordinates()
```

#### Constructor

```python
to_polar_coordinates(field, coordinate_system, config)
```

**Parameters:**

- `field` (*object*)
- `coordinate_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
to_polar_coordinates(config)
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
