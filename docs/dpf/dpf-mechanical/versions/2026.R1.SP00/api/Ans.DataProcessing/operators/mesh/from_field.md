---
uid: Ans.DataProcessing.operators.mesh.from_field
---

# from_field Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Extracts the meshed region from the support of a field.

available inputs: `field` (Field)

available outputs: `mesh` (MeshedRegion)

## Example

```python
op = from_field()

op = from_field(field=my_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

Field containing a mesh support

**Type:** *LinkableInput*

## Outputs

### mesh

Meshed region extracted from the field's support

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
from_field()
```

#### Constructor

```python
from_field(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
from_field(config)
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
