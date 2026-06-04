---
uid: Ans.DataProcessing.operators.metadata.integrate_over_time_freq
---

# *class* integrate_over_time_freq(field: object = None, scoping: object = None, time_freq_support: object = None, config: OperatorConfig = None)

Integration of an input field over timefreq.

available inputs: `field` (Field), `scoping` (Scoping) (optional), `time_freq_support` (TimeFreqSupport) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [integrate_over_time_freq operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/integrate_over_time_freq.md)

**Parameters:**

* **field**
* **scoping**
* **time_freq_support**
* **config**

**Example:**

```python
op = integrate_over_time_freq()

op = integrate_over_time_freq(field=my_field,scoping=my_scoping,time_freq_support=my_time_freq_support)
```

## Inputs

### field

**Type:** *LinkableInput*

### scoping

Integrate the input field over a specific scoping.

**Type:** *LinkableInput*

### time_freq_support

Time Freq to integrate on, otherwise time freq support from the input field is taken.

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
