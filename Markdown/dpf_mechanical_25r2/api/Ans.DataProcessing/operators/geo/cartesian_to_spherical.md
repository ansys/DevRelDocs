---
uid: Ans.DataProcessing.operators.geo.cartesian_to_spherical
---

# cartesian_to_spherical Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Converts 3D field from cartesian coordinates to spherical coordinates.   ///available inputs: field (Field, FieldsContainer)
            available outputs: field (Field)

cartesian_to_spherical()
cartesian_to_spherical(field: object, config: OperatorConfig)
cartesian_to_spherical(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
cartesian_to_spherical()
```

#### Constructor

```python
cartesian_to_spherical(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cartesian_to_spherical(config)
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
