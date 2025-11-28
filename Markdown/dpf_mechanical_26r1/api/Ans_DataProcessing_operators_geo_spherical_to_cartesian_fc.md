---
uid: Ans.DataProcessing.operators.geo.spherical_to_cartesian_fc
title: spherical_to_cartesian_fc
---

# spherical_to_cartesian_fc Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Converts 3D field from spherical coordinates to cartesian coordinates.   ///available inputs: fields_container (FieldsContainer)
            available outputs: fields_container (FieldsContainer)

spherical_to_cartesian_fc()
spherical_to_cartesian_fc(fields_container: object, config: OperatorConfig)
spherical_to_cartesian_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
spherical_to_cartesian_fc()
```

#### Constructor

```python
spherical_to_cartesian_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
spherical_to_cartesian_fc(config)
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
