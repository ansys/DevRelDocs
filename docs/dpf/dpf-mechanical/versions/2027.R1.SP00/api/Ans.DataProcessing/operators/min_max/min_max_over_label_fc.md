---
uid: Ans.DataProcessing.operators.min_max.min_max_over_label_fc
---

# *class* min_max_over_label_fc(fields_container: object = None, label: object = None, config: OperatorConfig = None)

Create two fields (0 min 1 max) by looping over the fields container in input and taking the min/max value by component through all the fields having the same id for the label set in input (in pin 1). If no label is specified or if the specified label doesn't exist, the operation is done over all the fields. The fields out are located on the label set in input, so their scoping are the labels ids.For each min max value, the label id for one other fields container labels is kept and returned in a scoping in pin 2 (min) and 3 (max).The field's scoping ids of the value kept in min max are also returned in the scopings in pin 4 (min) and 5 (max).

available inputs: `fields_container` (FieldsContainer), `label` (string)

available outputs: `field_min` (Field), `field_max` (Field), `domain_ids_min` (Scoping), `domain_ids_max` (Scoping), `scoping_ids_min` (Scoping), `scoping_ids_max` (Scoping)

**DPF Framework Reference:** [min_max_over_label_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_over_label_fc.md)

**Parameters:**

* **fields_container**
* **label**
* **config**

**Example:**

```python
op = min_max_over_label_fc()

op = min_max_over_label_fc(fields_container=my_fields_container,label=my_label)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### label

label name from the fields container

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

### domain_ids_min

**Type:** *LinkableOutput*

### domain_ids_max

**Type:** *LinkableOutput*

### scoping_ids_min

**Type:** *LinkableOutput*

### scoping_ids_max

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
