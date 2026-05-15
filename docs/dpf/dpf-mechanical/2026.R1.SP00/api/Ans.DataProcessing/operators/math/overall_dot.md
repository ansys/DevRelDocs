---
uid: Ans.DataProcessing.operators.math.overall_dot
---

# overall_dot Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes a dot product between two fields (fields are seen like a single large vector) and returns a scalar.

available inputs: `fieldA` (Field), `fieldB` (Field)

available outputs: `field` (Field)

## Example

```python
op = overall_dot()

op = overall_dot(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

**Type:** *LinkableInput*

### fieldB

**Type:** *LinkableInput*

## Outputs

### field

Field defined on over-all location, contains a unique scalar value

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
overall_dot()
```

#### Constructor

```python
overall_dot(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
overall_dot(config)
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
