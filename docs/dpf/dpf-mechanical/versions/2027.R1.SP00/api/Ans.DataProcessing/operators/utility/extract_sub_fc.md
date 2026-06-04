---
uid: Ans.DataProcessing.operators.utility.extract_sub_fc
---

# *class* extract_sub_fc(fields_container: object = None, label_space: object = None, collapse_labels: object = None, config: OperatorConfig = None)

Creates a new fields container with all the fields corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

available inputs: `fields_container` (FieldsContainer), `label_space` (LabelSpace, Scoping) (optional), `collapse_labels` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [extract_sub_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_sub_fc.md)

**Parameters:**

* **fields_container**
* **label_space**
* **collapse_labels**
* **config**

**Example:**

```python
op = extract_sub_fc()

op = extract_sub_fc(fields_container=my_fields_container,label_space=my_label_space,collapse_labels=my_collapse_labels)
```

## Inputs

### fields_container

fields_container

**Type:** *LinkableInput*

### label_space

Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs)

**Type:** *LinkableInput*

### collapse_labels

If set to true (default) the input label space (scoping location) is suppressed from the output fields container, otherwise, label space is kept.

**Type:** *LinkableInput*

## Outputs

### fields_container

fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
