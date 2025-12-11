---
uid: Ans.DataProcessing.operators.invariant.von_mises_eqv_fc
---

# von_mises_eqv_fc Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

## Summary

Computes the element-wise Von-Mises criteria on all the tensor fields of a fields container.

available inputs: `fields_container` (FieldsContainer), `poisson_ratio` (double, Int32)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = von_mises_eqv_fc()

op = von_mises_eqv_fc(fields_container=my_fields_container,poisson_ratio=my_poisson_ratio)
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

### poisson_ratio

Poisson ratio to be used in equivalent strain calculation.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
von_mises_eqv_fc()
```

#### Constructor

```python
von_mises_eqv_fc(fields_container, poisson_ratio, config)
```

**Parameters:**

- `fields_container` (*object*)
- `poisson_ratio` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
von_mises_eqv_fc(config)
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
