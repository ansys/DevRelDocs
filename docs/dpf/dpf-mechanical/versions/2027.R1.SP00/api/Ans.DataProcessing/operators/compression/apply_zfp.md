---
uid: Ans.DataProcessing.operators.compression.apply_zfp
---

# *class* apply_zfp(dataIn: object = None, mode: object = None, mode_parameter: object = None, dim: object = None, order: object = None, double_absthreshold: object = None, double_relthreshold: object = None, config: OperatorConfig = None)

Compressing input data using one of zfp compression algorithm modes.

available inputs: `dataIn` (Field, FieldsContainer), `mode` (string, Char), `mode_parameter` (Int32, double), `dim` (Int32) (optional), `order` (Int32) (optional), `double_absthreshold` (double) (optional), `double_relthreshold` (double) (optional)

available outputs: `compress_speed` (double), `compress_ratio` (double), `dataOut` (CustomTypeFieldsContainer)

**DPF Framework Reference:** [apply_zfp operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/apply_zfp.md)

**Parameters:**

* **dataIn**
* **mode**
* **mode_parameter**
* **dim**
* **order**
* **double_absthreshold**
* **double_relthreshold**
* **config**

**Example:**

```python
op = apply_zfp()

op = apply_zfp(dataIn=my_dataIn,mode=my_mode,mode_parameter=my_mode_parameter,dim=my_dim,order=my_order,double_absthreshold=my_double_absthreshold,double_relthreshold=my_double_relthreshold)
```

## Inputs

### dataIn

field or fields container to be compressed

**Type:** *LinkableInput*

### mode

zfp mode: fixed-rate ('r'), fixed-precision ('p'), fixed-accuracy ('a')

**Type:** *LinkableInput*

### mode_parameter

mode-corresponding parameter: rate (double) / precision (int) / accuracy (double)

**Type:** *LinkableInput*

### dim

dimension (1D/2D/3D) for data organization before the compression (int; default: 2)

**Type:** *LinkableInput*

### order

xyz dimensions order, where x (row) corresponds to number of elementary data, y (col) - number of time steps, z - number of components (applicable only for 3d data) : 0=xyz, 1=yxz (int; default: 0)

**Type:** *LinkableInput*

### double_absthreshold

Double positive small value. All the values smaller than max(small value, max(vi) * relative threshold) are considered as zero values, (default value: 1.0e-18).

**Type:** *LinkableInput*

### double_relthreshold

**Type:** *LinkableInput*

## Outputs

### compress_speed

the output entity is a double, containing compression speed of the input data: for ElementalNodal location - [elements/sec], for Nodal location - [nodes/sec]

**Type:** *LinkableOutput*

### compress_ratio

the output entity is a double, containing compression rate = initial/compressed

**Type:** *LinkableOutput*

### dataOut

the output entity is a 'custom type field container';                     each output field containing compressed results corresponding to one component data (ie. input vector field/fc contains 3 components will give 3 output fields), this is not the case when input pin3 is set to 3, all components will be compressed into one field.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
