---
uid: Ans.DataProcessing.operators.math.time_freq_interpolation
---

# *class* time_freq_interpolation(fields_container: object = None, time_freq_values: object = None, step: object = None, interpolation_type: object = None, force_new_time_freq_support: object = None, time_freq_support: object = None, config: OperatorConfig = None)

time_freq_interpolation()
time_freq_interpolation(fields_container: object, time_freq_values: object, step: object, interpolation_type: object, force_new_time_freq_support: object, time_freq_support: object, config: OperatorConfig)
time_freq_interpolation(config: OperatorConfig)


**DPF Framework Reference:** [time_freq_interpolation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/time_freq_interpolation.md)

**Parameters:**

* **fields_container**
* **time_freq_values**
* **step**
* **interpolation_type**
* **force_new_time_freq_support**
* **time_freq_support**
* **config**

## Inputs

### fields_container

**Type:** *LinkableInput*

### time_freq_values

list of frequencies or times needed. To specify load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps".

**Type:** *LinkableInput*

### step

if a Field is set as input, the step ids should be its scoping.

**Type:** *LinkableInput*

### interpolation_type

1 is ramped, 2 is stepped, default is 1.

**Type:** *LinkableInput*

### force_new_time_freq_support

If set to true, the output fields container will always have a new time freq support rescoped to the output time_freq_values (default is false). If set to false, the time freq support is only recreated when time or frequency values are between existing ones.

**Type:** *LinkableInput*

### time_freq_support

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with one interpolated field set per requested time or frequency value.

**Type:** *LinkableOutput*

### time_freq_support

Time or frequency support aligned with the output fields container.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
