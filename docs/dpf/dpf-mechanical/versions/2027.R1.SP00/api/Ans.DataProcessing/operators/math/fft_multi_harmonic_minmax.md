---
uid: Ans.DataProcessing.operators.math.fft_multi_harmonic_minmax
---

# *class* fft_multi_harmonic_minmax(fields_container: object = None, rpm_scoping: object = None, fs_ratio: object = None, num_subdivisions: object = None, max_num_subdivisions: object = None, num_cycles: object = None, use_harmonic_zero: object = None, calculate_time_series: object = None, substeps_selector: object = None, config: OperatorConfig = None)

Finds the minimum and maximum of a multi-harmonic field over one period using an adaptive time-stepping

gradient method. The field is expressed as a [Fourier series](https://en.wikipedia.org/wiki/Fourier_series)

over harmonic orders corresponding to integer multiples of the operating speed (RPMs).

For each spatial entity, the series is evaluated at adaptively chosen time instants over one period

and the pointwise minimum and maximum are extracted.

ElementalNodal locations are not supported.

available inputs: `fields_container` (FieldsContainer), `rpm_scoping` (Scoping) (optional), `fs_ratio` (Int32) (optional), `num_subdivisions` (Int32) (optional), `max_num_subdivisions` (Int32) (optional), `num_cycles` (Int32) (optional), `use_harmonic_zero` (bool) (optional), `calculate_time_series` (bool) (optional), `substeps_selector` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `field_min` (FieldsContainer), `field_max` (FieldsContainer), `all_fields` (FieldsContainer)

**DPF Framework Reference:** [fft_multi_harmonic_minmax operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/fft_multi_harmonic_minmax.md)

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

Complex multi-harmonic results fields container. Must have a complex label and a time-frequency support whose values are the harmonic excitation frequencies (RPMs). ElementalNodal results are not supported.

**Type:** *LinkableInput*

### rpm_scoping

RPM scoping. When provided, only the selected RPM set IDs are included in the Fourier series. When omitted, all available RPMs are used.

**Type:** *LinkableInput*

### fs_ratio

Oversampling ratio used to set the uniform time step as $1/(f_{max} \times \mathit{fs_ratio})$. Default is $20$.

**Type:** *LinkableInput*

### num_subdivisions

Number of uniform time subdivisions per period. When provided, overrides the adaptive step computation. Default is $-1$ (adaptive).

**Type:** *LinkableInput*

### max_num_subdivisions

Maximum number of time subdivisions to avoid excessively fine discretisation. Default is $8000$.

**Type:** *LinkableInput*

### num_cycles

Number of periods over which the signal is evaluated. Default is $2$.

**Type:** *LinkableInput*

### use_harmonic_zero

When true, includes the harmonic-zero (constant) term for the first RPM. Default is false.

**Type:** *LinkableInput*

### calculate_time_series

When true (default), computes the full time series at output pin 2. Set to false to skip the time-series output and only compute min and max, which reduces computation time.

**Type:** *LinkableInput*

### substeps_selector

List of harmonic order (substep) indices to include. When omitted, all available substeps are used.

**Type:** *LinkableInput*

## Outputs

### field_min

Fields container of pointwise minimum values over one period. Same spatial layout as the input.

**Type:** *LinkableOutput*

### field_max

Fields container of pointwise maximum values over one period. Same spatial layout as the input.

**Type:** *LinkableOutput*

### all_fields

Full time-series fields container over the evaluation period. Only produced when pin 7 is true (default).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
