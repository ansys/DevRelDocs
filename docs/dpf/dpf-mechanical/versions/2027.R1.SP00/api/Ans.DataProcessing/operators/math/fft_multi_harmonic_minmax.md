---
uid: Ans.DataProcessing.operators.math.fft_multi_harmonic_minmax
---

# *class* fft_multi_harmonic_minmax(fields_container: object = None, rpm_scoping: object = None, fs_ratio: object = None, num_subdivisions: object = None, max_num_subdivisions: object = None, num_cycles: object = None, use_harmonic_zero: object = None, calculate_time_series: object = None, substeps_selector: object = None, config: OperatorConfig = None)

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping

available inputs: `fields_container` (FieldsContainer), `rpm_scoping` (Scoping) (optional), `fs_ratio` (Int32) (optional), `num_subdivisions` (Int32) (optional), `max_num_subdivisions` (Int32) (optional), `num_cycles` (Int32) (optional), `use_harmonic_zero` (bool) (optional), `calculate_time_series` (bool) (optional), `substeps_selector` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `field_min` (FieldsContainer), `field_max` (FieldsContainer), `all_fields` (FieldsContainer)

**DPF Framework Reference:** [fft_multi_harmonic_minmax operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_multi_harmonic_minmax.md)

**Parameters:**

* **fields_container**
* **rpm_scoping**
* **fs_ratio**
* **num_subdivisions**
* **max_num_subdivisions**
* **num_cycles**
* **use_harmonic_zero**
* **calculate_time_series**
* **substeps_selector**
* **config**

**Example:**

```python
op = fft_multi_harmonic_minmax()

op = fft_multi_harmonic_minmax(fields_container=my_fields_container,rpm_scoping=my_rpm_scoping,fs_ratio=my_fs_ratio,num_subdivisions=my_num_subdivisions,max_num_subdivisions=my_max_num_subdivisions,num_cycles=my_num_cycles,use_harmonic_zero=my_use_harmonic_zero,calculate_time_series=my_calculate_time_series,substeps_selector=my_substeps_selector)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### rpm_scoping

rpm scoping, by default the fourier series sum is evaluated using all the rpms

**Type:** *LinkableInput*

### fs_ratio

field or fields container with only one field is expected

**Type:** *LinkableInput*

### num_subdivisions

connect number subdivisions, used for uniform discretization

**Type:** *LinkableInput*

### max_num_subdivisions

connect max number subdivisions, used to avoid huge number of sudivisions

**Type:** *LinkableInput*

### num_cycles

Number of cycle of the periodic signal (default is 2)

**Type:** *LinkableInput*

### use_harmonic_zero

use harmonic zero for first rpm (default is false)

**Type:** *LinkableInput*

### calculate_time_series

calculates time series output (output pin 2), setting it to false enhance performance if only min/max are required (default is true)

**Type:** *LinkableInput*

### substeps_selector

substeps to evaluate (frequencies), by default the operator is evaluated using all the available steps

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

### all_fields

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
