---
uid: Ans.DataProcessing.operators.utility.remove_unnecessary_labels
---

# *class* remove_unnecessary_labels(permissive: object = None, fields_container: object = None, label_to_remove: object = None, config: OperatorConfig = None)

Removes the selected label from a fields container.

available inputs: `permissive` (bool) (optional), `fields_container` (FieldsContainer), `label_to_remove` (string)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [remove_unnecessary_labels operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/remove_unnecessary_labels.md)

**Parameters:**

* **permissive**
* **fields_container**
* **label_to_remove**
* **config**

**Example:**

```python
op = remove_unnecessary_labels()

op = remove_unnecessary_labels(permissive=my_permissive,fields_container=my_fields_container,label_to_remove=my_label_to_remove)
```

## Inputs

### permissive

If true, the operator does not throw an error if the label to be removed has more than one entry.

**Type:** *LinkableInput*

### fields_container

Fields Container with the label to be removed.

**Type:** *LinkableInput*

### label_to_remove

Label to be removed from the fields container.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
