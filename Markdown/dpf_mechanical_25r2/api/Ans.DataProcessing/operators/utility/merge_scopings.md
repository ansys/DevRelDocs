---
uid: Ans.DataProcessing.operators.utility.merge_scopings
---

# merge_scopings Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Assembles a set of scopings into a unique one.

available inputs: `scopings1` (Scoping, ScopingsContainer), `scopings2` (Scoping, ScopingsContainer)

available outputs: `merged_scoping` (Scoping)

## Example

```python
op = merge_scopings()

op = merge_scopings(scopings1=my_scopings1,scopings2=my_scopings2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scopings1

Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ...

**Type:** *LinkableInput*

### scopings2

Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
merge_scopings()
```

#### Constructor

```python
merge_scopings(scopings1, scopings2, config)
```

**Parameters:**

- `scopings1` (*object*)
- `scopings2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
merge_scopings(config)
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
