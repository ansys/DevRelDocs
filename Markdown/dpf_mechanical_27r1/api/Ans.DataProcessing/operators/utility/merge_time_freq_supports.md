---
uid: Ans.DataProcessing.operators.utility.merge_time_freq_supports
---

# *class* merge_time_freq_supports(time_freq_supports1: object = None, time_freq_supports2: object = None, config: OperatorConfig = None)

Assembles a set of time/frequency supports into a unique one.

available inputs: `time_freq_supports1` (TimeFreqSupport), `time_freq_supports2` (TimeFreqSupport)

available outputs: `merged_support` (TimeFreqSupport)

**DPF Framework Reference:** [merge_time_freq_supports operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_time_freq_supports.md)

**Parameters:**

* **time_freq_supports1**
* **time_freq_supports2**
* **config**

**Example:**

```python
op = merge_time_freq_supports()

op = merge_time_freq_supports(time_freq_supports1=my_time_freq_supports1,time_freq_supports2=my_time_freq_supports2)
```

## Inputs

### time_freq_supports1

A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ...

**Type:** *LinkableInput*

### time_freq_supports2

A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
