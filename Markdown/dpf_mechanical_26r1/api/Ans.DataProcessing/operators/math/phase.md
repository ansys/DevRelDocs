---
uid: Ans.DataProcessing.operators.math.phase
---

# phase Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the phase (in rad) between a real and an imaginary field.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

## Example

```python
op = phase()

op = phase(fieldA=my_fieldA,fieldB=my_fieldB)
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

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
phase()
```

#### Constructor

```python
phase(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
phase(config)
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
