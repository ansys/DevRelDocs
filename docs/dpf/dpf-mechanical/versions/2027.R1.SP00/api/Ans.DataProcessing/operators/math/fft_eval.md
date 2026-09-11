---
uid: Ans.DataProcessing.operators.math.fft_eval
---

# *class* fft_eval(fields_container: object = None, time_scoping: object = None, field_t: object = None, config: OperatorConfig = None)

Reconstructs the time-domain signal from a complex FFT coefficients container.

For each complex coefficient at frequency $f_k$, evaluates the

[inverse Fourier series](https://en.wikipedia.org/wiki/Fourier_series):

$$f(t) = \sum_k \bigl(\mathrm{Re}[k]\,\cos(2\pi f_k t) + \mathrm{Im}[k]\,\sin(2\pi f_k t)\bigr)$$

The sum runs over all frequency set IDs in the input, or over the scoping from pin 1 when provided.

Only scalar fields (one component) are supported.

available inputs: `fields_container` (FieldsContainer), `time_scoping` (Scoping) (optional), `field_t` (Field)

available outputs: `field` (Field), `offset` (Field)

**DPF Framework Reference:** [fft_eval operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_eval.md)

**Parameters:**

* **fields_container**
* **time_scoping**
* **field_t**
* **config**

**Example:**

```python
op = fft_eval()

op = fft_eval(fields_container=my_fields_container,time_scoping=my_time_scoping,field_t=my_field_t)
```

## Inputs

### fields_container

Complex FFT coefficients container, as produced by the `fft` operator. Must have a complex label and a frequency-valued time-frequency support.

**Type:** *LinkableInput*

### time_scoping

Frequency scoping. When provided, only the selected frequency set IDs contribute to the reconstruction. When omitted, all set IDs are used.

**Type:** *LinkableInput*

### field_t

Field of time values at which to evaluate the reconstructed signal. The output contains one entity per entry in this field.

**Type:** *LinkableInput*

## Outputs

### field

Reconstructed time-domain fields container. One output field per input label combination (excluding the complex label), each evaluated at the time values from pin 2.

**Type:** *LinkableOutput*

### offset

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
