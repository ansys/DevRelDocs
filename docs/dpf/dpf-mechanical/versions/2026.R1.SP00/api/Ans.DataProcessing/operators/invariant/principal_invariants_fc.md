---
uid: Ans.DataProcessing.operators.invariant.principal_invariants_fc
---

# principal_invariants_fc Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

## Summary

Computes the element-wise Eigen values of all the tensor fields of a fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_eig_1` (FieldsContainer), `fields_eig_2` (FieldsContainer), `fields_eig_3` (FieldsContainer)

## Example

```python
op = principal_invariants_fc()

op = principal_invariants_fc(fields_container=my_fields_container)
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

### fields_eig_1

first eigen value fields

**Type:** *LinkableOutput*

### fields_eig_2

second eigen value fields

**Type:** *LinkableOutput*

### fields_eig_3

third eigen value fields

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
principal_invariants_fc()
```

#### Constructor

```python
principal_invariants_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
principal_invariants_fc(config)
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
