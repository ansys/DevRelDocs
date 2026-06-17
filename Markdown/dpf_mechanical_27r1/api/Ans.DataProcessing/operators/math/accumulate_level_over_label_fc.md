---
uid: Ans.DataProcessing.operators.math.accumulate_level_over_label_fc
---

# *class* accumulate_level_over_label_fc(fields_container: object = None, label: object = None, config: OperatorConfig = None)

Compute the component-wise sum over all the fields that have the same ID as the label set as input in the fields container and apply 10.0xlog10(data/10xx-12) on the result. This computation can be incremental. If the input fields container is connected and the operator is run multiple times, the output field will be on all the connected inputs.

available inputs: `fields_container` (FieldsContainer), `label` (string) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [accumulate_level_over_label_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/accumulate_level_over_label_fc.md)

**Parameters:**

* **fields_container**
* **label**
* **config**

**Example:**

```python
op = accumulate_level_over_label_fc()

op = accumulate_level_over_label_fc(fields_container=my_fields_container,label=my_label)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### label

Label of the fields container where it should operate. If not defined and the input Fields Container has only one Label, the operation will be done over all the fields.

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
