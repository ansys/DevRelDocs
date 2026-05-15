---
uid: Ans.DataProcessing.operators.geo.rotate_fc
---

# rotate_fc Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Apply a transformation (rotation) matrix on all the fields of a fields container.

available inputs: `fields_container` (FieldsContainer), `coordinate_system` (Field)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = rotate_fc()

op = rotate_fc(fields_container=my_fields_container,coordinate_system=my_coordinate_system)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
rotate_fc()
```

#### Constructor

```python
rotate_fc(fields_container, coordinate_system, config)
```

**Parameters:**

- `fields_container` (*object*)
- `coordinate_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rotate_fc(config)
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
