---
uid: Ans.DataProcessing.operators.utility.extract_sub_mc
---

# *class* extract_sub_mc(meshes: object = None, label_space: object = None, collapse_labels: object = None, config: OperatorConfig = None)

Creates a new meshes container with all the meshed regions corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

available inputs: `meshes` (MeshesContainer), `label_space` (LabelSpace, Scoping) (optional), `collapse_labels` (bool) (optional)

available outputs: `meshes_container` (MeshesContainer)

**DPF Framework Reference:** [extract_sub_mc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/extract_sub_mc.md)

**Parameters:**

* **meshes**
* **label_space**
* **collapse_labels**
* **config**

**Example:**

```python
op = extract_sub_mc()

op = extract_sub_mc(meshes=my_meshes,label_space=my_label_space,collapse_labels=my_collapse_labels)
```

## Inputs

### meshes

meshes

**Type:** *LinkableInput*

### label_space

Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs)

**Type:** *LinkableInput*

### collapse_labels

If set to true (default) the input label space (scoping location) is suppressed from the output meshes container, otherwise, label space is kept.

**Type:** *LinkableInput*

## Outputs

### meshes_container

meshes

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
