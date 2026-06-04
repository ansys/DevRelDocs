---
uid: Ans.DataProcessing.operators.logic.identical_scopings
---

# identical_scopings Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

## Summary

Check if two scopings are identical.

available inputs: `scopingA` (Scoping), `scopingB` (Scoping)

available outputs: `boolean` (bool), `message` (string)

## Example

```python
op = identical_scopings()

op = identical_scopings(scopingA=my_scopingA,scopingB=my_scopingB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scopingA

**Type:** *LinkableInput*

### scopingB

**Type:** *LinkableInput*

## Outputs

### boolean

bool (true if identical...)

**Type:** *LinkableOutput*

### message

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
identical_scopings()
```

#### Constructor

```python
identical_scopings(scopingA, scopingB, config)
```

**Parameters:**

- `scopingA` (*object*)
- `scopingB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
identical_scopings(config)
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
