---
uid: Ans.DataProcessing.operators.invariant.invariants_fc
---

# invariants_fc Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

## Summary

Computes the element-wise invariants of all the tensor fields of a fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_int` (FieldsContainer), `fields_eqv` (FieldsContainer), `fields_max_shear` (FieldsContainer)

## Example

```python
op = invariants_fc()

op = invariants_fc(fields_container=my_fields_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

## Outputs

### fields_int

stress intensity field

**Type:** *LinkableOutput*

### fields_eqv

stress equivalent intensity

**Type:** *LinkableOutput*

### fields_max_shear

max shear stress field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
invariants_fc()
```

#### Constructor

```python
invariants_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
invariants_fc(config)
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
