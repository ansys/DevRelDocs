---
uid: Ans.DataProcessing.operators.math.make_one_on_comp
---

# make_one_on_comp Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Takes the input field's scoping and creates a field full of zeros, except for the indexes from pin 1 that will hold 1.0.

available inputs: `fieldA` (Field), `scalar_int` (Int32)

available outputs: `field` (Field)

## Example

```python
op = make_one_on_comp()

op = make_one_on_comp(fieldA=my_fieldA,scalar_int=my_scalar_int)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fieldA

**Type:** *LinkableInput*

### scalar_int

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
make_one_on_comp()
```

#### Constructor

```python
make_one_on_comp(fieldA, scalar_int, config)
```

**Parameters:**

- `fieldA` (*object*)
- `scalar_int` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_one_on_comp(config)
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
