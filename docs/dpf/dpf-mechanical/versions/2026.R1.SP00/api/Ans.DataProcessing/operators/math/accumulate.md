---
uid: Ans.DataProcessing.operators.math.accumulate
---

# accumulate Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Sums all the elementary data of a field to produce one elementary data point.

available inputs: `fieldA` (Field, FieldsContainer), `weights` (Field) (optional), `time_scoping` (Scoping) (optional)

available outputs: `field` (Field)

## Example

```python
op = accumulate()

op = accumulate(fieldA=my_fieldA,weights=my_weights,time_scoping=my_time_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

Field containing weights, one weight per entity

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### time_scoping

time_scoping

**Type:** *LinkableInput*

## Outputs

### field

Field containing the (weighted) sum for each component in an elementary data

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
accumulate()
```

#### Constructor

```python
accumulate(fieldA, weights, time_scoping, config)
```

**Parameters:**

- `fieldA` (*object*)
- `weights` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
accumulate(config)
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
