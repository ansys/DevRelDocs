---
uid: Ans.DataProcessing.operators.utility.extract_sub_sc
---

# *class* extract_sub_sc(scopings_container: object = None, label_space: object = None, collapse_labels: object = None, config: OperatorConfig = None)

Creates a new scopings container with all the scopings corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

available inputs: `scopings_container` (ScopingsContainer), `label_space` (LabelSpace, Scoping) (optional), `collapse_labels` (bool) (optional)

available outputs: `scopings_container` (ScopingsContainer)

**DPF Framework Reference:** [extract_sub_sc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_sub_sc.md)

**Parameters:**

* **scopings_container**
* **label_space**
* **collapse_labels**
* **config**

**Example:**

```python
op = extract_sub_sc()

op = extract_sub_sc(scopings_container=my_scopings_container,label_space=my_label_space,collapse_labels=my_collapse_labels)
```

## Inputs

### scopings_container

scopings_container

**Type:** *LinkableInput*

### label_space

Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs)

**Type:** *LinkableInput*

### collapse_labels

If set to true (default) the input label space (scoping location) is suppressed from the output scopings container, otherwise, label space is kept.

**Type:** *LinkableInput*

## Outputs

### scopings_container

scopings_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
