---
uid: Ans.DataProcessing.operators.math.centroid_fc
---

# *class* centroid_fc(fields_container: object = None, time_freq: object = None, step: object = None, time_freq_support: object = None, config: OperatorConfig = None)

Computes a [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) between the two fields

in the input fields container that bracket the requested time or frequency value $t$:

$\mathrm{out}[i] = (1 - s) \cdot f_1[i] + s \cdot f_2[i]$,

where $s = (t - t_1) / (t_2 - t_1)$ and $t_1$, $t_2$ are the bracketing time/frequency values.

If the requested value exactly matches an available one, that field is returned directly.

available inputs: `fields_container` (FieldsContainer), `time_freq` (double), `step` (Int32) (optional), `time_freq_support` (TimeFreqSupport) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [centroid_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/centroid_fc.md)

**Parameters:**

* **fields_container**
* **time_freq**
* **step**
* **time_freq_support**
* **config**

**Example:**

```python
op = centroid_fc()

op = centroid_fc(fields_container=my_fields_container,time_freq=my_time_freq,step=my_step,time_freq_support=my_time_freq_support)
```

## Inputs

### fields_container

Fields container with fields over time or frequency.

**Type:** *LinkableInput*

### time_freq

Time or frequency value at which to interpolate.

**Type:** *LinkableInput*

### step

Optional step specification.

**Type:** *LinkableInput*

### time_freq_support

Optional time/frequency support for field resolution.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the interpolated fields at the requested time or frequency.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
