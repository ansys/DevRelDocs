---
uid: Ans.DataProcessing.operators.invariant.segalman_von_mises_eqv
title: segalman_von_mises_eqv
---

# segalman_von_mises_eqv Class

**Namespace:** [Ans.DataProcessing.operators.invariant](Ans_DataProcessing_operators_invariant.md)

Computes the element-wise Segalman Von-Mises criteria on a tensor field.   ///available inputs: field (Field, FieldsContainer)
            available outputs: field (Field)

segalman_von_mises_eqv()
segalman_von_mises_eqv(field: object, config: OperatorConfig)
segalman_von_mises_eqv(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.invariant` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
segalman_von_mises_eqv()
```

#### Constructor

```python
segalman_von_mises_eqv(field, config)
```

**Parameters:**

- `field` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
segalman_von_mises_eqv(config)
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
