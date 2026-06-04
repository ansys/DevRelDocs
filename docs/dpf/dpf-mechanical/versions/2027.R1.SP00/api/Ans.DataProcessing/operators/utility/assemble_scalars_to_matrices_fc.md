---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_matrices_fc
---

# *class* assemble_scalars_to_matrices_fc(xx: object = None, yy: object = None, zz: object = None, xy: object = None, yz: object = None, xz: object = None, yx: object = None, zy: object = None, zx: object = None, symmetrical: object = None, config: OperatorConfig = None)

Take nine scalar fields container and assemble them as a 3x3 matrix fields. If the 'symmetrical' input is set to true, only six field containers are required (xx, yy, zz, xy, xz and yz).

available inputs: `xx` (FieldsContainer) (optional), `yy` (FieldsContainer) (optional), `zz` (FieldsContainer) (optional), `xy` (FieldsContainer) (optional), `yz` (FieldsContainer) (optional), `xz` (FieldsContainer) (optional), `yx` (FieldsContainer) (optional), `zy` (FieldsContainer) (optional), `zx` (FieldsContainer) (optional), `symmetrical` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [assemble_scalars_to_matrices_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/assemble_scalars_to_matrices_fc.md)

**Parameters:**

* **xx**
* **yy**
* **zz**
* **xy**
* **yz**
* **xz**
* **yx**
* **zy**
* **zx**
* **symmetrical**
* **config**

**Example:**

```python
op = assemble_scalars_to_matrices_fc()

op = assemble_scalars_to_matrices_fc(xx=my_xx,yy=my_yy,zz=my_zz,xy=my_xy,yz=my_yz,xz=my_xz,yx=my_yx,zy=my_zy,zx=my_zx,symmetrical=my_symmetrical)
```

## Inputs

### xx

**Type:** *LinkableInput*

### yy

**Type:** *LinkableInput*

### zz

**Type:** *LinkableInput*

### xy

**Type:** *LinkableInput*

### yz

**Type:** *LinkableInput*

### xz

**Type:** *LinkableInput*

### yx

**Type:** *LinkableInput*

### zy

**Type:** *LinkableInput*

### zx

**Type:** *LinkableInput*

### symmetrical

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
