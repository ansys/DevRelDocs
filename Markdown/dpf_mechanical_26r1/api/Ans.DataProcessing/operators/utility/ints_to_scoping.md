---
uid: Ans.DataProcessing.operators.utility.ints_to_scoping
---

# ints_to_scoping Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Creates a scoping from integer data. Converts single integers, integer vectors, or existing scopings into a properly formatted DPF scoping.

available inputs: `ids` (Int32, IList int, Scoping, System.Collections.IEnumerable), `location` (string) (optional), `upper_bound` (Int32, Scoping) (optional)

available outputs: `scoping` (Scoping)

## Example

```python
op = ints_to_scoping()

op = ints_to_scoping(ids=my_ids,location=my_location,upper_bound=my_upper_bound)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### ids

Integer ID(s) for the scoping: single int, vector of ints, or existing scoping

**Type:** *LinkableInput*

### int_or_vector_int

Deprecated alias of: ids

**Type:** *LinkableInput*

### location

Location string for the scoping (e.g., 'Nodal', 'Elemental'). Default is empty

**Type:** *LinkableInput*

### upper_bound

Upper bound for creating a range scoping. Creates IDs from pin 0 value to this upper bound (inclusive)

**Type:** *LinkableInput*

## Outputs

### scoping

Generated scoping with the specified IDs and location

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
ints_to_scoping()
```

#### Constructor

```python
ints_to_scoping(ids, location, upper_bound, config)
```

**Parameters:**

- `ids` (*object*)
- `location` (*object*)
- `upper_bound` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
ints_to_scoping(config)
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
