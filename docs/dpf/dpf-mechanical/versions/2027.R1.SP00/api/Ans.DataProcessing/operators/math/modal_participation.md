---
uid: Ans.DataProcessing.operators.math.modal_participation
---

# *class* modal_participation(v_real: object = None, v_imag: object = None, mode_shapes: object = None, ponderation: object = None, force_label_space: object = None, config: OperatorConfig = None)

Compute the modal participation factor for a given vector field V, defined as  sum_i ( V .dot. mode_shape_i * ponderation ).

available inputs: `v_real` (Field), `v_imag` (Field), `mode_shapes` (FieldsContainer), `ponderation` (Field) (optional), `force_label_space` (LabelSpace) (optional)

available outputs: `output` (FieldsContainer)

**DPF Framework Reference:** [modal_participation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/modal_participation.md)

**Parameters:**

* **v_real**
* **v_imag**
* **mode_shapes**
* **ponderation**
* **force_label_space**
* **config**

**Example:**

```python
op = modal_participation()

op = modal_participation(v_real=my_v_real,v_imag=my_v_imag,mode_shapes=my_mode_shapes,ponderation=my_ponderation,force_label_space=my_force_label_space)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
