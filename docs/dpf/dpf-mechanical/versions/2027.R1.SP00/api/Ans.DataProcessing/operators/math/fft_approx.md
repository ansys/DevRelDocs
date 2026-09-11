---
uid: Ans.DataProcessing.operators.math.fft_approx
---

# *class* fft_approx(time_scoping: object = None, mesh_scoping: object = None, entity_to_fit: object = None, component_number: object = None, first_derivative: object = None, second_derivative: object = None, fit_data: object = None, cutoff_fr: object = None, config: OperatorConfig = None)

Computes a frequency-filtered smooth curve fitting using the

[Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)

and cubic spline interpolation, operating along the time axis for each spatial entity.

For each entity (node i), the time-series $y(t)$ is fitted; the FFT filter removes

frequency components above the cutoff frequency (pin 7), and the cubic spline reconstructs

the filtered signal at the original time steps.

First and second time derivatives of the fitted curve are available at output pins 1 and 2.

available inputs: `time_scoping` (IList int, Scoping, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `entity_to_fit` (FieldsContainer), `component_number` (Int32), `first_derivative` (bool) (optional), `second_derivative` (bool) (optional), `fit_data` (bool) (optional), `cutoff_fr` (double, Int32) (optional)

available outputs: `fitted_entity_y` (FieldsContainer), `first_der_dy` (FieldsContainer), `second_der_d2y` (FieldsContainer)

**DPF Framework Reference:** [fft_approx operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_approx.md)

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

Time scoping to select which time steps are used as input. When omitted, all time steps in the fields container are used.

**Type:** *LinkableInput*

### mesh_scoping

Spatial scoping to restrict which entities are processed. When omitted, all entities in the fields container are processed.

**Type:** *LinkableInput*

### entity_to_fit

Time-varying fields container to fit. Nodal and elemental locations are supported (elemental-nodal inputs are averaged to elemental).

**Type:** *LinkableInput*

### component_number

Zero-based index of the component to fit. For example, $0$ for the X-component, $1$ for Y, and so on. Required when the input has more than one component.

**Type:** *LinkableInput*

### first_derivative

When true, computes the first time derivative of the fitted curve at output pin 1. Default is false.

**Type:** *LinkableInput*

### second_derivative

When true, computes the second time derivative of the fitted curve at output pin 2. Default is false.

**Type:** *LinkableInput*

### fit_data

When true, computes the fitted values at output pin 0. Default is false.

**Type:** *LinkableInput*

### cutoff_fr

Cutoff frequency for the FFT filter. Harmonics above this frequency are removed before spline fitting. Default is $10$.

**Type:** *LinkableInput*

## Outputs

### fitted_entity_y

Fitted time-series fields container. Only produced when pin 6 is true. Same spatial and time layout as the input.

**Type:** *LinkableOutput*

### first_der_dy

First time derivative $\mathrm{d}y/\mathrm{d}t$ of the fitted curve. Only produced when pin 4 is true. Same layout as pin 0.

**Type:** *LinkableOutput*

### second_der_d2y

Second time derivative $\mathrm{d}^2y/\mathrm{d}t^2$ of the fitted curve. Only produced when pin 5 is true. Same layout as pin 0.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
