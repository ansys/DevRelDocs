---
uid: Ans.DataProcessing.operators.math.linear_combination
---

# linear_combination Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes aXY + bZ where a,b (in 0, in 3) are scalar and X,Y,Z (in 1,2,4) are complex numbers.

available inputs: `a` (double), `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `b` (double), `fields_containerC` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = linear_combination()

op = linear_combination(a=my_a,fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,b=my_b,fields_containerC=my_fields_containerC)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### a

Double

**Type:** *LinkableInput*

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### b

Double

**Type:** *LinkableInput*

### fields_containerC

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
linear_combination()
```

#### Constructor

```python
linear_combination(a, fields_containerA, fields_containerB, b, fields_containerC, config)
```

**Parameters:**

- `a` (*object*)
- `fields_containerA` (*object*)
- `fields_containerB` (*object*)
- `b` (*object*)
- `fields_containerC` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
linear_combination(config)
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
