---
uid: Ans.DataProcessing.operators.utility.merge_data_tree
---

# *class* merge_data_tree(data_tree1: object = None, data_tree2: object = None, config: OperatorConfig = None)

Merges a list of data trees. Attributes names shouldn't be shared accross data tree instances.

available inputs: `data_tree1` (DataTree), `data_tree2` (DataTree)

available outputs: `any` (Any)

**DPF Framework Reference:** [merge_data_tree operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_data_tree.md)

**Parameters:**

* **data_tree1**
* **data_tree2**
* **config**

**Example:**

```python
op = merge_data_tree()

op = merge_data_tree(data_tree1=my_data_tree1,data_tree2=my_data_tree2)
```

## Inputs

### data_tree1

Either a vector of data trees or data trees from pin 0 to ... to merge.

**Type:** *LinkableInput*

### data_tree2

Either a vector of data trees or data trees from pin 0 to ... to merge.

**Type:** *LinkableInput*

## Outputs

### any

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
