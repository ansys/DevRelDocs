---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_vectors
---

# assemble_scalars_to_vectors Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Takes three scalar fields and assembles them as a 3D vector field.

available inputs: `x` (Field) (optional), `y` (Field) (optional), `z` (Field) (optional)

available outputs: `field` (Field)

## Example

```python
op = assemble_scalars_to_vectors()

op = assemble_scalars_to_vectors(x=my_x,y=my_y,z=my_z)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### x

**Type:** *LinkableInput*

### y

**Type:** *LinkableInput*

### z

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
assemble_scalars_to_vectors()
```

#### Constructor

```python
assemble_scalars_to_vectors(x, y, z, config)
```

**Parameters:**

- `x` (*object*)
- `y` (*object*)
- `z` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
assemble_scalars_to_vectors(config)
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
