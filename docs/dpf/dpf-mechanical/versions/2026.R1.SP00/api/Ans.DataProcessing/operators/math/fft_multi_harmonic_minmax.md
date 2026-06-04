---
uid: Ans.DataProcessing.operators.math.fft_multi_harmonic_minmax
---

# fft_multi_harmonic_minmax Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping

available inputs: `fields_container` (FieldsContainer), `rpm_scoping` (Scoping) (optional), `fs_ratio` (Int32) (optional), `num_subdivisions` (Int32) (optional), `max_num_subdivisions` (Int32) (optional), `num_cycles` (Int32) (optional), `use_harmonic_zero` (bool) (optional), `calculate_time_series` (bool) (optional), `substeps_selector` (IList int, System.Collections.IEnumerable) (optional)

available outputs: `field_min` (FieldsContainer), `field_max` (FieldsContainer), `all_fields` (FieldsContainer)

## Example

```python
op = fft_multi_harmonic_minmax()

op = fft_multi_harmonic_minmax(fields_container=my_fields_container,rpm_scoping=my_rpm_scoping,fs_ratio=my_fs_ratio,num_subdivisions=my_num_subdivisions,max_num_subdivisions=my_max_num_subdivisions,num_cycles=my_num_cycles,use_harmonic_zero=my_use_harmonic_zero,calculate_time_series=my_calculate_time_series,substeps_selector=my_substeps_selector)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
fft_multi_harmonic_minmax()
```

#### Constructor

```python
fft_multi_harmonic_minmax(fields_container, rpm_scoping, fs_ratio, num_subdivisions, max_num_subdivisions, num_cycles, use_harmonic_zero, calculate_time_series, substeps_selector, config)
```

**Parameters:**

- `fields_container` (*object*)
- `rpm_scoping` (*object*)
- `fs_ratio` (*object*)
- `num_subdivisions` (*object*)
- `max_num_subdivisions` (*object*)
- `num_cycles` (*object*)
- `use_harmonic_zero` (*object*)
- `calculate_time_series` (*object*)
- `substeps_selector` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fft_multi_harmonic_minmax(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
