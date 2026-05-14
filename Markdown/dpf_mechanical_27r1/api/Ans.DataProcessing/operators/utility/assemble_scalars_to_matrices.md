---
uid: Ans.DataProcessing.operators.utility.assemble_scalars_to_matrices
---

# *class* assemble_scalars_to_matrices(xx: object = None, yy: object = None, zz: object = None, xy: object = None, yz: object = None, xz: object = None, yx: object = None, zy: object = None, zx: object = None, symmetrical: object = None, config: OperatorConfig = None)

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).

available inputs: `xx` (Field) (optional), `yy` (Field) (optional), `zz` (Field) (optional), `xy` (Field) (optional), `yz` (Field) (optional), `xz` (Field) (optional), `yx` (Field) (optional), `zy` (Field) (optional), `zx` (Field) (optional), `symmetrical` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [assemble_scalars_to_matrices operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/assemble_scalars_to_matrices.md)

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
op = assemble_scalars_to_matrices()

op = assemble_scalars_to_matrices(xx=my_xx,yy=my_yy,zz=my_zz,xy=my_xy,yz=my_yz,xz=my_xz,yx=my_yx,zy=my_zy,zx=my_zx,symmetrical=my_symmetrical)
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

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
