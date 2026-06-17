---
uid: Ans.DataProcessing.operators.math.fft_gradient_eval
---

# *class* fft_gradient_eval(fields_container: object = None, time_scoping: object = None, fs_ratio: object = None, config: OperatorConfig = None)

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

available inputs: `fields_container` (FieldsContainer), `time_scoping` (Scoping) (optional), `fs_ratio` (Int32) (optional)

available outputs: `coefficients` (FieldsContainer)

**DPF Framework Reference:** [fft_gradient_eval operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_gradient_eval.md)

**Parameters:**

* **fields_container**
* **time_scoping**
* **fs_ratio**
* **config**

**Example:**

```python
op = fft_gradient_eval()

op = fft_gradient_eval(fields_container=my_fields_container,time_scoping=my_time_scoping,fs_ratio=my_fs_ratio)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### time_scoping

if specified only the results at these set ids are used

**Type:** *LinkableInput*

### fs_ratio

default value = 20

**Type:** *LinkableInput*

## Outputs

### coefficients

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
