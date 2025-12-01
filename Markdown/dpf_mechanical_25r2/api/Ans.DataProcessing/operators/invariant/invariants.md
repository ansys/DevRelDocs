---
uid: Ans.DataProcessing.operators.invariant.invariants
---

# invariants Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

## Summary

Computes the element-wise invariants of a tensor field.

available inputs: `field` (Field)

available outputs: `field_int` (Field), `field_eqv` (Field), `field_max_shear` (Field)

## Example

```python
op = invariants()

op = invariants(field=my_field)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

**Type:** *LinkableInput*

## Outputs

### field_int

stress intensity field

**Type:** *LinkableOutput*

### field_eqv

stress equivalent intensity

**Type:** *LinkableOutput*

### field_max_shear

max shear stress field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
invariants()
```

#### Constructor

```python
invariants(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
invariants(config)
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
