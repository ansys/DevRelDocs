---
uid: Ans.DataProcessing.operators.filter.scoping_low_pass
---

# *class* scoping_low_pass(field: object = None, threshold: object = None, both: object = None, config: OperatorConfig = None)

The low pass filter returns all the values below (but not equal to) the threshold value in input.

available inputs: `field` (Field, FieldsContainer), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `scoping` (Scoping)

**DPF Framework Reference:** [scoping_low_pass operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/filter/scoping_low_pass.md)

**Parameters:**

* **field**
* **threshold**
* **both**
* **config**

**Example:**

```python
op = scoping_low_pass()

op = scoping_low_pass(field=my_field,threshold=my_threshold,both=my_both)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### threshold

a threshold scalar or a field containing one value is expected

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
