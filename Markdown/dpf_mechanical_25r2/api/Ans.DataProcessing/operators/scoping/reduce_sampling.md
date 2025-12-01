---
uid: Ans.DataProcessing.operators.scoping.reduce_sampling
---

# reduce_sampling Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Take a scoping and remove half of it's content.

available inputs: `mesh_scoping` (Scoping), `denominator` (Int32) (optional)

available outputs: `mesh_scoping` (Scoping)

## Example

```python
op = reduce_sampling()

op = reduce_sampling(mesh_scoping=my_mesh_scoping,denominator=my_denominator)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh_scoping

**Type:** *LinkableInput*

### denominator

Set the number of time the scoping is reduced (default is 2). Must be integer value above 1.

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
reduce_sampling()
```

#### Constructor

```python
reduce_sampling(mesh_scoping, denominator, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `denominator` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
reduce_sampling(config)
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
