---
uid: Ans.DataProcessing.operators.math.centroid_fc
---

# *class* centroid_fc(fields_container: object = None, time_freq: object = None, step: object = None, time_freq_support: object = None, config: OperatorConfig = None)

Computes the centroid of all the matching fields of a fields container at a given time or frequency, using fieldOut = field1*(1.-fact)+field2*(fact).

available inputs: `fields_container` (FieldsContainer), `time_freq` (double), `step` (Int32) (optional), `time_freq_support` (TimeFreqSupport) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [centroid_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/centroid_fc.md)

**Parameters:**

* **fields_container**
* **time_freq**
* **step**
* **time_freq_support**
* **config**

**Example:**

```python
op = centroid_fc()

op = centroid_fc(fields_container=my_fields_container,time_freq=my_time_freq,step=my_step,time_freq_support=my_time_freq_support)
```

## Inputs

### fields_container

FieldsContainer with fields for centroid calculation

**Type:** *LinkableInput*

### time_freq

Time or frequency value for field selection

**Type:** *LinkableInput*

### step

Optional step specification

**Type:** *LinkableInput*

### time_freq_support

Optional TimeFreqSupport for field resolution

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer with centroid calculation results at specified time/frequency

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
