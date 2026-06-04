---
uid: Ans.DataProcessing.operators.math.fft_approx
---

# *class* fft_approx(time_scoping: object = None, mesh_scoping: object = None, entity_to_fit: object = None, component_number: object = None, first_derivative: object = None, second_derivative: object = None, fit_data: object = None, cutoff_fr: object = None, config: OperatorConfig = None)

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.

available inputs: `time_scoping` (IList int, Scoping, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `entity_to_fit` (FieldsContainer), `component_number` (Int32), `first_derivative` (bool), `second_derivative` (bool), `fit_data` (bool), `cutoff_fr` (double, Int32) (optional)

available outputs: `fitted_entity_y` (FieldsContainer), `first_der_dy` (FieldsContainer), `second_der_d2y` (FieldsContainer)

**DPF Framework Reference:** [fft_approx operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_approx.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **entity_to_fit**
* **component_number**
* **first_derivative**
* **second_derivative**
* **fit_data**
* **cutoff_fr**
* **config**

**Example:**

```python
op = fft_approx()

op = fft_approx(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,entity_to_fit=my_entity_to_fit,component_number=my_component_number,first_derivative=my_first_derivative,second_derivative=my_second_derivative,fit_data=my_fit_data,cutoff_fr=my_cutoff_fr)
```

## Inputs

### time_scoping

A time scoping to rescope / split the fields container given as input.

**Type:** *LinkableInput*

### mesh_scoping

A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input.

**Type:** *LinkableInput*

### entity_to_fit

Data changing in time to be fitted.

**Type:** *LinkableInput*

### component_number

Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on.

**Type:** *LinkableInput*

### first_derivative

Calculate the first derivative (bool). The default is false.

**Type:** *LinkableInput*

### second_derivative

Calculate the second derivative (bool). The default is false.

**Type:** *LinkableInput*

### fit_data

Calculate the fitted values (bool). The default is false

**Type:** *LinkableInput*

### cutoff_fr

Cutoff frequency.

**Type:** *LinkableInput*

## Outputs

### fitted_entity_y

The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data.

**Type:** *LinkableOutput*

### first_der_dy

The first derivative (dY) from the fitted Y.

**Type:** *LinkableOutput*

### second_der_d2y

The second derivative (d2Y) from the fitted Y.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
