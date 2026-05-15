---
uid: Ans.DataProcessing.operators.filter.timescoping_signed_high_pass
---

# *class* timescoping_signed_high_pass(time_freq_support: object = None, threshold: object = None, both: object = None, config: OperatorConfig = None)

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

available inputs: `time_freq_support` (TimeFreqSupport), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `scoping` (Scoping)

**DPF Framework Reference:** [timescoping_signed_high_pass operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/timescoping_signed_high_pass.md)

**Parameters:**

* **time_freq_support**
* **threshold**
* **both**
* **config**

**Example:**

```python
op = timescoping_signed_high_pass()

op = timescoping_signed_high_pass(time_freq_support=my_time_freq_support,threshold=my_threshold,both=my_both)
```

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### threshold

A threshold scalar or a field containing one value is expected.

**Type:** *LinkableInput*

### both

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.

**Type:** *LinkableInput*

## Outputs

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
