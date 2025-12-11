---
uid: Ans.DataProcessing.operators.scoping.intersect
---

# intersect Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.

available inputs: `scopingA` (Scoping), `scopingB` (Scoping)

available outputs: `intersection` (Scoping), `scopingA_min_intersection` (Scoping)

## Example

```python
op = intersect()

op = intersect(scopingA=my_scopingA,scopingB=my_scopingB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scopingA

**Type:** *LinkableInput*

### scopingB

**Type:** *LinkableInput*

## Outputs

### intersection

**Type:** *LinkableOutput*

### scopingA_min_intersection

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
intersect()
```

#### Constructor

```python
intersect(scopingA, scopingB, config)
```

**Parameters:**

- `scopingA` (*object*)
- `scopingB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
intersect(config)
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
