---
uid: Ans.DataProcessing.operators.math.fft_multi_harmonic_minmax
---

# fft_multi_harmonic_minmax Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping   ///available inputs: fields_container (FieldsContainer), rpm_scoping (Scoping) (optional), fs_ratio (Int32) (optional), num_subdivisions (Int32) (optional), max_num_subdivisions (Int32) (optional), num_cycles (Int32) (optional), use_harmonic_zero (bool) (optional), calculate_time_series (bool) (optional), substeps_selector (IList int, System.Collections.IEnumerable) (optional)
            available outputs: field_min (FieldsContainer), field_max (FieldsContainer), all_fields (FieldsContainer)

fft_multi_harmonic_minmax()
fft_multi_harmonic_minmax(fields_container: object, rpm_scoping: object, fs_ratio: object, num_subdivisions: object, max_num_subdivisions: object, num_cycles: object, use_harmonic_zero: object, calculate_time_series: object, substeps_selector: object, config: OperatorConfig)
fft_multi_harmonic_minmax(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
