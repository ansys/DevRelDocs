---
uid: Ans.DataProcessing.operators.invariant.von_mises_eqv
title: von_mises_eqv
---

# von_mises_eqv Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

Computes the element-wise Von-Mises criteria on a tensor field.   ///available inputs: field (Field, FieldsContainer), poisson_ratio (double, Int32)
            available outputs: field (Field)

von_mises_eqv()
von_mises_eqv(field: object, poisson_ratio: object, config: OperatorConfig)
von_mises_eqv(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
von_mises_eqv()
```

#### Constructor

```python
von_mises_eqv(field, poisson_ratio, config)
```

**Parameters:**

- `field` (*object*)
- `poisson_ratio` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
von_mises_eqv(config)
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
