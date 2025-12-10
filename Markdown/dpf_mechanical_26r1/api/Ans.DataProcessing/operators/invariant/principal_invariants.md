---
uid: Ans.DataProcessing.operators.invariant.principal_invariants
---

# principal_invariants Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

## Summary

Computes the element-wise Eigen values of a tensor field.

available inputs: `field` (Field)

available outputs: `field_eig_1` (Field), `field_eig_2` (Field), `field_eig_3` (Field)

## Example

```python
op = principal_invariants()

op = principal_invariants(field=my_field)
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

### field_eig_1

first eigen value field

**Type:** *LinkableOutput*

### field_eig_2

second eigen value field

**Type:** *LinkableOutput*

### field_eig_3

third eigen value field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
principal_invariants()
```

#### Constructor

```python
principal_invariants(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
principal_invariants(config)
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
