---
uid: Ans.DataProcessing.operators.geo.spherical_to_cartesian
---

# spherical_to_cartesian Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Converts 3D field from spherical coordinates to cartesian coordinates.   ///available inputs: field (Field, FieldsContainer)
            available outputs: field (Field)

spherical_to_cartesian()
spherical_to_cartesian(field: object, config: OperatorConfig)
spherical_to_cartesian(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
spherical_to_cartesian()
```

#### Constructor

```python
spherical_to_cartesian(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
spherical_to_cartesian(config)
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
