---
uid: Ans.DataProcessing.operators.math.modal_participation
---

# modal_participation Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Compute the modal participation factor for a given vector field V, defined as  sum_i ( V .dot. mode_shape_i * ponderation ).

available inputs: `v_real` (Field), `v_imag` (Field), `mode_shapes` (FieldsContainer), `ponderation` (Field) (optional), `force_label_space` (LabelSpace) (optional)

available outputs: `output` (FieldsContainer)

## Example

```python
op = modal_participation()

op = modal_participation(v_real=my_v_real,v_imag=my_v_imag,mode_shapes=my_mode_shapes,ponderation=my_ponderation,force_label_space=my_force_label_space)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### v_real

real part of field V

**Type:** *LinkableInput*

### v_imag

imag part of field V

**Type:** *LinkableInput*

### mode_shapes

**Type:** *LinkableInput*

### ponderation

**Type:** *LinkableInput*

### force_label_space

If set, will force a label space for output result.

**Type:** *LinkableInput*

## Outputs

### output

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
modal_participation()
```

#### Constructor

```python
modal_participation(v_real, v_imag, mode_shapes, ponderation, force_label_space, config)
```

**Parameters:**

- `v_real` (*object*)
- `v_imag` (*object*)
- `mode_shapes` (*object*)
- `ponderation` (*object*)
- `force_label_space` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
modal_participation(config)
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
