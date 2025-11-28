---
uid: Ans.DataProcessing.operators.scoping.intersect
title: intersect
---

# intersect Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.   ///available inputs: scopingA (Scoping), scopingB (Scoping)
            available outputs: intersection (Scoping), scopingA_min_intersection (Scoping)

intersect()
intersect(scopingA: object, scopingB: object, config: OperatorConfig)
intersect(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
