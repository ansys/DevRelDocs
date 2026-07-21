---
uid: Ans.DataProcessing.operators.math.fft_gradient_eval
---

# *class* fft_gradient_eval(fields_container: object = None, time_scoping: object = None, fs_ratio: object = None, config: OperatorConfig = None)

Reconstitutes the time-domain signal from a complex FFT coefficients container and

finds its minimum and maximum using an adaptive time-step gradient method.

For each harmonic component at frequency $f_k$, the signal is:

$$F(t) = \sum_k A_k \sin(2\pi f_k t - \phi_k + \tfrac{\pi}{2})$$

where $A_k$ and $\phi_k$ are the amplitude and phase derived from the complex FFT coefficients.

The adaptive stepping enlarges the time step when the signal is far from a candidate extremum

(controlled by the oversampling ratio from pin 2), and refines near the extremum.

Only scalar fields are supported.

available inputs: `fields_container` (FieldsContainer), `time_scoping` (Scoping) (optional), `fs_ratio` (Int32) (optional)

available outputs: `coefficients` (FieldsContainer)

**DPF Framework Reference:** [fft_gradient_eval operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_gradient_eval.md)

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

Complex FFT coefficients container, as produced by the `fft` operator. Must have a complex label and a frequency-valued time-frequency support. Only scalar fields are supported.

**Type:** *LinkableInput*

### time_scoping

Frequency scoping. When provided, only the selected frequency set IDs contribute to the reconstruction. When omitted, all set IDs are used.

**Type:** *LinkableInput*

### fs_ratio

Oversampling ratio used to set the base time step as $1/(f_{max} \times \mathit{fs_ratio})$. Default is $20$.

**Type:** *LinkableInput*

## Outputs

### coefficients

Time-domain fields container evaluated at the adaptive time steps. One output field per input label combination (excluding the complex label).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
