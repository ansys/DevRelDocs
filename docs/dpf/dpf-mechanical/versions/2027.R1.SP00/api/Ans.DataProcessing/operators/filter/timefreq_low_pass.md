---
uid: Ans.DataProcessing.operators.filter.timefreq_low_pass
---

# *class* timefreq_low_pass(time_freq_support: object = None, threshold: object = None, both: object = None, config: OperatorConfig = None)

The low pass filter returns all the values below (but not equal to) the threshold value in input.

available inputs: `time_freq_support` (TimeFreqSupport), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `time_freq_support` (TimeFreqSupport), `scoping` (Scoping)

**DPF Framework Reference:** [timefreq_low_pass operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/timefreq_low_pass.md)

**Parameters:**

* **time_freq_support**
* **threshold**
* **both**
* **config**

**Example:**

```python
op = timefreq_low_pass()

op = timefreq_low_pass(time_freq_support=my_time_freq_support,threshold=my_threshold,both=my_both)
```

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### threshold

a threshold scalar or a field containing one value is expected

**Type:** *LinkableInput*

### both

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.

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
