---
uid: Ans.DataProcessing.operators.metadata.time_freq_support_get_attribute
---

# *class* time_freq_support_get_attribute(time_freq_support: object = None, property_name: object = None, property_identifier: object = None, property_identifier_2: object = None, config: OperatorConfig = None)

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

available inputs: `time_freq_support` (TimeFreqSupport), `property_name` (string), `property_identifier` (Int32, Scoping) (optional), `property_identifier_2` (Int32) (optional)

available outputs: `property` (double ,Field ,Scoping)

**DPF Framework Reference:** [time_freq_support_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/time_freq_support_get_attribute.md)

**Parameters:**

* **time_freq_support**
* **property_name**
* **property_identifier**
* **property_identifier_2**
* **config**

**Example:**

```python
op = time_freq_support_get_attribute()

op = time_freq_support_get_attribute(time_freq_support=my_time_freq_support,property_name=my_property_name,property_identifier=my_property_identifier,property_identifier_2=my_property_identifier_2)
```

## Inputs

### time_freq_support

**Type:** *LinkableInput*

### property_name

Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs", "step_id_from_harmonic_index".

**Type:** *LinkableInput*

### property_identifier

Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping, for "step_id_from_harmonic_index" : the harmonic index.

**Type:** *LinkableInput*

### property_identifier_2

Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered).

**Type:** *LinkableInput*

## Outputs

### property

Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", an int for "step_id_from_harmonic_index" and a Field otherwise.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
