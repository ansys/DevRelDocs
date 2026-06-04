---
uid: Ans.DataProcessing.operators.utility.compute_time_scoping
---

# *class* compute_time_scoping(time_freq_values: object = None, step: object = None, interpolation_type: object = None, time_freq_support: object = None, config: OperatorConfig = None)

compute_time_scoping()
compute_time_scoping(time_freq_values: object, step: object, interpolation_type: object, time_freq_support: object, config: OperatorConfig)
compute_time_scoping(config: OperatorConfig)


**DPF Framework Reference:** [compute_time_scoping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/compute_time_scoping.md)

**Parameters:**

* **time_freq_values**
* **step**
* **interpolation_type**
* **time_freq_support**
* **config**

## Inputs

### time_freq_values

List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps".

**Type:** *LinkableInput*

### step

**Type:** *LinkableInput*

### interpolation_type

1:ramped' or 2:stepped', default is ramped

**Type:** *LinkableInput*

### time_freq_support

**Type:** *LinkableInput*

## Outputs

### scoping

time_scoping

**Type:** *LinkableOutput*

### field

time_freq_values

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
