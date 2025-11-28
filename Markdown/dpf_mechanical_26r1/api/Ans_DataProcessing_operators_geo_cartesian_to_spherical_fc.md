---
uid: Ans.DataProcessing.operators.geo.cartesian_to_spherical_fc
title: cartesian_to_spherical_fc
---

# cartesian_to_spherical_fc Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Converts 3D field from cartesian coordinates to spherical coordinates.   ///available inputs: fields_container (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

cartesian_to_spherical_fc()
cartesian_to_spherical_fc(fields_container: object, config: OperatorConfig)
cartesian_to_spherical_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cartesian_to_spherical_fc()
```

#### Constructor

```python
cartesian_to_spherical_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cartesian_to_spherical_fc(config)
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
