---
uid: Ans.DataProcessing.operators.filter.timefreq_band_pass
---

# *class* timefreq_band_pass(time_freq_support: object = None, min_threshold: object = None, max_threshold: object = None, config: OperatorConfig = None)

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

available inputs: `time_freq_support` (TimeFreqSupport), `min_threshold` (double, Field), `max_threshold` (double, Field) (optional)

available outputs: `time_freq_support` (TimeFreqSupport), `scoping` (Scoping)

**DPF Framework Reference:** [timefreq_band_pass operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/timefreq_band_pass.md)

**Parameters:**

* **time_freq_support**
* **min_threshold**
* **max_threshold**
* **config**

**Example:**

```python
op = timefreq_band_pass()

op = timefreq_band_pass(time_freq_support=my_time_freq_support,min_threshold=my_min_threshold,max_threshold=my_max_threshold)
```

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### min_threshold

A minimum threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

### max_threshold

A maximum threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

## Outputs

### time_freq_support

**Type:** *LinkableOutput*

### scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
