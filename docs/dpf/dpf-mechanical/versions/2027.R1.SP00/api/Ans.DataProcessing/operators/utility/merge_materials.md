---
uid: Ans.DataProcessing.operators.utility.merge_materials
---

# *class* merge_materials(materials1: object = None, materials2: object = None, config: OperatorConfig = None)

Assembles a set of materials into a unique one.

available inputs: `materials1` (Materials), `materials2` (Materials)

available outputs: `merged_materials` (Materials)

**DPF Framework Reference:** [merge_materials operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_materials.md)

**Parameters:**

* **materials1**
* **materials2**
* **config**

**Example:**

```python
op = merge_materials()

op = merge_materials(materials1=my_materials1,materials2=my_materials2)
```

## Inputs

### materials1

A vector of materials to merge or materials from pin 0 to ...

**Type:** *LinkableInput*

### materials2

A vector of materials to merge or materials from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_materials

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
