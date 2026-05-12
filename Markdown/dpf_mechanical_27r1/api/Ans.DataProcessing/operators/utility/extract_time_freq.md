---
uid: Ans.DataProcessing.operators.utility.extract_time_freq
---

# *class* extract_time_freq(time_freq_support: object = None, time_scoping: object = None, real_or_complex: object = None, rpm_scoping: object = None, config: OperatorConfig = None)

Extract timefreqs with sets scoping from a time freq support

available inputs: `time_freq_support` (TimeFreqSupport), `time_scoping` (Scoping) (optional), `real_or_complex` (bool) (optional), `rpm_scoping` (Int32) (optional)

available outputs: `field` (Field ,FieldsContainer)

**DPF Framework Reference:** [extract_time_freq operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_time_freq.md)

**Parameters:**

* **time_freq_support**
* **time_scoping**
* **real_or_complex**
* **rpm_scoping**
* **config**

**Example:**

```python
op = extract_time_freq()

op = extract_time_freq(time_freq_support=my_time_freq_support,time_scoping=my_time_scoping,real_or_complex=my_real_or_complex,rpm_scoping=my_rpm_scoping)
```

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### time_scoping

**Type:** *LinkableInput*

### real_or_complex

False for real only (default). True for complex output.

**Type:** *LinkableInput*

### rpm_scoping

Optional scoping for RPM/load case selection.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
